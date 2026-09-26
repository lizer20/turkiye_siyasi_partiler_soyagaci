const test = require("node:test");
const assert = require("node:assert/strict");
const { yukle } = require("../yukle");
const O = require("../../ortak");
const F = require("./fikstur");

const P = yukle(["veri/partiler.js"]).PARTILER;
const M = require("../../sandik-mantik").olustur(P, O);
const kayit = id => F.secimler.find(k => k.id === id);
const kisa = id => P.N.find(n => n.id === id).kisa;

test("kacis HTML karakterlerini kaçırır", () => {
  assert.equal(M.kacis(`<a href="x">'&'</a>`), "&lt;a href=&quot;x&quot;&gt;&#39;&amp;&#39;&lt;/a&gt;");
  assert.equal(M.kacis(null), "");
});

test("genel seçim kartı: kimlik, rozet, başlık, meclis çizimi, oy çubuğu, sandalye listesi ve baraj altı", () => {
  const h = M.kartHTML(kayit("1999-04-genel"));
  assert.match(h, /data-id="1999-04-genel"/);
  assert.match(h, /t-rozet t-genel/);
  assert.ok(h.includes(M.kacis(kisa("dsp") + " kazandı · tek başına iktidar")));
  assert.equal((h.match(/<svg class="meclis"/g) || []).length, 1);
  assert.equal((h.match(/class="cubuk"/g) || []).length, 1);
  assert.match(h, /class="s-koltuk"/);
  assert.ok(h.includes("%42,9"));
  assert.match(h, /baraj altı/);
});

test("tek parti kartı oy çubuğu çizmez; sandalye biliniyorsa meclisi çizer", () => {
  const k = structuredClone(kayit("1927-09-genel"));
  let h = M.kartHTML(k);
  assert.match(h, /tek parti seçimi/);
  assert.doesNotMatch(h, /class="cubuk"/);
  assert.doesNotMatch(h, /<svg/);          // sandalye bilinmiyor: çizim yok
  k.meclis = 12; k.sonuc[0].sandalye = 12;
  h = M.kartHTML(k);
  assert.doesNotMatch(h, /class="cubuk"/);
  assert.match(h, /<svg class="meclis"/);
});

const noktaSayisi = svg => (svg.match(/h0/g) || []).length + (svg.match(/<circle/g) || []).length;

test("meclis çizimi: her sandalye bir nokta, sıra sandalyeye göre, bağımsızlar sonda", () => {
  const k = kayit("1999-04-genel");
  const g = M.meclisGruplari(k);
  assert.equal(g.reduce((t, x) => t + x.sandalye, 0), k.meclis);
  for (let i = 1; i < g.length; i++)
    if (g[i].id) assert.ok(g[i - 1].sandalye >= g[i].sandalye, "sıra bozuk");
  const svg = M.meclisSVG(k, false);
  assert.equal(noktaSayisi(svg), k.meclis);
  assert.match(svg, /role="img"/);
  assert.ok(svg.includes("aria-label=\"Meclis dağılımı, " + M.kacis(String(k.meclis)).replace(/\B(?=(\d{3})+(?!\d))/g, ".")));
  assert.match(svg, /class="m-cogunluk"/);
  assert.match(svg, /<title>/);
});

test("meclis çizimi: dağılımı bilinmeyen sandalyeler boş halka olur, uydurulmaz", () => {
  const k = structuredClone(kayit("1999-04-genel"));
  const eksik = k.sonuc.find(s => s.sandalye > 0);
  eksik.sandalye -= 3;
  const g = M.meclisGruplari(k);
  const bos = g.find(x => !x.renk);
  assert.equal(bos.sandalye, 3);
  const svg = M.meclisSVG(k, true);
  assert.equal(noktaSayisi(svg), k.meclis);
  assert.equal((svg.match(/<circle/g) || []).length, 3);
  assert.match(M.panelHTML(k, F).html, /3 sandalyenin dağılımı kaynaklarda bulunamadı/);
});

test("meclis bilgisi yoksa çizim boş", () => {
  const k = structuredClone(kayit("1999-04-genel"));
  k.meclis = null; k.sonuc.forEach(s => { s.sandalye = null; });
  assert.equal(M.meclisSVG(k, false), "");
});

test("yerel kart büyükşehirleri gösterir", () => {
  const h = M.kartHTML(kayit("2004-03-yerel"));
  assert.match(h, /İstanbul/);
  assert.ok(h.includes(M.kacis(kisa("chp92"))));
});

test("bilinmeyen oy — olarak yazılır ve çubuk bölütü çizilmez", () => {
  const k = structuredClone(kayit("1999-04-genel"));
  k.sonuc[1].oy = null;
  const h = M.kartHTML(k);
  assert.ok(h.includes("—"));
  assert.equal(M.cubukHTML([{ kisa: "X", deger: null, renk: "#000000" }], "oy"), '<div class="cubuk-yok">veri yok</div>');
});

test("hükümet şeridi: numara, soyağacı bağlantısı, bitiş nedeni; görevdeki hükümet", () => {
  const h57 = M.seritHTML(F.hukumetler[0]);
  assert.match(h57, /57\. Hükümet/);
  assert.match(h57, /href="index\.html#dsp"/);
  assert.match(h57, /bitti: erken seçim kararı/);
  const h58 = M.seritHTML(F.hukumetler[1]);
  assert.match(h58, /görevde/);
  assert.doesNotMatch(h58, /bitti:/);
});

test("partilerüstü hükümet kesinti rengini alır", () => {
  const h = M.seritHTML({ no: null, baskan: "C", partiler: [], baslangic: "1980-09-21",
    bitis: "1983-12-13", tip: "partiluestu", bitisNedeni: null });
  assert.ok(h.includes("--aile:" + M.KESINTI));
  assert.match(h, /partilerüstü/);
});

test("askerî yönetim hükümetleri kendi organının adıyla gösterilir", () => {
  const mgk = M.seritHTML({ no: 1, basbakan: "C", partiler: [], baslangic: "1980-09-20",
    bitis: "1983-12-13", tip: "mgk", bitisNedeni: null });
  assert.match(mgk, /Millî Güvenlik Konseyi/);
  assert.ok(mgk.includes("--aile:" + M.KESINTI));
  const mbk = M.seritHTML({ no: 1, basbakan: "C", partiler: [], baslangic: "1960-05-30",
    bitis: "1961-01-05", tip: "mbk", bitisNedeni: null });
  assert.match(mbk, /Millî Birlik Komitesi/);
});

test("genel seçim paneli bölümleri ve sonraki hükümetler", () => {
  const { html, renk } = M.panelHTML(kayit("1999-04-genel"), F);
  assert.match(html, /id="p-kisa"/);
  for (const b of ["Meclise girenler", "Giremeyenler", "Bağımsız", "Diğer (3 parti)", "57. Hükümet"])
    assert.ok(html.includes(b), b + " yok");
  assert.match(renk, /^#[0-9A-F]{6}$/i);
  assert.match(html, /<figure class="p-meclis"><svg class="meclis meclis-buyuk"/);
  assert.match(html, /salt çoğunluğu \(6\)/);
  assert.match(html, /<table class="p-tablo">/);
});

test("sandalyesi bilinmeyen parti panelde ayrı listede görünür", () => {
  const k = structuredClone(kayit("1999-04-genel"));
  k.sonuc.find(s => s.parti === "fp").sandalye = null;
  const { html } = M.panelHTML(k, F);
  assert.ok(html.includes("Sandalye bilgisi yok"));
  assert.ok(html.includes("<td><b>—</b></td>"));
  assert.ok(!html.includes(">Giremeyenler<"));   // fp artık giremeyenlerde değil
});

test("ittifak notu panelde görünür", () => {
  const { html } = M.panelHTML(kayit("2002-11-genel"), F);
  assert.ok(html.includes("Sahte İttifak"));
  // parti adı soyağacına bağlantı olarak yazılır
  assert.ok(html.includes('href="index.html#dsp">' + M.kacis(kisa("dsp")) + "</a> 2"));
});

test("referandum paneli: evet/hayır, sonuç ve tutum grupları", () => {
  const k = { id: "2010-09-referandum", tur: "referandum", tarih: "2010-09-12", konu: "Sahte konu",
    kayitli: 100, kullanilan: 90, gecerli: 88, evet: 80, hayir: 8, karar: "kabul",
    tutumlar: [{ parti: "akp", tutum: "evet" }, { parti: "chp92", tutum: "hayir" }] };
  const { html } = M.panelHTML(k, F);
  for (const b of ["Sahte konu", "kabul", "Evet", "Hayır", "%90,9"]) assert.ok(html.includes(b), b + " yok");
  assert.ok(M.kartHTML(k).includes("t-referandum"));
});

test("not alanı kaçırılır", () => {
  const k = structuredClone(kayit("1999-04-genel"));
  k.not = "<x>";
  assert.ok(M.panelHTML(k, F).html.includes("&lt;x&gt;"));
});

test("künye: girdiği genel seçimler (kendi listesi ve ittifak listesi) ve yerel seçimler", () => {
  const h = M.kunyeSecimleriHTML("dsp", F);
  assert.match(h, /Girdiği genel seçimler/);
  assert.match(h, /href="sandik\.html#1999-04-genel">1999</);
  assert.ok(h.includes("%42,9 · 6 sandalye"));
  assert.match(h, /href="sandik\.html#2002-11-genel">2002</);
  assert.ok(h.includes(M.kacis(kisa("chp92")) + " listesinden 2 vekil"));
  assert.match(h, /Girdiği yerel seçimler/);
  assert.match(h, /href="sandik\.html#2004-03-yerel">2004</);
  assert.ok(h.includes("%13,0"));
});

test("künye: aynı yıl aynı türde iki seçim ay adıyla ayrışır", () => {
  const S = structuredClone(F);
  const ikinci = structuredClone(S.secimler.find(k => k.id === "1999-04-genel"));
  ikinci.id = "1999-11-genel"; ikinci.tarih = "1999-11-07";
  S.secimler.splice(2, 0, ikinci);
  const h = M.kunyeSecimleriHTML("dsp", S);
  assert.match(h, />Nis 1999</);
  assert.match(h, />Kas 1999</);
});

test("künye: seçim kaydı olmayan partide boş", () => {
  assert.equal(M.kunyeSecimleriHTML("tcf", F), "");
});

test("yerel seçimde oy bilinmiyorsa ilk üç yerine tek satır uyarı", () => {
  const bos = { id: "1984-03-yerel", tur: "yerel", tarih: "1984-03-25", olcu: "belediye-meclisi",
    kayitli: null, kullanilan: null, gecerli: null,
    sonuc: [{ parti: "dsp", oy: null }, { parti: "dsp", oy: null }] };
  const h = M.kartHTML(bos);
  assert.match(h, /oy dağılımı kayıtlı değil/);
  assert.doesNotMatch(h, /veri yok/);
  assert.doesNotMatch(h, /s-ilk3/);
});
