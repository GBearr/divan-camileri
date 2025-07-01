export type hikayeDetailMockup = typeof hikayeDetailMockup;

type ImagePathsType = {
  number: string;
  path: string;
};

type mimariHikaye = {
  id: number;
  name: string;
  description?: string;
  imagePaths?: ImagePathsType[];
};

export const hikayeDetailMockup: { hikaye: mimariHikaye[] } = {
  hikaye: [
    {
      id: 1,
      name: "Kadıoğlu Divan Camii",
      description: `Devrekani kent merkezinin kuzeyinde de yer alan Cami, Kadıoğlu köyü sınırları içinde yer almaktadır (41°47'9.935'' 33°56'9.35''). Cami Kadıoğlu Köyü ile Saraydurak Köyü arasında vadi tabanında inşa edilmiştir. Tapuda 167 Ada 3 Parselde kayıtlı olan Caminin mevki “Cami Yanı” olarak geçmektedir. Camiye giden köy yolu 2021 yılı Eylül ayında gerçekleşen sel felaketi sonucu kapanmıştır. Günümüzde vadide oluşturulan patika yoldan ulaşım sağlanmaktadır. Cami mülkiyeti köy tüzel kişiliğine aittir.  Caminin giriş kapısının üzerinde yer alan kitabesine göre 1217 H /1802-1803 M. Tarihinde yaptırıldığı anlaşılmaktadır (Şekil 4.4). Kitabe metninde;,,,
          “Şu dünyaya geldim libas yok
          mahşere gidem senedim ticarette ziyan kıldım.
          ağam hican..ettik şuyuhan hacı şerifin vakfına buldu 
          Ferahnake etti Mevlana..bizi”,,,
          (Çeviri. Hacer Sarıkaya),,,
          yazmaktadır.
          Caminin bulunduğu mevki işlevinden kaynaklı kayıtlara Cami yanı olarak geçmiştir. Bölgenin dağlık olması parçalı yerleşim alanlarının kurulmasına sebep olmuştur. Küme evler olarak adlandırılan çevre mahalleler tarihi süreçte vadideki camiyi Cuma ve Bayram namazları için kullanmıştır. Günümüzde araç ulaşımının olmaması ve köylerin insansızlaşması sonucu terk edilmiştir. Köyde betonarmeden yapılmış ve vadinin anayol ile kesiştiği noktada günümüzde aktif olarak kullanılan bir cami mevcuttur. Köy kış aylarından iki hanelidir.`,
      imagePaths: [
        {
          number: "Şekil 4.4 Kadıoğlu Köyü Divan Cami Kitabesi",
          path: "/koyler/kadioglu/kadioglu-sekil-4.4.JPG",
        },
      ],
    },
    {
      id: 2,
      name: "Çörekçi Köyü, Elmalı Mahalle Camii",
      description: `Devrekani kent merkezinin kuzeydoğusunda yer alan Cami, Çörekçi Köyü sınırları içinde Elmalı Mahallesinde yer almaktadır (41° 46' 35.4714" 33° 58' 22.656"). Cami; Karadeniz’e Abana ilçesi sınırlarında dökülen Ezine Çayına bağlanan, Meydan çayının kenarında Pazar yanı mevkinde 166 ada 1 parselde inşa edilmiştir. Camii, Çörekçi Köyü, Kaya Mahallesi, Elmalı Mahallesi, Safdağ Mahallesi ve Egriç Mahallesinin ortak camisi olarak kullanılmıştır. 2021 yılı Eylül ayında gerçekleşen sel felaketinden etkilenmiş ve sonrasında tadilat geçirmiştir. Cami mülkiyeti köy tüzel kişiliğine aittir.  Yapının bir kitabesi bulunmadığı için yapım tarihi bilinememektedir.`,
      imagePaths: [
        {
          number: "",
          path: "/koyler/corekci/metin-disi/metin_disi_3.JPG",
        },
      ],
    },
    {
      id: 3,
      name: "Şenlik Köyü, Delimusa Camii",
      description: `Devrekani kent merkezinin kuzeybatısında yer alan Cami, Şenlik köyü Delimusa mahallesi sınırları içinde yer almaktadır (41° 44' 10.284" 33° 50' 16.404").,,, Tapuda 117 Ada 3 Parselde kayıtlıdır. Cami Delimusa, Gümesini, Bereketli ve Kırcalar Köyleri’nin  ortak camisi olarak kullanılmıştır. Cami Delimusa Mahallesinde mahallenin kuzeyinde tepelik bir araziye inşa edilmiştir. Alt arazisinde eski yıkılmak üzere olan okul yapısı ile kuzey cephesine bitişik inşa edilmiş köy konağı bulunmaktadır. Ortak kullanılan bu üç yapının yan yana olmasından bu mahallenin tarihte merkez olarak kullanıldığı düşünülmektedir.  Cami mülkiyeti Kastamonu vakıflar genel müdürlüğüne aittir. Cami Ankara Kültür ve Tabiat Varlıkları Koruma Kurulu tarafından “21.10.2011 / 113” karar tarih numarası ile tescil altına alınmıştır.,,, Caminin yapım tarihi bilinmemektedir. Ancak Caminin kuzeybatı cephesine yapılan ek binanın giriş kapısının üzerinde saç levha üzerine latin harfleler ile H.1312 (1894/1895) yazılıdır (Şekil 4.19). `,
      imagePaths: [
        {
          number:
            "Şekil 4. 19. Şenlik Köyü, Delimusa Cami, Levha ve ek yapı ile orijinal yapı malzeme detayı ",
          path: "/koyler/senlik/sekil-4.19.jpg",
        },
      ],
    },
    {
      id: 4,
      name: "Akdoğan Köyü Camii",
      description: `Devrekani kent merkezinin kuzeydoğunda yer alan Cami, Akdoğan Köyü sınırları içindedir (41° 45' 13.5354" 34° 0' 19.2594"). Köy merkezinde yer alan camii, güneye bakarlı bir arsa üzerine oturtulmuştur. Tapuda 126 Ada 1 Parselde kayıtlı olan caminin mevki “Köyiçi Mevki” olarak geçmektedir. Yapım tarihi bilinmeyen yapının kuzeydoğu duvarında yer alan 1416 tarihli kitabenin başka bir camiden alınarak buraya taşındığı ifade edilmiştir . Cami içerisinde yer alan berat yazısında ise ibadete açılma tarihi 1206H/1789M olarak ifade edilmiştir. Cami mülkiyeti 2019 yılına kadar Karahasanoğlu Ahmet Alemder Camii Şerifi Vakfına ait olsa da günümüzde Vakıflar Bölge Müdürlüğüne aittir.`,
      imagePaths: [
        {
          number: "",
          path: "/koyler/akdogan/metin-disi/1000090460.jpg",
        },
      ],
    },
    {
      id: 5,
      name: "Kurt Köyü, Çirişoğlu Mah. Divan Camii",
      description:
        "Devrekani kent merkezinin kuzeyinde yer alan Camii Kurt Köy Çirişoğlu Mahallesi sınırları içinde yer almaktadır (41°42'29.068'' 33°56'7.531'') (Şekil 4.32). Tapuda 143 Ada 8 Parselde kayıtlıdır. Cami Sulhittin Divanına  bağlı; Çirişoğlu, Nebioğlu, Keleş, Delihaliller Mahalleleri ile Kurt Köy ve Selahattin Köyün ortak camisi olarak kullanılmıştır. Günümüzde de beratlıdır ve Çirişoğlu Mahalle camisi olarak kullanılmaktadır. Cami haziresi ve imam lojmanının bulunduğu bahçe içerisinde yer almaktadır. Mülkiyeti Kurt Camii Şerifi Vakfına aittir. Cami Ankara 1 Numaralı Kültür Varlıklarını Koruma Bölge Kurulu tarafından “13.9.2013/955” karar tarih numarası ile tescil altına alınmıştır. Caminin yapım tarihine ait bir kitabeye ulaşılamamıştır. Kastamonu vakıflar Bölge müdürlüğünün 2013 yılında yaptığı saha incelemeleri sonucu yayınlanan raporda yapım tarihi için19. Yy yapısı olduğu ifade edilmiş olsa da Diyanet İşleri bakanlığı tarafından camiye verilen beraat üzerinde 1455 tarihinde yapıldığına ait bilgi yer almaktadır.",
      imagePaths: [
        {
          number: "",
          path: "/koyler/kurt/metin-disi/IMG_8887.JPG",
        },
      ],
    },
    {
      id: 6,
      name: "Yazıbelen Köyü, Kıvraç Camii",
      description:
        "Devrekani kent merkezinin kuzeyinde yer alan Cami, Yazıbelen Köyü sınırları içindedir (41°38'45.91229'' 33°47'57.27719''). Tapuda 105 ada 11 parsele kayıtlıdır. Cami Kıvraç Divanına  bağlı Şeyhbali Köyü, Delihacılar Köyü, Kıvraç Köyü (Yazıbelen Köyü) ve Bozkoca Köyü’nün ortak camisi olarak kullanılmıştır. Tescilli olmayan caminin mülkiyeti köy tüzel kişiliğine aittir.,,,Camii kapısının üzerinde yer alan kitabede, ,,, “Bu mescid-i şerifi Reisü’lküttab el-Hac Mustafa Efendi, Küreemini el Hac İbrahim Ağa mübaşeretiyle tamir eylemiştir. Sene 1159”(Çiftçi, 2018),,,yazmaktadır.,,,Bundan kaynaklı yapının yapım tarihinin 1159 Hicri tarihinden önce yapıldığı anlaşılmaktadır. Halk arasında Kıvraç Cami olarak bilinen yapının yapıldığı tarihten sonra çevresinde yerleşim yerinin oluştuğu ifade edilmiştir .",
      imagePaths: [
        {
          number: "",
          path: "/koyler/yazibelen/metin-disi/IMG20220910162233.jpg",
        },
      ],
    },
    {
      id: 7,
      name: "Bozkocatepe Divan Camii",
      description:
        "Devrekani kent merkezinin kuzeyinde yer alan Cami, Bozkocatepe Köyü sınırları içindedir (41°39'57.2558'' 33°50'53.5923''). Tapuda 115 ada 1 parsele kayıtlıdır. Cami Bozkoca Divanına  bağlı Davutlar Köyü, Tepe Köyü, Çalkaya Köyü, Hışımlar Köyü, Kurmalar Köyü, Kızıllar Köyü ve Bozkocatepe Köyü’nün ortak camisi olarak kullanılmıştır. Tescilli olmayan caminin mülkiyeti köy tüzel kişiliğine aittir. ,,,Camii kapısının üzerinde yer alan kitabede 1578 tarihinde yapıldığı yazmaktadır. Lakin kitabe yüzey kirlenmesi ve yüzey kayıpları sebebi ile okunamamıştır.",
      imagePaths: [
        {
          number:
            "Şekil 4. 44. Bozkocatepe Köyü, Kadı Çelebi Caminin Kitabesi ",
          path: "/koyler/bozkocatepe/sekil-4.44.jpg",
        },
      ],
    },
    {
      id: 8,
      name: "Doğuörcün Köyü, Biyoğlu Camii",
      description: `Devrekani kent merkezinin kuzeydoğusunda yer alan Cami, Doğuörcün Köyü sınırları içindedir (41° 40' 33.024" 33° 58' 42.9234") (Şekil 4. 49). Tapuda 128 Ada 1 Parselde kayıtlı olan caminin mevki “kovacık” olarak geçmektedir. Camiye en yakın yerleşim yeri 1 km uzaklıkta Ulamış Köyü Biyo Mahallesidir. Tarlalarla çevrili düz bir arazide inşa edilmiştir. Araç ve yaya yolu mevcut değildir. Cami Ulamış Divanına  bağlı Sökmen Mahallesi ve Biyo Mahallesi’nin ortak camisi olarak kullanılmıştır. Tescilli olmayan caminin mülkiyeti köy tüzel kişiliğine aittir.  Yapının kitabesi yoktur. Biyo Mahallesi sakinleri ile yapılan görüşmeden yapının 18. yy.dan sonra yapıldığı düşünülmüştür.`,
      imagePaths: [
        {
          number: "",
          path: "/koyler/doguorcun/metin-disi/1000084360.jpg",
        },
      ],
    },
    {
      id: 9,
      name: "Alaçay Köyü, Kır Camii",
      description: `Devrekani kent merkezinin kuzeydoğusunda yer alan Cami, Alaçay Köyü sınırları içindedir (41° 41' 20.4"  34° 1' 48.072") (Şekil 4. 54). Tapuda 141 Ada 3 Parselde kayıtlı olan caminin mevki “cami önü” olarak geçmektedir. Camiye en yakın yerleşim yeri, 500 m uzaklıkta Alaçay Köyü Cinoğlu Mahallesidir. Mera alanları ile çevrili düz bir arazide inşa edilmiştir.  Camii, Cinoğlu Mahallesi, Kızılkese Mahallesi, Kabalar Mahallesi, Bayramoğlu Mahallesinin ortak camisi olarak kullanılmıştır. Tescilli olmayan caminin mülkiyeti köy tüzel kişiliğine aittir. Yapının kitabesi yoktur. Cinoğlu Mahallesi sakinleri ile yapılan görüşmeden yapının 18. Yy.dan sonra yapıldığı bilgisi aktarılmıştır.`,
      imagePaths: [
        {
          number: "",
          path: "/koyler/doguorcun/IMG_9638.JPG",
        },
      ],
    },
    {
      id: 10,
      name: "Çayırcık Mahallesi, İsmail Bey Camii",
      description: `Devrekani kent merkezinin batısında yer alan Cami, Çayırcık mahallesi sınırları içindedir (41° 36' 13.32" 33° 48' 51.1194"). Tapuda 106 Ada 1 Parselde kayıtlı olan caminin mevki “çayırcık” olarak geçmektedir. Cami mülkiyeti Vakıflar Bölge Müdürlüğüne aittir. Camii, Ankara 1 Numaralı Kültür Varlıklarını Koruma Bölge Kurulu tarafından “26.01.2017/4042” karar tarih numarası ile tescil altına alınmıştır. Cami Candaroğlu Beyi İsmail Bey tarafından 1455 yılında ilk yapıldığı mescidin genişletilmesi amacı ile yeniden yaptırılmıştır. Arşiv kayıtlarından saray yapılarının da cami çevresinde olduğu ve caminin devlet dairesi olarak da kullanıldığı anlaşılmaktadır (Çiftçi, 2018)`,
    },
    {
      id: 11,
      name: "Kadirbeyoğlu Köyü, Duran Camii",
      description: `Devrekani kent merkezinin kuzeydoğusunda yer alan Cami, Kadirbey Mahallesi sınırları içindedir (41° 37' 37.6314" 33° 53' 52.224") (Şekil 4. 63). Camii en yakın yerleşim yeri 100 m uzaklıkta Duran Küme Evlerdir. Mera ve tarlalarla çevrili düz bir arazide inşa edilmiştir.  Tapuda 673 Ada 2 Parselde kayıtlı olan caminin mevki “duran” olarak geçmektedir. Camiye en yakın yerleşim yeri, 500 m uzaklıkta Alaçay Köyü Cinoğlu Mahallesidir. Mera alanları ile çevrili düz bir arazide inşa edilmiştir.  Camii, Ahmetoğlu Mahallesi ve Duran Mahallesinin ortak camisi olarak kullanılmıştır. Tescilli olmayan caminin mülkiyeti köy tüzel kişiliğine aittir. Yapının kitabesi yoktur.`,
    },
    {
      id: 12,
      name: "Çontay Köyü, Lala Paşa Camii",
      description: `Devrekani kent merkezinin doğusunda yer alan Cami, Çontay Köyü sınırları içindedir (41° 36' 54.9354"  33° 58' 1.4514").  Tapuda 114 Ada 1 Parselde kayıtlı olan caminin mevki “Lalaköy” olarak geçmektedir. Camii en yakın yerleşim yeri 1500 m uzaklıkta Çorbacı Köyü, Gelinoğlu Mahallesidir. Orman ve tarla alanları ile çevrili düz bir arazide inşa edilmiştir.  Cami Çontay Divanına  bağlı Başakpınar Köyü, Alibeyoğlu Köyü, Gelinoğlu Köyü, Çorbacı Köyü, Laçin Köyü ve Contay Köyünün ortak camisi olarak kullanılmıştır. Cami mülkiyeti Vakıflar Genel Müdürlüğüne aittir. Kitabesi bulunmayan Camii, Ankara 1 Numaralı Kültür Varlıklarını Koruma Bölge Kurulu tarafından “10.7.2008/3307” karar tarih numarası ile tescil altına alınmıştır.  Yapının kitabesi yoktur. Arşiv kayıtlarına göre 1566 yılından önce yapıldığı anlaşılmaktadır.`,
    },
    {
      id: 13,
      name: "Halife Köyü Divan Camii",
      description: `Kastamonu kent merkezinin kuzeybatısında yer alan Cami, Halife Köyü sınırları içindedir (41° 30' 57.96" 33° 44' 43.08"). Tapuda 141 Ada 1 Parselde kayıtlı olan caminin mevki “köyiçi” olarak geçmektedir. Cami mülkiyeti köy tüzel kişiliğine aittir. Kitabesi bulunmayan Camii, Ankara Kültür ve Tabiat Varlıklarını Koruma Kurulu tarafından “10.12.1991/2119” karar tarih numarası ile tescil altına alınmıştır.`,
      imagePaths: [
        {
          number: "",
          path: "/koyler/halife/metin-disi/metin-disi-1.jpg",
        },
        {
          number: "",
          path: "/koyler/halife/metin-disi/metin-disi-2.jpg",
        },
      ],
    },
    {
      id: 14,
      name: "Kasaba Köyü, Mahmut Bey Camii",
      description: `Kastamonu kent merkezinin kuzeyinde de yer alan Cami, Kasaba Köyü sınırları içindedir (41° 28‘ 49.594’’ 33° 41‘ 17.702’’). Tapuda 141 Ada 17 Parselde kayıtlı olan caminin mevki “lalaköy” olarak geçmektedir. Cami Nefsi Kasaba Divanına  bağlı   Kasabaörencik Köyü ve Kasaba Köyünün ortak camisi olarak kullanılmıştır. Cami mülkiyeti Vakıflar Genel Müdürlüğüne aittir. Camii, Ankara Kültür ve Tabiat Varlıklarını Koruma Kurulu tarafından “10.3.2006/1365” karar tarih numarası ile tescil altına alınmıştır.Kitabesinden 1366 M. Tarihinde Emir Mahmut Bey tarafından yapıldığı anlaşılmaktadır. Eski adı Ilısu kasabası olan bu bölge aynı zamanda Emir Mahmut beyin karargahında bulunduğu mevki olduğu düşünülmektedir (Çiftçi, 1995). Cami 2014 yılında UNESCO Geçici Miras Listesine alınmış ve 2023 yılında Anadolu’nun Orta Çağ Dönemi Ahşap Hipostil Camiileri kapsamında Miras listesine dahil edilmiştir(Akok, 1946; Karasalihoğlu, 2022). Ayrıca Köyde günümüzde mevcut olmayan medrese yapısının da varlığından bahsedilmektedir. Yapım tarihi ve yeri hakkında bilgi elde edilememiştir (Akok, 1946).`,
      imagePaths: [
        {
          number: "",
          path: "/koyler/mahmutbey/metin-disi/IMG20210430155718.jpg",
        },
        {
          number: "",
          path: "/koyler/mahmutbey/metin-disi/IMG20210430155839.jpg",
        },
      ],
    },
    {
      id: 15,
      name: "Duruçay Köyü, Halil Bey Camii",
      description:
        "Kastamonu kent merkezinin kuzeyinde de yer alan Cami, halk arasında camili köy olarak bilinen Duruçay köyü sınırları içindedir (41°29'0.68'' 33°46'32.74''). Tapuda 151 Ada 4 Parselde kayıtlı olan caminin mevki “köyiçi” olarak geçmektedir.  Cami Arız Divanına  bağlı Arız Köyü, Duruçay (Kemah) Köyü ve Gökçekent Köyünün ortak camisi olarak kullanılmıştır.,,,Cami kitabesine göre; 1363 M. Tarihinde Halil Bey tarafından yaptırıldığı anlaşılmaktadır (Şekil 4.86). Kitabe metninde;,,,“Mescitler Allaha mahsustur.Orda Allahtan başka hiçbir şeye ibadet olmaz.Bu camiyi hayır sahibi büyük Emir İsmail oğlu Halil Bey 765 H. Yılında yaptırdı.Allah kabul etsin.”,,,(Çeviri. Gökoğlu, 1952),,,yazmaktadır. ,,,Cami kırsal yerleşim sahasında, devşirme malzeme kullanıldığı tespit edilen tek yapıdır. Cami mülkiyeti köy tüzel kişiliğine aittir. Cami Gayrimenkul Eski Eserler Anıtlar Yüksek Kurulu tarafından “6.2.1982 / 3312” karar tarih numarası ile tescil altına alınmıştır.",
      imagePaths: [
        {
          number: "Şekil 4. 86. Duruçay Köyü Halil Bey Caminin Kitabesi",
          path: "/koyler/durucay/sekil-4.86.JPG",
        },
      ],
    },
    {
      id: 16,
      name: "Talipler Köyü, Rüstem Paşa Camii",
      description:
        "Kastamonu kent merkezinin kuzeybatısında yer alan Cami, Talipler Köyü sınırları içindedir (41°26'51.024'' 33°40'3.357''). Tapuda 151 Ada 4 Parselde kayıtlı olan caminin mevki “tekkecivarı” olarak geçmektedir.  Cami Çiğil Divanı-Benekşe Divanına bağlı Çiğil Köyü, Talipler Köyü, Dokuzkat Köyü, Mehran Köyü ve Taşlık Köyünün ortak camisi olarak kullanılmıştır. Mülkiyeti Vakıflar Genel Müdürlüğü ait olan Camii, Ankara 1 Numaralı Kültür Varlıklarını Koruma Bölge Kurulu tarafından “28.04.2016/3310” karar tarih numarası ile tescil altına alınmıştır. Yapı Kanuni Sultan Süleyman’ın Sadrazamı Rüstem Paşa tarafından 1530 yılında yaptırılmıştır. Cami Talipler köyünden 15 km uzaklıkta Menekşe tepesinde inşa edilmiştir.",
      imagePaths: [
        {
          number: "",
          path: "/koyler/talipler/IMG20210430122108.jpg",
        },
        {
          number: "",
          path: "/koyler/talipler/IMG20210430122237.jpg",
        },
      ],
    },
    {
      id: 17,
      name: "Göl Köy, Şeyh Ahmet Camii",
      description:
        "Kastamonu kent merkezinin kuzeyin de yer alan Cami, Gölköy sınırları içindedir (41°27'19.0977'' 33°43'51.5586''). Tapuda 184 Ada 1-3 Parselde kayıtlı olan caminin mevki “orta” olarak geçmektedir.  Cami Nefsi Göl Divanın  ortak camisi olarak kullanılmıştır. Mülkiyeti Vakıflar Genel Müdürlüğü ait Camii, Ankara 1 Numaralı Kültür Varlıklarını Koruma Bölge Kurulu tarafından “05.11.2015/2779” karar tarih numarası ile tescil altına alınmıştır. Camiye ait bir kitabe bulunamamıştır. 1206 M. Tarihli vakfiye kaydında caminin adının geçmesi sebebi ile yapım yılının bu tarihten önce olduğu tahmin edilmektedir (Çiftçi, 1995). Şeyh Ahmet Cami bir dergah-zaviyeli camidir. Günümüzde Küçük ölçekte bir külliyeye sahiptir. Caminin doğu tarafında yer alan türbe ve aşevi bulunmaktadır. Cami mülkiyeti 2015 yılında tescil altına alınarak Vakıflar Genel Müdürlüğüne devredilmiştir. ",
    },
    {
      id: 18,
      name: "Karamukmolla Köyü, Tekke Mah. Camii",
      description: `Kastamonu kent merkezinin batısında yer alan Cami, Karamukmolla Köyü, Tekke Mahallesi sınırları içindedir (41° 22' 3.7194" 33° 31' 0.8394"). Tapuda 101 Ada 28 Parselde kayıtlı olan caminin mevki “tekke” olarak geçmektedir.  Cami Karamukmolla Köyü, Erikbeli Mahallesi, Tekke Mahallesinin ortak camisi olarak kullanılmıştır. Cami mülkiyeti Köy Tüzel Kişiliğine aittir. Yapının bir kitabesi bulunmadığı için yapım tarihi bilinememektedir.`,
      imagePaths: [
        {
          number: "",
          path: "/koyler/karamukmolla/1000197929.jpg",
        },
        {
          number: "",
          path: "/koyler/karamukmolla/1000197934.jpg",
        },
      ],
    },
    {
      id: 19,
      name: "Kayalı Köyü Divan Camii",
      description:
        "Kastamonu kent merkezinin kuzeydoğusunda yer alan Cami, Kayalı Köyü ile Emirli Köyü arasında, Kayalı Köyü sınırları içindedir (41°27'2.71'' 33°52'52.85''). Tapuda 112 Ada 12 Parselde kayıtlı olan caminin mevki “yukarı avlagı” olarak geçmektedir. Çevresi tarlalarla çevrili yapıya en yakın yapılaşma 1.5 km uzaklıktadır. Cami Bozoğlak Köyü, Emirli Köyü, Ortaboğaz Köyü, Kayalı Köyü ve Ömerli Köyünün ortak camisi olarak kullanılmıştır. Cami mülkiyeti Köy Tüzel Kişiliğine aittir. Yapının bir kitabesi bulunmadığı için yapım tarihi, Müftülük Kütük defterine işlenen tarih olarak bilinmektedir. Köy halkı ile yapılan görüşmelerden yapının yapım tarihinin Osmanlı Dönemine kadar tarihlendiği ifade edebilmektedir.",
    },
    {
      id: 20,
      name: "Pehlivan Köyü, Derviş Camii",
      description:
        "Kastamonu kent merkezinin kuzeydoğusunda yer alan Cami, Pehlivan Köyü, Kuşkara köyü ve Derviş Mahallesi arasında, Derviş mahallesine 1,5 km uzaklıkta Pehlivan Köyü sınırları içindedir (41°27'49.64'' 33°56'7.85'') (Şekil 4.111).  Tapuda 118 Ada 1 Parselde kayıtlı olan caminin mevki “bük” olarak geçmektedir.  Cami Kuşkara Divanına bağlı Pehlivan Köyü, Kuşkara Köyü, Bıyıklı Mahallesi ve Derviş Mahallesinin ortak camisi olarak kullanılmıştır. Cami mülkiyeti Köy Tüzel Kişiliğine aittir. Yapının kitabesi rüzgâr erozyonuna maruz kaldığı için okunmakta güçlük çekilmiştir. Yapılış tarihi 1877 olarak tercüme edilmiştir. Günümüzde ikincil cami olarak sadece ilkbahar ve yaz aylarına denk gelen Cuma ve bayram namazlarında kullanılmaktadır.",
      imagePaths: [
        {
          number: "",
          path: "/koyler/pehlivan/metin-disi/metin-disi-1.jpg",
        },
        {
          number: "",
          path: "/koyler/pehlivan/metin-disi/metin-disi-3.jpg",
        },
      ],
    },
    {
      id: 21,
      name: "Eceoğlu Köyü Divan Camii",
      description: `Kastamonu kent merkezinin Güneydoğusunda yer alan Cami, arazide Eceoğlu köyü sınırları içerisindedir (41°18'25.8834" 33°53'50.28"). Tapuda 131 Ada 1 Parselde kayıtlı olan caminin mevki “camiüstü” olarak geçmektedir.  Cami Eyiceoğlu Divanına  bağlı Eceoğlu Köyü, Sarıca Mahallesi, Koşlu Mahallesi ve Taşanlar Mahallesinin ortak camisi olarak kullanılmıştır. Cami mülkiyeti Vakıflar Bölge Müdürlüğüne aittir. Yapı 1960 yılında bir yangın sonucu yıkılmış ve 1965 yılında köy halkı tarafından tekrar yanan yapının arazisine günümüzde kullanılan camini inşa edilmiştir. Somut olmayan miras değerin sürekliliği, günümüzde ilkbahar ve yaz aylarına denk gelen bayram namazlarının kılınmasıyla devam etmektedir. Çevresinde araç yolu olmayan cami hakkında köy halkı arasında da mitler mevcuttur.`,
    },
    {
      id: 22,
      name: "Emir Köyü, Cuma yanı Camii",
      description: `Kastamonu kent merkezinin güneydoğusunda yer alan cami, Emir Köyü sınırları içerisinde köyden 3 km daha güneydoğuda yer almaktadır (41° 20' 0.9594" 34° 0' 29.52").  Tapuda 169 Ada 3 Parselde kayıtlı olan caminin mevki “Camiyanı” olarak geçmektedir. Caminin kuzeyinden köyün ana yolu, doğusunda önceleri okul olarak kullanılmış iki katlı bina, güney cephesinde tarlalar ve batısında boş düz arsa yer almaktadır. Cami Bürme Divanına  bağlı Emir Köyü, Kabalı Mahallesi, Eylence Mahallesi ve Gökçetaş Köyünün ortak camisi olarak kullanılmıştır. Mülkiyeti Emir Köyü Şerifine ait olan Camii, Ankara 1 Numaralı Kültür Varlıklarını Koruma Bölge Kurulu tarafından “2.7.2015/2503” karar tarih numarası ile tescil altına alınmıştır. Yapının bir kitabesi bulunmadığı için yapım tarihine dair bir bilgi elde edilememiştir. Vakıflar Arşivinde Mescidi Cuma Cami olarak ifade edilmiştir.`,
      imagePaths: [
        {
          number: "",
          path: "/koyler/emir/hikaye.JPG",
        },
      ],
    },
    {
      id: 23,
      name: "Ümit Köyü, Kavun Mahallesi Camii",
      description: `Kastamonu kent merkezinin güneyinde yer alan Cami, Ümit Köyü sınırları içinde Kavun Mahallesindedir (41° 15' 28.8" 33° 48' 42.12"). Tapuda 149 Ada 18 Parselde kayıtlı olan caminin mevki “kavun” olarak geçmektedir.  Cami Ümit Köyü, Kavun Mahallesi, Kadı Mahallesi ve Hozmur Mahallesinin ortak camisi olarak kullanılmıştır. Cami mülkiyeti Köy Tüzel Kişiliğine aittir. Yapının bir kitabesi bulunmadığı için yapım tarihi bilinememektedir.`,
    },
    {
      id: 24,
      name: "Esenli Köyü, Sağıroğlu Mahalle Camii",
      description: `Kastamonu kent merkezinin güneyinde yer alan Cami Esenli Köyü sınırları içinde, arazidedir (41° 16' 24.24" 33° 51' 31.3194"). Tapuda 101 Ada 21 Parselde kayıtlı olan caminin mevki “köyiçi” olarak geçmektedir.  Cami Alamaslı Mahallesi, Civelek Mahallesi, Kadiroğlu Mahallesi, Sarıoğlu Mahallesi ve Esenli Köyünün ortak camisi olarak kullanılmıştır. Cami mülkiyeti Köy Tüzel Kişiliğine aittir. Kitabesi bulunmayan caminin 19.yy öncesi yapıldığı sözlü görüşmelerden öğrenilmiştir. 1984 yılında ise var olan divan cami yıkılarak aynı araziye tekrar yeniden cami yapılmış ve divan cami olarak 21 yy başlarına kadar kullanılmaya devam edilmiştir.`,
      imagePaths: [
        {
          number: "",
          path: "/koyler/sagiroglu/hikaye-1.jpg",
        },
        {
          number: "",
          path: "/koyler/sagiroglu/hikaye-2.jpg",
        },
      ],
    },
    {
      id: 25,
      name: "Şeyh Köyü Akça-su Camii",
      description: `Kastamonu kent merkezinin güneyinde de yer alan Cami, Şeyh Köyü sınırları içindedir (41° 13' 7.68" 33° 45' 8.9994"). Tapuda 148 Ada 1 Parselde kayıtlı olan caminin mevki “köyiçi” olarak geçmektedir. Camii, Hacıveli Köyü, Hamit Köyü, Tepe Mahallesi, Kargalar Mahallesi, Karaevli Köyü, Kürdeşe Köyü ve Şeyh Köyünün ortak camisi olarak kullanılmıştır. Camiye ait bir kitabe bulunamamıştır. Hüsamettin Çoban Bey tarafından yaptırıldığı 1308 tarihli Atabeygazi vakfına ait teamül ilamından tespit edilmiştir (Çiftçi, 1995). Cami 13yy’ın ilk çeyreğinde inşa edilmiştir (Yakupoğlu, 2009). Caminin haziresinde yer alan türbe Osmanlı Dönemine ait olmakla birlikte yapının kullanım amacının devam ettiği kitabesinde yer alan ifadelerden anlaşılmaktadır. Caminin bahçesinde bir medreseden bahsedilse de mevcutta bir mimari ize rastlanmamıştır.`,
    },
    {
      id: 26,
      name: "Alpı Köyü Divan Camii",
      description: `Kastamonu kent merkezinin güneyinde yer alan Cami Alpı Köyü sınırları içindedir (41° 13' 16.32" 33° 46' 13.7994") (Şekil 4. 139). Tapuda 105 Ada 6 Parselde kayıtlı olan caminin mevki “köyiçi” olarak geçmektedir. Cami Alpı Divanına  bağlı Alpı Köyü, Kayı Köyü ve Hacıveli Köyünün ortak camisi olarak kullanılmıştır. Cami mülkiyeti Köy Tüzel Kişiliğine aittir. Kitabesi bulunmayan Camii, Ankara 1 Numaralı Kültür Varlıklarını Koruma Bölge Kurulu tarafından “31.10.2019/7034” karar tarih numarası ile tescil altına alınmıştır. Kitabesi bulunamayan caminin yapılış tarihi müftülük kayıt defterlerinden 1830 yılında inşa edildiği tespit edilmiştir. Geniş bir düzlükte yer alan caminin bulunduğu parsele tarihi caminin bitişiğinde 1998 yılında betonarme yeni cami yapılmıştır.`,
      imagePaths: [
        {
          number: "",
          path: "/koyler/alpi/hikaye-1.jpg",
        },
        {
          number: "",
          path: "/koyler/alpi/hikaye-2.JPG",
        },
      ],
    },
    {
      id: 27,
      name: "Mescid Köyü Divan Camii",
      description: `Kastamonu kent merkezinin güneyinde yer alan Cami, Mescit köyü sınırları içerisindedir (41° 15' 22.3194" 33° 52' 1.9194"). Tapuda 113 Ada 12 Parselde kayıtlı olan caminin mevki “köyiçi” olarak geçmektedir. Camii; Koşanlı Mahallesi, Sarıkadı Mahallesi, Demirciler Mahallesi, Alayoğlu Mahallesi ve Mescid Köyü’nün ortak camisi olarak kullanılmıştır. Cami mülkiyeti Köy Tüzel Kişiliğine aittir. Cami 1955 yılında yıkılan eski cami yapısının arazisine tekrar inşa edilmiştir. Somut olmayan miras değerin sürekliliği, günümüzde ilkbahar ve yaz aylarına denk gelen bayram namazlarının kılınmasıyla devam etmektedir.`,
      imagePaths: [
        {
          number: "",
          path: "/koyler/saraycik/hikaye-1.JPG",
        },
      ],
    },
    {
      id: 28,
      name: "Saraycık Köyü, Dere Mah. Camii",
      description: `Kastamonu kent merkezinin güneyinde de yer alan Cami, Saraycık Köyü, Dere Mahallesi sınırları içindedir (41° 13' 40.404", 33° 51' 11.124"). Ağaçlı bahçelerle çevrili camii, doğudan batıya meyilli bir arsa üzerine kurulmuştur. Tapuda 192 Ada 1 Parselde kayıtlı olan caminin mevki “dere” olarak geçmektedir. Cami Saraycık Divanına  bağlı Saraycık Köyü, Dere Mahallesi, Murat Hacılar Mahallesi ve Kabak Mahallesinin ortak camisi olarak kullanılmıştır. Cami mülkiyeti Vakıflar Genel Müdürlüğüne aittir. Kitabesi bulunmayan Camii, Ankara 1 Numaralı Kültür Varlıklarını Koruma Bölge Kurulu tarafından “01.10.2015/2711” karar tarih numarası ile tescil altına alınmıştır.,,,Mahalleye yakın dönemde betonarme yeni bir camii yapıldığı için bugün kullanılmamaktadır.`,
    },
    {
      id: 29,
      name: "Kemerler Köyü Divan Camii",
      description: `Kastamonu kent merkezinin güneyinde yer alan Cami Kemerler Köyü sınırları içindedir (41° 13' 31.368" 33° 53' 15.8994"). Tapuda 126 Ada 6 Parselde kayıtlı olan caminin mevki “köyiçi” olarak geçmektedir. Cami Kemerler Köyü, Sütçüler mahallesi ve Göl Mahallesinin ortak camisi olarak kullanılmıştır. Cami mülkiyeti Köy Tüzel Kişiliğine aittir.,,,Kitabesinden 1879 M. Tarihinde Hacı İsmail Ağa tarafından yaptırıldığı anlaşılmaktadır. Kitabede Cuma ve Bayram namazlarının da kılınabilmesi için caminin kullanılabileceğinden bahsedilmiştir. Kitabe metninde;,,,“İş bu Ma’bud-ı Şerif’in banisi, Gömmece Divanı’ndan, Yakup-oğlu El-Hac İsmail ibn İbrahim, Yemen ticaretiyle müşerref olup, etyab-ı emvalinden sarf-ı nükud ederek inşa etmiştir. 1296” (Çeviri. Prof. Dr. Cevdet Yakupoğlu),,,yazmaktadır(Şekil 4.154).`,
    },
    {
      id: 30,
      name: "Çavundur Köyü, Yeni Cuma Camii",
      description: `Kastamonu kent merkezinin güneyinde yer alan Cami, Çavundur Köyü sınırları içinde, Bayramlı Küme Evlerine traktör yolu ile 15 km uzaklıktadır (41°15'27.4674" 33°55'2.9994") (Şekil 4.160). Cami kuzeyden güneye doğru hafif eğimli bir arazi üzerinde bulunmaktadır. Tapuda 115 Ada 1 Parselde kayıtlı olan caminin mevki “sofular” olarak geçmektedir. Yapının güneyinde ve batısında dere bulunmakta olup kuzeyinde ve doğusunda boş araziler yer almaktadır. Cami Çavundur Divanına  bağlı Evciler Köyü, Gelinören Köyü, Çavundur Köyü, Bayramlı Köyü ve Dayılar Köyü’nün ortak camisi olarak kullanılmıştır. Cami mülkiyeti Köy Tüzel Kişiliğine aittir. Kitabesi bulunmayan Camii, Ankara 1 Numaralı Kültür Varlıklarını Koruma Bölge Kurulu tarafından “24.09.2020/522” karar tarih numarası ile tescil altına alınmıştır. Yapının yapım tarihi bilinmemekle birlikte 18. Yy dönemine ait olduğu düşünülmektedir.`,
      imagePaths: [
        {
          number: "",
          path: "/koyler/cavundur/hikaye.JPG",
        },
      ],
    },
    {
      id: 31,
      name: "Canbaz Köyü Divan Camii",
      description: `Kastamonu kent merkezinin güneybatısında yer alan Cami, Cambaz Köyü sınırları içinde, köy merkezinden 3 km batıda inşa edilmiştir (41° 11' 4.056" 33° 39' 7.0914") (Şekil 4. 166). Tapuda 130 Ada 3 Parselde kayıtlı olan caminin mevki “mezarlık yanı” olarak geçmektedir. Cami Canbaz Divanına bağlı Aylıca Mahallesi, Delikocaoğlu Mahallesi, Kurtkayı Köyü ve Canbaz Köyü’nün ortak camisi olarak kullanılmıştır. Cami mülkiyeti Köy Tüzel Kişiliğine aittir. Kitabesi bulunmayan Camii, Ankara 1 Numaralı Kültür Varlıklarını Koruma Bölge Kurulu tarafından “22.7.1983/4478” karar tarih numarası ile tescil altına alınmıştır.`,
      imagePaths: [
        {
          number: "",
          path: "/koyler/canbaz/hikaye.jpg",
        },
      ],
    },
    {
      id: 32,
      name: "Karaçomak Köyü Camii",
      description: `Kastamonu kent merkezinin Güneybatısında yer alan Cami, arazide Karaçomak köyü sınırları içerisindedir (41° 9' 56.844" 33° 42' 51.8394"). Tapuda 151 Ada 17 Parselde kayıtlı olan caminin mevki “köyiçi” olarak geçmektedir. Cami Karaçomak Divanına  bağlı Eseler Mahallesi, Göktaş Mahallesi, Çandı Mahallesi, Demirci Mahallesi, Aşağı Akça Mahallesi ve Karaçomak Köyü’nün ortak camisi olarak kullanılmıştır. Cami mülkiyeti Köy Tüzel Kişiliğine aittir.  Cami Ankara 1 Numaralı Kültür Varlıklarını Koruma Bölge Kurulu tarafından “16.4.2008/3088” karar tarih numarası ile tescil altına alınmıştır.,,,Yapı müftülük kütük defterine göre 1885 yılında inşa edilmiştir. Günümüzde yan parseline 1998 yılında yapılan yeni cami sebebi ile kullanıma kapatılmıştır.`,
    },
    {
      id: 33,
      name: "Ahlat Köyü, Benlisultan Camii",
      description: `Kastamonu kent merkezinin güneyinde yer alan Cami, Ahlat Köyü, Benli Sultan Mahallesi sınırları içindedir (41° 11' 47.2194" 33° 51' 53.496"). Tapuda 108 Ada 6 Parselde kayıtlı olan Caminin mevki “Benli Sultan” olarak geçmektedir. Cami mülkiyeti Kastamonu Vakıflar Bölge Müdürlüğüne aittir.,,,Yapı 1512-1520 yılları arsında Yavuz Sultan Selim tarafından inşa ettirilmiştir. Küçük bir külliye olarak planlanan cami çevresinde günümüze kadar gelmeyen bir medrese yapısı ve kütüphane yapısı olduğu da söylenmektedir(Çiftçi, 1995). Zaviyeli cami olarak da karşımıza çıkan cami döneminde çevre köylerden Cuma ve bayram namazı için toplanılan bir merkez niteliğindedir.`,
    },
    {
      id: 34,
      name: "Hüseyinli Köyü Camii",
      description: `Kastamonu kent merkezinin güneyinde yer alan Cami, Hüseyinli Köyü sınırları içindedir (41° 11' 36.6" 33° 55' 54.1194"). Tapuda 120 Ada 2 Parselde kayıtlı olan Caminin mevki “Köyiçi” olarak geçmektedir. Cami mülkiyeti Köy Tüzel Kişiliğine aittir.  
Yapının kitabesi yoktur. Muhtar ile yapılan görüşmeden yapının 1850 yılında yapıldığı öğrenilmiştir . Cumhuriyet Döneminde caminin çevresine okul yapısı eklenmiştir.`,
    },
    {
      id: 35,
      name: "Burhanlı Köyü, Fadıra Camii",
      description:
        "Kastamonu kent merkezinin güneyinde yer alan Cami, Burhanlı Köyü sınırları içinde, eski Tosya yolu üzerindedir (41°11'40.025'' 33°58'5.41'')(Şekil 4.188). Camiye en yakın yerleşim yeri 5 km uzaklıkta Hamzalı Köyüdür. Çevresi tarlalarla çevrilidir. Tapuda 117 Ada 16 Parselde kayıtlı olan Caminin mevki “Kiremitlik / Cami yanı” olarak geçmektedir. Cami mülkiyeti Köy Tüzel Kişiliğine aittir.,,,Yapının kitabesi yoktur. Muhtar ile yapılan görüşmeden yapının 18. Yy.dan sonra yapıldığı düşünülmüştür. Çalışma sahasında gabari olarak en küçük camidir.",
      imagePaths: [
        {
          number: "",
          path: "/koyler/fadira/metin-disi/hikaye.JPG",
        },
      ],
    },
  ],
};
