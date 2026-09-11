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

    return { BAGIMSIZ, DIGER, NOTR, partiAdi, oyDegeri, katilimDegeri, siralaGenel,
             baslikGenel, meclisDurumu, donemBul, kronoloji, sonrakiHukumetler, partininSecimleri };
  }
  return { olustur };
});
