export type hikayeDetailMockup = typeof hikayeDetailMockup;

type ImagePathsType = {
  id: string;
  path: string;
};

type mimariHikaye = {
  id: number;
  name: string;
  href?: string;
  description1?: string;
  description2?: string;
  description3?: string;
  description4?: string;
  imagePaths?: Array<string>;
};

export const hikayeDetailMockup: { hikaye: mimariHikaye[] } = {
  hikaye: [
    {
      id: 1,
      name: "Kadıoğlu Divan Camii",
      href: "/kadioglumiras",
      description1: `Devrekani kent merkezinin kuzeyinde de yer alan Cami, Kadıoğlu köyü sınırları içinde yer almaktadır (41°47'9.935'' 33°56'9.35''). Cami Kadıoğlu Köyü ile Saraydurak Köyü arasında vadi tabanında inşa edilmiştir (Şekil 4.3). Tapuda 167 Ada 3 Parselde kayıtlı olan Caminin mevki “Cami Yanı” olarak geçmektedir. Camiye giden köy yolu 2021 yılı Eylül ayında gerçekleşen sel felaketi sonucu kapanmıştır. Günümüzde vadide oluşturulan patika yoldan ulaşım sağlanmaktadır. Cami mülkiyeti köy tüzel kişiliğine aittir.  Caminin giriş kapısının üzerinde yer alan kitabesine göre 1217 H /1802-1803 M. Tarihinde yaptırıldığı anlaşılmaktadır (Şekil 4.4). Kitabe metninde;
          “Şu dünyaya geldim libas yok
          mahşere gidem senedim ticarette ziyan kıldım.
          ağam hican..ettik şuyuhan hacı şerifin vakfına buldu 
          Ferahnake etti Mevlana..bizi”
          (Çeviri. Hacer Sarıkaya)
          yazmaktadır.
          Caminin bulunduğu mevki işlevinden kaynaklı kayıtlara Cami yanı olarak geçmiştir. Bölgenin dağlık olması parçalı yerleşim alanlarının kurulmasına sebep olmuştur. Küme evler olarak adlandırılan çevre mahalleler tarihi süreçte vadideki camiyi Cuma ve Bayram namazları için kullanmıştır. Günümüzde araç ulaşımının olmaması ve köylerin insansızlaşması sonucu terk edilmiştir. Köyde betonarmeden yapılmış ve vadinin anayol ile kesiştiği noktada günümüzde aktif olarak kullanılan bir cami mevcuttur. Köy kış aylarından iki hanelidir.`,
      imagePaths: ["/kadiogluhikaye/kadioglu_hikayesi_1.JPG"],
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
