# Kaynak defteri

Sitede gösterilmez. Her sayının hangi kaynaktan geldiğini kaydeder (spesifikasyon §8.3).
Birincil kaynak **[B]** ile işaretlenir. "hesaplandı" = resmî il tablosundan `araclar/topla.js` ile.

## Kaynak haritası

| Konu | Birincil (resmî) | İkinci kaynak | Erişim notu |
|---|---|---|---|
| Genel seçim 1923–2011 | TÜİK *Milletvekili Genel Seçimleri 1923–2011* — `https://www.ysk.gov.tr/doc/dosyalar/1923-2011-MVSecimleri-Tuik.pdf` | 1950–1999: TBMM seçim sorgusu `https://www5.tbmm.gov.tr/develop/owa/secim_sorgu.secimdeki_partiler?p_secim_yili=YYYY` (oy + %; sandalye yok) | PDF metin katmanlı; `pdftotext -layout -enc UTF-8`. Türkçe harfler bozuk (ş→ú, ğ→÷, İ→ø) **yalnızca çok sütunlu veri tablolarında** (Tablo 1, Tablo 23/24); önsöz, içindekiler ve Ek bölümleri (s. 259 dahil) düzgün UTF-8 ile çıkıyor. Rakamlar her durumda ASCII. Tablo 1 s.22, Tablo 2–3 s.23, il/parti sonuçları Tablo 23 (s.25–92, 1950–1977) ve Tablo 24 (s.93–258, 1983–2011), Ek-1 "Milletvekili Genel Seçimlerinin Yapıldığı Tarihler" s.259 (PDF sayfa numarası ≠ basılı sayfa numarası; içindekiler tablosundaki basılı numaraya göre ara). TÜİK 1961 öncesini arşiv taramasıyla derlemiş — o dönemde TBMM ikinci kaynak olarak zorunlu. WebFetch bağlantıyı zaman zaman sıfırlıyor; yeniden dene. Görev 1'de doğrulandı (2026-09-11): yerel kopya `C:/Users/Lizer/.claude/projects/C--Users-Lizer-Desktop-projects-siyasi-parti/c2b2a5af-348d-45d1-aacb-260f42e6e083/tool-results/webfetch-1789121603458-3nc85e.pdf`. |
| Genel seçim 2015–2023 | YSK kesin sonuç kararları (Resmî Gazete) | TÜİK/YSK istatistik yayınları | YSK seçim sayfaları JS kabuğu; doğrudan `ysk.gov.tr/doc/…` PDF'leri ve Resmî Gazete kullanılır. `acikveri.ysk.gov.tr` yoklamada bağlantıyı düşürdü (Görev 1: 3 deneme sonrası da erişilemedi — 2× ECONNRESET, 1× yalnızca JS kabuğu; bkz. Kayıtlar altında "Adım 3.1"). |
| Referandum | YSK Halkoylaması Arşivi `https://www.ysk.gov.tr/tr/halkoylamasi-arsivi/2648`; 1982: `…/doc/dosyalar/docs/1982Referandum/7-Kas%C4%B1m-1982-Halk-Oylamas%C4%B1.pdf` | Resmî Gazete ilanı / TÜİK | 1982 PDF'i il satırları içerir, Türkiye toplamı yok → `araclar/topla.js` ile toplanır ve ikinci kaynakla eşleştirilir. |
| Yerel seçim | YSK Mahalli İdareler Arşivi `https://www.ysk.gov.tr/tr/mahalli-idareler-genel-secimleri-arsivi/2650`; TÜİK mahalli idareler yayınları (örn. `…/doc/dosyalar/1989Mahalli-Tuik.pdf`) | Resmî Gazete | Arşiv sayfası JS kabuğu; doğrudan PDF adresleri arama ile bulunur. Belediye başkanlarının doğrudan halk oyuyla seçimi **17 Kasım 1963 yerel seçiminden itibaren** geçerli (Görev 1'de doğrulandı — bkz. Kayıtlar). |
| Hükümetler 1920–1995 | TBMM *Hükümetler, Programları ve Genel Kurul Görüşmeleri* cilt 1–8 (`acikerisim.tbmm.gov.tr`, `cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/…`, cilt 8: `https://www5.tbmm.gov.tr/yayinlar/hukumetler/hukumetler_cilt_8.pdf`) | TBMM *Koalisyon Hükümetleri, Koalisyon Protokolleri* `https://cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/Dosya/874b1bb8-73c2-4847-8d40-01866e87ca4a.pdf` | TBMM hükümetler HTML sayfası artık ana sayfaya yönleniyor (ölü). |
| Hükümetler 1995– | Cilt 9 bulundu (Görev 1, Adım 3.2): `acikerisim.tbmm.gov.tr/items/2305701f-7bde-4344-bfbe-4166743fe1e2`, 30 Ekim 1995 – 11 Ocak 1999 aralığını kapsıyor; bitstream: `acikerisim.tbmm.gov.tr/server/api/core/bitstreams/ed9cef72-34f2-44bc-9a66-e77e6c0aab99/content`. 1999 sonrası ciltler Görev'in ilgili veri adımında ayrıca aranmalı (bkz. Kayıtlar, Adım 3.2). | Akademik derleme "1923'ten 2018'e Türkiye'de Hükümet ve Bakanlıklar" | `hukumetler_cilt_9.pdf` adresi (www5 alan adında) yok (ana sayfaya yönleniyor); dosya `acikerisim.tbmm.gov.tr` üzerinde farklı bir adres yapısıyla duruyor. |
| TBMM CB seçimleri | TBMM tutanakları; TBMM *Cumhuriyet Dönemi Partiler–Seçimler–Beyannameler (1923–1980)* | Cumhurbaşkanlığı (tccb.gov.tr) | — |
| Karşılaştırma | Vikipedi (tr/en) | — | Hiçbir zaman tek ya da ikinci kaynak sayılmaz. |

## Doğrulanan iddialar

Bunlar spesifikasyon §8.5'te "hafızadan" olarak işaretlenmiş, Görev 1'de doğrulanan iddialardır.
Ayrıntılı kaynaklar için `## Kayıtlar` altındaki ilgili başlığa bakın.

1. **Refah Partisi'nin AYM kapatma kararının tarihi: 16 Ocak 1998** (ikincil kaynaklara göre Esas
   1997/1, Karar 1998/1; RG yayım tarihi 22 Şubat 1998) — DOĞRULANDI ([B] TBMM Tutanak Dergisi,
   Cilt 43, 44. Birleşim, 20.1.1998 + ikincil kaynaklar; ayrıntı: Kayıtlar).
2. **1960 ve 1980 `yonetim` aralıklarının bitiş tarihleri** (geçiş genel seçiminden bir gün önce):
   - 27 Mayıs 1960 kabı: geçiş seçimi 15 Ekim 1961 → `bit: "1961-10-14"` — DOĞRULANDI.
   - 12 Eylül 1980 kabı: geçiş seçimi 6 Kasım 1983 → `bit: "1983-11-05"` — DOĞRULANDI.
3. **MDP'nin 1983 genel seçiminde meclise girmesi** (71 sandalye, üçüncü parti) — DOĞRULANDI.
4. **Belediye başkanlarının ilk kez doğrudan halk oyuyla seçildiği seçim: 17 Kasım 1963 yerel
   seçimi** (307 sayılı Kanun, 1961 Anayasası'nın öngördüğü tek dereceli doğrudan seçim ilk kez
   bu seçimde uygulandı) — DOĞRULANDI.

## Kayıtlar

<!-- Şablon:
### 1999-04-genel
- [B] TÜİK 1923–2011, Tablo 24, s. N — erişim 2026-MM-GG
- TBMM seçim sorgusu p_secim_yili=1999 — erişim 2026-MM-GG
- Uyuşmazlık: (yoksa "yok")
-->

### Adım 2, madde 1 — Refah Partisi kapatma tarihi
- Sonuç: **16 Ocak 1998 (Cuma)**.
- **[B] T.B.M.M. Tutanak Dergisi, Cilt 43, 44. Birleşim, 20.1.1998 Salı** (Dönem 20, Yasama Yılı 3)
  — `https://cdn.tbmm.gov.tr/TbmmWeb/Tutanak20230120/20/3/44/6ac1c7c2-378e-4cdc-b9f2-03b26ca674ef.html`.
  Bu resmî TBMM tutanağında, kapatma kararından 4 gün sonraki genel kurul oturumunda Kayseri
  Milletvekili Abdullah Gül'ün konuşmasında geçen ifade: "Refah Partisinin, Anayasa Mahkemesi
  tarafından 16 Ocak 1998 Cuma günü kapatılmasıyla ilgili söz almış bulunuyorum." Tutanak resmî
  karar/esas numarasını içermiyor, yalnızca tarihi doğruluyor (iç tutarlılık kontrolü: 16 Ocak
  1998 gerçekten Cuma gününe denk geliyor).
- İkinci kaynak (tarih + esas/karar no. + RG tarihi için): hukukansiklopedisi.com/refah-partisi-kapatma-karari/
  (esas 1997/1, karar 1998/1, RG 22 Şubat 1998) + WebSearch ile toplanan 5 bağımsız haber kaynağı
  (yenisafak.com, milliyet.com.tr, hicrethaber.com, refahmedya.com, memurlar.net'in AYM'den
  doğrudan alıntısı: "[AYM, E.1997/1, K.1998/1, 16/1/1998]") — hepsi 16 Ocak 1998 tarihinde ve
  esas/karar numaralarında birleşiyor.
- Uyuşmazlık: hukukansiklopedisi.com sayfasının gövde metninde bir cümle "Karar, 9 Ocak 1998
  tarihinde verilmiş" diyor — aynı sayfanın başlığıyla, TBMM tutanağıyla ve bütün diğer
  kaynaklarla çelişiyor; tek ve iç tutarsız olduğu için dikkate alınmadı, 16 Ocak 1998 esas alındı.
- **Düzeltme turu 1 notu (2026-09-11):** İlk yoklamada AYM/Resmî Gazete'nin kendi sitelerine
  (`anayasa.gov.tr`, `kararlaryeni.anayasa.gov.tr`, `kararlarbilgibankasi.anayasa.gov.tr`,
  `resmigazete.gov.tr`) doğrudan erişilemediği için bu iddia yalnızca ikincil kaynaklarla işaretlenmişti.
  İkinci yoklamada TBMM'nin kendi tutanak arşivi (`cdn.tbmm.gov.tr`) üzerinden resmî bir kaynağa
  ulaşıldı; ayrıntılı deneme kaydı için `.superpowers/sdd/2026-09-11-sandik/task-1-report.md`
  içindeki "Düzeltme turu 1" bölümüne bakın.
- Erişim: 2026-09-11 (ilk yoklama); 2026-09-11 (düzeltme turu 1, TBMM tutanağı).

### Adım 2, madde 2 — 1960 ve 1980 `yonetim` aralıklarının geçiş seçimi tarihleri
- Sonuç: 27 Mayıs 1960 kabı → geçiş seçimi 15 Ekim 1961 → `bit = 1961-10-14`.
  12 Eylül 1980 kabı → geçiş seçimi 6 Kasım 1983 → `bit = 1983-11-05`.
- [B] TÜİK *Milletvekili Genel Seçimleri 1923–2011*, Ek-1 "Milletvekili Genel Seçimlerinin
  Yapıldığı Tarihler", s. 259 (basılı sayfa numarası; PDF'te `pdftotext -layout` tam metinde
  "10.Dönem  15 Ekim 1961" ve "16.Dönem  6 Kasım 1983" satırları okundu — bu bölüm garbled değil).
- TBMM seçim sorgusu `https://www5.tbmm.gov.tr/develop/owa/secim_sorgu.secimdeki_partiler?p_secim_yili=1961`
  — 15 Ekim 1961 tarihini doğruladı (parti dağılımında TÜİK Tablo 1'in 1961 satırıyla küçük bir
  uyuşmazlık var, bkz. aşağı; tarih kendisi uyuşuyor).
  6 Kasım 1983 için ikinci kaynak: YSK'nın resmi 1983 seçim sonuçları PDF'i (aşağıdaki madde 3 ile
  aynı belge) + WebSearch ile bulunan çok sayıda bağımsız kaynak (secim.star.com.tr,
  secim.aksam.com.tr, Vikipedi — Vikipedi tek başına sayılmadı, yalnızca çapraz kontrol).
- Uyuşmazlık: TÜİK Tablo 1'in 1961 satırı OCR/tablo hizalama sorunuyla "2 CHP, DP" giren parti
  sayısı gösteriyor gibi okunuyor; oysa hem TBMM seçim sorgusu hem tarihsel kayıt 1961'de 4 partinin
  (CHP, AP, CKMP, YTP) meclise girdiğini gösteriyor. Bu, `pdftotext -layout`'ın çok satırlı
  hücreleri yanlış hizalamasından kaynaklanıyor (Tablo 1, çok satırlı bir tablo); yalnızca **tarih**
  doğrulaması bu görevin kapsamında olduğundan parti dağılımı uyuşmazlığı burada çözülmedi — Görev
  2'de 1961 kaydı yazılırken Tablo 1 yerine Tablo 23 (il/parti sonuçları, s. 25-92) kullanılmalı.
- Erişim: 2026-09-11.

### Adım 2, madde 3 — MDP'nin 1983 genel seçiminde meclise girmesi
- Sonuç: Doğru. MDP, ANAP ve HP ile birlikte meclise giren 3 partiden biri; 71 sandalye, %23,27 oy,
  üçüncü sırada (ANAP 211/45,14%, HP 117/30,46%, MDP 71/23,27%).
- [B] TÜİK *Milletvekili Genel Seçimleri 1923–2011*, Tablo 1, s. 22 — `pdftotext -f 22 -l 22 -layout
  -enc UTF-8`, 1983 satırı: "3  ANAP, HP, MDP" (meclise giren siyasi parti sayısı ve isimleri).
- [B] YSK'nın resmi "6 KASIM 1983 MİLLETVEKİLİ GENEL SEÇİMİ SONUÇLARI" PDF'i
  (`https://www.ysk.gov.tr/doc/dosyalar/docs/1983MilletvekiliSecimi/1983_Secim_Sonuclari.pdf`,
  ilk WebFetch denemesi ECONNRESET verdi, ikinci deneme başarılı oldu ve dosya diske kaydedildi) —
  il il "MİLLİYETÇİ DEMOKRASİ PARTİSİ" (MDP) oy sütunu, MDP'nin ülke genelinde oy aldığını
  doğruluyor.
- Üçüncü çapraz kontrol: secim.star.com.tr/secim/6-kasim-1983-genel-secimleri,
  secim.aksam.com.tr/secim/6-kasim-1983-genel-secimleri (71 sandalye, %23,27).
- Uyuşmazlık: yok.
- Erişim: 2026-09-11.

### Adım 2, madde 4 — Belediye başkanlarının ilk kez doğrudan halk oyuyla seçimi
- Sonuç: 17 Kasım 1963 yerel seçimi — daha önce belediye meclisi tarafından seçilen belediye
  başkanları, bu seçimden itibaren doğrudan, tek dereceli genel oyla seçildi.
- [B] 307 sayılı "Belediye Kanununda değişiklik yapılmasına dair Kanun" — Kabul tarihi 19.7.1963,
  Resmî Gazete ile yayımı 27.7.1963, Sayı 11465. TBMM'nin resmi tutanak PDF'i:
  `https://www5.tbmm.gov.tr/tutanaklar/KANUNLAR_KARARLAR/kanuntbmmc046/kanuntbmmc046/kanuntbmmc04600307.pdf`
  (text katmanlı, doğrudan okundu). Alıntı: "Her iki seçim, serbest, eşit, gizli, tek dereceli
  genel oy... yapılır" (EK MADDE 1), önceki durumdan (belediye meclisi tarafından seçim) farkı
  açıkça ortaya koyuyor.
- İkinci kaynak: dergipark akademik makalesi "Sandıkta Bitmeyen Seçim: 17 Kasım 1963 İstanbul
  Belediye Başkanlığı Seçimi" (Uluslararası Anadolu Sosyal Bilimler Dergisi,
  `https://dergipark.org.tr/tr/pub/ulasbid/issue/64402/1025285`) — makale bu seçimi "belediye
  başkanının halk tarafından ilk defa doğrudan seçildiği seçim" olarak tanımlıyor.
- Uyuşmazlık: yok.
- Etki: `buyuksehir` alanı 17 Kasım 1963 yerel seçiminden itibaren yazılabilir; öncesinde (1963
  öncesi kayıtlarda) yazılmaz (tasarım §5.3 kuralının dayanağı artık doğrulanmış durumda).
- Erişim: 2026-09-11.

### Adım 3.1 — acikveri.ysk.gov.tr yoklaması
- 3 WebFetch denemesi yapıldı: ilk ikisinde `ECONNRESET`, üçüncüsünde sayfa yüklendi ama YSK'nın
  diğer arşiv sayfaları gibi yalnızca JS kabuğu döndü (`[](#page-top)` dışında içerik yok) — veri
  seti listesi/biçimi bu görevde tespit edilemedi.
- Sonuç: kaynak haritasına "Görev 1: 3 deneme sonrası da erişilemedi (2× ECONNRESET, 1× JS kabuğu)"
  notu eklendi. Sonraki veri görevlerinde tekrar denenebilir; birincil kaynak olarak
  `ysk.gov.tr/doc/dosyalar/…` PDF'leri ve Resmî Gazete kullanılmaya devam edilecek (kaynak
  haritasındaki mevcut plan değişmedi).
- Erişim: 2026-09-11.

### Adım 3.2 — 1995 sonrası hükümetler için TBMM ciltleri
- WebSearch `"Hükümetler Programları ve Genel Kurul Görüşmeleri" cilt 9`:
  - Cilt 9 bulundu: `acikerisim.tbmm.gov.tr/items/2305701f-7bde-4344-bfbe-4166743fe1e2`
    (bitstream: `acikerisim.tbmm.gov.tr/server/api/core/bitstreams/ed9cef72-34f2-44bc-9a66-e77e6c0aab99/content`),
    kapsadığı aralık: 30 Ekim 1995 – 11 Ocak 1999.
  - `www5.tbmm.gov.tr/yayinlar/hukumetler/hukumetler_cilt_9.pdf` adresi yok (brief'te zaten
    belirtilmişti); dosya yalnızca `acikerisim.tbmm.gov.tr` üzerinde farklı bir yapıda duruyor.
  - 1999 sonrasını (özellikle 2002– AKP dönemi) kapsayan bir sonraki cilt bu görevde
    doğrulanamadı — kaynak haritasına "Görev'in ilgili veri adımında ayrıca aranmalı" notu
    eklendi; ilgili dönem verisi toplanırken `acikerisim.tbmm.gov.tr` içinde arama yapılmalı.
- Sonuç: kaynak haritası güncellendi (bkz. yukarıdaki tablo, "Hükümetler 1995–" satırı).
- Erişim: 2026-09-11.

## Görev 9 — Dönem 0 (1923–1945)

**Hükümet `baslangic` ölçütü (ilk kayıtta seçildi, bütün dönemlerde aynı kullanılacak):**
TBMM'nin *Hükümetler, Programları ve Genel Kurul Görüşmeleri* cildinde verilen "hükümetin
kurulduğu tarih" (Bakanlar Kurulu'nun teşekkül edip yemin ettiği/göreve başladığı tarih)
kullanılıyor — bu tarih genelde Resmî Gazete yayım tarihinden birkaç gün önce olabiliyor,
ama TBMM cildi bu dönem için tek tutarlı, sayfa numarasıyla izlenebilir kaynak. Resmî Gazete
1923–1930 arası dönemde bazı hükümetler için taranabilir/erişilebilir değil.

### Ortak blok — 1923-1943 genel seçimleri (tek parti): envanter, tarihler, meclis büyüklüğü
Aşağıdaki 6 kayıt (`1923-06-genel`, `1927-09-genel`, `1931-04-genel`, `1935-02-genel`,
`1939-03-genel`, `1943-02-genel`) aynı kaynak kümesini paylaşıyor; ayrıntı bu blokta, her
kayıt için ayrı kısa başlık aşağıda.
- Sonuç: aday liste birebir doğrulandı — 1923, 1927, 1931, 1935, 1939, 1943; hepsinde tek
  parti CHP (Cumhuriyet Halk Fırkası/Partisi), sonuç tamamı CHP (`sandalye` = `meclis`).
- **[B] TÜİK *Milletvekili Genel Seçimleri 1923–2011*, Tablo 1 (PDF s. 22, basılı s. 4)** —
  `pdftotext -f 22 -l 22 -layout -enc UTF-8`: "1923 İki Dereceli Seçim Sistemi 1 CHP ... 1 CHP";
  aynı desen 1927, 1931, 1935, 1939, 1943 için tekrarlanıyor (ham metinde net, `-layout`
  hizalaması kayıyor ama `pdftotext -enc UTF-8` (layout'suz) ham akışta "1 CHP" / "1 CHP"
  çiftleri her yıl için ayrı ayrı doğrulandı).
- **[B] TÜİK Tablo 5 "Tek parti döneminde illerin çıkardığı milletvekili sayısı" (PDF s. 25,
  basılı s. 7)**, "Toplam" satırı: 1923=287, 1927=316, 1931=317, 1935=399, 1939=429, 1943=455.
- **İkinci kaynak (çapraz doğrulama):** Taner LÜLECİ, "İsmet İnönü'nün Cumhurbaşkanlığı
  Seçimleri", *Gazi Akademik Bakış*, Sayı 32, Cilt 16, Yaz 2023, s. 173–185
  (`dergipark.org.tr/tr/download/article-file/3212364`) — TBMM Zabıt Ceridesi'ne dayanarak
  her cumhurbaşkanlığı seçiminde toplam meclis üyesi sayısını da veriyor: 1927→316,
  1931→317, 1935→399, 1939→429, 1943→455 — TÜİK Tablo 5 ile birebir eşleşiyor (bağımsız
  çapraz doğrulama).
- Tarihler **[B] TÜİK Ek-1 "Milletvekili Genel Seçimlerinin Yapıldığı Tarihler" (PDF s. 277,
  basılı s. 259 — sayfa altbilgisi "259"; offset PDF=basılı+18 doğrulandı)**: sıralı liste
  (dönem numarası etiketleri `-layout`'ta kaymış ama tarihlerin kendi sırası bozulmamış):
  Mart 1920 (İlk Meclis) · Haziran–Temmuz 1923 · 2 Eylül 1927 · 25 Nisan 1931 · 8 Şubat 1935 ·
  26 Mart 1939 · 28 Şubat 1943 · 21 Temmuz 1946 · …
- **İkinci kaynak (tarihler):** Kenan OLGUN, "Türkiye'de Cumhuriyetin İlanından 1950'ye Genel
  Seçim Uygulamaları", *Atatürk Araştırma Merkezi Dergisi* (`atamdergi.gov.tr/tam-metin/99/tur`,
  ayrıca `dergipark.org.tr/tr/download/article-file/676405`) — 1927: "30 Temmuz-5 Ağustos
  arasında ikinci seçmen seçimleri, milletvekilliği seçimi 2-6 Eylül" (TÜİK'in "2 Eylül"ü bu
  aralığın ilk günü); 1931: "7-10 Nisan ikinci seçmen, milletvekili seçimi 25 Nisan" (TÜİK'le
  birebir); 1935: "8 Şubat 1935"; 1939: "26 Mart 1939"; 1943: "28 Şubat 1943" (hepsi TÜİK'le
  birebir eşleşiyor).
- **1923 istisnası:** her iki kaynak da (TÜİK Ek-1 ve Olgun/ATAM Dergisi) yalnızca
  "Haziran–Temmuz 1923" aralığını veriyor, tek gün yok — seçim il il farklı tarihlerde,
  iki dereceli olarak yapıldı (Wikipedia "28 Haziran 1923" diyor ama kural gereği Vikipedi
  kaynak sayılmıyor; bu iddiayı doğrulayan Vikipedi-dışı bir kaynak bulunamadı). Kayıtta
  `tarih:"1923-06-01"` kullanıldı (doğrulanan aralığın ilk ayının ilk günü, biçimsel bir
  yer tutucu) ve `not` alanında bu belirsizlik açıkça belirtildi.
- Uyuşmazlık: yok (1923 hariç, yukarıda açıklandı).
- Erişim: 2026-09-11.

### 1923-06-genel
- Bkz. yukarıdaki ortak blok. **Düzeltme turu 1 (2026-09-12):** `tarih` alanı `"1923-06"` olarak
  düzeltildi (önceki tur `"1923-06-01"` yazmıştı — kaynakta olmayan, inşa edilmiş bir gündü;
  kullanıcı kararıyla artık ay hassasiyetli tarih `"YYYY-AA"` biçiminde yazılabiliyor, bkz.
  `ortak.js#tarihYaz`). TÜİK Ek-1 ve Olgun/ATAM Dergisi yalnızca "Haziran–Temmuz 1923"
  aralığını veriyor, tek gün Vikipedi-dışı kaynakla doğrulanamadı.
- **`meclis:287` — ikinci kaynak (Düzeltme turu 1'de bizzat açılıp doğrulandı):**
  **[İkinci kaynak] TESAV (Toplumsal Ekonomik Siyasal Araştırmalar Vakfı), "TBMM ve
  Cumhuriyet Dönemlerinde Milletvekili ve Senatör Sayıları"**
  (`https://www.tesav.org.tr/wp-content/uploads/2020/02/tbmmvecumhuriyetdonemlerindemv.vesenatorsayilari.pdf`,
  indirilip `pdftotext -layout -enc UTF-8` ile okundu) — tablo satırı: "2. (1923 – 1927) 287"
  (TBMM'nin 2. Dönemi, 1923 seçimiyle kurulan meclis, 287 milletvekili). TÜİK Tablo 5'teki
  287 rakamıyla birebir eşleşiyor.
  Aynı tablo, dönem 0'daki diğer beş tek parti seçiminin `meclis` değerlerini de bağımsız
  olarak doğruluyor: "3. (1927–1931) 316", "4. (1931–1935) 317", "5. (1935–1939) 399",
  "6. (1939–1943) 424 + 5(*)" (toplam 429; sayfada (*) dipnotu açıklaması yok ama toplam
  TÜİK'in 429'uyla eşleşiyor), "7. (1943–1946) 455" — hepsi TÜİK Tablo 5 ve Lüleci (2023) ile
  üçüncü kez çapraz doğrulanmış oldu.
- Erişim (düzeltme turu 1): 2026-09-12.

### 1927-09-genel
- Bkz. yukarıdaki ortak blok. `tarih:"1927-09-02"` (TÜİK Ek-1; Olgun/ATAM: "milletvekilliği
  seçimi 2-6 Eylül" — TÜİK'in verdiği ilk gün). `meclis:316`.

### 1931-04-genel
- Bkz. yukarıdaki ortak blok. `tarih:"1931-04-25"` (TÜİK Ek-1 ve Olgun/ATAM birebir eşleşiyor:
  "milletvekili seçimi 25 Nisan"). `meclis:317`.

### 1935-02-genel
- Bkz. yukarıdaki ortak blok. `tarih:"1935-02-08"` (TÜİK Ek-1 ve Olgun/ATAM birebir eşleşiyor).
  `meclis:399`.

### 1939-03-genel
- Bkz. yukarıdaki ortak blok. `tarih:"1939-03-26"` (TÜİK Ek-1 ve Olgun/ATAM birebir eşleşiyor).
  `meclis:429`.

### 1943-02-genel
- Bkz. yukarıdaki ortak blok. `tarih:"1943-02-28"` (TÜİK Ek-1 ve Olgun/ATAM birebir eşleşiyor).
  `meclis:455`. Lüleci (2023): "Bu seçim, Türkiye'nin tek partili son seçimidir."

### Ortak blok — 1923-1943 TBMM cumhurbaşkanlığı seçimleri (cb-tbmm)
Aşağıdaki 7 kayıt (`1923-10-cb-tbmm`, `1927-11-cb-tbmm`, `1931-05-cb-tbmm`, `1935-03-cb-tbmm`,
`1938-11-cb-tbmm`, `1939-04-cb-tbmm`, `1943-03-cb-tbmm`) aynı kaynak kümesini paylaşıyor;
ayrıntı bu blokta, her kayıt için ayrı kısa başlık aşağıda.
- Sonuç: dönem 0'da 7 kayıt — 29.10.1923 (Mustafa Kemal Paşa, kurucu), 01.11.1927 (Atatürk,
  2. kez), 04.05.1931 (Atatürk, 3. kez), 01.03.1935 (Atatürk, 4. ve son kez), 11.11.1938
  (İsmet İnönü, Atatürk'ün ölümü üzerine, olağanüstü), 03.04.1939 (İnönü, 2. kez), 08.03.1943
  (İnönü, 3. kez). Hepsi 1. turda, tek adayla, oybirliğiyle sonuçlandı.
- **[B] TBMM Zabıt Ceridesi**, Taner LÜLECİ'nin "İsmet İnönü'nün Cumhurbaşkanlığı Seçimleri"
  (*Gazi Akademik Bakış*, Sayı 32/Cilt 16, Yaz 2023, s. 173–185,
  `dergipark.org.tr/tr/download/article-file/3212364`) makalesinde doğrudan alıntılanan ZC
  sayfa referanslarıyla:
  - 29 Ekim 1923: TBMM ZC Devre II, Cilt 3, 29 Teşrinievvel 1339 Pazartesi — "333 milletvekilinden
    158'i geldi... oy kullanan 158 milletvekilinin tamamının oyunu alarak Cumhurbaşkanı seçilmiştir".
  - 1 Kasım 1927: TBMM ZC Cilt 1, İnikat 1, 1 Teşrinisani 1927 Salı — "316 milletvekilinden
    seçime katılan 288'inin tamamının oyunu alarak 1. turda ikinci defa".
  - 4 Mayıs 1931: TBMM ZC Devre IV, Fevkalade İçtima, Cilt 1, İnikat 1, s.6 — "317
    milletvekilinden seçime katılan 289'unun tamamının oyunu alarak 1. turda üçüncü defa".
  - 1 Mart 1935: TBMM ZC Devre I, Cilt 1, Fevkalade İçtima, s.3-4 — "399 milletvekilinden
    seçime katılan 386'sının tamamının oyunu alarak 1. turda dördüncü ve son defa".
  - 11 Kasım 1938 (Cuma, saat 11.12–11.45): TBMM ZC Devre V, Cilt 27, İçtima 4, s.16-18 —
    Atatürk'ün 10.11.1938 vefatı üzerine olağanüstü toplanan Meclis'te "348 arkadaş
    iştirak etmiştir. 348 reyle ve müttefikan Malatya mebusu İsmet İnönü Reis-i cumhur
    intihâb edilmiştir" (1. tur).
  - 3 Nisan 1939 (Pazartesi): TBMM ZC Devre VI, İçtima F., Cilt 1, İnikat 1 (3.4.1939),
    s.2-4 — "429 milletvekilinden reye iştirak eden 413'dür, 413 reyle ve müttefikan Ankara
    mebusu İsmet İnönü (1. turda) Reis-i cumhur seçilmiştir".
  - 8 Mart 1943 (Pazartesi): TBMM ZC Devre VII, İçtima F., Cilt 1, İnikat 1 (8.3.1943),
    s.1-4 — "455 vekilden seçime iştirak eden 435 milletvekilinin tamamının oyunu alarak
    müttefikan Reis-i cumhur seçilmiş" (3. kez, 1. tur).
- **İkinci kaynak:** Anadolu Ajansı, "1923'ten günümüze Cumhurbaşkanı seçimleri"
  (`aa.com.tr/tr/turkiye/1923-ten-gunumuze-cumhurbaskani-secimleri/134629`) — tarih, kişi,
  oy sayısı ve tur bilgisi bütün 7 kayıt için TBMM ZC alıntılarıyla birebir eşleşiyor (158,
  288, 289, 386, 348, 413, 435 oyları; hepsi 1. tur).
- **Ek çapraz doğrulama:** T.C. Cumhurbaşkanlığı resmî sitesi (tccb.gov.tr, sertifika hatası
  nedeniyle `curl -k` ile erişildi) Atatürk biyografisinde "29 Ekim 1923 günü ... Mustafa
  Kemal de oybirliğiyle ilk Cumhurbaşkanı seçildi" ve "1938'deki ölümüne dek arka arkaya
  dört kez cumhurbaşkanı seçilen Atatürk" ifadeleriyle 1923 tarihini ve toplam 4 seçim
  sayısını (1923/1927/1931/1935) doğruluyor.
- Uyuşmazlık: yok.
- Erişim: 2026-09-11.

### 1923-10-cb-tbmm
- Bkz. yukarıdaki ortak blok. 29 Ekim 1923, Mustafa Kemal Paşa, kurucu CB, 1. tur, 158/333 oy.

### 1927-11-cb-tbmm
- Bkz. yukarıdaki ortak blok. 1 Kasım 1927, Atatürk 2. kez, 1. tur, 288/316 oy.

### 1931-05-cb-tbmm
- Bkz. yukarıdaki ortak blok. 4 Mayıs 1931, Atatürk 3. kez, 1. tur, 289/317 oy.

### 1935-03-cb-tbmm
- Bkz. yukarıdaki ortak blok. 1 Mart 1935, Atatürk 4. ve son kez, 1. tur, 386/399 oy.

### 1938-11-cb-tbmm
- Bkz. yukarıdaki ortak blok. 11 Kasım 1938, İsmet İnönü (Atatürk'ün 10.11.1938 ölümü üzerine
  olağanüstü toplantı), 1. tur, 348 oy (oybirliği).

### 1939-04-cb-tbmm
- Bkz. yukarıdaki ortak blok. 3 Nisan 1939, İnönü 2. kez, 1. tur, 413/429 oy.

### 1943-03-cb-tbmm
- Bkz. yukarıdaki ortak blok. 8 Mart 1943, İnönü 3. kez, 1. tur, 435/455 oy.

### Ara seçimler (1923–1945) — envanter sonucu: kayıt bulunamadı
- TBMM'nin resmi *Cumhuriyet Dönemi Partiler-Seçimler-Beyannameler (1923-1980)* yayını
  (`cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/Dosya/ed1d2982-f225-4467-a4ab-707f4cc471dc.pdf`, tam metin
  `pdftotext -layout` ile çıkarıldı, 58856 satır) yalnızca toplu bir rakam veriyor: "TBMM 2.
  Dönem (1923-1927) boyunca 20 vekil istifa etti, 2 vekilin vekilliği düşürüldü, 25 vekil
  öldü (6'sı idam); boşalan 47 koltuk için ara seçimler yapıldı" — tarihsiz, toplu bir sayı.
- WebSearch ile tek tek yıl aranan sorgular ("1931 ara seçimi", "1933 ara seçimi", "1937 ara
  seçimi", "1941 ara seçimi" TBMM milletvekili) tarihli, ikinci kaynakla doğrulanabilir tek
  bir ara seçim kaydına ulaşmadı.
- Sonuç: dönem 0 için kaynaktan doğrulanabilir, tarihli bir ara seçim kaydı **bulunamadı**.
  Tek parti dönemi iki dereceli seçim sisteminde boşalan koltuklar dönem içi tamamlama
  seçimleriyle dolduruluyordu ama bunlar münferit, rekabetsiz (tek aday) işlemlerdi ve
  erişilebilir ikincil kaynaklarda tarihleriyle derlenmiş halde bulunamadı. `veri/sandik.js`'e
  dönem 0 için ara seçim kaydı eklenmedi.
- Erişim: 2026-09-11.

### Ortak blok — Hükümetler 1923–1946 (no. 1–14, dönem 0 bandına düşenler)
Aşağıdaki 14 hükümet kaydı (`hukumet-1`..`hukumet-14`) aynı kaynak kümesini paylaşıyor;
ayrıntı bu blokta, her kayıt için ayrı kısa başlık aşağıda.
- **[B] TBMM Başkanlığı Yayınları, *Hükümetler, Programları ve Genel Kurul Görüşmeleri*,
  Cilt 1 (24 Nisan 1920 – 22 Mayıs 1950)**, hazırlayanlar Dr. İrfan Neziroğlu ve Dr. Tuncer
  Yılmaz — `https://cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/Dosya/c52e0723-d073-4331-8a8a-01866e8f1b30.pdf`
  (indirilip `pdftotext -layout -enc UTF-8` ile tam metne çevrildi, 34572 satır). İçindekiler
  bölümü "CUMHURİYET HÜKÜMETLERİ" başlığı altında resmî sıra numarası, başbakan/hükümet adı
  ve başlangıç–bitiş tarihlerini veriyor:
  1. I. İnönü Hükümeti (30.10.1923-06.03.1924)
  2. II. İnönü Hükümeti (06.03.1924-22.11.1924)
  3. Okyar Hükümeti [Ali Fethi Okyar] (22.11.1924-03.03.1925)
  4. III. İnönü Hükümeti (03.03.1925-01.11.1927)
  5. IV. İnönü Hükümeti (01.11.1927-27.09.1930)
  6. V. İnönü Hükümeti (27.09.1930-04.05.1931)
  7. VI. İnönü Hükümeti (04.05.1931-01.03.1935)
  8. VII. İnönü Hükümeti (01.03.1935-01.11.1937)
  9. I. Bayar Hükümeti [Celâl Bayar] (01.11.1937-11.11.1938)
  10. II. Bayar Hükümeti (11.11.1938-25.01.1939)
  11. I. Saydam Hükümeti [Refik Saydam] (25.01.1939-03.04.1939)
  12. II. Saydam Hükümeti (03.04.1939-09.07.1942)
  13. I. Saraçoğlu Hükümeti [Şükrü Saraçoğlu] (09.07.1942-09.03.1943)
  14. II. Saraçoğlu Hükümeti (09.03.1943-07.08.1946) — `baslangic` dönem 0 bandına düşüyor
      (1923–1945), `bitis` dönem 1'e taşıyor; kayıt dönem 0'da tutuldu (spesifikasyon §6.3:
      bant yerleşimi `baslangic`'e göre).
  Bütün tarihler 1923-1943 genel seçim ve CB seçimi tarihleriyle iç tutarlı: hükümet
  başlangıçları CB seçim tarihleriyle (1.11.1927, 4.5.1931, 1.3.1935, 3.4.1939, 8.3.1943 —
  bir gün farkla 9.3.1943) örtüşüyor.
- **İkinci kaynak (hükümet tipi çapraz doğrulama):** Özhan DEMİRKOL, "1923'ten 2018'e
  Türkiye'de Hükümet ve Bakanlıklar", *Fiscaoeconomia*, 7(1), 2023, s. 365-390
  (`dergipark.org.tr/tr/download/article-file/2660114`) — Tablo 2: "Tek Parti: 18 Hükümet"
  (1923-1950 arası tek parti dönemi hükümetlerinin toplam sayısı) — dönem 0'daki 14 kayıt bu
  18'in içinde, `tip:"tek-parti"` sınıflamasını doğruluyor.
- **`bitisNedeni` — yalnızca doğrulanabilenler dolduruldu, gerisi `null`:**
  - **no. 9 → "istifa"**: Demirkol (2023), s. 540 civarı — "1938'de Cumhuriyet Halk Partisi
    (CHP) lideri ve Cumhurbaşkanı Mustafa Kemal Atatürk'ün ölümü sonrasında Celal Bayar
    Başbakanlığındaki 9. Hükümet istifasını sunmuştur."
  - **no. 10 → "istifa"**: Taner LÜLECİ (2023, yukarıda CB seçimleri kaydında tam künye) —
    "Parti divanı 24 Ocak 1939 tarihli toplantısında seçimleri yenileme kararı aldı. 25
    Ocak'ta Celal Bayar hükümeti istifa etti. Yerine Dr. Refik Saydam hükümeti kuruldu."
  - **no. 12 → "olum"**: Başbakan Dr. Refik Saydam 8 Temmuz 1942'de (hükümetin resmî bitiş
    tarihi 9.7.1942 ile bir gün farkla tutarlı) kalp krizinden İstanbul'da vefat etti.
    [B] `ataturkansiklopedisi.gov.tr/detay/738/İbrahim-Refik-Saydam-(1881-1942)` (Atatürk
    Kültür, Dil ve Tarih Yüksek Kurumu — resmî/akademik ansiklopedi) + ikinci kaynak
    Darüşşafaka Cemiyeti, "Dr. Refik Saydam'ın Darüşşafaka Sevgisi ve 8 Temmuz 1942'deki
    Vefatı" (`darussafaka.org/hakkimizda/cemiyet/tarihimizde-bu-ay/temmuz/...`) — ikisi de
    8 Temmuz 1942, kalp krizi/ani rahatsızlık üzerinde birleşiyor.
  - **no. 1-8, 11, 13, 14 → `null`**: bu araştırma turunda ikinci kaynakla doğrulanabilir,
    spesifik bir bitiş nedeni bulunamadı (genel tarihsel bilgi olarak dönem içi Parti Divanı
    kararları/CB döneminin başlangıcı gibi nedenler akla yatkın ama tek bir açık ifadeyle
    doğrulanamadı; hafızadan doldurulmadı).
- **`baslangic` ölçütü kararı (bu görevde seçildi, sonraki dönemlerde de kullanılacak):**
  TBMM cildindeki "hükümetin resmen kurulduğu/göreve başladığı tarih" kullanılıyor
  (Resmî Gazete yayım tarihi değil) — 1920'ler-1940'lar için Resmî Gazete'nin bu ayrıntı
  düzeyinde bu ortamdan taranabilir/erişilebilir olmaması ve TBMM cildinin tek, sayfa
  numarasıyla izlenebilir, tutarlı bir kaynak sunması nedeniyle.
- Uyuşmazlık: yok.
- Erişim: 2026-09-11.

### 1930-10-yerel
- Tek parti dönemi ilk ülke geneli belediye meclisi seçimi.
- Sonuç: 5 Ekim 1930 Pazar günü başladı (bazı bölgelerde 18 Ekim'e kadar sürdü); 1930 tarihli,
  3 Nisan 1930 kabul edilen 1580 sayılı Belediye Kanunu'nun getirdiği, Cumhuriyet tarihinin ilk
  tek dereceli (doğrudan) belediye meclisi seçimi — kadınlar da ilk kez oy kullandı. Ülke
  genelinde yapıldı; Serbest Cumhuriyet Fırkası'nın (kuruluşu Ağustos 1930) tek katıldığı genel
  nitelikli seçim olması nedeniyle CHF-SCF arasında gerçek bir yarışma oldu.
- **[B] Ahmet GÜLEN, "1930 İstanbul Belediye Seçimleri", *Atatürk Araştırma Merkezi Dergisi*,
  Mayıs 2023, Cilt XXXIX, Sayı 107 (`atamdergi.gov.tr/tam-metin/1095/tur`)** — "İstanbul
  belediye seçimleri 5 Ekim 1930 Pazar günü başlamıştır... kullanılan oy sayısı 49.204'tür...
  CHF'nin aldığı 35.934 oyuna karşılık SCF 12.813 oy almıştır" (İstanbul'a özgü rakamlar;
  makale seçimin ülke genelinde yapıldığını, ama ayrıntılı sonuçları yalnızca İstanbul için
  verdiğini belirtiyor). Aynı makale: "İstanbullu seçmenler birden fazla partinin yer alacağı
  bir sonraki seçimi ancak 1945 yılı sonrasında görebilecektir" — 1934/1938/1942
  seçimlerinin (aşağıya bakın) tek parti (yalnız CHP) ile yapıldığını dolaylı doğruluyor.
- **İkinci kaynak (serinin varlığı):** [Niğde Ömer Halisdemir Üniversitesi Sosyal Bilimler
  Enstitüsü Dergisi, "Burdur Vilayeti'nde 1934 Belediye Seçimleri"]
  (`dergipark.org.tr/tr/pub/nohusosbil/article/1818045`) — "Tek parti döneminin siyasal
  sürecinde gerçekleştirilen 1934 belediye seçimleri, Türkiye Cumhuriyeti tarihinin **ikinci**
  yerel seçimleri" ifadesiyle 1930'un ilk olduğunu doğruluyor; kaynakçasında Üste, R. B.
  (2006), *Tek Partili Dönemde Yerel Seçimler 1930-1934-1938-1942* (yüksek lisans tezi)
  referansı, dört seçimlik serinin (1930/1934/1938/1942) akademik literatürde kabul edilmiş
  bir envanter olduğunu gösteriyor.
- **Ülke geneli oy sayısı:** bulunamadı — resmî bir kaynakta 502 seçim çevresinin tam il/ilçe
  tablosu bu görevde erişilemedi, bu yüzden `araclar/topla.js` ile hesaplama da yapılamadı.
  `sonuc: []`, `kayitli`/`kullanilan`/`gecerli`: `null` (spesifikasyon §5.3, 1963 öncesi
  kuralı). İstanbul'a özgü rakam (CHF 35.934, SCF 12.813) `not` alanında bilgi olarak
  aktarıldı; `buyuksehir` alanı yazılmadı (1930'da İstanbul belediye başkanı atamayla
  geliyordu — doğrudan seçim yok, Görev 1'de doğrulanan 1963 kuralı).
- Uyuşmazlık: yok.
- Erişim: 2026-09-11.

### 1934-10-yerel, 1938-10-yerel, 1942-10-yerel
**Düzeltme turu 1 (2026-09-12) — odaklı arama turu sonucu BULUNDU ve eklendi.** Önceki turda
(2026-09-11) bu üç seçimin varlığı doğrulanmış ama gün/ay düzeyinde kesin tarih Vikipedi dışı
iki kaynakla doğrulanamamıştı; kullanıcı kararıyla artık `tarih` alanı `"YYYY-AA"` (ay
hassasiyetli) yazılabildiğinden bu engel kalktı ve aşağıdaki kaynakla ay düzeyinde tarih
bulundu.

- **[B] Ayşe (Rabia) Bahar ÜSTE, "Yerel Seçimlerin Cinsiyeti: Seçimler ve Kadın Temsili",
  *Dokuz Eylül Üniversitesi İşletme Fakültesi Dergisi***
  (`https://dergipark.org.tr/tr/download/article-file/312360`, `pdftotext -layout -enc UTF-8`
  ile okundu) — dönemin gazetelerine dayanarak (Cumhuriyet, Ulus, Anadolu, Halkın Sesi,
  Hakimiyet-i Milliye, Son Posta, Yeni Sabah, Tan; her alıntının gazete adı ve tarihi
  dipnotlarda) üç seçimin de ülke geneli zaman aralığını veriyor:
  - **1934:** "Tüm yurtta 2 Ekim 1934 günü başlayan seçimler, çeşitli tarihlerde
    sonuçlanmış, İzmir seçimleri 10 Ekim 1934 günü bitmiştir." → `tarih:"1934-10"`.
  - **1938:** "1938 yerel seçimleri tüm yurtta Ekim ayının ilk haftası başlamıştır. Ankara'da
    29 Eylül 1938 günü başlayan seçimler, 8 Ekim 1938 tarihinde tamamlanmıştır... İstanbul'da
    seçimler 1 Ekim tarihinde başlamış ve 10 Ekim 1938 tarihinde tamamlanmıştır." →
    `tarih:"1938-10"` (Ankara'nın 29 Eylül'de başlaması `not` alanında belirtildi).
  - **1942:** "İstanbul'da seçimler 1 Ekim'de başlamış ve 11 Ekim 1942 tarihinde
    sonuçlanmıştır." (Ankara ve İzmir için de Eylül sonu-Ekim ortası benzer takvim) →
    `tarih:"1942-10"`.
- **İkinci kaynak/çapraz doğrulama (1934 için):** "1934 Yılı Amasya Vilayeti Belediye Meclisi
  Seçimleri" (dergipark, `egitimvetoplum`, `article/1814471`) — "18 Ekim 1934 tarihli
  belediye meclisi toplantısında Amasya Belediye Başkanlığına seçildi" ifadesi, meclis
  üyelerinin bu tarihte zaten göreve başlamış olduğunu, dolayısıyla seçimin Ekim 1934 içinde
  tamamlandığını doğruluyor.
- **Ülke geneli oy sayısı hiçbirinde bulunamadı** → `sonuc: []`, `kayitli`/`kullanilan`/
  `gecerli`: `null` (1930 kaydıyla aynı kural, spesifikasyon §5.3). `buyuksehir` yazılmadı
  (1963 öncesi kuralı, Görev 1'de doğrulandı).
- Uyuşmazlık: yok (üç seçim de aynı kaynakta tutarlı; İstanbul'un her yıl 1 Ekim'de
  başlaması ve 10-11 Ekim'de bitmesi düzenli bir örüntü oluşturuyor, 1930'un 5-18 Ekim'i ile
  de uyumlu).
- Erişim: 2026-09-12.

### hukumet-1
Bkz. yukarıdaki ortak blok. I. İnönü Hükümeti, 30.10.1923-06.03.1924, tip: tek-parti.

### hukumet-2
Bkz. yukarıdaki ortak blok. II. İnönü Hükümeti, 06.03.1924-22.11.1924, tip: tek-parti.

### hukumet-3
Bkz. yukarıdaki ortak blok. Okyar Hükümeti (Ali Fethi Okyar), 22.11.1924-03.03.1925,
tip: tek-parti.

### hukumet-4
Bkz. yukarıdaki ortak blok. III. İnönü Hükümeti, 03.03.1925-01.11.1927, tip: tek-parti.

### hukumet-5
Bkz. yukarıdaki ortak blok. IV. İnönü Hükümeti, 01.11.1927-27.09.1930, tip: tek-parti.

### hukumet-6
Bkz. yukarıdaki ortak blok. V. İnönü Hükümeti, 27.09.1930-04.05.1931, tip: tek-parti.

### hukumet-7
Bkz. yukarıdaki ortak blok. VI. İnönü Hükümeti, 04.05.1931-01.03.1935, tip: tek-parti.

### hukumet-8
Bkz. yukarıdaki ortak blok. VII. İnönü Hükümeti, 01.03.1935-01.11.1937, tip: tek-parti.

### hukumet-9
Bkz. yukarıdaki ortak blok. I. Bayar Hükümeti (Celâl Bayar), 01.11.1937-11.11.1938,
tip: tek-parti, bitisNedeni: istifa (Demirkol 2023).

### hukumet-10
Bkz. yukarıdaki ortak blok. II. Bayar Hükümeti, 11.11.1938-25.01.1939, tip: tek-parti,
bitisNedeni: istifa (Lüleci 2023: "25 Ocak'ta Celal Bayar hükümeti istifa etti").

### hukumet-11
Bkz. yukarıdaki ortak blok. I. Saydam Hükümeti (Refik Saydam), 25.01.1939-03.04.1939,
tip: tek-parti.

### hukumet-12
Bkz. yukarıdaki ortak blok. II. Saydam Hükümeti, 03.04.1939-09.07.1942, tip: tek-parti,
bitisNedeni: olum (Refik Saydam 8 Temmuz 1942'de görev başında vefat etti —
ataturkansiklopedisi.gov.tr + darussafaka.org).

### hukumet-13
Bkz. yukarıdaki ortak blok. I. Saraçoğlu Hükümeti (Şükrü Saraçoğlu), 09.07.1942-09.03.1943,
tip: tek-parti.

### hukumet-14
Bkz. yukarıdaki ortak blok. II. Saraçoğlu Hükümeti, 09.03.1943-07.08.1946, tip: tek-parti.
`baslangic` dönem 0 bandına (1923-1945) düşüyor, `bitis` dönem 1'e taşıyor.

### Adım 3.3 — Güncellik: 2026-09-11 sonrası seçim/referandum ilanı var mı?
- WebSearch `YSK 2026 seçim takvimi halkoylaması referandum`.
- Sonuç: Yeni bir referandum ya da erken genel/CB seçimi ilanına rastlanmadı. Bulunan tek yakın
  tarihli olay, spesifikasyon §8.5'te zaten kapsam dışı olarak işaretlenmiş 7 Haziran 2026 yerel
  ara seçimiydi (bu görev bunu yeniden doğruladı, yeni bir bulgu değil). Olağan genel/CB seçim
  takvimi (2028) ve referandum yasal usulü (kabul kanununun RG yayımından 60 gün sonraki ilk
  Pazar) hakkında genel bilgi dışında 2026-09-11 sonrasına dair somut bir ilan bulunamadı.
- Erişim: 2026-09-11.
