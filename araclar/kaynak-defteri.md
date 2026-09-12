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

## Görev 9 — Dönem 1 (1946–1960) ve 27 Mayıs 1960 kabı

**Düzeltme turu 1 (2026-09-12) — yeni eşleşme kuralı (kullanıcı kararı):** İki kaynak aynı sayıyı
birebir vermiyorsa: birincil resmî kaynağın sayısı yazılır; ikinci kaynakla fark **%0,5'e kadarsa**
"eşleşti" sayılır ve fark deftere "Uyuşmazlık: X vs Y (%Z)" diye yazılır. Fark **%0,5'ten büyükse
sayı `null` olur**. Bu kural aşağıdaki bütün kayıtlara yeniden uygulandı; ayrıntı her kaydın kendi
başlığında ve bu turun sonundaki "Düzeltme turu 1" özetinde.

**Not (ilk turdan, düzeltme turu 1'de genişletildi):** TÜİK *Milletvekili Genel Seçimleri
1923–2011* Tablo 23 (s. 25, PDF s. 43), "TÜRKİYE" ulusal toplam sayfası, 1950/1954/1957 için
partilerin oy sayısını "Not.1"e göre **ortalama oy sayısı** (seçime katılan adayların toplam
oyunun aday sayısına bölünmesiyle) veriyor, gerçek toplam oy değil — bu, TÜİK'in kendi dipnotunda
**üç yıl için birden** (yalnızca 1950 için değil) açıkça belirtiliyor. İlk turda 1954 ve 1957 için
akademik atıfların (Yılmaz 2010, Özdurğun 2021) TÜİK'le birebir eşleştiği düşünülerek TÜİK
kullanılmıştı; **düzeltme turu 1'de bu atıfların aslında TÜİK'i doğrudan kaynak göstererek
aktardığı** (Özdurğun 2021: "Kaynak: TÜİK"; Yılmaz 2010: Tuncer/TESAV'a atfen ama sayı TÜİK'le
birebir) fark edildi — yani bunlar TÜİK'ten **bağımsız bir ikinci ölçüm değil**, TÜİK'in kendi
tekrarı. Buna karşılık TBMM seçim sorgusu (`secim_sorgu.secimdeki_partiler`), 1950/1954/1957'nin
üçünde de TÜİK'ten sistematik olarak **%1-10 arası düşük** rakamlar veriyor — bu, TÜİK'in
"ortalama oy" yönteminin üç yılda da (yalnızca 1950'de değil) geçerli olmasıyla tutarlı. Yeni
%0,5 eşiği bu iki kaynak grubuna uygulanınca: **1950 DP/CHP** için TBMM ile bağımsız bir üçüncü
kaynak (Olgun/ATAM Dergisi, TBMM Zabıt Ceridesi'ne dayanan Güneş 1991) %0,5'in altında eşleşiyor
→ TBMM'nin sayısı kullanıldı. **1954 ve 1957'nin bütün parti oy sayılarında** TÜİK ile TBMM
arasındaki fark %0,5'i (aslında %1-10 aralığında, çok daha büyük) aştığı ve TÜİK'ten bağımsız
üçüncü bir kaynak bulunamadığı için **`oy` alanları `null` yapıldı** — yalnızca `sandalye`
(gerçek/sertifiye edilmiş sonuç, ortalama yönteminden etkilenmeyen bir kategori) ve TÜİK Tablo
2'nin `kayitli`/`kullanilan`/`katılım` sayıları (bunlar parti oyu değil, seçmen sayımı; TÜİK'in
"ortalama" dipnotu bunları kapsamıyor) korundu.

### 1946-05-yerel
- Sonuç: 26 Mayıs 1946, ülke geneli belediye meclisi seçimi; çok partili hayatın ilk yerel seçimi.
- **[B] Yasin KAYIŞ, "1946 Belediye Seçimleri ve Basın", *Çağdaş Türkiye Tarihi Araştırmaları
  Dergisi*, C. 7, S. 16 (Haziran 2008)** (`dergipark.org.tr/tr/download/article-file/233367`,
  `pdftotext -layout` ile okundu) — "5.1. Belediye Seçimlerinin Yapılması (26 Mayıs 1946)" başlığı;
  "DP, belediye seçimlerine katılmayacağını ilan ediyor" (DP örgütlenme yetersizliği ve seçim
  güvenliği eksikliğini gerekçe gösterdi).
- **İkinci kaynak: Bilal NERGİZ, "1945-1960 Arası Yerel Seçimlerde Doğu ve Güneydoğu Anadolu'da
  CHP-DP Mücadelesi"** (`dergipark.org.tr/tr/download/article-file/1099381`) — "1946'daki belediye
  meclisi seçimleri çok partili hayatın ilk seçimleri olmuştu. Fakat bu seçim, DP'nin katılmaması ve
  Milli Kalkınma Partisi'nin seçim günü yarıştan çekilmesi ile tek partili bir seçime dönüşmüştü."
  — Kayış (2008) ile birebir örtüşüyor.
- Ülke geneli oy sayısı: bulunamadı (`sonuc: []`, seçmen sayıları `null`, 1963 öncesi kuralı).
- Uyuşmazlık: yok.
- Erişim: 2026-09-12.

### 1946-07-genel
- Sonuç: 21 Temmuz 1946 (Pazar), tek dereceli, açık oy-gizli tasnif; 465 sandalye; CHP 397, DP 61,
  Bağımsız 7.
- Tarih: **[B] Osman AKANDERE, "1946 Genel Seçimleri ve Sonuçları Üzerinde İktidar ve Muhalefet
  Partileri Arasında Yapılan Tartışmalar II", *Atatürk Araştırma Merkezi Dergisi*, C. XXVI, S. 76
  (Ocak 2010)** (`atamdergi.gov.tr/tam-metin-pdf/109/tur`, indirilip `pdftotext -layout` ile
  okundu) — "Ülke genelinde 6 siyasi partinin katılımıyla gerçekleşen seçimlerde 465
  milletvekilinin 397'sini CHP, 61'ini DP, 7'sini ise bağımsızlar kazanmıştır" (dipnot 107:
  Tuncer, *1946 Seçimleri*, TESAV, 2008, s. ...). Aynı makale: "1946 seçimlerinin ülke genelindeki
  ve iller düzeyindeki sayısal sonuçları yayınlanmamıştır. O nedenle seçimlere katılım oranı,
  geçerli oy oranı, oyların siyasi partilere ve bağımsızlara dağılımı hakkında kesin yargılara
  ulaşmak mümkün değildir" — bu nedenle `kayitli`/`kullanilan`/`gecerli`/`oy` alanları `null`.
- İkinci kaynak: Anadolu Ajansı, "Çok partili demokrasinin ilk sınavı: 21 Temmuz 1946 seçimleri"
  (`aa.com.tr/tr/politika/cok-partili-demokrasinin-ilk-sinavi-21-temmuz-1946-secimleri/1209212`) —
  aynı 397/61/7 dağılımını doğruluyor.
- Meclis büyüklüğü (465): **[B] TÜİK Tablo 3** (bu görevde doğrulandı) — "Toplam milletvekili
  sayısı" ve "Erkek/Kadın" sütunlarından ayrıştırıldı: 1946 satırında toplam-erkek=kadın
  (465-456=9) ilişkisi, TÜİK'in ayrı yayımladığı "Kadın milletvekili sayısı" (9) ve "Erkek temsil
  oranı" (%98,1=456/465) sütunlarıyla birebir tutarlı (bkz. aşağıdaki "Ortak blok" notu).
- Uyuşmazlık: yok.
- Erişim: 2026-09-12.

### Ortak blok — TÜİK Tablo 3 (PDF s. 23, basılı s. 5): 1946/1950/1954/1957 meclis büyüklüğü
- **[B] TÜİK *Milletvekili Genel Seçimleri 1923–2011*, Tablo 3** — `pdftotext` (layout'suz, ham
  akış) ile okunduğunda "Toplam milletvekili sayısı" ve "Erkek" sütunları 1935'ten 2011'e kadar 20
  yıl için ardışık çift olarak diziliyor (`399,381 / 429,413 / 455,439 / 465,456 / 487,484 /
  541,537 / 610,602 / ...`); "Kadın" sütunu ayrıca veriliyor (`18,16,16,9,3,4,8,...`) ve her yılda
  toplam−erkek=kadın eşitliği sağlanıyor (1946: 465−456=9 ✓; 1950: 487−484=3 ✓; 1954: 541−537=4 ✓;
  1957: 610−602=8 ✓). "Erkek temsil oranı (%)" sütunu da (98,1/99,4/99,3/98,7) bağımsız olarak
  erkek/toplam oranına eşit çıkıyor — tablo kendi içinde dörtlü çapraz tutarlı, `-layout`
  hizalama sorunu bu tabloda yaşanmıyor (ham akış sırası korunuyor).
  Sonuç: `meclis` — 1946:465, 1950:487, 1954:541, 1957:610.
- Erişim: 2026-09-12.

### 1946-08-cb-tbmm
- Sonuç: 5 Ağustos 1946 (Pazar), İnönü 4. ve son kez seçildi (388 oy), Fevzi Çakmak 59, Yusuf Kemal
  Tengirşenk 2, boş 2 (toplam 451/465 katıldı).
- **[B] TBMM Zabıt Ceridesi, Devre VIII, İçtima: Fevkalade, Cilt 1 (5.8.1946), s. 2-4** — Taner
  LÜLECİ, "İsmet İnönü'nün Cumhurbaşkanlığı Seçimleri" (*Gazi Akademik Bakış*, S. 32/C. 16, Yaz
  2023, `dergipark.org.tr/tr/download/article-file/3212364`, aynı dosya dönem 0'da da kullanıldı)
  içinde doğrudan alıntılanan ZC sayfası: "İsmet İnönü'nün dördüncü ve son Cumhurbaşkanlığı
  seçimi 1946 yılında... VIII. Dönem Milletvekili seçimlerinden sonra TBMM 5 Ağustos 1946
  Pazar... İsmet İnönü, Demokrat Parti adına İstanbul Milletvekili Mustafa Fevzi Çakmak ve Sinop
  Milletvekili Yusuf Kemal Tengirşenk aday gösterilmiştir... 388, Fevzi Çakmak'a 59, Yusuf Kemal
  Tengirşenk'e 2 oy verilmiş ve 2 oy da (boş)".
- İkinci kaynak: Anadolu Ajansı, "1923'ten günümüze Cumhurbaşkanı seçimleri"
  (`aa.com.tr/tr/turkiye/1923-ten-gunumuze-cumhurbaskani-secimleri/134629`) — tarih ve oy
  sayılarıyla birebir eşleşiyor (451 katılımcı, 388 oy).
- Uyuşmazlık: yok.
- Erişim: 2026-09-12.

### 1950-05-genel
- Sonuç: 14 Mayıs 1950; DP 4.241.393 oy (%52,68) / 408 sandalye, CHP 3.176.561 oy (%39,45) / 69
  sandalye, MP 250.414 oy (%3,11) / 1 sandalye, Bağımsız 383.282 oy (%4,76) / 9 sandalye (toplam
  408+69+1+9=487=meclis ✓).
- **[B, düzeltme turu 1'de kod TEKRAR TBMM'nin sayılarına döndürüldü — ilk turda kaynak
  defterindeki karar doğruydu ama `veri/sandik.js`'e yanlışlıkla TÜİK'in "ortalama oy" satırı
  (DP 4.391.694 / CHP 3.148.626 / MP 368.537) yazılmıştı; bu turda TBMM seçim sorgusu sayfası
  yeniden açılıp kod düzeltildi]:** `https://www5.tbmm.gov.tr/develop/owa/secim_sorgu.secimdeki_partiler?p_secim_yili=1950`
  — DP 4.241.393 (%52,68), CHP 3.176.561 (%39,45), Bağımsız 383.282 (%4,76), MP 250.414 (%3,11).
- **İkinci kaynak (DP/CHP için): Kenan OLGUN (2010)**, aynı makale (bkz. dönem 0, "1923-1943 genel
  seçimleri" ortak blok künyesi) — "14 Mayıs 1950 Milletvekili seçimlerine... seçimlere toplam
  8.905.576 seçmenden 7.916.091'i katılmış olup katılım oranı %88,88 olmuştur. DP 4.242.831 oyla
  408 milletvekili kazanırken CHP 3.165.096 oyla 69 milletvekili kazanmıştır. Bu seçimlerde MP 1,
  bağımsızlarda 9 milletvekilliği elde etmiştir" (kaynağı: Güneş, 1991, SBF Dergisi, s. 798) —
  TBMM'den bağımsız, TBMM Zabıt Ceridesi tabanlı ayrı bir derleme.
  - Uyuşmazlık: **DP 4.241.393 (TBMM) vs 4.242.831 (Olgun) — %0,034** → eşleşti, TBMM'nin sayısı
    yazıldı.
  - Uyuşmazlık: **CHP 3.176.561 (TBMM) vs 3.165.096 (Olgun) — %0,36** → eşleşti (0,5 eşiğinin
    altında), TBMM'nin sayısı yazıldı.
  - Sandalye sayıları (408/69/1/9) TBMM ile Olgun arasında birebir eşleşiyor (fark yok) ve
    toplamı 487'ye (meclis) tam eşitliyor — bu aritmetik eşitlik, TÜİK Tablo 23'ün aynı satır
    için verdiği "416" sandalye rakamının (69+1+9+416=495>487 olduğu için imkânsız olduğu
    anlaşılan, çok satırlı hücre hizalama hatasından kaynaklandığı değerlendirilen)
    kullanılmadığını doğruluyor.
- **MP ve Bağımsız oy sayıları — tek kaynak (TBMM), ikinci kaynak bulunamadı:** Olgun (2010) MP ve
  Bağımsız için yalnızca sandalye sayısını (1 ve 9) veriyor, oy sayısı vermiyor; bu görevde başka
  bir bağımsız kaynak aranmış ama bulunamamıştır. Spesifikasyon §8.1'in "en az bir resmî kaynak +
  ikinci bir kaynakla eşleşme" kuralına göre bu iki sayı katı biçimde tek kaynaklı kalıyor; yine de
  kullanıcının bu turda "TBMM sayfasından yeniden yaz" talimatı gereği yazıldı — sonraki bir turda
  ikinci kaynak aranabilir, bulunamazsa `null`'a çevrilmesi gerekir.
- **`kayitli`/`kullanilan`/`katılım`: [B] TÜİK Tablo 2** (PDF s. 23, ham akış) — kayıtlı 8.905.743,
  kullanılan 7.953.085, katılım %89,3 (7.953.085/8.905.743=%89,30 iç tutarlı).
  - Uyuşmazlık: **kayıtlı 8.905.743 (TÜİK) vs 8.905.576 (Olgun) — %0,0019** → eşleşti.
  - Uyuşmazlık: **kullanılan 7.953.085 (TÜİK) vs 7.916.091 (Olgun) — %0,465** → eşleşti (eşiğin
    hemen altında).
  - TÜİK'in bu iki sayısı parti oyu değil seçmen sayımı olduğu için "ortalama oy" yönteminin
    kapsamı dışında; TÜİK burada birincil kaynak olarak kaldı.
- Erişim: 2026-09-12 (ilk tur); 2026-09-12 (düzeltme turu 1, TBMM sayfası yeniden açıldı).

### 1950-05-cb-tbmm
- Sonuç: 22 Mayıs 1950 (Pazartesi), saat 13:00; 487 milletvekilinden 453'ü katıldı; Celâl Bayar
  387 oyla, İsmet İnönü 64 oy, Halil Özyürek 1 oy aldı; Bayar 3. Cumhurbaşkanı seçildi.
- **[B] Selma GÖKTÜRK ÇETİNKAYA, "Demokrat Parti Dönemi'nde Celal Bayar'ın Cumhurbaşkanlığı
  Seçimleri", *Manisa Celal Bayar Üniversitesi Sosyal Bilimler Dergisi*, 2024**
  (`dergipark.org.tr/tr/download/article-file/4056369`, `pdftotext -layout` ile okundu) —
  "Cumhurbaşkanlığı seçimine 453 milletvekili katılmıştır... İstanbul Mebusu Celal Bayar için 387
  mebus rey kullanmıştır. İsmet İnönü için 64 mebus rey kullanmıştır. Halil Özyürek için 1 mebus
  rey kullanmıştır... 387 rey alan İstanbul Mebusu Celal Bayar, cumhurbaşkanı seçilmiştir."
- İkinci kaynak: Zafer gazetesi, 22 Mayıs 1950, s. 1 (makale içinde alıntılanıyor); tarih ayrıca
  1950-05-genel kaydının kaynağı olan TBMM seçim sorgusu sayfasının seçim tarihini teyit ettiği 14
  Mayıs 1950'den 8 gün sonrasına denk düşüyor (iç tutarlılık).
- Uyuşmazlık: yok.
- Erişim: 2026-09-12.

### 1950-09-yerel
- Sonuç: 3 Eylül 1950, ülke geneli belediye meclisi seçimi (1950'de yapılan 3 ayrı yerel seçimden
  ikincisi — 13 Ağustos 1950 muhtar/ihtiyar heyeti ve 15 Ekim 1950 il genel meclisi seçimleri
  `sandık`'ın `yerel`/`belediye-meclisi` ölçüsü kapsamında değil, bu nedenle kayıt olarak
  eklenmedi). DP oy oranı %57,6, CHP %37,5; DP 600'den fazla belediyeden 560'ından fazlasını kazandı.
- **[B] Başbakanlık Cumhuriyet Arşivi (BCA), Yer Kodu: 031.01, Fon Kodu: 51.309.4** — Bilal
  NERGİZ, "1945-1960 Arası Yerel Seçimlerde Doğu ve Güneydoğu Anadolu'da CHP-DP Mücadelesi"
  (`dergipark.org.tr/tr/download/article-file/1099381`) makalesinde alıntılanıyor: "1950 yılında
  yapılan ikinci yerel seçim, belediye meclisi seçimleriydi... Seçimler 3 Eylül 1950 tarihinde
  yapılmıştı... Seçim sonucunda DP'nin Türkiye genelinde aldığı oy oranı %57,6, CHP'nin %37,5'ti."
- **İkinci kaynak: Cemil EROĞUL**, *Demokrat Parti (Tarihi ve İdeolojisi)* (aynı makalede dipnot
  63-64'te alıntılanıyor) — "DP ülke çapında 600'den fazla belediyeden 560'ını almıştı" (s. 103).
- Ülke geneli oy sayısı (ham): bulunamadı, yalnızca yüzde yayımlı → `oyYuzde` kullanıldı (kural:
  "Yüzde yalnızca kaynak sayı vermiyorsa yazılır").
- Uyuşmazlık: yok (yüzdelerin toplamı %94,1 — yuvarlama ve küçük partilerin/bağımsızların payı
  nedeniyle %100'e tamamlanmıyor, `dogrula.js` bunu uyarı olarak işaretliyor, hata değil).
- Erişim: 2026-09-12.

### 1951-09-ara
- Sonuç: 16 Eylül 1951, 17 ilde (Aydın, Balıkesir, Bilecik, Bitlis, Bursa, Çanakkale, Denizli,
  Eskişehir, Gümüşhane, İstanbul, İzmir, Kastamonu, Kırşehir, Muğla, Sivas, Sinop, Zonguldak)
  boşalan 20 milletvekilliği için yapıldı (İstanbul 2, Aydın 3, diğerleri 1'er). Bilecik'te DP
  adayı Yümni Üresin, CHP'nin yeni genel sekreteri Kasım Gülek'e karşı kazandı.
- **[B] Selma Göktürk ÇETİNKAYA, Birkan VURAL, "Genelin Yerelden Okunması: 1951 Ara Seçimleri ve
  Bilecik", *Van İnsani ve Sosyal Bilimler Dergisi*, S. 7 (2024), s. 41-65**
  (`dergipark.org.tr/tr/download/article-file/3876384`, `pdftotext -layout` ile okundu) — "16
  Eylül 1951 günü Aydın, Balıkesir, Bilecik, Bitlis, Bursa, Çanakkale, Denizli, Eskişehir,
  Gümüşhane, İstanbul, İzmir, Kastamonu, Kırşehir, Muğla, Sivas, Sinop, Zonguldak illerinde boşta
  bulunan 20 vekillik için gerçekleştirilmiş; bu 17 ilden İstanbul için iki, Aydın içinse üç
  milletvekili seçimine gidilmiştir" (CA, 12.01.1952; Cumhuriyet, 18.07.1951 künyeleriyle) ve
  "Bilecik'te kazanan taraf DP olmuştur" (TBMMTD, 30.06.1954: 319: "bu seçimleri Demokrat Parti
  kazandı").
- İkinci kaynak: aynı makalenin dipnot 4'ü, Cüneyt ARCAYÜREK (1983, s. 243) ve Cumhuriyet gazetesi
  (13.08.1951) — il/sandalye sayısında küçük farklı rivayetler olduğunu ("22 şehir/22 vekillik"
  ya da "19 il/21 vekillik") **ayrıca not ediyor**; makale yazarları 17 il/20 sandalyeyi CA
  (Cumhuriyet Arşivi) belgesine dayanarak esas almış.
- **Düzeltme turu 1 (2026-09-12) — `sandalyeSayisi` `null` yapıldı (F3).** İlk turda "20" yazılmıştı
  ama bu, makalenin CA (Cumhuriyet Arşivi) belgesine dayanarak seçtiği TEK rivayetti; makalenin
  kendi dipnot 4'ü döneminin basınında **üç farklı sayı** verildiğini gösteriyor: 17 il/20
  sandalye (Cumhuriyet, 18.07.1951; CA, 12.01.1952), 19 il/21 sandalye (Cumhuriyet, 13.08.1951),
  22 şehir/22 sandalye (Arcayürek, 1983: 243). Bu üç rakam arasındaki farklar (20→21: %5;
  20→22: %10) yeni %0,5 eşiğini açıkça aşıyor ve makale bunlardan birini "resmî" olarak
  damgalamıyor (yalnızca CA belgesini tercih ediyor). TBMM tutanağı, Resmî Gazete ya da TBMM
  *Cumhuriyet Dönemi Partiler–Seçimler–Beyannameler*'de bu seçime özgü bir sandalye sayısı bu
  turda da bulunamadı (bkz. Görev 9 Dönem 1 ortak arama notu — bu kaynak yalnızca toplu, tarihsiz
  rakamlar veriyor). Bu nedenle `sandalyeSayisi: null` yapıldı; `bolge:"17 il"` bırakıldı (CA
  belgesine dayanan en sık atıf edilen rakam, ama kesin değil — `not` alanında belirsizlik
  açıkça yazıldı) ve kayıt silinmedi.
- İl bazında kazanan partilerin tam listesi (DP/CHP/MP dağılımı, toplam sandalye) bu turda da iki
  kaynakla doğrulanamadı → `sonuc: []` bırakıldı.
- Erişim: 2026-09-12 (ilk tur); 2026-09-12 (düzeltme turu 1).

### 1954-05-genel
**Düzeltme turu 1 (2026-09-12) — DP sandalyesi ve oy sayıları yeniden değerlendirildi.**
- Sonuç: 2 Mayıs 1954; DP **503** sandalye, CHP 31 sandalye, Cumhuriyetçi Millet Partisi (CMP) 5
  sandalye, Bağımsız sandalyesi kesinleştirilemedi. Bütün partilerin `oy` sayısı, TÜİK ile TBMM
  arasındaki %0,5'i aşan farklar nedeniyle `null`.
- **Sandalye — [B] TÜİK Tablo 23, "TÜRKİYE", C sütunü (PDF s. 43)**: DP satırı 1950/1954/1957
  için `416 / 503 / 424` veriyor (1950'nin "416"sı ayrı bir hizalama hatası olarak zaten
  reddedildi, bkz. 1950-05-genel); 1954 için **503**. CHP satırı `69/31/178` (1954→**31**). CMP
  satırı (1954/1957) `5/4` (1954→**5**).
  - **İkinci kaynak: Ensar YILMAZ (2010, künye altta)** — "541 mebusluktan **504**'ünü Demokrat
    parti, 31'ini CHP, 5'ini CMP, 1'ini de bağımsız aday kazanmıştı."
  - Uyuşmazlık: **DP sandalyesi 503 (TÜİK) vs 504 (Yılmaz) — %0,199** → eşiğin altında, "eşleşti"
    sayıldı; birincil kaynağın (TÜİK) sayısı olan **503** yazıldı.
  - CHP (31) ve CMP (5) iki kaynakta da birebir aynı (fark yok).
  - **Bağımsız sandalyesi çözülemedi**: TÜİK'in DP=503 satırıyla toplam 541'i tutturmak için
    bağımsıza 541−503−31−5=**2** sandalye kalıyor; Yılmaz'ın DP=504 satırıyla ise bağımsıza
    yalnızca **1** kalıyor. İki olası bağımsız sayısı (1 ve 2) birbirinden çok farklı bir oranda
    ayrışıyor (fark %100) ve hangisinin doğru olduğunu gösteren üçüncü bir kaynak bu turda
    bulunamadı; talimat gereği (F2) bu satırın `sandalye` değeri **`null`** yapıldı.
- **Oy sayıları — TÜİK vs TBMM karşılaştırması (yeni %0,5 kuralı ilk kez tam uygulandı):**
  TÜİK Tablo 23'ün "A" satırı: DP 5.313.659 (%58,4), CHP 3.193.471 (%35,1), CMP 480.249 (%5,3).
  TBMM seçim sorgusu (`secim_sorgu.secimdeki_partiler?p_secim_yili=1954`, bu görevde ilk turda
  zaten açılmıştı): DP 5.151.550 (%57,61), CHP 3.161.696 (%35,36), CMP 434.085 (%4,85).
  - Uyuşmazlık: **DP 5.313.659 (TÜİK) vs 5.151.550 (TBMM) — %3,05** → eşik aşıldı, `oy: null`.
  - Uyuşmazlık: **CHP 3.193.471 (TÜİK) vs 3.161.696 (TBMM) — %1,00** → eşik aşıldı, `oy: null`.
  - Uyuşmazlık: **CMP 480.249 (TÜİK/Yılmaz) vs 434.085 (TBMM) — %9,61** → eşik aşıldı, `oy: null`.
  - Yılmaz'ın (2010) CMP için verdiği 480.249 rakamı TÜİK'inkiyle birebir aynı olduğu için
    **bağımsız bir ikinci ölçüm sayılmadı** (muhtemelen aynı TÜİK/Tuncer tablosunun tekrarı);
    DP için makalede hem %57,6 hem %58,4 geçiyor (kendi içinde tutarsız, çözülemedi).
  - İlk turda bu üç sayı TÜİK'ten yazılmıştı (Yılmaz'ın atfını yanlışlıkla "bağımsız ikinci kaynak"
    sayarak); düzeltme turu 1'de bu hata görülüp `null` yapıldı.
- **[B] TÜİK *Milletvekili Genel Seçimleri 1923–2011*, Tablo 23, "TÜRKİYE" (PDF s. 43, basılı
  s. 25)** — `pdftotext` (ham akış) ile satır satır okundu; DP/CHP/CMP satırları parti adı
  listesiyle (AP, CHP, CGP, CKMP, CMP, DP, ...) blok sırasıyla eşleştirildi. Bu liste **"CMP" ile
  "MİLLET PARTİSİ"ni ayrı, birbirinden bağımsız satırlar olarak veriyor** — bu, 1954/1957'deki CMP
  sonuçlarının `mp48` (Millet Partisi) soyağacı düğümüne değil, ayrı bir `ad:"Cumhuriyetçi Millet
  Partisi"` satırına yazılması gerektiğini doğruluyor (bkz. aşağıdaki "CMP ayrımı" notu).
- **İkinci kaynak (yalnızca sandalye ve tarih için): Ensar YILMAZ, "1954 Seçimlerinin Önemi, Öne
  Çıkan Özellikleri ve Siyasi Sonuçları", *e-Journal of New World Sciences Academy*, 2010, C. 5,
  S. 4** (`dergipark.org.tr/en/download/article-file/186769`, `pdftotext -layout` ile okundu).
- **`kayitli`/`kullanilan`/`katılım`: [B] TÜİK Tablo 2** — kayıtlı 10.262.063, kullanılan
  9.095.617, katılım %88,6; Yılmaz (2010) makalesinde de birebir aynı rakamlar geçiyor ("toplam
  10.262.063 seçmenden, 9.095.617'si 43.174 sandıkta oy kullandı. Katılım oranı %88,6") — bu ikisi
  parti oyu değil seçmen sayımı olduğundan "ortalama oy" yöntemi kapsamına girmiyor, TÜİK'in
  tekrarı sayılsa da rakamı değiştirecek bir TBMM alternatifi yok, TÜİK esas alındı.
- **CMP ayrımı (F4, kullanıcı kararı, düzeltme turu 1):** 1954 sonucundaki CMP satırı artık
  `parti:"mp48"` değil `ad:"Cumhuriyetçi Millet Partisi"` — TÜİK Tablo 23'ün kendi parti adı
  listesi CMP'yi Millet Partisi'nden ayrı bir satır olarak veriyor (yukarıda). Soyağacına
  eklenmedi; Görev 10 listesine Hürriyet Partisi'nin yanına eklendi.
- Erişim: 2026-09-12 (ilk tur); 2026-09-12 (düzeltme turu 1).

### 1954-05-cb-tbmm
- Sonuç: 14 Mayıs 1954 saat 15:00 toplanan 10. Dönem Meclisi'nde Celâl Bayar 486 oyla (513
  milletvekili katıldı) yeniden (2. kez) Cumhurbaşkanı seçildi.
- **[B] TBMM Zabıt Ceridesi, X. Dönem, Cilt 1, Toplantı: F, Birleşim: 1 (14.5.1954), s. 7-8** —
  Selma Göktürk ÇETİNKAYA (2024, künye yukarıda) makalesinde alıntılanıyor: "Celal Bayar, 486
  oyla... yeniden cumhurbaşkanı seçilmiştir."
- İkinci kaynak: Ensar YILMAZ (2010, künye yukarıda) — "14 Mayıs'ta Cumhurbaşkanı seçiminde 513
  milletvekili reyini kullandı ve 486 reyle Cumhurbaşkanlığına Celal Bayar seçildi" — birebir
  eşleşiyor (bağımsız iki makale aynı TBMM oturumunu doğruluyor).
- Uyuşmazlık: yok.
- Erişim: 2026-09-12.

### 1957-10-genel
**Düzeltme turu 1 (2026-09-12) — oy sayıları TÜİK-TBMM karşılaştırmasıyla yeniden değerlendirildi.**
- Sonuç: 27 Ekim 1957; DP 424 sandalye, CHP 178 sandalye, Cumhuriyetçi Millet Partisi (CMP) 4
  sandalye, Hürriyet Partisi 4 sandalye (toplam 424+178+4+4=610=meclis ✓, sandalyelerde uyuşmazlık
  yok). Bütün partilerin `oy` sayısı `null` (aşağıda gerekçe).
- **Sandalye — [B] TÜİK Tablo 23, "TÜRKİYE", C sütunü (PDF s. 43)**: DP 424, CHP 178, CMP 4,
  Hürriyet Partisi 4; toplam 610'a (meclis) tam eşit, tek bir ikinci kaynakla da (WebSearch'te
  bulunan çok sayıda bağımsız akademik atıf: dergipark `article-file/1382433`, `article-file/1244894`)
  fark yok. Sandalye sayılarında uyuşmazlık yok.
- **Oy sayıları — TÜİK vs TBMM karşılaştırması:** TÜİK Tablo 23 "A" satırı: DP 4.497.811 (%48,6),
  CHP 3.825.267 (%41,4), CMP 604.087 (%6,5), Hürriyet Partisi 321.471 (%3,5). TBMM seçim sorgusu
  (`secim_sorgu.secimdeki_partiler?p_secim_yili=1957`, ilk turda açılmıştı): DP 4.372.621
  (%47,88), CHP 3.753.136 (%41,09), CMP 652.064 (%7,14), Hürriyet Partisi 350.597 (%3,84).
  - Uyuşmazlık: **DP 4.497.811 (TÜİK) vs 4.372.621 (TBMM) — %2,78** → eşik aşıldı, `oy: null`.
  - Uyuşmazlık: **CHP 3.825.267 (TÜİK) vs 3.753.136 (TBMM) — %1,89** → eşik aşıldı, `oy: null`.
  - Uyuşmazlık: **CMP 604.087 (TÜİK) vs 652.064 (TBMM) — %7,94** → eşik aşıldı, `oy: null`.
  - Uyuşmazlık: **Hürriyet Partisi 321.471 (TÜİK) vs 350.597 (TBMM) — %9,06** → eşik aşıldı,
    `oy: null`.
  - İlk turda bu dört sayı TÜİK'ten yazılmış ve Yunus ÖZDURĞUN'un (2021, künye altta) makalesi
    "bağımsız ikinci kaynak" sayılmıştı; ancak makale sayıların hemen yanına **"Kaynak: TÜİK"**
    yazıyor — yani TÜİK'i doğrudan alıntılıyor, bağımsız bir ikinci ölçüm sunmuyor. Düzeltme turu
    1'de bu hata görülüp gerçek ikinci kaynak (TBMM) ile karşılaştırıldı ve fark %0,5'i aştığı
    için `null` yapıldı.
- **[B] TÜİK *Milletvekili Genel Seçimleri 1923–2011*, Tablo 23, "TÜRKİYE" (PDF s. 43)**.
- **İkinci kaynak (yalnızca kayıtlı/kullanılan/katılım ve sandalye için, oy sayıları için değil):
  Yunus ÖZDURĞUN, "Türk Siyasi Hayatında 1957 Seçimleri: Beyanatlar ve Tartışmalar", *Van Yüzüncü
  Yıl Üniversitesi Sosyal Bilimler Enstitüsü Dergisi*, S. 51 (2021), s. 465-480**
  (`dergipark.org.tr/tr/download/article-file/1679167`, `pdftotext -layout` ile okundu) — "Tablo
  1: 1957 Seçim Sonuçları — Kayıtlı Seçmen Sayısı: 12.078.623. Oy Kullanan Seçmen Sayısı ve Oranı:
  9.250.949 (%76,6)... Kaynak: TÜİK."
- **`kayitli`/`kullanilan`/`katılım`: [B] TÜİK Tablo 2** — 12.078.623 / 9.250.949 / %76,6; bunlar
  parti oyu değil seçmen sayımı olduğundan "ortalama oy" yöntemi kapsamına girmiyor, alternatif
  bir TBMM rakamı da yok; TÜİK esas alındı (Özdurğun'un tekrarı, ama rakamı değiştirecek bir
  ikinci ölçüm yok).
- **Hürriyet Partisi soyağacında yok** — bu görevde doğrulandı: 1955'te DP'den ayrılan Fevzi Lütfi
  Karaosmanoğlu önderliğindeki milletvekillerince kurulmuş, 1957 seçiminde 4 sandalye kazanmış,
  1958'de CHP'ye katılarak kapanmıştır (bkz. TÜİK Tablo 23 parti listesi + Özdurğun 2021). `ad:`
  ile yazıldı, Görev 10 listesine eklendi.
- **CMP ayrımı (F4, kullanıcı kararı, düzeltme turu 1):** 1957 sonucundaki CMP satırı artık
  `parti:"mp48"` değil `ad:"Cumhuriyetçi Millet Partisi"` — bkz. 1954-05-genel kaydındaki
  gerekçe. Soyağacına eklenmedi; Görev 10 listesine Hürriyet Partisi'nin yanına eklendi.
- Erişim: 2026-09-12 (ilk tur); 2026-09-12 (düzeltme turu 1).

### 1957-11-cb-tbmm
- Sonuç: 1 Kasım 1957, Meclis açıldığı gün; Celâl Bayar 602 milletvekilinden 413'ünün oyunu
  alarak 3. ve son kez Cumhurbaşkanı seçildi; muhalefet milletvekilleri oylama sırasında Meclis'i
  terk etti.
- **[B] Cumhuriyet gazetesi, 2 Kasım 1957, s. 1** — Selma Göktürk ÇETİNKAYA (2024) makalesinde
  alıntılanıyor: "Celal Bayar, 602 milletvekilinden, 413'ünün oyunu alarak yeniden cumhurbaşkanı
  seçilmiştir. Muhalefet milletvekilleri, cumhurbaşkanlığı seçimi yapıldığı esnada Meclisi terk
  etmiştir."
- İkinci kaynak: Akşam gazetesi, 2 Kasım 1957, s. 1 ("Bayar Reisicumhur oldu") — aynı makalede
  alıntılanıyor, aynı olayı ve tarihi doğruluyor.
- Uyuşmazlık: yok.
- Erişim: 2026-09-12.

### Ortak blok — Hükümetler 1946–1960 (no. 15–23, dönem 1 bandına düşenler)
**Düzeltme turu 1 (2026-09-12) — F: Cilt 2 tekrar indirilip 19-23 numaralı hükümetlerin tarihleri
bağımsız olarak yeniden doğrulandı.** İncelemenin "cilt indirilmemiş olabilir" endişesi üzerine
Cilt 2 bitstream'i (`52561ed5-f329-4bbc-95ce-e65fe3fb450b`) `curl` ile yeniden indirildi (6,06 MB,
gerçek PDF — `%PDF-1.3` başlığı doğrulandı) ve `pdftotext -f 1 -l 8 -layout` ile İçindekiler
bölümü doğrudan okundu (ilk turdaki WebFetch özetine güvenmek yerine ham metin bizzat görüldü).
Sonuç birebir aynı çıktı: 19 (22.05.1950-09.03.1951), 20 (09.03.1951-17.05.1954), 21
(17.05.1954-09.12.1955), 22 (09.12.1955-25.11.1957), 23 (25.11.1957-27.05.1960); 24
(30.05.1960-05.01.1961) ve 25 (05.01.1961-20.11.1961) de aynı şekilde teyit edildi. Tarihler
değiştirilmedi.
- **[B] TBMM Başkanlığı Yayınları, *Hükümetler, Programları ve Genel Kurul Görüşmeleri*, Cilt 1
  (24 Nisan 1920 – 22 Mayıs 1950) ve Cilt 2 (22 Mayıs 1950 – 20 Kasım 1961)** — Cilt 1 dönem 0'da
  da kullanılan dosya (`cdn.tbmm.gov.tr/TbmmWeb/Yayinlar/Dosya/c52e0723-d073-4331-8a8a-01866e8f1b30.pdf`).
  **Cilt 2 bu görevde bulundu**: `acikerisim.tbmm.gov.tr` üzerindeki tek bir "item"
  (`items/2305701f-7bde-4344-bfbe-4166743fe1e2`) aslında **10 cildin tamamını** (c1–c10) ayrı
  bitstream olarak barındırıyor — Görev 1'de yalnızca c9'un bitstream'i bulunmuştu, bu görevde
  bundle listesi (`server/api/core/bundles/88774567-.../bitstreams`) sorgulanarak tüm ciltlerin
  doğrudan indirme adresleri tespit edildi (kaynak haritası aşağıda güncellendi). Cilt 2 bitstream:
  `acikerisim.tbmm.gov.tr/server/api/core/bitstreams/52561ed5-f329-4bbc-95ce-e65fe3fb450b/content`
  (`201400884-c2.pdf`, 5,8 MB). İçindekiler bölümü:
  15. Peker Hükümeti (07.08.1946-10.09.1947)
  16. I. Saka Hükümeti (10.09.1947-10.06.1948)
  17. II. Saka Hükümeti (10.06.1948-16.01.1949)
  18. Günaltay Hükümeti (16.01.1949-22.05.1950)
  19. I. Menderes Hükümeti (22.05.1950-09.03.1951)
  20. II. Menderes Hükümeti (09.03.1951-17.05.1954)
  21. III. Menderes Hükümeti (17.05.1954-09.12.1955)
  22. IV. Menderes Hükümeti (09.12.1955-25.11.1957)
  23. V. Menderes Hükümeti (25.11.1957-27.05.1960)
  Tarihler genel seçim tarihleriyle (14.5.1950, 2.5.1954, 27.10.1957) ve V. Menderes'in bitiş
  tarihi 27 Mayıs 1960 darbesiyle iç tutarlı.
- **İkinci kaynak (hükümet tipi ve sayı çapraz doğrulama): Özhan DEMİRKOL (2023)**, dönem 0'da
  kullanılan aynı makale, Tablo 2: dönem 1'deki 9 hükümetin (15-23) hepsi CHP ya da DP'nin **tek
  başına** kurduğu hükümetler (koalisyon yok) — bu, `tip:"tek-parti"` sınıflamasını doğruluyor
  (15-18 CHP çoğunluk hükümeti, 19-23 DP çoğunluk hükümeti; her iki dönemde de meclis çoğunluğu
  tek partide olduğu için `partiler` tek elemanlı).
- **`bitisNedeni` — yalnızca seçim sonrası kabine yenilenmesi doğrulanabilenler `"secim"`, darbe
  doğrulanan `"darbe"`, gerisi `null`:**
  - **no. 18 → "secim"**: Günaltay hükümeti 22 Mayıs 1950'de, DP'nin 14 Mayıs 1950 seçimini
    kazanmasının hemen ardından sona erdi (bkz. 1950-05-genel kaydı, "İktidar ilk kez seçim
    yoluyla el değiştirdi"); Cilt 2'nin 19. hükümet bölümü doğrudan bu seçimin ardından başlıyor.
  - **no. 20 → "secim"**: 2 Mayıs 1954 seçiminden 15 gün sonra (17 Mayıs 1954) yeni kabine
    kuruldu; Selma Göktürk Çetinkaya (2024) ve Ensar Yılmaz (2010) makaleleri bu geçişi ayrıntılı
    anlatıyor (bkz. 1954-05-cb-tbmm kaydı).
  - **no. 22 → "secim"**: 27 Ekim 1957 seçiminden 1 ay sonra (25 Kasım 1957) yeni kabine kuruldu;
    Cilt 2'nin 23. hükümet bölümü doğrudan bu seçimin ardından başlıyor.
  - **no. 23 → "darbe"**: 27 Mayıs 1960 askerî darbesiyle görevden uzaklaştırıldı — bu tarih
    zaten spesifikasyon §8.5'te ("1960 ve 1980 yonetim aralıkları") Görev 1'de doğrulanmış bir
    iddia; TBMM Cilt 2'nin V. Menderes bölümünün bitiş tarihi (27.05.1960) bu tarihle birebir
    eşleşiyor.
  - **no. 15-17, 19, 21 → `null`**: bu araştırma turunda ikinci kaynakla doğrulanabilir, spesifik
    bir bitiş nedeni (istifa/reshuffle gerekçesi) bulunamadı; hafızadan doldurulmadı.
- Uyuşmazlık: yok.
- Erişim: 2026-09-12.

### hukumet-15 — hukumet-23
Bkz. yukarıdaki ortak blok.
- 15: Recep Peker, 07.08.1946-10.09.1947, tek-parti (CHP).
- 16: Hasan Saka (I), 10.09.1947-10.06.1948, tek-parti (CHP).
- 17: Hasan Saka (II), 10.06.1948-16.01.1949, tek-parti (CHP).
- 18: Şemsettin Günaltay, 16.01.1949-22.05.1950, tek-parti (CHP), bitisNedeni: secim.
- 19: Adnan Menderes (I), 22.05.1950-09.03.1951, tek-parti (DP).
- 20: Adnan Menderes (II), 09.03.1951-17.05.1954, tek-parti (DP), bitisNedeni: secim.
- 21: Adnan Menderes (III), 17.05.1954-09.12.1955, tek-parti (DP).
- 22: Adnan Menderes (IV), 09.12.1955-25.11.1957, tek-parti (DP), bitisNedeni: secim.
- 23: Adnan Menderes (V), 25.11.1957-27.05.1960, tek-parti (DP), bitisNedeni: darbe.

### Ortak blok — Hükümetler 24–25 (27 Mayıs 1960 kabı, MBK dönemi)
- **[B] TBMM Cilt 2** (yukarıdaki künye), İçindekiler:
  24. I. Gürsel Hükümeti (30.05.1960-05.01.1961)
  25. II. Gürsel Hükümeti (05.01.1961-20.11.1961)
  Her iki hükümetin başbakanı/MBK Başkanı Cemal Gürsel; `partiler: []` (partilerüstü/MBK dönemi,
  bütün siyasi partiler 27 Mayıs sonrası kapatıldı), `tip: "mbk"`.
- Her iki hükümetin `baslangic` tarihi `yonetim` aralığı (1960-05-27 – 1961-10-14) içinde
  olduğundan spesifikasyon §6.3 kuralı gereği 27 Mayıs 1960 kabına yerleştirildi (bant yerleşimi
  `baslangic`'e göre); hükümet 25'in `bitis`i (20.11.1961) kap sınırının dışına taşsa da bu kuralı
  değiştirmiyor.
- Uyuşmazlık: yok.
- Erişim: 2026-09-12.

### hukumet-24, hukumet-25
Bkz. yukarıdaki ortak blok.

### 1961-07-referandum
- Sonuç: 9 Temmuz 1961 (Pazar), 1961 Anayasası'nın kabulü; ülke geneli katılım ~%88, kabul (evet)
  oranı %61,7, ret (hayır) oranı %38,3; en az 10 il (Aydın, Bursa, Çorum, Denizli, İzmir, Kütahya,
  Manisa, Sakarya, Samsun, Zonguldak) çoğunlukla "hayır" oyu verdi. Sonuç 20 Temmuz 1961 tarih ve
  10859 sayılı Resmî Gazete'de yayımlandı.
- **[B] Türkiye İstatistik Kurumu, *Halkoylaması Sonuçları 2007, 1988, 1987, 1982, 1961*, Ankara:
  TÜİK Yayınları, 2008, s. 197, 199** — doğrudan erişilemedi; "Türkiye'de Yapılan Halkoylamaları ve
  Bunların Ağrı'daki Yansımaları" (`dergipark.org.tr/tr/download/article-file/2277549`) makalesinde
  "Tablo 1: 9 Temmuz 1961 Anayasa Halkoylamasının Türkiye ve Ağrı'daki Sonuçları (Kaynak: TÜİK,
  2008: 197, 199)" olarak alıntılanıyor — "Türkiye genelinde 1961 Anayasası'na evet oyu
  verenlerin oranı %61,7... Türkiye genelinde katılım %88... ülke genelinde 11 vilayetin tamamı
  Anayasa'ya hayır oyu vermiştir: Aydın (%56 hayır), Bursa (%52,9), Çorum (%52,2), Denizli
  (%51,3), İzmir (%50,2), Kütahya (%58,2), Manisa (%56,1), Sakarya (%52,8), Samsun (%57),
  Zonguldak (%53,1)" (10 il sayılıyor, makale "11 vilayet" diyor ama listede 10 tane var —
  11.'si makalede belirtilmemiş).
- **İkinci kaynak: Şerif DEMİR, "9 Temmuz 1961 Anayasa Referandumu"**
  (`dergipark.org.tr/en/download/article-file/1871984`) — "Türkiye genelinde Evet oyu %61,7, Hayır
  oyu %38,3 olarak gerçekleşti" ve "bütün siyasi partilerin zorunlu olarak 'evet' dediği bir
  ortamda" ifadesiyle CHP ve AP'nin ikisinin de resmî olarak "evet" çağrısı yaptığını (AP üzerinde
  askerî baskı olduğu, bazı üyelerinin isteksiz olduğu notuyla) doğruluyor.
- **Üçüncü kaynak (RG): anayasa.gen.tr** — "9 Temmuz 1961 günü yapılan halkoylaması ile %61,7
  oranında 'evet' oyu ile kabul edilmiş ve 20 Temmuz 1961 tarih ve 10859 sayılı Resmî Gazete'de
  yayınlanmıştır."
- **Kayıtlı seçmen/kullanılan/geçerli/evet/hayır ham sayıları bu turda bulunamadı** — TÜİK'in 2008
  tarihli kitabındaki Tablo 1 görselinin sayısal içeriği, onu alıntılayan makalede tablo görüntü
  olarak kaldığı için metne dönüşmemiş; `kayitli`, `kullanilan`, `gecerli`, `evet`, `hayir`
  alanları `null` bırakıldı, `%61,7`/`%88` bilgisi `not` alanında düz metin olarak aktarıldı
  (referandum türünde bu iki alan için bir yüzde-yedek alanı tanımlı değil, spesifikasyon §5.4).
- `tutumlar`: CHP ve AP için `"evet"` — yukarıdaki Demir (2021) kaynağıyla.
- Uyuşmazlık: yok (11. "hayır" ili adı ikinci bir kaynakla tamamlanamadı, bu nedenle `not`'ta "en
  az 10 il" ifadesi kullanıldı).
- Erişim: 2026-09-12.

### Kaynak haritası güncellemesi — TBMM Hükümetler cildi bitstream'leri (Görev 9, Dönem 1)
- `acikerisim.tbmm.gov.tr` üzerindeki item `items/2305701f-7bde-4344-bfbe-4166743fe1e2` aslında
  *Hükümetler, Programları ve Genel Kurul Görüşmeleri*'nin **10 cildinin tamamını** (Cilt 1-10)
  ayrı bitstream olarak barındırıyor. Bundle listesi:
  `acikerisim.tbmm.gov.tr/server/api/core/bundles/88774567-0d57-4e64-8a8e-bf03cfb196f7/bitstreams`
  — c1: `da6ec562-5a81-451e-a22c-d1b94666dd1d`, c2: `52561ed5-f329-4bbc-95ce-e65fe3fb450b`, c3:
  `cdfb671f-f82b-4373-8db9-fad3ee50ed12`, c4: `2a72b8f8-b477-4c0b-ba7d-7ec0b448147c`, c5:
  `232d9a87-53f4-449c-8e38-82828ab35cf8`, c6: `04e5853c-8b3b-4ccb-add2-43e1b53cd8d8`, c7:
  `7c3fc30f-4941-4abd-989e-c34eda60de81`, c8: `bfe1edae-c4f8-4520-801f-92cefd45e253`, c9 (Görev
  1'de zaten bulunmuştu): `ed9cef72-34f2-44bc-9a66-e77e6c0aab99`, c10:
  `1bb4bf9a-a93e-40ff-852c-8d5d07c890b7`. Her biri
  `.../server/api/core/bitstreams/<uuid>/content` adresinden doğrudan indirilebiliyor. Sonraki
  dönemlerin hükümet verisi toplanırken bu liste doğrudan kullanılabilir — ayrıca arama
  yapılmasına gerek yok.
- Erişim: 2026-09-12.

### Bulunamayan/ertelenen kayıtlar (dönem 1)
- **1947, 1948, 1949 ara seçimleri**: TESAV'ın "Milletvekili Ara Seçim Sonuçları (1947, 1948,
  1949, 1951, ...)" başlıklı yayınının varlığı doğrulandı ama doğrudan PDF adresi
  (`tesav.org.tr/wp-content/uploads/2017/03/17.-Milletvekili-Ara-Seçim-Sonuçları.pdf`) artık 404
  veriyor; alternatif adres bu turda bulunamadı. Vikipedi'nin tek başına doğruladığı sayfalar
  (`1947/1948/1949 Türkiye milletvekili ara seçimleri`) kural gereği kaynak sayılmadı. Bu üç ara
  seçim `veri/sandik.js`'e eklenmedi.
- **1955 yerel seçimi (il genel meclisi + belediye meclisi)**: CHP ve CMP'nin bu seçime
  katılmadığı, katılım oranının %38,34'te kaldığı Bilal NERGİZ (yukarıdaki makale) ile doğrulandı
  ("BCA, Yer Kodu: 030.01, Fon Kodu: 51.309.8"), ama seçimin **tam tarihi** (gün/ay) bu turda
  yalnızca Vikipedi'de bulundu (25 Eylül / 13 Kasım 1955) — kural gereği Vikipedi tek kaynak
  sayılmadığından tarih doğrulanamadı ve kayıt eklenmedi.
- Sonraki bir turda bu üç kayıt için ek kaynak taraması yapılabilir.
- Erişim: 2026-09-12.
