/* İl il seçim sonuçları (harita için). Kaynaklar: araclar/kaynak-defteri.md → "Harita".
   Genel seçim: { gecerli, oy: { parti: sayı } } — ilde en çok oyu alan parti birinci sayılır.
   Yerel seçim: { kazanan, oy, ikinci, ikinciOy } — il merkezi (büyükşehirde büyükşehir) belediye başkanlığı.
   Bir seçimin tablosunda yer almayan il, o tarihte ayrı il değildi. */
window.IL_SONUCLARI = {};
