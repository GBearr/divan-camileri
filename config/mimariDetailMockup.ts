export type mimariDetailMockup = typeof mimariDetailMockup;

type mimariMiras = {
  id: number;
  name: string;
  href?: string;
  description1?: string;
  description2?: string;
  description3?: string;
  description4?: string;
  imagePaths?: Array<string>;
};

export const mimariDetailMockup: { miras: mimariMiras[] } = {
  miras: [
    {
      id: 1,
      name: "Kadıoğlu Divan Camii",
      href: "/kadioglumiras",
      description1: `Cami mihrap aksı üzerinde boyuna gelişim göstermiş olsa da kareye yakın dikdörtgen planlıdır. Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş, son cemaat yeri ve harim kurgusu ile inşa edilmiştir (Şekil 4.5). Caminin orijinal taban oturumu 11 x 12.2 metredir. Taş kâgir olan yapının duvar kalınlığı 80 cm’dir. Cami moloz taştan kâgir tekniği ile örülmüş olsa da beden duvarlarının köşelerinde ve orta noktalarında 25 cm eninde ahşap dikmeler ile beden duvarını dört parçaya bölecek şekilde yatayda ahşap hatıllar ile desteklenmiştir. Ahşap dikme ve kiriş sistemi ile taş yığma tekniğinin birlikte kullanıldığı almaşık teknik çalışma kapsamında incelenen camiler arasında tek örnektir. Cami üst örtüsü ahşap kırma çatıdır (Şekil 4.6). `,
      imagePaths: [
        "/kadioglumimarisi/kadioglu_mimari_1.JPG",
        "/kadioglumimarisi/kadioglu_mimari_2.JPG",
      ],
    },
    { id: 2, name: "Çörekçi Köyü, Elmalı Mahalle Camii" },
    { id: 3, name: "Şenlik Köyü, Delimusa Camii" },
    { id: 4, name: "Akdoğan Köyü Camii" },
    { id: 5, name: "Kurt Köyü, Çirişoğlu Mah. Divan Camii" },
    { id: 6, name: "Yazıbelen Köyü, Kıvraç Camii" },
    { id: 7, name: "Bozkocatepe Divan Camii" },
    { id: 8, name: "Doğuörcün Köyü, Biyoğlu Camii" },
    { id: 9, name: "Alaçay Köyü, Kır Camii" },
    { id: 10, name: "Çayırcık Mahallesi, İsmail Bey Camii" },
    { id: 11, name: "Kadirbeyoğlu Köyü, Duran Camii" },
    { id: 12, name: "Çontay Köyü, Lala Paşa Camii" },
    { id: 13, name: "Halife Köyü Divan Camii" },
    { id: 14, name: "Kasaba Köyü, Mahmut Bey Camii" },
    { id: 15, name: "Duruçay Köyü, Halil Bey Camii" },
    { id: 16, name: "Talipler Köyü, Rüstem Paşa Camii" },
    { id: 17, name: "Göl Köy, Şeyh Ahmet Camii" },
    { id: 18, name: "Karamukmolla Köyü, Tekke Mah. Camii" },
    { id: 19, name: "Kayalı Köyü Divan Camii" },
    { id: 20, name: "Pehlivan Köyü, Derviş Camii" },
    { id: 21, name: "Eceoğlu Köyü Divan Camii" },
    { id: 22, name: "Emir Köyü, Cuma yanı Camii" },
    { id: 23, name: "Ümit Köyü, Kavun Mahallesi Camii" },
    { id: 24, name: "Esenli Köyü, Sağıroğlu Mahalle Camii" },
    { id: 25, name: "Şeyh Köyü Akça-su Camii" },
    { id: 26, name: "Alpı Köyü Divan Camii" },
    { id: 27, name: "Mescid Köyü Divan Camii" },
    { id: 28, name: "Saraycık Köyü, Dere Mah. Camii" },
    { id: 29, name: "Kemerler Köyü Divan Camii" },
    { id: 30, name: "Çavundur Köyü, Yeni Cuma Camii" },
    { id: 31, name: "Canbaz Köyü Divan Camii" },
    { id: 32, name: "Karaçomak Köyü Camii" },
    { id: 33, name: "Ahlat Köyü, Benlisultan Camii" },
    { id: 34, name: "Hüseyinli Köyü Camii" },
    { id: 35, name: "Burhanlı Köyü, Fadıra Camii" },
  ],
};
