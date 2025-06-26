export type KadiogluMimariMirasMockup = typeof kadiogluMimariMirasMockup;

type ImagePathsType = {
  original: string;
  thumbnail: string;
};

type mimariMiras = {
  id: number;
  name: string;
  href: string;
  description1: string;
  description2?: string;
  description3?: string;
  description4?: string;
  imagePaths: ImagePathsType[];
};

export const kadiogluMimariMirasMockup: { miras: mimariMiras[] } = {
  miras: [
    {
      id: 1,
      name: "Hikayesi",
      href: "/kadioglumiras",
      description1: `Devrekani kent merkezinin kuzeyinde de yer alan Cami, Kadıoğlu köyü sınırları içinde yer almaktadır (41°47'9.935'' 33°56'9.35''). Cami Kadıoğlu Köyü ile Saraydurak Köyü arasında vadi tabanında inşa edilmiştir (Şekil 4.3). Tapuda 167 Ada 3 Parselde kayıtlı olan Caminin mevki “Cami Yanı” olarak geçmektedir. Camiye giden köy yolu 2021 yılı Eylül ayında gerçekleşen sel felaketi sonucu kapanmıştır. Günümüzde vadide oluşturulan patika yoldan ulaşım sağlanmaktadır. Cami mülkiyeti köy tüzel kişiliğine aittir.  Caminin giriş kapısının üzerinde yer alan kitabesine göre 1217 H /1802-1803 M. Tarihinde yaptırıldığı anlaşılmaktadır (Şekil 4.4). Kitabe metninde;
      “Şu dünyaya geldim libas yok
      mahşere gidem senedim ticarette ziyan kıldım.
      ağam hican..ettik şuyuhan hacı şerifin vakfına buldu 
      Ferahnake etti Mevlana..bizi”
      (Çeviri. Hacer Sarıkaya)
      yazmaktadır.
      Caminin bulunduğu mevki işlevinden kaynaklı kayıtlara Cami yanı olarak geçmiştir. Bölgenin dağlık olması parçalı yerleşim alanlarının kurulmasına sebep olmuştur. Küme evler olarak adlandırılan çevre mahalleler tarihi süreçte vadideki camiyi Cuma ve Bayram namazları için kullanmıştır. Günümüzde araç ulaşımının olmaması ve köylerin insansızlaşması sonucu terk edilmiştir. Köyde betonarmeden yapılmış ve vadinin anayol ile kesiştiği noktada günümüzde aktif olarak kullanılan bir cami mevcuttur. Köy kış aylarından iki hanelidir.`,
      imagePaths: [
        {
          original: "/kadiogluhikaye/kadioglu-hikaye-1.jpeg",
          thumbnail: "/kadiogluhikaye/kadioglu-hikaye-1.jpeg",
        },
      ],
    },
    {
      id: 2,
      name: "Mimarisi",
      href: "/kadioglumiras",
      description1:
        "Cami mihrap aksı üzerinde boyuna gelişim göstermiş olsa da kareye yakın dikdörtgen planlıdır. Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş, son cemaat yeri ve harim kurgusu ile inşa edilmiştir (Şekil 4.5). Caminin orijinal taban oturumu 11 x 12.2 metredir. Taş kâgir olan yapının duvar kalınlığı 80 cm’dir. Cami moloz taştan kâgir tekniği ile örülmüş olsa da beden duvarlarının köşelerinde ve orta noktalarında 25 cm eninde ahşap dikmeler ile beden duvarını dört parçaya bölecek şekilde yatayda ahşap hatıllar ile desteklenmiştir. Ahşap dikme ve kiriş sistemi ile taş yığma tekniğinin birlikte kullanıldığı almaşık teknik çalışma kapsamında incelenen camiler arasında tek örnektir. Cami üst örtüsü ahşap kırma çatıdır (Şekil 4.6).  Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, son cemaat yerinde yer alan tek kollu merdiven ile ulaşılmaktadır. Son Cemaat yeri harimden bir basamak yukarıda ve kadınlar mahfili iz düşümünde tek saf eninde planlanmıştır. Kadınlar Mahfilinde ahşap strüktürlü, orta aksında dikmeler üzerine konsol çıkma mevcuttur (Şekil 4.7). Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde sivri kemerli mihrap yer almaktadır (Şekil 4.7). Harim mihrap cephesinde üstte üç kemerli ve iz düşümlerinde iki düz atkılı pencere yer almaktadır. Harimin diğer cephelerinde de düz atkılı, kanatlı pencereler yer almaktadır. Pencereler ahşaptır. Doğu cephesinde iki tane tepe penceresi mevcuttur. Caminin tavanı ahşap çıtakaridir, köşelerde silme detayları mevcuttur. Orta göbeği yedigen bindirmeli ve geometrik motiflidir (Şekil 4.8). Kalemişi ya da bezeme mevcut değildir. Caminin harim, kadınlar mahfili ve son cemaat yeri zemin kaplaması rabıta tahtalıdır. Temeli hususunda bilgi edinilememiştir.Caminin kuzeybatı – giriş cephesine yapım tarihi tespit edilememiş bir ek yapılmıştır. Ahşap karkas arası kâgir dolgulu bu ek yapı zemin katta odunluk ve bir oda olarak planlanmış ve üst katta da kadınlar mahfiline eklenerek kadınlar mahfilini genişletmiştir (Şekil 4.9). Ek yapının kendi içerisinde bir düşey sirkülasyon elemanı yoktur. Orijinal yapıya sonradan eklenen bu ekin çatısı onarımlar esnasında orijinal yapı ile birleştirilerek tek örtülü bir sisteme dönüştürülmüştür. Camiyi genişletmek için yapılan bu ek ile caminin kullanıcı sayısının zamanla arttığı düşünülmektedir.",
      imagePaths: [
        {
          original: "/kadioglumimari/kadioglu-mimari-1.jpeg",
          thumbnail: "/kadioglumimari/kadioglu-mimari-1.jpeg",
        },
        {
          original: "/kadioglumimari/kadioglu-mimari-2.jpeg",
          thumbnail: "/kadioglumimari/kadioglu-mimari-2.jpeg",
        },
        {
          original: "/kadioglumimari/kadioglu-mimari-3.jpeg",
          thumbnail: "/kadioglumimari/kadioglu-mimari-3.jpeg",
        },
        {
          original: "/kadioglumimari/kadioglu-mimari-4.jpeg",
          thumbnail: "/kadioglumimari/kadioglu-mimari-4.jpeg",
        },
        {
          original: "/kadioglumimari/kadioglu-mimari-5.jpeg",
          thumbnail: "/kadioglumimari/kadioglu-mimari-5.jpeg",
        },
        {
          original: "/kadioglumimari/kadioglu-mimari-6.jpeg",
          thumbnail: "/kadioglumimari/kadioglu-mimari-6.jpeg",
        },
        {
          original: "/kadioglumimari/kadioglu-mimari-7.jpeg",
          thumbnail: "/kadioglumimari/kadioglu-mimari-7.jpeg",
        },
        {
          original: "/kadioglumimari/kadioglu-mimari-8.jpeg",
          thumbnail: "/kadioglumimari/kadioglu-mimari-8.jpeg",
        },
        {
          original: "/kadioglumimari/kadioglu-mimari-9.jpeg",
          thumbnail: "/kadioglumimari/kadioglu-mimari-9.jpeg",
        },
        {
          original: "/kadioglumimari/kadioglu-mimari-10.jpeg",
          thumbnail: "/kadioglumimari/kadioglu-mimari-10.jpeg",
        },
      ],
    },
    /*{
      id: 3,
      name: "Bozulma Durumları",
      href: "/kadioglumiras",
      description1:
        "Cami terk sebebi ile bakımsızdır ve çevrede yaşayan yabani hayvanlar odunluğu mesken olarak kullanmaktadır. Cami için gerçekleştirilen saha çalışmasında odunlukta yavru bir tilkinin yaşadığı tespit edilmiştir.  Hazire içerisinde olan cami otlarla sarılı bahçe içerisindedir. Cami de zeminden başlayan bir nem problemi mevcuttur. Taşlarda yosunlaşma ve kararmalar mevcuttur. Cami iç duvarlarında tavandan başlayarak zemine doğru uzanan derin çatlaklar mevcuttur (Şekil 4.10). Ek yapının kadınlar mahfili tavanında ve kadınlar mahfili döşemesinde yer yer rutubetten kaynaklanan kuru çürüme ve mantarlaşma mevcuttur (Şekil 4. 9). Yapıda kullanılan ahşap malzemelerde – dikme/ pencere kasaları / mahfil kirişi uçma delikleri mevcuttur.",
      imagePaths: [
        {
          original: "/kadioglubozulma/kadioglu-bozulma-1.jpeg",
          thumbnail: "/kadioglubozulma/kadioglu-bozulma-1.jpeg",
        },
        {
          original: "/kadioglubozulma/kadioglu-bozulma-2.jpeg",
          thumbnail: "/kadioglubozulma/kadioglu-bozulma-2.jpeg",
        },
        {
          original: "/kadioglubozulma/kadioglu-bozulma-3.jpeg",
          thumbnail: "/kadioglubozulma/kadioglu-bozulma-3.jpeg",
        },
        {
          original: "/kadioglubozulma/kadioglu-bozulma-4.jpeg",
          thumbnail: "/kadioglubozulma/kadioglu-bozulma-4.jpeg",
        },
        {
          original: "/kadioglubozulma/kadioglu-bozulma-5.jpeg",
          thumbnail: "/kadioglubozulma/kadioglu-bozulma-5.jpeg",
        },
      ],
    },*/
  ],
};
