const test = require("node:test");
const assert = require("node:assert/strict");
const { yukle } = require("../yukle");
const { dogrulaSandik } = require("../dogrula");
const F = require("./fikstur");

const P = yukle(["veri/partiler.js"]).PARTILER;
const kopya = () => structuredClone(F);
const hatalar = S => dogrulaSandik(P, S).hatalar.join("\n");
const uyarilar = S => dogrulaSandik(P, S).uyarilar.join("\n");
const bul = (S, id) => S.secimler.find(k => k.id === id);

test("geçerli fikstür hatasız geçer", () => {
  assert.equal(hatalar(kopya()), "");
});

test("kimlik biçimi ve tekrarı", () => {
  const S = kopya();
  bul(S, "1999-04-genel").id = "1999-05-genel";       // tarihle uyuşmuyor
  S.secimler.push(structuredClone(bul(S, "2002-11-genel")));
  const h = hatalar(S);
  assert.match(h, /kimlik tarihle uyuşmuyor: 1999-05-genel/);
  assert.match(h, /yinelenen kimlik: 2002-11-genel/);
});

test("sıra ve bilinmeyen değerler", () => {
  const S = kopya();
  S.secimler.reverse();
  S.hukumetler[0].tip = "tuhaf";
  S.hukumetler[0].bitisNedeni = "tuhaf";
  const h = hatalar(S);
  assert.match(h, /secimler tarih sırasında değil/);
  assert.match(h, /bilinmeyen hükümet tipi/);
  assert.match(h, /bilinmeyen bitiş nedeni/);
});

test("parti referansları", () => {
  const S = kopya();
  bul(S, "1999-04-genel").sonuc.push({ parti: "yok", ad: "X", oy: 0, sandalye: 0 });
  S.hukumetler[0].partiler.push("yok2");
  const h = hatalar(S);
  assert.match(h, /bilinmeyen parti: yok\b/);
  assert.match(h, /hem parti hem ad/);
  assert.match(h, /bilinmeyen parti: yok2/);
});

test("sandalye ve oy toplamları", () => {
  const S = kopya();
  bul(S, "1999-04-genel").sonuc[0].sandalye = 5;     // toplam 11 > 10
  bul(S, "2002-11-genel").sonuc[0].oy = 151;          // toplam 701 ≠ 700
  const h = hatalar(S);
  assert.match(h, /1999-04-genel: sandalye toplamı 11, meclis 10/);
  assert.match(h, /2002-11-genel: oy toplamı 701, geçerli 700/);
});

test("seçmen sayılarının tutarlılığı ve yedek alanların karışması", () => {
  const S = kopya();
  const k = bul(S, "2004-03-yerel");
  k.gecerli = 900;                                    // > kullanilan
  k.katilimYuzde = 70;                                // sayılarla birlikte
  k.sonuc[0].oyYuzde = 50;                            // oy ile birlikte
  const h = hatalar(S);
  assert.match(h, /2004-03-yerel: geçerli > kullanılan/);
  assert.match(h, /2004-03-yerel: seçmen sayıları ve katilimYuzde birlikte/);
  assert.match(h, /2004-03-yerel: aynı satırda oy ve oyYuzde/);
});

test("referandum: evet + hayır = geçerli, sonuç ve tutum değerleri", () => {
  const S = kopya();
  S.secimler.push({ id: "2010-09-referandum", tur: "referandum", tarih: "2010-09-12", konu: "sahte",
    kayitli: 100, kullanilan: 90, gecerli: 88, evet: 80, hayir: 9, karar: "belki",
    tutumlar: [{ parti: "akp", tutum: "kararsiz" }] });
  const h = hatalar(S);
  assert.match(h, /2010-09-referandum: evet \+ hayır 89, geçerli 88/);
  assert.match(h, /bilinmeyen referandum sonucu/);
  assert.match(h, /bilinmeyen tutum/);
});

test("hükümet çakışması hata, boşluk uyarı", () => {
  const S = kopya();
  S.hukumetler[0].bitis = "2002-12-01";
  assert.match(hatalar(S), /hükümetler çakışıyor: 57 \/ 58/);
  const T = kopya();
  T.hukumetler[0].bitis = "2002-11-01";
  assert.match(uyarilar(T), /hükümetler arasında boşluk: 57 → 58/);
});

test("hiçbir banda düşmeyen kayıt hata", () => {
  const S = kopya();
  S.secimler.unshift({ id: "1900-01-ara", tur: "ara", tarih: "1900-01-01", bolge: "x",
    sandalyeSayisi: 1, sonuc: [] });
  assert.match(hatalar(S), /yersiz kayıt: 1900-01-ara/);
});

test("ittifak listesinden seçilenler liste partisini aşarsa uyarı, — sayısı raporlanır", () => {
  const S = kopya();
  bul(S, "2002-11-genel").ittifak[0].icinden[0].sandalye = 6;
  const u = uyarilar(S);
  assert.match(u, /2002-11-genel: ittifak Sahte İttifak içinden 6 > liste partisi 5/);
  assert.match(uyarilar(kopya()), /— sayısı: genel/);
});

test("soyağacında olmayan ama sandalye kazanan parti uyarılır", () => {
  const S = kopya();
  const k = bul(S, "1999-04-genel");
  k.sonuc.push({ ad: "Sahte Parti", oy: 0, sandalye: 0 });   // sandalyesiz: uyarı yok
  assert.doesNotMatch(uyarilar(S), /Sahte Parti/);
  k.sonuc[k.sonuc.length - 1].sandalye = 1;
  k.meclis = 11;                                               // toplam tutsun, yalnızca uyarı sınansın
  assert.match(uyarilar(S), /soyağacında olmayan ama sandalye kazanan: Sahte Parti \(1999-04-genel\)/);
  assert.doesNotMatch(uyarilar(S), /sandalye kazanan: Bağımsız/);
});

test("tarih biçimi: ay hassasiyeti kabul, bozuk biçim hata", () => {
  const S = kopya();
  bul(S, "1927-09-genel").tarih = "1927-09";          // günü bilinmeyen kayıt
  assert.doesNotMatch(hatalar(S), /geçersiz tarih biçimi/);
  bul(S, "1999-04-genel").tarih = "1999-4-18";
  assert.match(hatalar(S), /geçersiz tarih biçimi: 1999-04-genel/);
  const T = kopya();
  T.hukumetler[0].baslangic = "1999-05";
  assert.match(hatalar(T), /hükümet tarihi gün dahil olmalı: 57/);
});
