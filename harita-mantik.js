/* Seçim haritasının saf mantığı: il il kazanan partiyi bulur, renkleri atar, SVG ve açıklama üretir.
   DOM'a dokunmaz; Node'da test edilir.
   Kullanım: const H = HaritaMantik.olustur(window.ILLER, SandikMantik.olustur(P, O), window.Ortak); */
(function (kok, fabrika) {
  var HM = fabrika();
  if (typeof module === "object" && module.exports) module.exports = HM;
  else kok.HaritaMantik = HM;
})(typeof window !== "undefined" ? window : this, function () {
  function olustur(IL, M, O) {
    // Kaynaklarda eski ya da kısa adla geçen iller → bugünkü il adı
    const ESKI_AD = { "İÇEL": "Mersin", "MARAŞ": "Kahramanmaraş", "URFA": "Şanlıurfa", "ANTEP": "Gaziantep",
      "AFYON": "Afyonkarahisar", "GÜMÜŞANE": "Gümüşhane", "HAKKÂRİ": "Hakkari", "İZMİT": "Kocaeli",
      "K.MARAŞ": "Kahramanmaraş", "K. MARAŞ": "Kahramanmaraş", "KASTOMONU": "Kastamonu",
      "A. KARAHİSAR": "Afyonkarahisar", "A.KARAHİSAR": "Afyonkarahisar", "ELÂZIĞ": "Elazığ" };
    const buyuk = s => String(s).trim().toLocaleUpperCase("tr-TR").replace(/\s+/g, " ");
    const adla = new Map(IL.iller.map(i => [buyuk(i.ad), i]));
    function ilBul(ad) {
      const b = buyuk(ad);
      return adla.get(b) || (ESKI_AD[b] ? adla.get(buyuk(ESKI_AD[b])) : null) || null;
    }

    const anahtar = s => s.parti || s.ad;
    const satir = k => (/^[a-z0-9]+$/.test(k) && k !== "Bağımsız" ? { parti: k } : { ad: k });

    /* Her il için: { durum: "var" | "bilinmiyor" | "yok", kazanan, sira: [{anahtar, oy, pay}] }
       "yok": il o seçimin tablosunda hiç yer almıyor (o tarihte ayrı il değildi). */
    function iller(k, veri) {
      const sonuc = new Map(IL.iller.map(i => [i.plaka, { durum: "yok", kazanan: null, sira: [] }]));
      const eslesmeyen = [];
      for (const [ad, v] of Object.entries((veri && veri.iller) || {})) {
        const il = ilBul(ad);
        if (!il) { eslesmeyen.push(ad); continue; }
        let r;
        if (v.oy && typeof v.oy === "object") {                 // genel seçim: il il parti oyları
          const sira = Object.entries(v.oy).filter(([, n]) => n != null)
            .sort((a, b) => b[1] - a[1])
            .map(([a, n]) => ({ anahtar: a, oy: n, pay: v.gecerli ? n / v.gecerli * 100 : null }));
          r = sira.length && sira[0].oy > 0 ? { durum: "var", kazanan: sira[0].anahtar, sira }
                                            : { durum: "bilinmiyor", kazanan: null, sira: [] };
        } else {                                                // yerel seçim: kazanan belediye başkanlığı
          r = v.kazanan ? { durum: "var", kazanan: v.kazanan,
            sira: [{ anahtar: v.kazanan, oy: v.oy == null ? null : v.oy, pay: null }]
              .concat(v.ikinci ? [{ anahtar: v.ikinci, oy: v.ikinciOy == null ? null : v.ikinciOy, pay: null }] : []) }
            : { durum: "bilinmiyor", kazanan: null, sira: [] };
        }
        if (v.not) r.not = v.not;
        sonuc.set(il.plaka, r);
      }
      return { iller: sonuc, eslesmeyen };
    }

    function karistir(hex, hedef, t) {
      const h = x => parseInt(x, 16), c = [1, 3, 5].map(i => h(hex.slice(i, i + 2))), d = [1, 3, 5].map(i => h(hedef.slice(i, i + 2)));
      return "#" + c.map((v, i) => Math.round(v + (d[i] - v) * t).toString(16).padStart(2, "0")).join("").toUpperCase();
    }
    /* Kazanan partilere renk: parti ailesinin rengi. Aynı aileden birden fazla parti il kazandıysa
       (ör. AK Parti ve Yeniden Refah) en çok il kazanan ailenin rengini alır, diğerleri açık/koyu tonunu. */
    function renkler(ilSonuc) {
      const sayac = new Map();
      for (const r of ilSonuc.values()) if (r.kazanan) sayac.set(r.kazanan, (sayac.get(r.kazanan) || 0) + 1);
      const liste = [...sayac.entries()].sort((a, b) => b[1] - a[1])
        .map(([a, n]) => ({ anahtar: a, il: n, ...M.partiAdi(satir(a)) }));
      const TON = [["#FFFFFF", 0], ["#FFFFFF", 0.45], ["#000000", 0.35], ["#FFFFFF", 0.7]];
      const aile = new Map();
      for (const p of liste) {
        const i = aile.get(p.renk) || 0;
        aile.set(p.renk, i + 1);
        const t = TON[Math.min(i, TON.length - 1)];
        p.dolgu = t[1] ? karistir(p.renk, t[0], t[1]) : p.renk;
        p.ton = i;
      }
      return liste;
    }

    function kisaAd(a) { return M.partiAdi(satir(a)).kisa; }
    function ipucu(il, r) {
      if (r.durum === "yok") return il.ad + " — bu seçimde ayrı bir il değildi";
      if (r.durum === "bilinmiyor") return il.ad + " — " + (r.not || "sonuç bilinmiyor");
      return il.ad + " — " + r.sira.slice(0, 3).map(s => kisaAd(s.anahtar) +
        (s.pay != null ? " " + O.yuzdeYaz(s.pay) : s.oy != null ? " " + O.sayiYaz(s.oy) + " oy" : "")).join(" · ");
    }

    function haritaSVG(k, veri, secenek) {
      const s = secenek || {};
      const { iller: ilSonuc } = iller(k, veri);
      const renk = new Map(renkler(ilSonuc).map(p => [p.anahtar, p.dolgu]));
      const yollar = IL.iller.map(il => {
        const r = ilSonuc.get(il.plaka);
        const dolgu = r.durum === "var" ? renk.get(r.kazanan) : r.durum === "yok" ? "url(#h-tarama)" : "var(--h-bos)";
        return '<path class="h-il h-' + r.durum + '" data-plaka="' + il.plaka + '" d="' + il.d + '" fill="' + dolgu +
          '"><title>' + M.kacis(ipucu(il, r)) + "</title></path>";
      }).join("");
      const say = [...ilSonuc.values()].filter(r => r.durum === "var").length;
      return '<svg class="h-harita' + (s.buyuk ? " h-buyuk" : "") + '" viewBox="' + IL.viewBox + '" role="img" aria-label="' +
        M.kacis("İllere göre kazanan parti haritası, " + say + " il") + '">' +
        '<defs><pattern id="h-tarama" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">' +
        '<rect width="6" height="6" fill="var(--h-yok)"/><line x1="0" y1="0" x2="0" y2="6" stroke="var(--h-cizgi)" stroke-width="1.6"/>' +
        "</pattern></defs>" + yollar + "</svg>";
    }

    function lejantHTML(k, veri) {
      const { iller: ilSonuc } = iller(k, veri);
      const liste = renkler(ilSonuc);
      const yok = [...ilSonuc.values()].filter(r => r.durum === "yok").length;
      const bil = [...ilSonuc.values()].filter(r => r.durum === "bilinmiyor").length;
      return '<ul class="h-lejant">' + liste.map(p => '<li><i style="background:' + p.dolgu + '"></i>' +
        (p.id ? '<a class="p-git" href="index.html#' + p.id + '">' + M.kacis(p.kisa) + "</a>" : M.kacis(p.kisa)) +
        "<span>" + p.il + " il</span></li>").join("") +
        (bil ? '<li><i class="h-i-bos"></i>sonuç bilinmiyor<span>' + bil + " il</span></li>" : "") +
        (yok ? '<li><i class="h-i-yok"></i>o tarihte ayrı il değildi<span>' + yok + " il</span></li>" : "") + "</ul>";
    }

    function tabloHTML(k, veri) {
      const { iller: ilSonuc } = iller(k, veri);
      const satirlar = IL.iller.slice().sort((a, b) => a.ad.localeCompare(b.ad, "tr"))
        .filter(il => ilSonuc.get(il.plaka).durum !== "yok")
        .map(il => { const r = ilSonuc.get(il.plaka);
          return "<tr><th scope=\"row\">" + M.kacis(il.ad) + "</th><td>" + (r.kazanan ? M.kacis(kisaAd(r.kazanan)) : "—") +
            "</td><td>" + M.kacis(r.sira.slice(1, 3).map(s => kisaAd(s.anahtar) + (s.pay != null ? " " + O.yuzdeYaz(s.pay) : "")).join(" · ")) +
            "</td><td>" + (r.sira[0] && r.sira[0].pay != null ? O.yuzdeYaz(r.sira[0].pay) : r.sira[0] && r.sira[0].oy != null ? O.sayiYaz(r.sira[0].oy) + " oy" : "—") + "</td></tr>"; });
      return '<table class="h-tablo"><thead><tr><th scope="col">İl</th><th scope="col">Birinci</th>' +
        '<th scope="col">Sonrakiler</th><th scope="col">Birincinin payı</th></tr></thead><tbody>' + satirlar.join("") + "</tbody></table>";
    }

    return { ilBul, iller, renkler, karistir, ipucu, haritaSVG, lejantHTML, tabloHTML };
  }
  return { olustur };
});
