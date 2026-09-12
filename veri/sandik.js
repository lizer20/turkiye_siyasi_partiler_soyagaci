/* Sandık verisi: seçimler, referandumlar, hükümetler.
   Kurallar: docs/superpowers/specs/2026-09-11-sandik-design.md §5 ve §8.
   Her değerin kaynağı araclar/kaynak-defteri.md'dedir. null = doğrulanamadı (ekranda —). */
window.SANDIK = {
  secimler: [
    // --- dönem 0 (1923 – 1945) ---

    // kaynak: araclar/kaynak-defteri.md#1923-06-genel
    { id: "1923-06-genel", tur: "genel", tarih: "1923-06", tekParti: true,
      meclis: 287, kayitli: null, kullanilan: null, gecerli: null, baraj: null,
      sonuc: [ { parti: "chp23", oy: null, sandalye: 287 } ],
      not: "Seçim il il farklı günlerde ve iki dereceli yapıldı; kaynaklar yalnızca Haziran–Temmuz 1923 aralığını veriyor, tek bir gün yok." },

    // kaynak: araclar/kaynak-defteri.md#1923-10-cb-tbmm
    { id: "1923-10-cb-tbmm", tur: "cb-tbmm", tarih: "1923-10-29",
      secilen: "Mustafa Kemal Atatürk", turSayisi: 1,
      not: "Cumhuriyet'in ilanıyla aynı gün, tek aday olarak oybirliğiyle seçildi (158 oy)." },

    // kaynak: araclar/kaynak-defteri.md#1927-09-genel
    { id: "1927-09-genel", tur: "genel", tarih: "1927-09-02", tekParti: true,
      meclis: 316, kayitli: null, kullanilan: null, gecerli: null, baraj: null,
      sonuc: [ { parti: "chp23", oy: null, sandalye: 316 } ],
      not: "İkinci seçmenler 30 Temmuz–5 Ağustos, milletvekilleri 2–6 Eylül 1927 arasında seçildi." },

    // kaynak: araclar/kaynak-defteri.md#1927-11-cb-tbmm
    { id: "1927-11-cb-tbmm", tur: "cb-tbmm", tarih: "1927-11-01",
      secilen: "Mustafa Kemal Atatürk", turSayisi: 1,
      not: "Atatürk 2. kez, tek aday, oybirliğiyle seçildi (288 oy)." },

    // kaynak: araclar/kaynak-defteri.md#1930-10-yerel
    { id: "1930-10-yerel", tur: "yerel", tarih: "1930-10-05",
      olcu: "belediye-meclisi",
      kayitli: null, kullanilan: null, gecerli: null,
      sonuc: [],
      not: "Serbest Cumhuriyet Fırkası'nın girdiği tek seçimdi; İstanbul'da CHF 35.934, SCF 12.813 oy aldı (ülke geneli toplam bulunamadı)." },

    // kaynak: araclar/kaynak-defteri.md#1931-04-genel
    { id: "1931-04-genel", tur: "genel", tarih: "1931-04-25", tekParti: true,
      meclis: 317, kayitli: null, kullanilan: null, gecerli: null, baraj: null,
      sonuc: [ { parti: "chp23", oy: null, sandalye: 317 } ],
      not: "İkinci seçmenler 7–10 Nisan, milletvekilleri 25 Nisan 1931'de seçildi." },

    // kaynak: araclar/kaynak-defteri.md#1931-05-cb-tbmm
    { id: "1931-05-cb-tbmm", tur: "cb-tbmm", tarih: "1931-05-04",
      secilen: "Mustafa Kemal Atatürk", turSayisi: 1,
      not: "Atatürk 3. kez, tek aday, oybirliğiyle seçildi (289 oy)." },

    // kaynak: araclar/kaynak-defteri.md#1934-10-yerel
    { id: "1934-10-yerel", tur: "yerel", tarih: "1934-10",
      olcu: "belediye-meclisi",
      kayitli: null, kullanilan: null, gecerli: null,
      sonuc: [],
      not: "Tek parti döneminin ikinci ülke geneli belediye seçimiydi; ülke geneli oy sayısı bulunamadı." },

    // kaynak: araclar/kaynak-defteri.md#1935-02-genel
    { id: "1935-02-genel", tur: "genel", tarih: "1935-02-08", tekParti: true,
      meclis: 399, kayitli: null, kullanilan: null, gecerli: null, baraj: null,
      sonuc: [ { parti: "chp23", oy: null, sandalye: 399 } ],
      not: null },

    // kaynak: araclar/kaynak-defteri.md#1935-03-cb-tbmm
    { id: "1935-03-cb-tbmm", tur: "cb-tbmm", tarih: "1935-03-01",
      secilen: "Mustafa Kemal Atatürk", turSayisi: 1,
      not: "Atatürk 4. ve son kez, tek aday, oybirliğiyle seçildi (386 oy)." },

    // kaynak: araclar/kaynak-defteri.md#1938-10-yerel
    { id: "1938-10-yerel", tur: "yerel", tarih: "1938-10",
      olcu: "belediye-meclisi",
      kayitli: null, kullanilan: null, gecerli: null,
      sonuc: [],
      not: "Tek parti döneminin üçüncü ülke geneli belediye seçimiydi (Ankara 29 Eylül–8 Ekim, İstanbul 1–10 Ekim 1938); ülke geneli oy sayısı bulunamadı." },

    // kaynak: araclar/kaynak-defteri.md#1938-11-cb-tbmm
    { id: "1938-11-cb-tbmm", tur: "cb-tbmm", tarih: "1938-11-11",
      secilen: "İsmet İnönü", turSayisi: 1,
      not: "Atatürk'ün 10 Kasım 1938'deki ölümü üzerine olağanüstü toplanan TBMM'de, tek aday, oybirliğiyle seçildi (348 oy)." },

    // kaynak: araclar/kaynak-defteri.md#1939-03-genel
    { id: "1939-03-genel", tur: "genel", tarih: "1939-03-26", tekParti: true,
      meclis: 429, kayitli: null, kullanilan: null, gecerli: null, baraj: null,
      sonuc: [ { parti: "chp23", oy: null, sandalye: 429 } ],
      not: null },

    // kaynak: araclar/kaynak-defteri.md#1939-04-cb-tbmm
    { id: "1939-04-cb-tbmm", tur: "cb-tbmm", tarih: "1939-04-03",
      secilen: "İsmet İnönü", turSayisi: 1,
      not: "İnönü 2. kez, tek aday, oybirliğiyle seçildi (413 oy)." },

    // kaynak: araclar/kaynak-defteri.md#1942-10-yerel
    { id: "1942-10-yerel", tur: "yerel", tarih: "1942-10",
      olcu: "belediye-meclisi",
      kayitli: null, kullanilan: null, gecerli: null,
      sonuc: [],
      not: "Tek parti döneminin dördüncü ve son ülke geneli belediye seçimiydi (İstanbul 1–11 Ekim 1942); ülke geneli oy sayısı bulunamadı." },

    // kaynak: araclar/kaynak-defteri.md#1943-02-genel
    { id: "1943-02-genel", tur: "genel", tarih: "1943-02-28", tekParti: true,
      meclis: 455, kayitli: null, kullanilan: null, gecerli: null, baraj: null,
      sonuc: [ { parti: "chp23", oy: null, sandalye: 455 } ],
      not: "İkinci Dünya Savaşı'nın en yoğun döneminde yapılan, tek parti döneminin son genel seçimidir." },

    // kaynak: araclar/kaynak-defteri.md#1943-03-cb-tbmm
    { id: "1943-03-cb-tbmm", tur: "cb-tbmm", tarih: "1943-03-08",
      secilen: "İsmet İnönü", turSayisi: 1,
      not: "İnönü 3. kez, tek aday, oybirliğiyle seçildi (435 oy)." },

    // --- dönem 1 (1946 – 1960) ---

    // kaynak: araclar/kaynak-defteri.md#1946-05-yerel
    { id: "1946-05-yerel", tur: "yerel", tarih: "1946-05-26",
      olcu: "belediye-meclisi",
      kayitli: null, kullanilan: null, gecerli: null,
      sonuc: [],
      not: "Çok partili hayatın ilk yerel seçimiydi; DP örgütlenme yetersizliğini gerekçe göstererek katılmadı, Milli Kalkınma Partisi de seçim günü yarıştan çekilince seçim fiilen tek partili geçti." },

    // kaynak: araclar/kaynak-defteri.md#1946-07-genel
    { id: "1946-07-genel", tur: "genel", tarih: "1946-07-21", tekParti: false,
      meclis: 465, kayitli: null, kullanilan: null, gecerli: null, baraj: null,
      sonuc: [ { parti: "chp23", oy: null, sandalye: 397 }, { parti: "dp46", oy: null, sandalye: 61 }, { ad: "Bağımsız", oy: null, sandalye: 7 } ],
      not: "Açık oy, gizli tasnif usulüyle yapıldı; ülke geneli oy sayıları hiç yayımlanmadı, yalnızca milletvekili dağılımı bilinmektedir." },

    // kaynak: araclar/kaynak-defteri.md#1946-08-cb-tbmm
    { id: "1946-08-cb-tbmm", tur: "cb-tbmm", tarih: "1946-08-05",
      secilen: "İsmet İnönü", turSayisi: 1,
      not: "İnönü 4. ve son kez, DP'nin adayı Fevzi Çakmak'a karşı seçildi (388/59 oy, 2 oy Tengirşenk'e, 2 boş)." },

    // kaynak: araclar/kaynak-defteri.md#1950-05-genel
    { id: "1950-05-genel", tur: "genel", tarih: "1950-05-14", tekParti: false,
      meclis: 487, kayitli: 8905743, kullanilan: 7953085, gecerli: null, baraj: null,
      sonuc: [ { parti: "dp46", oy: 4391694, sandalye: 408 }, { parti: "chp23", oy: 3148626, sandalye: 69 }, { parti: "mp48", oy: 368537, sandalye: 1 }, { ad: "Bağımsız", oy: null, sandalye: 9 } ],
      not: "İktidar ilk kez seçim yoluyla el değiştirdi: CHP'den DP'ye." },

    // kaynak: araclar/kaynak-defteri.md#1950-05-cb-tbmm
    { id: "1950-05-cb-tbmm", tur: "cb-tbmm", tarih: "1950-05-22",
      secilen: "Celâl Bayar", turSayisi: 1,
      not: "DP'nin genel başkanı, yeni meclisçe 1. turda seçildi (387/453 oy)." },

    // kaynak: araclar/kaynak-defteri.md#1950-09-yerel
    { id: "1950-09-yerel", tur: "yerel", tarih: "1950-09-03",
      olcu: "belediye-meclisi",
      kayitli: null, kullanilan: null, gecerli: null,
      sonuc: [ { parti: "dp46", oyYuzde: 57.6 }, { parti: "chp23", oyYuzde: 37.5 } ],
      not: "DP ülke genelinde 600'den fazla belediyeden 560'ından fazlasını kazandı; ülke geneli oy sayısı yayımlanmadı." },

    // kaynak: araclar/kaynak-defteri.md#1951-09-ara
    { id: "1951-09-ara", tur: "ara", tarih: "1951-09-16",
      bolge: "17 il", sandalyeSayisi: 20,
      sonuc: [],
      not: "1950 seçiminde birden fazla yerden seçilen ya da vefat eden milletvekillerinin yerine yapıldı; Bilecik'te DP kazandı. İl bazında kazananların tam listesi bu turda iki kaynakla doğrulanamadı." },

    // kaynak: araclar/kaynak-defteri.md#1954-05-genel
    { id: "1954-05-genel", tur: "genel", tarih: "1954-05-02", tekParti: false,
      meclis: 541, kayitli: 10262063, kullanilan: 9095617, gecerli: null, baraj: null,
      sonuc: [ { parti: "dp46", oy: 5313659, sandalye: 504 }, { parti: "chp23", oy: 3193471, sandalye: 31 }, { parti: "mp48", oy: 480249, sandalye: 5 }, { ad: "Bağımsız", oy: null, sandalye: 1 } ],
      not: "DP ikinci seçimini de kazanarak iktidarını pekiştirdi." },

    // kaynak: araclar/kaynak-defteri.md#1954-05-cb-tbmm
    { id: "1954-05-cb-tbmm", tur: "cb-tbmm", tarih: "1954-05-14",
      secilen: "Celâl Bayar", turSayisi: 1,
      not: "Bayar 2. kez seçildi (486/513 oy)." },

    // kaynak: araclar/kaynak-defteri.md#1957-10-genel
    { id: "1957-10-genel", tur: "genel", tarih: "1957-10-27", tekParti: false,
      meclis: 610, kayitli: 12078623, kullanilan: 9250949, gecerli: null, baraj: null,
      sonuc: [ { parti: "dp46", oy: 4497811, sandalye: 424 }, { parti: "chp23", oy: 3825267, sandalye: 178 }, { parti: "mp48", oy: 604087, sandalye: 4 }, { ad: "Hürriyet Partisi", oy: 321471, sandalye: 4 } ],
      not: "DP oy kaybetmesine rağmen çoğunluk sistemi sayesinde sandalyelerin çoğunu korudu." },

    // kaynak: araclar/kaynak-defteri.md#1957-11-cb-tbmm
    { id: "1957-11-cb-tbmm", tur: "cb-tbmm", tarih: "1957-11-01",
      secilen: "Celâl Bayar", turSayisi: 1,
      not: "Bayar 3. ve son kez seçildi (413/602 oy); muhalefet milletvekilleri oylama sırasında Meclis'i terk etti." },

    // --- 27 Mayıs 1960 kabı (bkz. veri/partiler.js DONEMLER[1].kesinti.yonetim) ---

    // kaynak: araclar/kaynak-defteri.md#1961-07-referandum
    { id: "1961-07-referandum", tur: "referandum", tarih: "1961-07-09",
      konu: "1961 Anayasası'nın kabulü",
      kayitli: null, kullanilan: null, gecerli: null,
      evet: null, hayir: null, karar: "kabul",
      tutumlar: [ { parti: "chp23", tutum: "evet" }, { parti: "ap", tutum: "evet" } ],
      not: "Milli Birlik Komitesi döneminde yapıldı; ülke geneli katılım yaklaşık %88, kabul oranı %61,7 oldu (TÜİK, 2008). 11 il 'hayır' oyu verdi; kesin sayılar bu turda bulunamadı." }
  ],

  hukumetler: [
    // --- dönem 0 (1923 – 1945) ---

    // kaynak: araclar/kaynak-defteri.md#hukumet-1
    { no: 1, basbakan: "İsmet İnönü", partiler: ["chp23"],
      baslangic: "1923-10-30", bitis: "1924-03-06", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-2
    { no: 2, basbakan: "İsmet İnönü", partiler: ["chp23"],
      baslangic: "1924-03-06", bitis: "1924-11-22", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-3
    { no: 3, basbakan: "Ali Fethi Okyar", partiler: ["chp23"],
      baslangic: "1924-11-22", bitis: "1925-03-03", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-4
    { no: 4, basbakan: "İsmet İnönü", partiler: ["chp23"],
      baslangic: "1925-03-03", bitis: "1927-11-01", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-5
    { no: 5, basbakan: "İsmet İnönü", partiler: ["chp23"],
      baslangic: "1927-11-01", bitis: "1930-09-27", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-6
    { no: 6, basbakan: "İsmet İnönü", partiler: ["chp23"],
      baslangic: "1930-09-27", bitis: "1931-05-04", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-7
    { no: 7, basbakan: "İsmet İnönü", partiler: ["chp23"],
      baslangic: "1931-05-04", bitis: "1935-03-01", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-8
    { no: 8, basbakan: "İsmet İnönü", partiler: ["chp23"],
      baslangic: "1935-03-01", bitis: "1937-11-01", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-9
    { no: 9, basbakan: "Celâl Bayar", partiler: ["chp23"],
      baslangic: "1937-11-01", bitis: "1938-11-11", tip: "tek-parti", bitisNedeni: "istifa",
      not: "Atatürk'ün ölümü üzerine istifa etti." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-10
    { no: 10, basbakan: "Celâl Bayar", partiler: ["chp23"],
      baslangic: "1938-11-11", bitis: "1939-01-25", tip: "tek-parti", bitisNedeni: "istifa",
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-11
    { no: 11, basbakan: "Refik Saydam", partiler: ["chp23"],
      baslangic: "1939-01-25", bitis: "1939-04-03", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-12
    { no: 12, basbakan: "Refik Saydam", partiler: ["chp23"],
      baslangic: "1939-04-03", bitis: "1942-07-09", tip: "tek-parti", bitisNedeni: "olum",
      not: "Başbakan Refik Saydam 8 Temmuz 1942'de görev başında vefat etti." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-13
    { no: 13, basbakan: "Şükrü Saraçoğlu", partiler: ["chp23"],
      baslangic: "1942-07-09", bitis: "1943-03-09", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-14
    { no: 14, basbakan: "Şükrü Saraçoğlu", partiler: ["chp23"],
      baslangic: "1943-03-09", bitis: "1946-08-07", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // --- dönem 1 (1946 – 1960) ---

    // kaynak: araclar/kaynak-defteri.md#hukumet-15
    { no: 15, basbakan: "Recep Peker", partiler: ["chp23"],
      baslangic: "1946-08-07", bitis: "1947-09-10", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-16
    { no: 16, basbakan: "Hasan Saka", partiler: ["chp23"],
      baslangic: "1947-09-10", bitis: "1948-06-10", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-17
    { no: 17, basbakan: "Hasan Saka", partiler: ["chp23"],
      baslangic: "1948-06-10", bitis: "1949-01-16", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-18
    { no: 18, basbakan: "Şemsettin Günaltay", partiler: ["chp23"],
      baslangic: "1949-01-16", bitis: "1950-05-22", tip: "tek-parti", bitisNedeni: "secim",
      not: "CHP'nin 14 Mayıs 1950 seçimini kaybetmesinin ardından iktidarı DP'ye devretti." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-19
    { no: 19, basbakan: "Adnan Menderes", partiler: ["dp46"],
      baslangic: "1950-05-22", bitis: "1951-03-09", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-20
    { no: 20, basbakan: "Adnan Menderes", partiler: ["dp46"],
      baslangic: "1951-03-09", bitis: "1954-05-17", tip: "tek-parti", bitisNedeni: "secim",
      not: "2 Mayıs 1954 seçiminde DP'nin yeniden kazanmasının ardından kabine yenilendi." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-21
    { no: 21, basbakan: "Adnan Menderes", partiler: ["dp46"],
      baslangic: "1954-05-17", bitis: "1955-12-09", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-22
    { no: 22, basbakan: "Adnan Menderes", partiler: ["dp46"],
      baslangic: "1955-12-09", bitis: "1957-11-25", tip: "tek-parti", bitisNedeni: "secim",
      not: "27 Ekim 1957 seçiminin ardından kabine yenilendi." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-23
    { no: 23, basbakan: "Adnan Menderes", partiler: ["dp46"],
      baslangic: "1957-11-25", bitis: "1960-05-27", tip: "tek-parti", bitisNedeni: "darbe",
      not: "27 Mayıs 1960 askerî darbesiyle görevden uzaklaştırıldı." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-24 (27 Mayıs 1960 kabı)
    { no: 24, basbakan: "Cemal Gürsel", partiler: [],
      baslangic: "1960-05-30", bitis: "1961-01-05", tip: "mbk", bitisNedeni: null,
      not: "Millî Birlik Komitesi döneminin ilk hükümeti." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-25 (27 Mayıs 1960 kabı)
    { no: 25, basbakan: "Cemal Gürsel", partiler: [],
      baslangic: "1961-01-05", bitis: "1961-11-20", tip: "mbk", bitisNedeni: null,
      not: "Millî Birlik Komitesi döneminin ikinci ve son hükümeti; 15 Ekim 1961 seçiminden sonra da bir süre görevde kaldı." }
  ]
};
