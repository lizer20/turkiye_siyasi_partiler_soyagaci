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
      sonuc: [ { parti: "dp46", oy: 4241393, sandalye: 408 }, { parti: "chp23", oy: 3176561, sandalye: 69 }, { parti: "mp48", oy: null, sandalye: 1 }, { ad: "Bağımsız", oy: null, sandalye: 9 } ],
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
      bolge: "17 il", sandalyeSayisi: null,
      sonuc: [],
      not: "1950 seçiminde birden fazla yerden seçilen ya da vefat eden milletvekillerinin yerine yapıldı; Bilecik'te DP kazandı. Dönemin basınında sandalye sayısı için üç farklı rivayet var (17 il/20 sandalye, 19 il/21 sandalye, 22 il/22 sandalye); resmî bir kaynakla (TBMM tutanağı ya da Resmî Gazete) kesinleştirilemediği için sandalye sayısı ve il bazında dağılım yazılmadı." },

    // kaynak: araclar/kaynak-defteri.md#1954-05-genel
    { id: "1954-05-genel", tur: "genel", tarih: "1954-05-02", tekParti: false,
      meclis: 541, kayitli: 10262063, kullanilan: 9095617, gecerli: null, baraj: null,
      sonuc: [ { parti: "dp46", oy: null, sandalye: 503 }, { parti: "chp23", oy: null, sandalye: 31 }, { ad: "Cumhuriyetçi Millet Partisi", oy: null, sandalye: 5 }, { ad: "Bağımsız", oy: null, sandalye: null } ],
      not: "DP ikinci seçimini de kazanarak iktidarını pekiştirdi. Bağımsızların kazandığı sandalye sayısı (TÜİK'e göre 503+31+5'ten geriye kalan 2, Yılmaz 2010'a göre 1) kaynaklar arasındaki DP sandalyesi uyuşmazlığı nedeniyle kesinleştirilemedi." },

    // kaynak: araclar/kaynak-defteri.md#1954-05-cb-tbmm
    { id: "1954-05-cb-tbmm", tur: "cb-tbmm", tarih: "1954-05-14",
      secilen: "Celâl Bayar", turSayisi: 1,
      not: "Bayar 2. kez seçildi (486/513 oy)." },

    // kaynak: araclar/kaynak-defteri.md#1957-10-genel
    { id: "1957-10-genel", tur: "genel", tarih: "1957-10-27", tekParti: false,
      meclis: 610, kayitli: 12078623, kullanilan: 9250949, gecerli: null, baraj: null,
      sonuc: [ { parti: "dp46", oy: null, sandalye: 424 }, { parti: "chp23", oy: null, sandalye: 178 }, { ad: "Cumhuriyetçi Millet Partisi", oy: null, sandalye: 4 }, { ad: "Hürriyet Partisi", oy: null, sandalye: 4 } ],
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
      not: "Milli Birlik Komitesi döneminde yapıldı; ülke geneli katılım yaklaşık %88, kabul oranı %61,7 oldu (TÜİK, 2008). 11 il 'hayır' oyu verdi; kesin sayılar bu turda bulunamadı." },

    // --- dönem 2 (1961 – 1971) ---

    // kaynak: araclar/kaynak-defteri.md#1961-10-genel
    { id: "1961-10-genel", tur: "genel", tarih: "1961-10-15", tekParti: false,
      meclis: 450, kayitli: 12925395, kullanilan: 10522716, gecerli: null, baraj: null,
      sonuc: [ { parti: "chp23", oy: 3724752, sandalye: 173 }, { parti: "ap", oy: 3527435, sandalye: 158 }, { parti: "ytp", oy: 1391934, sandalye: 65 }, { parti: "ckmp", oy: 1415390, sandalye: 54 }, { ad: "Bağımsız", oy: 81732, sandalye: 0 } ],
      not: "27 Mayıs sonrası ilk genel seçim; ilk kez nispi temsil (çevre barajlı d'Hondt) uygulandı. Hiçbir parti tek başına çoğunluk sağlayamadı, Cumhuriyet tarihinin ilk koalisyon dönemi bu seçimle başladı." },

    // kaynak: araclar/kaynak-defteri.md#1961-10-cb-tbmm
    { id: "1961-10-cb-tbmm", tur: "cb-tbmm", tarih: "1961-10-26",
      secilen: "Cemal Gürsel", turSayisi: 1,
      not: "1961 Anayasası'nın kabulünün ardından oluşan yeni TBMM'nin ortak toplantısında, tek aday olarak seçildi; rakip aday Ali Fuat Başgil, MBK baskısıyla adaylıktan çekilmişti." },

    // kaynak: araclar/kaynak-defteri.md#1963-11-yerel
    { id: "1963-11-yerel", tur: "yerel", tarih: "1963-11-17",
      olcu: "belediye-meclisi",
      kayitli: null, kullanilan: null, gecerli: null,
      sonuc: [],
      buyuksehir: {
        istanbul: { parti: "chp23", aday: "Haşim İşcan" }
      },
      not: "1961 Anayasası sonrası belediye başkanlarının ilk doğrudan halk oyuyla seçildiği yerel seçim. İstanbul'da en çok oyu alan AP adayı Nuri Eroğan, adaylık için öngörülen sürede kamu görevinden istifa etmediği gerekçesiyle YSK kararıyla diskalifiye edildi; ikinci sıradaki CHP adayı Haşim İşcan belediye başkanı sayıldı (Resmî Gazete, 13.12.1963). Ankara ve İzmir'in kazananı için resmî bir kaynak (YSK kararı/Resmî Gazete ilanı) bu turda bulunamadı, bu iki şehir kayda yazılmadı. Ülke geneli belediye meclisi oy sayısı bulunamadı." },

    // kaynak: araclar/kaynak-defteri.md#1965-10-genel
    { id: "1965-10-genel", tur: "genel", tarih: "1965-10-10", tekParti: false,
      meclis: 450, kayitli: 13679753, kullanilan: 9748678, gecerli: 9307563, baraj: null,
      sonuc: [ { parti: "ap", oy: 4921235, sandalye: 240 }, { parti: "chp23", oy: 2675785, sandalye: 134 }, { ad: "Millet Partisi", oy: 582704, sandalye: 31 }, { parti: "ytp", oy: 346514, sandalye: 19 }, { parti: "tip61", oy: 276101, sandalye: 14 }, { parti: "ckmp", oy: 208696, sandalye: 11 }, { ad: "Bağımsız", oy: 296528, sandalye: 1 } ],
      not: "Millî bakiye (ulusal artık) sistemiyle yapılan tek seçim. AP tek başına iktidara geldi; TİP ilk kez meclise girdi (14 sandalye + 1 senatörlük)." },

    // kaynak: araclar/kaynak-defteri.md#1966-03-cb-tbmm
    { id: "1966-03-cb-tbmm", tur: "cb-tbmm", tarih: "1966-03-28",
      secilen: "Cevdet Sunay", turSayisi: 1,
      not: "Cemal Gürsel'in sağlık nedeniyle görevi bırakmasının ardından, AP ve CHP'nin ortak desteğiyle 1. turda seçildi; CKMP lideri Alparslan Türkeş de aday oldu." },

    // kaynak: araclar/kaynak-defteri.md#1968-06-yerel
    { id: "1968-06-yerel", tur: "yerel", tarih: "1968-06-02",
      olcu: "belediye-meclisi",
      kayitli: null, kullanilan: null, gecerli: null,
      sonuc: [],
      not: "AP çoğu ilde kazandı. Basında ve akademik kaynaklarda İstanbul'da Fahri Atabey, Ankara'da Ekrem Barlas, İzmir'de (1963'teki görevini koruyarak) Osman Kibar'ın kazandığı geçiyor, ama bu turda resmî bir kaynak (YSK kararı/Resmî Gazete ilanı) bulunamadığı için büyükşehir alanı hiç yazılmadı. Aynı gün 5 ilde milletvekili ara seçimi de yapıldı. Ülke geneli belediye meclisi oy sayısı bulunamadı." },

    // kaynak: araclar/kaynak-defteri.md#1969-10-genel
    { id: "1969-10-genel", tur: "genel", tarih: "1969-10-12", tekParti: false,
      meclis: 450, kayitli: 14788552, kullanilan: 9516035, gecerli: null, baraj: null,
      sonuc: [ { parti: "ap", oy: 4229712, sandalye: 256 }, { parti: "chp23", oy: 2487006, sandalye: 143 }, { parti: "gp", oy: 597818, sandalye: 15 }, { ad: "Bağımsız", oy: 511023, sandalye: 13 }, { ad: "Türkiye Birlik Partisi", oy: 254695, sandalye: 8 }, { ad: "Millet Partisi", oy: 292961, sandalye: 6 }, { parti: "ytp", oy: 197929, sandalye: 6 }, { parti: "tip61", oy: 243631, sandalye: 2 }, { parti: "mhp69", oy: 275091, sandalye: 1 } ],
      not: "Cumhuriyet tarihinin en düşük katılımlı genel seçimi (%64,3). MHP ve Türkiye Birlik Partisi ilk kez meclise girdi; MHP'nin tek sandalyesi Alparslan Türkeş'e ait." }
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
      not: "Millî Birlik Komitesi döneminin ikinci ve son hükümeti; 15 Ekim 1961 seçiminden sonra da bir süre görevde kaldı." },

    // --- dönem 2 (1961 – 1971) ---

    // kaynak: araclar/kaynak-defteri.md#hukumet-26
    { no: 26, basbakan: "İsmet İnönü", partiler: ["chp23", "ap"],
      baslangic: "1961-11-20", bitis: "1962-06-25", tip: "koalisyon", bitisNedeni: null,
      not: "Cumhuriyet tarihinin ilk koalisyon hükümeti." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-27
    { no: 27, basbakan: "İsmet İnönü", partiler: ["chp23", "ckmp", "ytp"],
      baslangic: "1962-06-25", bitis: "1963-12-25", tip: "koalisyon", bitisNedeni: null,
      not: "İkinci İnönü koalisyonu; bağımsız milletvekillerinin de desteğiyle kuruldu." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-28
    { no: 28, basbakan: "İsmet İnönü", partiler: ["chp23"],
      baslangic: "1963-12-25", bitis: "1965-02-20", tip: "azinlik", bitisNedeni: null,
      not: "CHP azınlık hükümeti." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-29
    { no: 29, basbakan: "Suat Hayri Ürgüplü", partiler: ["ap", "ckmp", "ytp"],
      baslangic: "1965-02-20", bitis: "1965-10-27", tip: "koalisyon", bitisNedeni: "secim",
      not: "Partisiz senatör Ürgüplü başkanlığında AP, CKMP, YTP, Millet Partisi (soyağacında yok) ve bağımsızların katılımıyla kuruldu; 10 Ekim 1965 seçiminin ardından sona erdi." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-30
    { no: 30, basbakan: "Süleyman Demirel", partiler: ["ap"],
      baslangic: "1965-10-27", bitis: "1969-11-03", tip: "tek-parti", bitisNedeni: "secim",
      not: "12 Ekim 1969 seçiminin ardından kabine yenilendi." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-31
    { no: 31, basbakan: "Süleyman Demirel", partiler: ["ap"],
      baslangic: "1969-11-03", bitis: "1970-03-06", tip: "tek-parti", bitisNedeni: null,
      not: null },

    // kaynak: araclar/kaynak-defteri.md#hukumet-32
    { no: 32, basbakan: "Süleyman Demirel", partiler: ["ap"],
      baslangic: "1970-03-06", bitis: "1971-03-26", tip: "tek-parti", bitisNedeni: "muhtira",
      not: "12 Mart 1971 muhtırasının ardından görevden ayrıldı." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-33
    { no: 33, basbakan: "Nihat Erim", partiler: [],
      baslangic: "1971-03-26", bitis: "1971-12-11", tip: "partiluestu", bitisNedeni: null,
      not: "12 Mart muhtırası sonrası kurulan ilk partilerüstü (teknokrat ağırlıklı) hükümet." },

    // kaynak: araclar/kaynak-defteri.md#hukumet-34
    { no: 34, basbakan: "Nihat Erim", partiler: [],
      baslangic: "1971-12-11", bitis: "1972-05-22", tip: "partiluestu", bitisNedeni: null,
      not: "Aynı başbakanla, daha teknokrat ağırlıklı kadroyla yeniden kuruldu." }
  ]
};
