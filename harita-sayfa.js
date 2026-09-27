/* Harita sayfasının DOM bağlaması.
   Gerektirir: window.PARTILER, window.SANDIK, window.ILLER, window.IL_SONUCLARI, window.Ortak,
   window.SandikMantik, window.HaritaMantik. Adres: harita.html#<seçim kimliği>. */
(function () {
  const P = window.PARTILER, S = window.SANDIK, O = window.Ortak, V = window.IL_SONUCLARI || {};
  const M = window.SandikMantik.olustur(P, O);
  const H = window.HaritaMantik.olustur(window.ILLER, M, O);

  // yalnızca il verisi olan seçimler
  const secimler = S.secimler.filter(k => (k.tur === "genel" || k.tur === "yerel") && V[k.id]);
  let tur = "genel";

  const sec = document.getElementById("hSecim");
  const cizim = document.getElementById("hCizim"), yan = document.getElementById("hYan");
  const baslik = document.getElementById("hBaslik"), tablo = document.getElementById("hTablo");
  const turDugmeleri = document.querySelectorAll(".tur-dugme");

  function liste() { return secimler.filter(k => k.tur === tur); }
  function seceneklerKur(secili) {
    const l = liste();
    sec.innerHTML = l.map(k => '<option value="' + k.id + '">' + O.tarihYaz(k.tarih) + "</option>").join("");
    if (!l.length) { goster(null); return; }
    sec.value = l.some(k => k.id === secili) ? secili : l[l.length - 1].id;
    goster(sec.value);
  }
  function goster(id) {
    const k = secimler.find(x => x.id === id);
    if (!k) {
      baslik.innerHTML = "";
      cizim.innerHTML = '<div class="h-bos-mesaj">Bu tür için henüz il il sonuç eklenmedi.</div>';
      yan.innerHTML = ""; tablo.innerHTML = "";
      return;
    }
    const v = V[id];
    const olcu = k.tur === "genel" ? "ilde en çok oyu alan parti" : "il merkezi / büyükşehir belediye başkanlığı";
    baslik.innerHTML = "<b>" + k.tarih.slice(0, 4) + " " + M.TUR_AD[k.tur] + "</b><span>" + O.tarihYaz(k.tarih) +
      " · " + olcu + '</span><a href="sandik.html#' + k.id + '">seçimin ayrıntıları →</a>';
    cizim.innerHTML = H.haritaSVG(k, v, { buyuk: true });
    yan.innerHTML = '<div class="p-etiket">İl kazanan</div>' + H.lejantHTML(k, v) +
      (v.not ? '<div class="h-not">' + M.kacis(v.not) + "</div>" : "");
    tablo.innerHTML = H.tabloHTML(k, v);
    history.replaceState(null, "", "#" + id);
    const l = liste(), i = l.findIndex(x => x.id === id);
    document.getElementById("hOnceki").disabled = i <= 0;
    document.getElementById("hSonraki").disabled = i >= l.length - 1;
  }
  function turSec(t, secili) {
    tur = t;
    turDugmeleri.forEach(d => d.setAttribute("aria-pressed", String(d.dataset.tur === t)));
    seceneklerKur(secili);
  }

  turDugmeleri.forEach(d => d.addEventListener("click", () => turSec(d.dataset.tur)));
  sec.addEventListener("change", () => goster(sec.value));
  function kaydir(adim) {
    const l = liste(), i = l.findIndex(x => x.id === sec.value) + adim;
    if (i >= 0 && i < l.length) { sec.value = l[i].id; goster(sec.value); }
  }
  document.getElementById("hOnceki").addEventListener("click", () => kaydir(-1));
  document.getElementById("hSonraki").addEventListener("click", () => kaydir(1));

  function hashAc() {
    const id = O.hashOku(location.hash);
    const k = secimler.find(x => x.id === id);
    if (k) turSec(k.tur, k.id); else turSec(tur);
  }
  window.addEventListener("hashchange", hashAc);
  hashAc();
})();
