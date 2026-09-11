#!/usr/bin/env node
// Veri denetimi: node araclar/dogrula.js  (hata varsa çıkış kodu 1)
const { yukle } = require("./yukle");

const BAG_TURLERI = ["devam", "bolunme", "katilma"];

function dogrulaPartiler(P) {
  const hatalar = [], uyarilar = [];
  const idler = new Set();
  for (const n of P.N) {
    if (idler.has(n.id)) hatalar.push("yinelenen parti id: " + n.id);
    idler.add(n.id);
    if (!P.BILGI[n.id]) hatalar.push("BILGI kaydı yok: " + n.id);
    if (!P.ROZET[n.durum]) hatalar.push("bilinmeyen durum: " + n.id + " → " + n.durum);
    if (n.aile < 0 || n.aile >= P.AILE.length) hatalar.push("geçersiz aile: " + n.id);
    if (n.donem < 0 || n.donem >= P.DONEMLER.length) hatalar.push("geçersiz dönem: " + n.id);
    if (n.durum === "faal" && /–\s*\d{4}/.test(n.yil)) hatalar.push("faal ama bitiş yılı var: " + n.id);
  }
  for (const k of Object.keys(P.BILGI)) if (!idler.has(k)) hatalar.push("parti olmayan BILGI kaydı: " + k);
  const kenarlar = new Set();
  for (const e of P.E) {
    if (!idler.has(e[0]) || !idler.has(e[1])) hatalar.push("bilinmeyen uç: " + e.join(" > "));
    if (!BAG_TURLERI.includes(e[2])) hatalar.push("bilinmeyen bağ türü: " + e.join(" > "));
    const a = e.join(">");
    if (kenarlar.has(a)) hatalar.push("yinelenen bağ: " + a);
    kenarlar.add(a);
  }
  return { hatalar, uyarilar };
}

function dogrula(P, S) {
  return dogrulaPartiler(P);   // Görev 5 Sandık kurallarını ekler
}

module.exports = { dogrula, dogrulaPartiler };

if (require.main === module) {
  const w = yukle(["veri/partiler.js", "veri/sandik.js"]);
  const { hatalar, uyarilar } = dogrula(w.PARTILER, w.SANDIK);
  uyarilar.forEach(u => console.log("uyarı: " + u));
  hatalar.forEach(h => console.log("HATA:  " + h));
  console.log(hatalar.length ? hatalar.length + " hata" : "hata yok");
  process.exit(hatalar.length ? 1 : 0);
}
