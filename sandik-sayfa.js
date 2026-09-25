/* Sandık sayfasının DOM bağlaması.
   Gerektirir: window.PARTILER, window.SANDIK, window.Ortak, window.SandikMantik ve sayfada
   #turlar, #yilKaydirici, #yilDeger, #filtreTemizle, #rows, #perde, #panel, #kapat, #p-govde. */
(function () {
  const P = window.PARTILER, S = window.SANDIK, O = window.Ortak;
  const M = window.SandikMantik.olustur(P, O);
  const TURLER = [["genel", "Genel"], ["yerel", "Yerel"], ["referandum", "Referandum"],
    ["cb-halk", "CB (halk)"], ["cb-tbmm", "CB (TBMM)"], ["ara", "Ara seçim"], ["hukumet", "Hükümet"]];
  const acikTurler = new Set(TURLER.map(t => t[0]));
  let yilFiltre = null;

  const rows = document.getElementById("rows");
  const kr = M.kronoloji(S);

  /* ---- çizim ---- */
  function ogeHTML(o) {
    if (o.tur === "secim") {
      const y = o.tarih.slice(0, 4);
      return '<div class="s-oge" data-tur="' + o.kayit.tur + '" data-bas="' + y + '" data-bit="' + y + '">' +
        M.kartHTML(o.kayit) + "</div>";
    }
    const h = o.hukumet;
    return '<div class="s-oge s-oge-serit" data-tur="hukumet" data-bas="' + h.baslangic.slice(0, 4) +
      '" data-bit="' + (h.bitis ? h.bitis.slice(0, 4) : "9999") + '">' + M.seritHTML(h) + "</div>";
  }
  function satirHTML(ogeler) {
    return ogeler.length ? '<div class="s-satir">' + ogeler.map(ogeHTML).join("") + "</div>" : "";
  }
  function bantBul(donem) { return rows.querySelector('.banner[aria-controls="' + donem.id + '"]'); }

  P.DONEMLER.forEach((d, i) => {
    const b = document.createElement("div");
    b.className = "banner";
    b.innerHTML = '<span class="yil">' + d.yil + '</span><span class="ad">' + d.ad +
      '</span><span class="ok" aria-hidden="true">−</span>';
    const icerik = document.createElement("div");
    icerik.className = "s-donem"; icerik.id = "donem-" + i;
    const ogeler = kr.bantlar[i].ogeler, k = d.kesinti, kap = kr.kaplar[i] || [];
    // kesinti bandı dönemin sonunda değil, kendi tarihinde durur (spesifikasyon §6.3)
    const once = k ? ogeler.filter(o => o.tarih < k.tarih) : ogeler;
    const sonra = k ? ogeler.filter(o => o.tarih >= k.tarih) : [];
    let html = !ogeler.length && !kap.length ? '<p class="s-bos">bu dönem için henüz kayıt yok</p>' : "";
    html += satirHTML(once);
    if (k) {
      html += '<div class="banner kesinti"><span class="yil">⚡</span><span class="ad">' + M.kacis(k.metin) + "</span></div>";
      if (kap.length) html += '<div class="s-kap" role="group" aria-label="askerî yönetim dönemi">' + satirHTML(kap) + "</div>";
    }
    html += satirHTML(sonra);
    icerik.innerHTML = html;
    rows.appendChild(b); rows.appendChild(icerik);
    O.bantKur(b, icerik);
  });

  /* ---- araç çubuğu ---- */
  const turlar = document.getElementById("turlar");
  turlar.innerHTML = TURLER.map(t => '<button type="button" class="tur-dugme" data-tur="' + t[0] +
    '" aria-pressed="true">' + t[1] + "</button>").join("");
  turlar.addEventListener("click", e => {
    const d = e.target.closest(".tur-dugme"); if (!d) return;
    const t = d.dataset.tur;
    if (acikTurler.has(t)) acikTurler.delete(t); else acikTurler.add(t);
    d.setAttribute("aria-pressed", String(acikTurler.has(t)));
    uygula();
  });

  const yillar = P.DONEMLER.map(d => d.yil.split("–").map(x => +x.trim()));
  const YMIN = yillar[0][0], YMAX = yillar[yillar.length - 1][1];
  const kaydirici = document.getElementById("yilKaydirici"), yilDeger = document.getElementById("yilDeger");
  kaydirici.min = YMIN; kaydirici.max = YMAX; kaydirici.value = YMAX; yilDeger.textContent = YMAX;
  kaydirici.addEventListener("input", () => {
    const v = +kaydirici.value;
    yilFiltre = v === YMAX ? null : v;   // en sağ uç "filtre yok" demektir
    yilDeger.textContent = v;
    uygula();
  });

  const temizle = document.getElementById("filtreTemizle");
  temizle.addEventListener("click", () => {
    TURLER.forEach(t => acikTurler.add(t[0]));
    turlar.querySelectorAll(".tur-dugme").forEach(d => d.setAttribute("aria-pressed", "true"));
    yilFiltre = null; kaydirici.value = YMAX; yilDeger.textContent = YMAX;
    uygula();
  });

  function uygula() {
    rows.classList.toggle("filtreli", yilFiltre !== null);
    rows.querySelectorAll(".s-oge").forEach(el => {
      el.hidden = !acikTurler.has(el.dataset.tur);
      const tutar = yilFiltre !== null && +el.dataset.bas <= yilFiltre && yilFiltre <= +el.dataset.bit;
      el.classList.toggle("sonuc", tutar);
      const donem = el.closest(".s-donem");
      if (tutar && !el.hidden && donem.classList.contains("kapali")) O.bantDurum(bantBul(donem), donem, false);
    });
    temizle.classList.toggle("aktif", yilFiltre !== null || acikTurler.size < TURLER.length);
  }

  /* ---- panel ve doğrudan bağlantı ---- */
  const Panel = O.panelKur({
    panel: document.getElementById("panel"), perde: document.getElementById("perde"),
    govde: document.getElementById("p-govde"), kapatDugmesi: document.getElementById("kapat"),
    odakSecici: ".s-kart",
    kapaninca: () => history.replaceState(null, "", location.pathname + location.search)
  });
  function ac(id) {
    const k = S.secimler.find(x => x.id === id); if (!k) return;
    const p = M.panelHTML(k, S);
    Panel.ac(p.html, p.renk);
    history.replaceState(null, "", "#" + id);
  }
  rows.addEventListener("click", e => {
    const k = e.target.closest(".s-kart"); if (k) ac(k.dataset.id);
  });
  rows.addEventListener("keydown", e => {
    const k = e.target.closest(".s-kart");
    if (k && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); ac(k.dataset.id); }
  });
  function hashAc() {
    const id = O.hashOku(location.hash); if (!id) return;
    const el = rows.querySelector('[data-id="' + id + '"]'); if (!el) return;
    const donem = el.closest(".s-donem");
    if (donem.classList.contains("kapali")) O.bantDurum(bantBul(donem), donem, false);
    el.scrollIntoView({ block: "center" });
    el.focus();
    ac(id);
  }
  window.addEventListener("hashchange", hashAc);
  hashAc();
})();
