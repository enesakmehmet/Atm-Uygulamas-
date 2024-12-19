/*
ATM UYGULAMASI

1- Bakiye Görüntüleme
2- Para Çekme
3- Para Yatırma
4- Çıkış
*/

let yeniSatir = "\r\n";
let bakiye = 1000;

let metin =
  "1 - Bakiye Görüntüleme" + yeniSatir +
  "2 - Para Çekme" + yeniSatir +
  "3 - Para Yatırma" + yeniSatir +
  "4 - Çıkış" + yeniSatir +
  "Lütfen bir işlem seçiniz:";

let secim = prompt(metin);

switch (secim) {
  case "1":
    // Bakiye Görüntüleme
    alert("Mevcut Bakiyeniz: " + bakiye + " TL");
    break;

  case "2":
    // Para Çekme
    let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz:"));
    if (cekilecekTutar <= bakiye) {
      // Yeterli bakiye var
      bakiye -= cekilecekTutar;
      alert(
        "İşlem başarılı!" + yeniSatir +
        "Çekilen Tutar: " + cekilecekTutar + " TL" + yeniSatir +
        "Kalan Bakiye: " + bakiye + " TL"
      );
    } else {
      // Yetersiz bakiye
      alert(
        "Bakiyeniz yetersiz!" + yeniSatir +
        "Mevcut Bakiye: " + bakiye + " TL" + yeniSatir +
        "Çekmek İstediğiniz Tutar: " + cekilecekTutar + " TL"
      );
    }
    break;

  case "3":
    // Para Yatırma
    let yatirilacakTutar = Number(prompt("Yatırmak istediğiniz tutarı giriniz:"));
    if (yatirilacakTutar > 0) {
      bakiye += yatirilacakTutar;
      alert(
        "İşlem başarılı!" + yeniSatir +
        "Yatırılan Tutar: " + yatirilacakTutar + " TL" + yeniSatir +
        "Güncel Bakiye: " + bakiye + " TL"
      );
    } else {
      alert("Lütfen geçerli bir tutar giriniz!");
    }
    break;

  case "4":
    // Çıkış
    alert("Sistemden çıkış yapılmıştır. İyi günler!");
    break;

  default:
    // Geçersiz seçim
    alert("Lütfen 1 ile 4 arasında bir değer seçiniz!");
    break;
}
