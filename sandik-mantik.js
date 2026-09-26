/* Sandık'ın saf mantığı. DOM'a dokunmaz; Node'da test edilir.
   Kullanım: const M = SandikMantik.olustur(window.PARTILER, window.Ortak); */
(function (kok, fabrika) {
  var SM = fabrika();
  if (typeof module === "object" && module.exports) module.exports = SM;
  else kok.SandikMantik = SM;
})(typeof window !== "undefined" ? window : this, function () {
  function olustur(P, O) {
    const BAGIMSIZ = "Bağımsız", DIGER = "Diğer", NOTR = "#8A8D80";
    const parti = id => P.N.find(n => n.id === id);
    const ozelSatir = s => s.ad === BAGIMSIZ || s.ad === DIGER;

    function partiAdi(s) {
      const n = s.parti ? parti(s.parti) : null;
      if (n) return { id: n.id, kisa: n.kisa, ad: n.ad, renk: P.AILE[n.aile].ham };
      return { id: null, kisa: s.ad, ad: s.ad, renk: NOTR };
    }
    function oyDegeri(s, k) {
      if (s.oy != null) return O.yuzde(s.oy, k.gecerli);
      return s.oyYuzde != null ? s.oyYuzde : null;
    }
    function katilimDegeri(k) {
      if (k.kullanilan != null && k.kayitli != null) return O.yuzde(k.kullanilan, k.kayitli);
      return k.katilimYuzde != null ? k.katilimYuzde : null;
    }
    function siralaGenel(k) {
      const oy = s => (s.oy != null ? s.oy : (s.oyYuzde != null ? s.oyYuzde : -1));
      return k.sonuc.filter(s => !ozelSatir(s)).slice().sort((a, b) => {
        const sa = a.sandalye == null ? -1 : a.sandalye, sb = b.sandalye == null ? -1 : b.sandalye;
        return sb - sa || oy(b) - oy(a);
      });
    }
    function baslikGenel(k) {
      if (k.tekParti) return "tek parti seçimi · iki dereceli";
      const ilk = siralaGenel(k)[0];
      if (!ilk) return "";
      const ad = partiAdi(ilk).kisa;
      if (ilk.sandalye != null && k.meclis != null && ilk.sandalye > k.meclis / 2)
        return ad + " kazandı · tek başına iktidar";
      return ad + " birinci parti";
    }
    function meclisDurumu(k) {
      const sirali = siralaGenel(k);
      return {
        girenler: sirali.filter(s => s.sandalye > 0),
        giremeyenler: sirali.filter(s => s.sandalye === 0),
        bilinmeyen: sirali.filter(s => s.sandalye == null),
        bagimsiz: k.sonuc.find(s => s.ad === BAGIMSIZ) || null,
        diger: k.sonuc.find(s => s.ad === DIGER) || null
      };
    }
    function bantYillari(d) {
      const p = d.yil.split("–").map(x => +x.trim());
      return { bas: p[0], bit: p[1] || p[0] };
    }
    function donemBul(tarih) {
      for (let i = 0; i < P.DONEMLER.length; i++) {
        const y = P.DONEMLER[i].kesinti && P.DONEMLER[i].kesinti.yonetim;
        if (y && y.bas <= tarih && tarih <= y.bit) return { tur: "yonetim", i };
      }
      const yil = +tarih.slice(0, 4);
      for (let i = 0; i < P.DONEMLER.length; i++) {
        const b = bantYillari(P.DONEMLER[i]);
        if (b.bas <= yil && yil <= b.bit) return { tur: "donem", i };
      }
      return null;
    }
    function kronoloji(S) {
      const ogeler = S.secimler.map(k => ({ tur: "secim", tarih: k.tarih, kayit: k }))
        .concat(S.hukumetler.map(h => ({ tur: "hukumet", tarih: h.baslangic, hukumet: h })))
        .sort((a, b) => a.tarih < b.tarih ? -1 : a.tarih > b.tarih ? 1 :
                        (a.tur === b.tur ? 0 : a.tur === "secim" ? -1 : 1));
      const kr = { bantlar: P.DONEMLER.map((d, i) => ({ i, ogeler: [] })), kaplar: {}, yersiz: [] };
      for (const o of ogeler) {
        const y = donemBul(o.tarih);
        if (!y) kr.yersiz.push(o);
        else if (y.tur === "yonetim") (kr.kaplar[y.i] = kr.kaplar[y.i] || []).push(o);
        else kr.bantlar[y.i].ogeler.push(o);
      }
      return kr;
    }
    function sonrakiHukumetler(k, S) {
      const sonraki = S.secimler.filter(x => x.tur === "genel" && x.tarih > k.tarih)
        .map(x => x.tarih).sort()[0] || "9999-12-31";
      return S.hukumetler.filter(h => h.baslangic >= k.tarih && h.baslangic < sonraki);
    }
    function partininSecimleri(id, S) {
      const genel = [], yerel = [];
      for (const k of S.secimler) {
        const satir = (k.sonuc || []).find(s => s.parti === id) || null;
        if (k.tur === "genel") {
          let ittifak = null;
          for (const it of k.ittifak || []) {
            const ic = it.icinden.find(x => x.parti === id);
            if (ic) ittifak = { ad: it.ad, liste: it.liste, sandalye: ic.sandalye };
          }
          if (satir || ittifak) genel.push({ kayit: k, satir, ittifak });
        } else if (k.tur === "yerel" && satir) {
          yerel.push({ kayit: k, satir });
        }
      }
      return { genel, yerel };
    }

    /* ---------------- HTML üreticileri ---------------- */
    const KESINTI = "#7A1509";
    const EVET = "#151810", HAYIR = "#A9AD9E";
    const TUR_ETIKET = { genel: "GENEL", yerel: "YEREL", referandum: "REFERANDUM",
      "cb-halk": "CB · HALK", "cb-tbmm": "CB · TBMM", ara: "ARA SEÇİM" };
    const TUR_AD = { genel: "Genel Seçimi", yerel: "Yerel Seçimi", referandum: "Referandumu",
      "cb-halk": "Cumhurbaşkanlığı Seçimi", "cb-tbmm": "Cumhurbaşkanlığı Seçimi (TBMM)", ara: "Ara Seçimi" };
    const BITIS_ETIKET = { secim: "olağan seçim", "erken-secim": "erken seçim kararı",
      guvensizlik: "güvensizlik oyu", istifa: "istifa", darbe: "darbe", muhtira: "muhtıra",
      "cumhurbaskani-secimi": "başbakanın cumhurbaşkanı seçilmesi", olum: "başbakanın ölümü",
      "sistem-degisikligi": "hükümet sisteminin değişmesi", diger: "diğer" };
    const TIP_ETIKET = { "tek-parti": "tek parti", koalisyon: "koalisyon", azinlik: "azınlık",
      partiluestu: "partilerüstü", mbk: "Millî Birlik Komitesi", mgk: "Millî Güvenlik Konseyi", cumhurbaskanligi: "cumhurbaşkanlığı" };
    const SEHIRLER = [["istanbul", "İstanbul"], ["ankara", "Ankara"], ["izmir", "İzmir"]];

    function kacis(s) {
      return s == null ? "" : String(s).replace(/[&<>"']/g, c =>
        ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
    }
    function partiBag(id, metin) {
      const a = partiAdi({ parti: id });
      return a.id ? '<a class="p-git" href="index.html#' + a.id + '">' + kacis(metin || a.kisa) + "</a>"
                  : kacis(metin || id);
    }
    function satirAdi(s) { return s.parti ? partiBag(s.parti) : kacis(s.ad); }
    function rozetHTML(tur) {
      return '<span class="t-rozet t-' + tur + '">' + TUR_ETIKET[tur] + "</span>";
    }
    function cubukHTML(bolutler, etiket) {
      const b = bolutler.filter(x => x.deger != null && x.deger > 0);
      if (!b.length) return '<div class="cubuk-yok">veri yok</div>';
      const aria = etiket + ": " + b.map(x => x.kisa + " " + O.yuzdeYaz(x.deger)).join(", ");
      return '<div class="cubuk" role="img" aria-label="' + kacis(aria) + '">' +
        b.map(x => '<i style="width:' + x.deger.toFixed(2) + "%;background:" + x.renk + '" title="' +
          kacis(x.kisa + " " + O.yuzdeYaz(x.deger)) + '"></i>').join("") + "</div>";
    }
    function oyBolutleri(k, satirlar) {
      return satirlar.slice().sort((a, b) => (oyDegeri(b, k) || 0) - (oyDegeri(a, k) || 0))
        .map(s => { const a = partiAdi(s); return { kisa: a.kisa, deger: oyDegeri(s, k), renk: a.renk }; });
    }
    function ustHTML(k) {
      return '<div class="s-ust"><span class="s-tarih">' + O.tarihYaz(k.tarih, true) + "</span>" + rozetHTML(k.tur) + "</div>";
    }
    function kartRengi(k) {
      if (k.tur === "genel") { const i = siralaGenel(k)[0]; return i ? partiAdi(i).renk : NOTR; }
      if (k.tur === "yerel") { const i = oyBolutleri(k, (k.sonuc || []).filter(s => s.parti))[0]; return i ? i.renk : NOTR; }
      if (k.tur === "cb-halk") { const t = (k.turlar || [])[k.turlar.length - 1]; const a = t && t.adaylar.find(x => x.ad === k.secilen);
        return a && a.parti ? partiAdi(a).renk : NOTR; }
      return EVET;
    }
    function ilkUcHTML(k, satirlar, sandalyeli) {
      // Sıralama oya (gerekirse sandalyeye) dayanır; ikisi de bilinmiyorsa liste sırası
      // sıralama sanılmasın diye ilk üç hiç gösterilmez.
      const olculebilir = satirlar.some(s => oyDegeri(s, k) != null || (sandalyeli && s.sandalye != null));
      if (!olculebilir) return '<div class="s-not">sıralama bilinmiyor</div>';
      return '<ol class="s-ilk3">' + satirlar.slice(0, 3).map(s =>
        "<li><b>" + kacis(partiAdi(s).kisa) + "</b> " + O.yuzdeYaz(oyDegeri(s, k)) +
        (sandalyeli ? " · " + O.sayiYaz(s.sandalye) : "") + "</li>").join("") + "</ol>";
    }

    /* ---- meclis yarım dairesi: her nokta bir sandalye. Yerleşim temsilîdir, gerçek oturma
       düzeni değildir; yalnızca partilerin meclisin ne kadarını kapladığını gösterir. ---- */
    function meclisGruplari(k) {
      // sandalye sayısına göre çoktan aza partiler, ardından bağımsızlar; toplam meclise
      // ulaşmıyorsa kalan sandalyeler "bilgi yok" diye boş nokta olarak gösterilir
      const g = siralaGenel(k).concat(k.sonuc.filter(s => s.ad === BAGIMSIZ))
        .filter(s => s.sandalye > 0)
        .map(s => { const a = partiAdi(s); return { id: a.id, kisa: a.kisa, renk: a.renk, sandalye: s.sandalye, satir: s }; });
      const bilinen = g.reduce((t, x) => t + x.sandalye, 0);
      if (k.meclis != null && k.meclis > bilinen)
        g.push({ id: null, kisa: "dağılımı bilinmeyen", renk: null, sandalye: k.meclis - bilinen, satir: null });
      return g;
    }
    function koltukDuzeni(n) {
      // sıra sayısı, yay boyunca ve sıralar arasındaki aralık yaklaşık eşit olacak biçimde seçilir
      const IC = 0.4;
      const c = 2 * n * (1 - IC) / (Math.PI * (1 + IC));
      const R = Math.max(1, Math.round((1 + Math.sqrt(1 + 4 * c)) / 2));
      const yc = []; for (let i = 0; i < R; i++) yc.push(R === 1 ? 1 : IC + (1 - IC) * i / (R - 1));
      const top = yc.reduce((a, b) => a + b, 0);
      const sira = yc.map(r => Math.floor(n * r / top));
      let kalan = n - sira.reduce((a, b) => a + b, 0);
      yc.map((r, i) => [n * r / top - sira[i], i]).sort((a, b) => b[0] - a[0] || b[1] - a[1])
        .forEach(x => { if (kalan > 0) { sira[x[1]]++; kalan--; } });
      const koltuk = [];
      sira.forEach((s, i) => { for (let j = 0; j < s; j++) koltuk.push({ a: s === 1 ? Math.PI / 2 : Math.PI * j / (s - 1), r: yc[i] }); });
      koltuk.sort((x, y) => x.a - y.a || y.r - x.r);
      return { koltuk, adim: R === 1 ? Math.PI / Math.max(n, 2) : (1 - IC) / (R - 1) };
    }
    function meclisSVG(k, buyuk) {
      const g = meclisGruplari(k);
      const n = g.reduce((t, x) => t + x.sandalye, 0);
      if (!n) return "";
      const d = koltukDuzeni(n), m = g.length;
      const bosluk = m > 1 ? Math.min(0.05, 0.4 / (m - 1)) : 0;   // gruplar arası açı (radyan)
      const olcek = (Math.PI - bosluk * (m - 1)) / Math.PI;
      const nokta = Math.min(d.adim * olcek * 100 * 0.78, 6);
      const yer = (a, r) => [(-Math.cos(a) * r * 100).toFixed(1), (-Math.sin(a) * r * 100).toFixed(1)];
      const cogunluk = k.meclis ? Math.floor(k.meclis / 2) + 1 : null;
      let sira = 0, cizgi = "";
      const parcalar = g.map((x, gi) => {
        let yol = "";
        for (let j = 0; j < x.sandalye; j++, sira++) {
          const s = d.koltuk[sira], a = s.a * olcek + bosluk * gi, p = yer(a, s.r);
          yol += x.renk ? "M" + p[0] + " " + p[1] + "h0"
            : '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + (nokta * 0.4).toFixed(2) + '"/>';
          if (cogunluk && sira === cogunluk - 1) {
            const i1 = yer(a, 1 + nokta / 100 + 0.02), i2 = yer(a, 1 + nokta / 100 + 0.1);
            cizgi = '<path class="m-cogunluk" d="M' + i1[0] + " " + i1[1] + "L" + i2[0] + " " + i2[1] + '"/>';
          }
        }
        const baslik = x.kisa + ": " + O.sayiYaz(x.sandalye) + " sandalye (" + O.yuzdeYaz(x.sandalye / n * 100) + ")";
        // bilinmeyen sandalyeler içi boş halka olarak çizilir
        return '<g class="m-grup' + (x.renk ? "" : " m-bos") + '"><title>' + kacis(baslik) + "</title>" + (x.renk
          ? '<path d="' + yol + '" stroke="' + x.renk + '" stroke-width="' + nokta.toFixed(2) + '"/>' : yol) + "</g>";
      });
      const aria = "Meclis dağılımı, " + O.sayiYaz(n) + " sandalye: " +
        g.map(x => x.kisa + " " + O.sayiYaz(x.sandalye)).join(", ");
      const ust = -100 - nokta - (cogunluk ? 12 : 2);
      return '<svg class="meclis' + (buyuk ? " meclis-buyuk" : "") + '" viewBox="-' + (101 + nokta).toFixed(0) + " " +
        ust.toFixed(0) + " " + (202 + 2 * nokta).toFixed(0) + " " + (-ust + nokta + 1).toFixed(0) +
        '" role="img" aria-label="' + kacis(aria) + '">' + parcalar.join("") + cizgi +
        '<text class="m-sayi" x="0" y="' + (buyuk ? -12 : -4) + '" text-anchor="middle">' + O.sayiYaz(n) + "</text>" +
        (buyuk ? '<text class="m-alt" x="0" y="-1" text-anchor="middle">sandalye</text>' : "") + "</svg>";
    }
    function koltukListesiHTML(k) {
      const g = meclisGruplari(k);
      const goster = g.length > 4 ? g.slice(0, 3) : g, artan = g.slice(goster.length);
      const oy = x => x.satir ? O.yuzdeYaz(oyDegeri(x.satir, k)) : "";
      return '<ol class="s-koltuk"><li class="s-kb"><span></span><span>sandalye</span><span>oy</span></li>' +
        goster.map(x => '<li><b><i style="' + (x.renk ? "background:" + x.renk : "") + '"' + (x.renk ? "" : ' class="bos"') + "></i>" +
          kacis(x.kisa) + "</b><span>" + O.sayiYaz(x.sandalye) + "</span><span>" + oy(x) + "</span></li>").join("") +
        (artan.length ? '<li class="s-artan"><b>+' + artan.length + " daha</b><span>" +
          O.sayiYaz(artan.reduce((t, x) => t + x.sandalye, 0)) + "</span><span></span></li>" : "") + "</ol>";
    }

    function kartHTML(k) {
      let govde = "";
      if (k.tur === "genel") {
        govde = '<div class="s-baslik">' + kacis(baslikGenel(k)) + "</div>";
        const oyCubugu = k.tekParti ? "" : '<div class="s-oycubuk"><span>oy</span>' + cubukHTML(oyBolutleri(k, k.sonuc), "oy") + "</div>";
        const alt = meclisDurumu(k).giremeyenler.slice().sort((a, b) => (oyDegeri(b, k) || 0) - (oyDegeri(a, k) || 0))[0];
        const baraj = !k.tekParti && k.baraj != null && alt
          ? '<div class="s-baraj">baraj altı: ' + kacis(partiAdi(alt).kisa) + " " + O.yuzdeYaz(oyDegeri(alt, k)) + "</div>" : "";
        if (meclisGruplari(k).length)
          govde += '<div class="s-meclis"><div class="s-sol">' + meclisSVG(k, false) + oyCubugu + '</div><div class="s-sag">' +
            koltukListesiHTML(k) + baraj + "</div></div>";
        else if (!k.tekParti)   // sandalye dağılımı bilinmiyor: yalnız oy
          govde += oyCubugu + ilkUcHTML(k, siralaGenel(k), true) + baraj;
      } else if (k.tur === "yerel") {
        const partiler = (k.sonuc || []).filter(s => s.ad !== DIGER);
        const olculebilir = partiler.some(s => oyDegeri(s, k) != null);
        govde = olculebilir ? cubukHTML(oyBolutleri(k, k.sonuc || []), "oy") +
          ilkUcHTML(k, partiler.slice().sort((a, b) => (oyDegeri(b, k) || 0) - (oyDegeri(a, k) || 0)), false)
          : '<div class="s-not">oy dağılımı kayıtlı değil</div>';
        if (k.buyuksehir) govde += '<div class="s-sehirler">' + SEHIRLER.filter(x => k.buyuksehir[x[0]])
          .map(x => x[1] + " · <b>" + kacis(partiAdi(k.buyuksehir[x[0]]).kisa) + "</b>").join("<br>") + "</div>";
      } else if (k.tur === "referandum") {
        const e = O.yuzde(k.evet, k.gecerli), h = O.yuzde(k.hayir, k.gecerli);
        govde = '<div class="s-baslik s-konu" title="' + kacis(k.konu) + '">' + kacis(k.konu) + "</div>" +
          cubukHTML([{ kisa: "Evet", deger: e, renk: EVET }, { kisa: "Hayır", deger: h, renk: HAYIR }], "sonuç") +
          '<div class="s-not">' + (k.karar === "kabul" ? "kabul edildi" : "reddedildi") +
          " · katılım " + O.yuzdeYaz(katilimDegeri(k)) + "</div>";
      } else if (k.tur === "cb-halk") {
        govde = '<div class="s-baslik">' + kacis(k.secilen) + " seçildi</div>" +
          (k.turlar || []).map((t, i) => '<div class="s-not">' + (i + 1) + ". tur: " +
            t.adaylar.slice().sort((a, b) => (oyDegeri(b, t) || 0) - (oyDegeri(a, t) || 0)).slice(0, 2)
              .map(a => kacis(a.ad) + " " + O.yuzdeYaz(oyDegeri(a, t))).join(" · ") + "</div>").join("");
      } else if (k.tur === "cb-tbmm") {
        govde = '<div class="s-tek">' + (k.secilen ? kacis(k.secilen) + " seçildi" : "sonuçsuz") +
          (k.turSayisi != null ? " · " + k.turSayisi + " tur" : "") + "</div>";
      } else if (k.tur === "ara") {
        govde = '<div class="s-tek">' + kacis(k.bolge) + " · " + O.sayiYaz(k.sandalyeSayisi) + " sandalye" +
          ((k.sonuc || []).length ? " · " + k.sonuc.map(s => kacis(partiAdi(s).kisa) + " " + O.sayiYaz(s.sandalye)).join(", ") : "") + "</div>";
      }
      const tek = k.tur === "cb-tbmm" || k.tur === "ara" ? " s-kucuk" : "";
      return '<div class="kart s-kart s-' + k.tur + tek + '" data-id="' + k.id + '" tabindex="0" role="button" style="--aile:' +
        kartRengi(k) + '">' + ustHTML(k) + govde + "</div>";
    }

    function seritHTML(h) {
      const renk = h.partiler && h.partiler.length && (h.tip !== "partiluestu" && h.tip !== "mbk" && h.tip !== "mgk")
        ? partiAdi({ parti: h.partiler[0] }).renk : KESINTI;
      const bas = h.no != null ? h.no + ". Hükümet" : "Hükümet";
      const kisi = h.basbakan || h.baskan;
      const partiler = h.partiler && h.partiler.length ? h.partiler.map(p => partiBag(p)).join("–") : TIP_ETIKET[h.tip];
      const aralik = O.tarihYaz(h.baslangic, true) + " – " + (h.bitis ? O.tarihYaz(h.bitis, true) : "görevde");
      return '<div class="s-serit" style="--aile:' + renk + '"><b>' + bas + "</b> · " + kacis(kisi) + " · " +
        partiler + " · " + aralik +
        (h.bitisNedeni ? '<div class="s-bitis">bitti: ' + kacis(BITIS_ETIKET[h.bitisNedeni]) +
          (h.bitisNedeni === "diger" && h.not ? " — " + kacis(h.not) : "") + "</div>" : "") + "</div>";
    }

    function liste(baslik, satirlar) {
      return satirlar.length ? '<div class="p-etiket">' + baslik + "</div><ul>" + satirlar.join("") + "</ul>" : "";
    }
    function sonucSatiri(k, s, sandalyeli) {
      const a = partiAdi(s);
      return '<li><i style="background:' + a.renk + '"></i>' + satirAdi(s) + "<span>" +
        O.yuzdeYaz(oyDegeri(s, k)) + (s.oy != null ? " · " + O.sayiYaz(s.oy) + " oy" : "") +
        (sandalyeli ? " · " + O.sayiYaz(s.sandalye) + " sandalye" : "") + "</span></li>";
    }
    function tabloGrubu(k, baslik, satirlar) {
      if (!satirlar.length) return "";
      return '<tbody><tr class="p-grup"><th colspan="3" scope="rowgroup">' + baslik + "</th></tr>" + satirlar.map(s => {
        const a = partiAdi(s);
        const sandalye = s.ad === DIGER ? "" : "<b>" + O.sayiYaz(s.sandalye) + "</b>" +
          (s.sandalye > 0 && k.meclis ? "<small>" + O.yuzdeYaz(s.sandalye / k.meclis * 100) + "</small>" : "");
        return '<tr><td><i style="background:' + a.renk + '"></i>' + satirAdi(s) + "</td><td>" +
          O.yuzdeYaz(oyDegeri(s, k)) + (s.oy != null ? "<small>" + O.sayiYaz(s.oy) + "</small>" : "") +
          "</td><td>" + sandalye + "</td></tr>";
      }).join("") + "</tbody>";
    }
    function meclisFiguru(k) {
      const svg = meclisSVG(k, true);
      if (!svg) return "";
      const bos = meclisGruplari(k).find(x => !x.renk);
      return '<figure class="p-meclis">' + svg + "<figcaption>Her nokta bir sandalye; yerleşim temsilîdir, " +
        "gerçek oturma düzeni değildir. Partiler soldan sağa, tablodaki sırayla dizilidir." + (k.meclis ? " Üstteki çizgi salt çoğunluğu (" +
        O.sayiYaz(Math.floor(k.meclis / 2) + 1) + ") gösterir." : "") +
        (bos ? " Boş noktalar: " + O.sayiYaz(bos.sandalye) + " sandalyenin dağılımı kaynaklarda bulunamadı." : "") +
        "</figcaption></figure>";
    }
    function meta(parcalar) {
      return '<div class="p-meta">' + parcalar.filter(Boolean).join(" · ") + "</div>";
    }

    function panelHTML(k, S) {
      let h = '<div class="p-kisa" id="p-kisa">' + k.tarih.slice(0, 4) + " " + TUR_AD[k.tur] + "</div>";
      h += '<div class="p-ad">' + O.tarihYaz(k.tarih) + (k.tur === "ara" ? " · " + kacis(k.bolge) : "") + "</div>";
      if (k.tur === "genel") {
        const d = meclisDurumu(k);
        h += meta([k.meclis != null ? O.sayiYaz(k.meclis) + " sandalye" : null,
          "katılım " + O.yuzdeYaz(katilimDegeri(k)), k.baraj != null ? "baraj %" + k.baraj : null]);
        h += meclisFiguru(k);
        h += '<table class="p-tablo"><thead><tr><th scope="col">Parti</th><th scope="col">Oy</th>' +
          '<th scope="col">Sandalye</th></tr></thead>' +
          tabloGrubu(k, "Meclise girenler", d.girenler) +
          tabloGrubu(k, "Giremeyenler", d.giremeyenler) +
          tabloGrubu(k, "Sandalye bilgisi yok", d.bilinmeyen) +
          tabloGrubu(k, "Bağımsızlar", d.bagimsiz ? [d.bagimsiz] : []) +
          tabloGrubu(k, d.diger ? "Diğer (" + O.sayiYaz(d.diger.partiSayisi) + " parti)" : "", d.diger ? [d.diger] : []) +
          "</table>";
        for (const it of k.ittifak || [])
          h += '<div class="p-etiket">' + kacis(it.ad) + "</div><div class=\"p-ozet\">" + partiBag(it.liste) +
            " listesinden: " + it.icinden.map(x => partiBag(x.parti) + " " + O.sayiYaz(x.sandalye)).join(", ") + "</div>";
        h += liste("Bu seçimden sonra kurulan hükümetler", sonrakiHukumetler(k, S).map(x => "<li>" + seritHTML(x) + "</li>"));
      } else if (k.tur === "yerel") {
        h += meta(["katılım " + O.yuzdeYaz(katilimDegeri(k)), "belediye meclisi oyları"]);
        const sirali = (k.sonuc || []).slice().sort((a, c) => (oyDegeri(c, k) || 0) - (oyDegeri(a, k) || 0));
        h += liste("Sonuç", sirali.map(s => sonucSatiri(k, s, false)));
        if (k.buyuksehir) h += liste("Büyükşehirler", SEHIRLER.filter(x => k.buyuksehir[x[0]]).map(x =>
          "<li><b>" + x[1] + "</b>" + partiBag(k.buyuksehir[x[0]].parti) + "<span>" + kacis(k.buyuksehir[x[0]].aday) + "</span></li>"));
      } else if (k.tur === "referandum") {
        h += '<div class="p-ozet">' + kacis(k.konu) + "</div>";
        h += meta(["katılım " + O.yuzdeYaz(katilimDegeri(k)), k.karar === "kabul" ? "kabul" : "ret"]);
        h += liste("Sonuç", [
          "<li><b>Evet</b><span>" + O.yuzdeYaz(O.yuzde(k.evet, k.gecerli)) + " · " + O.sayiYaz(k.evet) + " oy</span></li>",
          "<li><b>Hayır</b><span>" + O.yuzdeYaz(O.yuzde(k.hayir, k.gecerli)) + " · " + O.sayiYaz(k.hayir) + " oy</span></li>"]);
        for (const [t, ad] of [["evet", "Evet dedi"], ["hayir", "Hayır dedi"], ["boykot", "Boykot etti"], ["serbest", "Serbest bıraktı"]]) {
          const p = (k.tutumlar || []).filter(x => x.tutum === t);
          if (p.length) h += '<div class="p-etiket">' + ad + '</div><div class="p-ozet">' + p.map(x => partiBag(x.parti)).join(", ") + "</div>";
        }
      } else if (k.tur === "cb-halk") {
        (k.turlar || []).forEach((t, i) => {
          h += '<div class="p-etiket">' + (i + 1) + ". tur · " + O.tarihYaz(t.tarih) + " · katılım " + O.yuzdeYaz(katilimDegeri(t)) + "</div>";
          h += "<ul>" + t.adaylar.slice().sort((a, b) => (oyDegeri(b, t) || 0) - (oyDegeri(a, t) || 0)).map(a =>
            "<li><b>" + kacis(a.ad) + "</b>" + (a.parti ? partiBag(a.parti) : kacis(a.destek || "")) + "<span>" +
            O.yuzdeYaz(oyDegeri(a, t)) + "</span></li>").join("") + "</ul>";
        });
        h += meta(["seçilen: " + kacis(k.secilen)]);
      } else if (k.tur === "cb-tbmm") {
        h += meta([k.secilen ? "seçilen: " + kacis(k.secilen) : "sonuçsuz", k.turSayisi != null ? k.turSayisi + " tur" : null]);
      } else if (k.tur === "ara") {
        h += meta([O.sayiYaz(k.sandalyeSayisi) + " sandalye"]);
        h += liste("Kazananlar", (k.sonuc || []).map(s => "<li>" + satirAdi(s) + "<span>" + O.sayiYaz(s.sandalye) + " sandalye</span></li>"));
      }
      if (k.not) h += '<div class="p-etiket">Not</div><div class="p-ozet">' + kacis(k.not) + "</div>";
      return { html: h, renk: kartRengi(k) };
    }

    /* ---- soyağacı künyesi: partinin girdiği seçimler ---- */
    function kunyeSecimleriHTML(id, S) {
      const s = partininSecimleri(id, S);
      const etiket = k => {
        const ayniYil = S.secimler.filter(x => x.tur === k.tur && x.tarih.slice(0, 4) === k.tarih.slice(0, 4));
        return ayniYil.length > 1 ? O.tarihYaz(k.tarih, true).replace(/^\d+ /, "") : k.tarih.slice(0, 4);
      };
      const bag = k => '<a class="p-git" href="sandik.html#' + k.id + '">' + etiket(k) + "</a>";
      const genel = s.genel.map(x => "<li>" + bag(x.kayit) + "<span>" + (x.satir
        ? O.yuzdeYaz(oyDegeri(x.satir, x.kayit)) + " · " + O.sayiYaz(x.satir.sandalye) + " sandalye"
        : kacis(partiAdi({ parti: x.ittifak.liste }).kisa) + " listesinden " + O.sayiYaz(x.ittifak.sandalye) + " vekil") +
        "</span></li>");
      const yerel = s.yerel.map(x => "<li>" + bag(x.kayit) + "<span>" + O.yuzdeYaz(oyDegeri(x.satir, x.kayit)) + "</span></li>");
      return liste("Girdiği genel seçimler", genel) + liste("Girdiği yerel seçimler", yerel);
    }

    return { BAGIMSIZ, DIGER, NOTR, KESINTI, TUR_ETIKET, TUR_AD, BITIS_ETIKET,
             partiAdi, oyDegeri, katilimDegeri, siralaGenel, baslikGenel, meclisDurumu,
             donemBul, kronoloji, sonrakiHukumetler, partininSecimleri,
             kacis, rozetHTML, cubukHTML, meclisGruplari, meclisSVG, kartHTML, seritHTML, panelHTML, kunyeSecimleriHTML };
  }
  return { olustur };
});
