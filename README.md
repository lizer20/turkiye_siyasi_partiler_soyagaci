# Türkiye Siyasi Partileri Soyağacı

Derlemesiz, bağımlılıksız statik bir site. İki bölümü var:

- **Soyağacı** (`index.html`) — 1923'ten bugüne partilerin kuruluş, bölünme, katılma ve
  kapatılma çizgileri; dönem bantları, kesintiler, parti künyeleri.
- **Sandık** (`sandik.html`) — genel ve yerel seçimler, referandumlar, cumhurbaşkanlığı
  seçimleri, ara seçimler ve iki seçim arasında kurulan hükümetler.
- **Kaynakça & metodoloji** (`kaynakca.html`) — ölçüler, kurallar ve kaynaklar.

## Temel ilke: bilgi uydurulmaz

Hiçbir sayı, tarih, isim ya da nitel bilgi hafızadan yazılmaz. Her değer **bir resmî kaynak**
(YSK, TÜİK, TBMM, Resmî Gazete, AYM, tccb.gov.tr) **ve ondan bağımsız bir ikinci kaynakla**
doğrulanır. Vikipedi hiçbir zaman kaynak sayılmaz; gazete ve ajans arşivleri yalnızca ikinci
kaynak olabilir. İki kaynak arasındaki fark %0,5'i geçerse değer yazılmaz. Doğrulanamayan her
değer boştur ve ekranda **"—"** görünür.

Her değerin kaynağı `araclar/kaynak-defteri.md` dosyasında, uyuşmazlıklar ve boş bırakma
gerekçeleriyle birlikte kayıtlıdır.

## Çalıştırma

Sunucu gerekmez; `index.html` dosyasına çift tıklamak yeterlidir (`file://` uyumlu: `fetch` yok,
ES modülü yok, harici istek yok). Yerel sunucuyla bakmak için:

```bash
npx -y http-server . -p 8123 -c-1
```

## Denetimler

```bash
node --test "araclar/test/*.test.js"
```

```bash
node araclar/dogrula.js
```

İlki 57 birim testini koşar (mantık, biçimleme, HTML üreticileri, denetleyici, toplayıcı).
İkincisi veri dosyalarını denetler: kimlik ve tarih biçimi, sıra, sandalye toplamlarının meclis
sayısına eşitliği, bilinmeyen parti referansları, hükümet zincirindeki boşluk ve çakışmalar.
Tırnaklar Node 24'te zorunludur.

## Dosya düzeni

| Yol | İş |
|---|---|
| `index.html`, `sandik.html`, `kaynakca.html` | Sayfalar |
| `ortak.js`, `ortak.css` | Ortak bileşenler: panel, dönem bandı, biçimleme |
| `sandik-mantik.js`, `sandik-sayfa.js`, `sandik.css` | Sandık bölümünün mantığı ve görünümü |
| `veri/partiler.js` | Soyağacı verisi (`window.PARTILER`) |
| `veri/sandik.js` | Seçim ve hükümet verisi (`window.SANDIK`) |
| `araclar/kaynak-defteri.md` | Kaynak defteri — her değerin kaynağı ve gerekçesi |
| `araclar/dogrula.js`, `araclar/topla.js`, `araclar/yukle.js` | Denetleyici, il toplayıcı, yükleyici |
| `araclar/test/` | Birim testleri (`fikstur.js` sahte veridir, siteye girmez) |
| `docs/superpowers/specs/` | Spesifikasyon: kararlar, veri modeli, kaynak kuralları |
| `docs/superpowers/plans/` | Uygulama planı |
| `docs/DEVIR-NOTU.md` | İşin bugüne kadarki durumu, kararlar ve açık işler |
| `.superpowers/sdd/` | İlerleme defteri, görev brief'leri, raporlar, inceleme hükümleri |

## Durum

Sandık bölümünün verisi 1923–2026 arasında girildi. 2016–2026 dönemi 25 Eylül 2026'da
kaynaklarıyla tamamlandı (2017 referandumu; 2018 ve 2023 genel ve cumhurbaşkanlığı seçimleri;
2019 ve 2024 yerel seçimleri ile 2019 İstanbul yenilemesi; 65. Hükümet ve cumhurbaşkanlığı
kabineleri). Kalan işler — soyağacına eklenecek partilerin onayı, son kontroller ve eksik kayıt
aramaları — `docs/DEVIR-NOTU.md` dosyasının 9. ve 12. bölümlerinde ve
`.superpowers/sdd/2026-09-11-sandik/progress.md` defterinde listelidir.
