const test = require("node:test");
const assert = require("node:assert/strict");
const { yukle } = require("../yukle");
const O = require("../../ortak");

const w = yukle(["veri/partiler.js", "veri/iller.js"]);
const M = require("../../sandik-mantik").olustur(w.PARTILER, O);
const H = require("../../harita-mantik").olustur(w.ILLER, M, O);
const k = { id: "x", tur: "genel", tarih: "2000-01-01" };

test("il geometrisi: 81 il, plakalar tekil", () => {
  assert.equal(w.ILLER.iller.length, 81);
  assert.equal(new Set(w.ILLER.iller.map(i => i.plaka)).size, 81);
});

test("il adı eşleştirme: büyük harf ve eski adlar", () => {
  assert.equal(H.ilBul("İSTANBUL").plaka, "34");
  assert.equal(H.ilBul("İçel").ad, "Mersin");
  assert.equal(H.ilBul("Urfa").ad, "Şanlıurfa");
  assert.equal(H.ilBul("Maraş").ad, "Kahramanmaraş");
  assert.equal(H.ilBul("Yokil"), null);
});

test("genel seçim: en çok oy alan parti kazanır; tabloda olmayan il 'yok' sayılır", () => {
  const veri = { iller: { "Adana": { gecerli: 100, oy: { chp92: 40, akp: 50, Bağımsız: 10 } },
    "Batman": { gecerli: 10, oy: { Bağımsız: 6, akp: 4 } }, "Yokil": { gecerli: 1, oy: { akp: 1 } } } };
  const { iller, eslesmeyen } = H.iller(k, veri);
  assert.equal(iller.get("01").kazanan, "akp");
  assert.equal(iller.get("01").sira[0].pay, 50);
  assert.equal(iller.get("72").kazanan, "Bağımsız");
  assert.equal(iller.get("06").durum, "yok");
  assert.deepEqual(eslesmeyen, ["Yokil"]);
});

test("yerel seçim: kazanan alanı; bilinmeyen il null ile işaretlenir", () => {
  const veri = { iller: { "İzmir": { kazanan: "chp92", oy: 5, ikinci: "akp", ikinciOy: 3 }, "Ankara": { kazanan: null } } };
  const { iller } = H.iller(k, veri);
  assert.equal(iller.get("35").kazanan, "chp92");
  assert.equal(iller.get("06").durum, "bilinmiyor");
  assert.match(H.ipucu(w.ILLER.iller[34], iller.get("35")), /İzmir — CHP 5 oy/);
});

test("aynı aileden iki parti farklı tonda boyanır, en çok il kazanan ailenin rengini alır", () => {
  const veri = { iller: { "Adana": { kazanan: "akp" }, "Ankara": { kazanan: "akp" }, "Yozgat": { kazanan: "yrp" } } };
  const r = H.renkler(H.iller(k, veri).iller);
  const akp = r.find(p => p.anahtar === "akp"), yrp = r.find(p => p.anahtar === "yrp");
  assert.equal(akp.renk, yrp.renk);
  assert.equal(akp.dolgu, akp.renk);
  assert.notEqual(yrp.dolgu, akp.dolgu);
  assert.equal(akp.il, 2);
});

test("SVG: 81 il yolu, ipuçları kaçırılmış, açıklama il sayılarını verir", () => {
  const veri = { iller: { "Adana": { kazanan: "akp" }, "Hatay": { kazanan: null } } };
  const svg = H.haritaSVG(k, veri);
  assert.equal((svg.match(/<path class="h-il/g) || []).length, 81);
  assert.match(svg, /h-tarama/);
  assert.match(svg, /role="img"/);
  const lj = H.lejantHTML(k, veri);
  assert.match(lj, /1 il/);
  assert.match(lj, /sonuç bilinmiyor/);
  assert.match(lj, /o tarihte ayrı il değildi<span>79 il/);
  assert.match(H.tabloHTML(k, veri), /<th scope="row">Adana<\/th>/);
});
