/* Sandık verisi: seçimler, referandumlar, hükümetler.
   Kurallar: docs/superpowers/specs/2026-09-11-sandik-design.md §5 ve §8.
   Her değerin kaynağı araclar/kaynak-defteri.md'dedir. null = doğrulanamadı (ekranda —). */
window.SANDIK = {
  secimler: [
    // --- dönem 0 (1923 – 1945) ---

    // kaynak: araclar/kaynak-defteri.md#1923-06-genel
    { id: "1923-06-genel", tur: "genel", tarih: "1923-06-01", tekParti: true,
      meclis: 287, kayitli: null, kullanilan: null, gecerli: null, baraj: null,
      sonuc: [ { parti: "chp23", oy: null, sandalye: 287 } ],
      not: "Seçim tarihi kaynaklarda yalnızca \"Haziran–Temmuz 1923\" olarak veriliyor (il il farklı günlerde, iki dereceli); gösterilen gün yaklaşıktır." },

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

    // kaynak: araclar/kaynak-defteri.md#1935-02-genel
    { id: "1935-02-genel", tur: "genel", tarih: "1935-02-08", tekParti: true,
      meclis: 399, kayitli: null, kullanilan: null, gecerli: null, baraj: null,
      sonuc: [ { parti: "chp23", oy: null, sandalye: 399 } ],
      not: null },

    // kaynak: araclar/kaynak-defteri.md#1935-03-cb-tbmm
    { id: "1935-03-cb-tbmm", tur: "cb-tbmm", tarih: "1935-03-01",
      secilen: "Mustafa Kemal Atatürk", turSayisi: 1,
      not: "Atatürk 4. ve son kez, tek aday, oybirliğiyle seçildi (386 oy)." },

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

    // kaynak: araclar/kaynak-defteri.md#1943-02-genel
    { id: "1943-02-genel", tur: "genel", tarih: "1943-02-28", tekParti: true,
      meclis: 455, kayitli: null, kullanilan: null, gecerli: null, baraj: null,
      sonuc: [ { parti: "chp23", oy: null, sandalye: 455 } ],
      not: "İkinci Dünya Savaşı'nın en yoğun döneminde yapılan, tek parti döneminin son genel seçimidir." },

    // kaynak: araclar/kaynak-defteri.md#1943-03-cb-tbmm
    { id: "1943-03-cb-tbmm", tur: "cb-tbmm", tarih: "1943-03-08",
      secilen: "İsmet İnönü", turSayisi: 1,
      not: "İnönü 3. kez, tek aday, oybirliğiyle seçildi (435 oy)." }
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
      not: null }
  ]
};
