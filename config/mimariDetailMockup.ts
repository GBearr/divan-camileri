export type mimariDetailMockup = typeof mimariDetailMockup;

type ImagePathsType = {
  number: string;
  path: string;
};

type mimariMiras = {
  id: number;
  name: string;
  description?: string;
  imagePaths?: ImagePathsType[];
};

export const mimariDetailMockup: { miras: mimariMiras[] } = {
  miras: [
    {
      id: 1,
      name: "Kadıoğlu Divan Camii",
      description: `Cami mihrap aksı üzerinde boyuna gelişim göstermiş olsa da kareye yakın dikdörtgen planlıdır. Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş, son cemaat yeri ve harim kurgusu ile inşa edilmiştir (Şekil 4.5). Caminin orijinal taban oturumu 11 x 12.2 metredir. Taş kâgir olan yapının duvar kalınlığı 80 cm’dir. Cami moloz taştan kâgir tekniği ile örülmüş olsa da beden duvarlarının köşelerinde ve orta noktalarında 25 cm eninde ahşap dikmeler ile beden duvarını dört parçaya bölecek şekilde yatayda ahşap hatıllar ile desteklenmiştir. Ahşap dikme ve kiriş sistemi ile taş yığma tekniğinin birlikte kullanıldığı almaşık teknik çalışma kapsamında incelenen camiler arasında tek örnektir. Cami üst örtüsü ahşap kırma çatıdır (Şekil 4.6).,,,Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, son cemaat yerinde yer alan tek kollu merdiven ile ulaşılmaktadır. Son Cemaat yeri harimden bir basamak yukarıda ve kadınlar mahfili iz düşümünde tek saf eninde planlanmıştır. Kadınlar Mahfilinde ahşap strüktürlü, orta aksında dikmeler üzerine konsol çıkma mevcuttur (Şekil 4.7). Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde sivri kemerli mihrap yer almaktadır (Şekil 4.7). Harim mihrap cephesinde üstte üç kemerli ve iz düşümlerinde iki düz atkılı pencere yer almaktadır. Harimin diğer cephelerinde de düz atkılı, kanatlı pencereler yer almaktadır. Pencereler ahşaptır. Doğu cephesinde iki tane tepe penceresi mevcuttur. Caminin tavanı ahşap çıtakaridir, köşelerde silme detayları mevcuttur. Orta göbeği yedigen bindirmeli ve geometrik motiflidir (Şekil 4.8). Kalemişi ya da bezeme mevcut değildir. Caminin harim, kadınlar mahfili ve son cemaat yeri zemin kaplaması rabıta tahtalıdır. Temeli hususunda bilgi edinilememiştir.,,,Caminin bulunduğu mevki işlevinden kaynaklı kayıtlara Cami yanı olarak geçmiştir. Bölgenin dağlık olması parçalı yerleşim alanlarının kurulmasına sebep olmuştur. Küme evler olarak adlandırılan çevre mahalleler tarihi süreçte vadideki camiyi Cuma ve Bayram namazları için kullanmıştır. Günümüzde araç ulaşımının olmaması ve köylerin insansızlaşması sonucu terk edilmiştir. Köy kış aylarından iki hanelidir. Öte yandan, köyde betonarmeden yapılmış ve vadinin anayol ile kesiştiği noktada günümüzde aktif olarak kullanılan başka bir cami mevcuttur.,,,Caminin kuzeybatı – giriş cephesine yapım tarihi tespit edilememiş bir ek yapılmıştır. Ahşap karkas arası kâgir dolgulu bu ek yapı zemin katta odunluk ve bir oda olarak planlanmış ve üst katta da kadınlar mahfiline eklenerek kadınlar mahfilini genişletmiştir. Ek yapının kendi içerisinde bir düşey sirkülasyon elemanı yoktur. Orijinal yapıya sonradan eklenen bu ekin çatısı onarımlar esnasında özgün yapı ile birleştirilerek tek örtülü bir sisteme dönüştürülmüştür. Camiyi genişletmek için yapılan bu ek ile caminin kullanıcı sayısının zamanla arttığı düşünülmektedir.,,,Cami terk sebebi ile bakımsızdır ve çevrede yaşayan yabani hayvanlar odunluğu mesken olarak kullanmaktadır. Saha çalışmasında odunlukta yavru bir tilkinin yaşadığı tespit edilmiştir.  Hazire içerisinde olan cami otlarla sarılı bahçe içerisindedir. Cami de zeminden başlayan bir nem problemi mevcuttur. Taşlarda yosunlaşma ve kararmalar mevcuttur. Ayrıca iç duvarlarda tavandan başlayarak zemine doğru uzanan derin çatlaklar mevcuttur. Ek yapının kadınlar mahfili tavanında ve kadınlar mahfili döşemesinde yer yer rutubetten kaynaklanan kuru çürüme ve mantarlaşma mevcuttur. Yapıda kullanılan ahşap malzemelerde – dikme/ pencere kasaları / mahfil kirişi uçma delikleri gözlemlenmiştir.  `,
      imagePaths: [
        {
          number: "Şekil 4.6 Kadıoğlu Köyü Divan Cami, güneybatı cephesi",
          path: "/koyler/kadioglu/kadioglu-sekil-4.6-1.JPG",
        },
        {
          number: "Şekil 4.6 Kuzeydoğu cephesi-giriş",
          path: "/koyler/kadioglu/kadioglu-sekil-4.6-2.JPG",
        },
        {
          number: "Şekil 4.7 Kadıoğlu Köyü Divan Cami, mihrap cephesi",
          path: "/koyler/kadioglu/kadioglu-sekil-4.7-1.JPG",
        },
        {
          number: "Şekil 4.7 mahfil ve son cemaat yeri",
          path: "/koyler/kadioglu/kadioglu-sekil-4.7-2.JPG",
        },
        {
          number: "Şekil 4.8 Kadıoğlu Köyü Divan Cami, tavan detayı",
          path: "/koyler/kadioglu/kadioglu-sekil-4.8.JPG",
        },
      ],
    },
    {
      id: 2,
      name: "Çörekçi Köyü, Elmalı Mahalle Camii",
      description:
        "Cami mihrap aksı üzerinde boyuna gelişim göstererek dikdörtgen planlıdır. Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş, son cemaat yeri ve harim kurgusu ile inşa edilmiştir. Caminin orijinal taban oturumu 9.5 x 19.6  metredir. Yapı karma kâgir teknik ile inşa edilmiştir. Harim katında taş kâgir örgü tekniği ve üst katı ise ahşap kurt boğaz tekniği kullanılmıştır. Ahşap kâgir dışarıdan bağdadi sıva ile kapatılmıştır. Taş kâgir duvar kalınlığı 90 cm ve ahşap duvarda 25 cm’dir. Cami üst örtüsü ahşap kırma çatılı galvanize saç ile kaplıdır (Şekil 4.13),,,.Caminin harimine, ek yapıdan iki basamakla inilerek kuzeybatı cephesinin orta aksında yer alan düz atkılı cümle kapısından girilmektedir. Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, son cemaat yerinde yer alan tek kollu merdiven ile ulaşılmaktadır. Son Cemaat yeri harimden iki basamak yukarıda ve kadınlar mahfili iz düşümünde tek saf eninde planlanmıştır (Şekil 4.14). Kadınlar mahfili de ahşap strüktürlü, harim katından yükselen dört ahşap direk üzerine bindirilmiştir. Bir metre düz çıkma yapmıştır.  Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde mukarnas kavsaralı mihrap yer almaktadır (Şekil 4.15). Harim mihrap cephesinde üstte iki düz atkılı ve iz düşümünde kemerli iki pencere yer almaktadır. Harimin güneybatı cephesinde harim seviyesinde üç mahfil seviyesinde dört pencere yer almaktadır. Kuzeydoğu cephesinde ise harim seviyesinde ve mahfil seviyesinde üç pencere yer almaktadır. Pencereler harim seviyesinde kemerli ve ahşap malzemeli, mahfil seviyesinde ise pvc malzeme ile düz atkılı biçimde kullanılmıştır. Caminin tavanı ahşap düz tavandır. Kalemişi ya da bezeme mevcut değildir. Yapının ahşap strüktürlü minaresi son cemaat yerinden yükselmektedir ve saç kaplamalıdır. Caminin harim, kadınlar mahfili zemin kaplamaları rabıta tahtalı ve son cemaat yeri zemini betondur. Temeli hususunda bilgi edinilememiştir.,,,Divaan bağlı köyler; Çörekçi Köyü, Kaya Mahallesi, Elmalı Mahallesi, Safdağ Mahallesi, Egriç Mahallesi dir. Caminin bulunduğu mevki işlevinden kaynaklı pazar yanı olarak geçmiştir. Birkaç köyün birlikte kullandığı pazar bu alanda kurulmaktadır. Aynı zamanda Elmalı Mahallesinde cumhuriyet döneminde ulaşım kolaylığından kaynaklı kıraathane ve market de hizmet vermeye başlamıştır. 2021 sel felaketi ile köyde nüfusun azalması kıraathanenin kapanması ve marketin taşınması gibi sebepler doğurmuştur. Caminin günümüzde cemaati yoktur. Somut olmayan miras değeri korunamamıştır.,,,Bilinen ilk müdahale 1975 yılında giriş aksı doğrultusunda genişletmeye yönelik ek yapı yapılmasıdır. Giriş için rüzgarlık ve cami içine girmeden namaz kılınabilecek mihraplı bir oda olarak düzenlenmiştir. Ek yapıya yol kotundan giriş sağlanırken ek yapıdan harime iki basamakla inilerek girilmektedir (Şekil 4. 16). Bu oluşan kot farkı yapının yapıldığı dönemden sonra yol kotunun yükseltildiğini düşündürmektedir. Ek yapının üst katı ise depo olarak kullanılmaktadır. Girişi kuzeybatı cephesine açılan bir kapı ile sağlanmaktadır. Bu kapıya doğrudan bir merdiven bağlantısı mevcut değildir. Aynı zamanda kadınlar mahfilinin kuzeybatı cephesine bir kapı açılmış ve ek yapının üst katına erişim verilmiştir. Caminin çatısı saç levha ile kaplanmış ve minaresi de saç levhalar ile sarılmıştır.,,,Caminin yapım tekniklerine bakıldığında kadınlar mahfilinin ahşap yığma tekniği ile inşa edilmiş olması caminin yapılış tarihinden sonra bir müdahale ile eklenebilecek olması ihtimalini düşündürse de bu düşünceye yönelik bir bilgiye ulaşılmamıştır. Kadınlar mahfilinin camlı kapılar ve doğramalar ile kapatılması ve bir sıra mesafe ile balkon oluşturulmasıdır. Camide kadınlar mahfiline açılan pencerelerin doğramaları değiştirilerek PVC pencere kullanılmıştır. 2021 yılında yaşanan sel felaketi sebebi ile harim zemin rabıta tahtaları değiştirilerek son cemaat yeri ve giriş alanına beton dökülerek yenilenmiştir.,,, Yapının üst örtüsü, özgün malzeme ve tekniklerden farklı olarak yakın dönemde gerçekleştirilen bir müdahale ile saç kaplama malzemesiyle yenilenmiştir.Caminin bozulma durumları incelendiğinde çatıda kullanılan sac malzeme paslanmış ve ciddi şekilde bozulma göstermiştir. Ayrıca, çatı eğiminin yetersiz olduğu yerlerde su birikintileri nedeniyle çürümeler görülmektedir. Yapının duvarlarında sıva dökülmeleri ve çatlaklar dikkat çekmektedir. Özellikle iki farklı malzemenin birleşim detaylarında hat boyunca çatlak izleri devam etmektedir. Duvarların alt kısımlarında nemlenmeye bağlı renk değişimleri ve malzeme bozulmaları vardır. Özellikle kuzeydoğu cephesinde sıva altındaki ahşap karkas sistemi açığa çıkmış olup, bu durum yapının taşıyıcı elemanlarının zarar görme riskini artırmaktadır. Mihrabın sonradan fayanslarla kaplanmış olması, estetik ve tarihi dokuyu zedelemektedir. Bazı bölgelerde yerel sıva tamirleri ile yenilemeler yapıldığı gözlemlenmiştir.,,,Yapı, kullanıcı müdahalelerine açık olduğu için orijinal malzemeler yerine sonradan eklenen uyumsuz malzemelerle kaplanmış ve bu durum yapının kimliğini kaybetmesine neden olmaktadır. Çevresel koşullar ve yanlış müdahaleler yapının hem strüktürel bütünlüğünü hem de estetik değerlerini olumsuz etkilememektedir. Ahşap ve taş malzemelerde görülen bozulmalar, koruyucu önlemlerin eksikliğine işaret etmektedir.",
      imagePaths: [
        {
          number:
            "Şekil 4. 13. Çörekçi Köyü, Elmalı Mahalle Cami; kuzeybatı cephesi",
          path: "/koyler/corekci/sekil-4.13-1.JPG",
        },
        {
          number: "Şekil 4.13 güneybatı cephesi-giriş",
          path: "/koyler/corekci/sekil-4.13-2.JPG",
        },
        {
          number:
            "Şekil 4. 14.Çörekçi Köyü, Elmalı Mahalle Cami; mihrap cephesi",
          path: "/koyler/corekci/sekil-4.14-1.JPG",
        },
        {
          number: "Şekil 4.14 son cemaat yeri ",
          path: "/koyler/corekci/sekil-4.14-2.JPG",
        },
        {
          number:
            "Şekil 4. 15. Çörekçi Köyü, Elmalı Mahalle Cami; kadınlar mahfili balkon",
          path: "/koyler/corekci/sekil-4.15-1.jpg",
        },
        {
          number: "Şekil 4.15 kadınlar mahfili",
          path: "/koyler/corekci/sekil-4.15-2.jpg",
        },
        {
          number:
            "Şekil 4. 16. Çörekçi Köyü, Elmalı Mahalle Cami kuzeybatı cephesine eklenen ek yapı",
          path: "/koyler/corekci/sekil-4.16-1.JPG",
        },
        {
          number: "Şekil 4.16 ek yapının zemin katı",
          path: "/koyler/corekci/sekil-4.16-2.JPG",
        },
      ],
    },
    {
      id: 3,
      name: "Şenlik Köyü, Delimusa Camii",
      description:
        "Cami mihrap aksı üzerinde boyuna gelişim göstermiş dikdörtgen planlıdır. Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş, son cemaat yeri ve harim kurgusu ile inşa edilmiştir. Caminin orijinal taban oturumu 8 x 15 metredir. Taş kâgir olan yapının duvar kalınlığı 110 cm’dir. Cami kaba yonu taştan kâgir tekniği ile örülmüştür beden duvarlarında düzensiz aralıklarla ahşap hatıllar atılmıştır. Horasan harçlı olan beden duvarları içten sıva kaplamalı, dıştan derz dolguludur. Cami üst örtüsü ahşap kırma çatıdır.,,,Harimin kuzey/kuzeybatı cephesinde yer alan ahşap ile inşa edilmiş kadınlar mahfiline, son cemaat yerinde yer alan L planlı iki kollu merdiven ile ulaşılmaktadır. Harim duvarlarına yaslı ve önden harim zeminine inen iki ahşap direğe oturtulmuştur. Orta aksında, mihrap hizasında dairesel biçimli konsol çıkma mevcuttur (Şekil 4.22).  Son Cemaat yeri harimden bir basamak yukarıda ve kadınlar mahfili iz düşümünde planlanmıştır. Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde yuvarlak kemerli mihrap yer almaktadır. Harim mihrap cephesinde iki adet düz atkılı tepe penceresi ve hizalarında iki adet düz atkılı pencere yer almaktadır. Caminin kuzeydoğu ve güneybatı cephelerinde üçer adet düz atkılı tepe penceresi bulunurken iz düşümlerinde kuzeydoğudan iki adet ve güneybatıda üç adet düz atkılı harim pencereleri mevcuttur. Pencereler ahşap strüktürlüdür. Caminin dış cephelerinde tepe pencereleri için kemerli bir örgü yapılmıştır. Caminin tavanı ahşap düz tavandır ve köşelerde silme detayları mevcuttur. Orta göbeği sekizgen bindirmeli ve geometrik motiflidir. Caminin tavan göbeğinde ve köşe silmelerinde ahşap oymaların üzerine kök boyalarla geometrik bezemeler yapılmıştır. Tavan göbeğinin çevresinde Ayetelkürsi yazılıdır. Caminin harim, kadınlar mahfili ve son cemaat yeri zemin kaplaması rabıta tahtalıdır. Temeli hususunda bilgi edinilememiştir.Caminin kuzeybatı – giriş cephesine yapım tarihi tespit edilememiş bir ek yapılmıştır.. Ahşap karkas arası tuğla dolgulu ek yapı iki katlı olup köy konağı olarak kullanılmıştır. Cami mimarisi ile ek yapının kuzeybatı iç cephesinden 20 yy eki olarak tuğla kâgir şerefeli bir minare yapılmıştır (Şekil 4.23). Minare Şerefelidir. Ek yapıdan giriş sağlanmıştır. Yapının tavanında sehim görülmüştür. Tavanın açılmasını engellemek amacı ile harimin içinden ahşap iki dikmeye bindirilen kirişler ile sağlamlaştırma yapılmıştır. Ayrıca yapıya uygulanan başka müdahale de cephesinde taş örgüler arası alçı sıva uygulamasıdır. Derz boşlukları alçı sıva ile doldurulurken pencere çevrelerine alçı şeritler çekilmiştir. Delimusaoğlu Cami günümüzde bakımsız ve terk edilmiştir. Şenlik köyüne bağlı her mahallede görevli imamı bulunan mescidler mevcuttur. Cami için Şenlik Köyü muhtarı 2011 yılında Kastamonu Vakıflar Bölge Müdürlüğü ile iletişime geçerek yapının onarımının yapılmasına yönelik bir dilekçe yazmıştır. 2023 yılında yapının onarılmasına yönelik tekrar bir başvuru gerçekleştirilmiştir. 2022 yılı Eylül ayında caminin belgelenmesi ve saha çalışmalarının yürütülmesi adına yapılan gezide çekilen fotoğrafların internet ortamında paylaşılması bir kamuoyunda bir karşılık oluşturmuştur. Oluşan kamuoyu sonucu Cami, Kastamonu Vakıflar Bölge Müdürlüğünce 2023 yılı restorasyon kapsamına alınmıştır. Kasım 2022 de ihalesi onaylanan yapının restorasyon uygulama süreci başlamıştır. 2011 yılında yapılan başvuru sonucunda arazide yapılan alan çalışmalarında yapının ahşap tavanının 2023 yılına göre sağlam olduğu anlaşılmaktadır. Yapının çatı örtüsünde son 12 yıl içerisinde meydana gelen bozulmalar, yağış ve nemin yapıya sızmasına neden olmuş; bu durum özellikle iç ve dış duvar yüzeylerinde rutubet kaynaklı yosunlaşmalara, ahşap yapı elemanlarında ise biyolojik bozulmaya bağlı yumuşak çürüme oluşumlarına yol açmıştır. Tavanın doğu ucu çürümeden kaynaklı yüzey kayıplarına maruz kalmıştır. Tavanın çeşitli yerlerinde kuru çürümeden kaynaklı dökülmeler, renklenmeler ve yosunlaşma mevcuttur (Şekil 4.24). Yapının Kadınlar mahfilinden ulaşılan özgün minaresi zaman içerinde yıkılmıştır. Minarenin yapı içerisindeki ahşap kaidesi günümüzde mevcut olsa da rutubetten kaynaklı bozulmalara maruz kalmıştır. Yapının beden duvarlarına onarım amacı ile uygulanan alçı sıva derzler yer yer dökülmüştür(Şekil 4.25). Beden duvarlarında statiksel açıdan bir bozulma yoktur.",
      imagePaths: [
        {
          number: "Şekil 4. 21.Şenlik Köyü, Delimusa Cami; güneybatı cephesi",
          path: "/koyler/senlik/sekil-4.21-1.JPG",
        },
        {
          number: "Şekil 4.21 kuzeydoğu cephesi-giriş ",
          path: "/koyler/senlik/sekil-4.21-2.JPG",
        },
        {
          number: "Şekil 4. 22. Şenlik Köyü, Delimusa Cami, mihrap cephesi",
          path: "/koyler/senlik/sekil-4.22-1.JPG",
        },
        {
          number: "Şekil 4.22 mahfil ve son cemaat yeri ",
          path: "/koyler/senlik/sekil-4.22-2.jpg",
        },
        {
          number:
            "Şekil 4. 23. Şenlik Köyü, Delimusa Cami Ek yapı ile Caminin giriş Koridoru",
          path: "/koyler/senlik/sekil-4.23-1.JPG",
        },
        {
          number: "Şekil 4.23 Camiye sonradan eklenen minare ",
          path: "/koyler/senlik/sekil-4.23-2.JPG",
        },
        {
          number:
            "Şekil 4. 24. Şenlik Köyü, Delimusa Mahalle Cami; kuzeydoğu cephesi iç duvar",
          path: "/koyler/senlik/sekil-4.24-1.jpg",
        },
        {
          number: "Şekil 4.24 kadınlar mahfili dikme ve kiriş detayları",
          path: "/koyler/senlik/sekil-4.24-2.jpg",
        },
        {
          number:
            "Şekil 4.24 kadınlar mahfili dikme ve kiriş detayları tavan detayları",
          path: "/koyler/senlik/sekil-4.24-3.jpg",
        },
      ],
    },
    {
      id: 4,
      name: "Akdoğan Köyü Camii",
      description:
        "Cami mihrap aksı üzerinde boyuna gelişim göstermiş olsa da dikdörtgen planlıdır. Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş, son cemaat yeri ve harim kurgusu ile inşa edilmiştir (Şekil 4.27). Caminin orijinal taban oturumu 8.3 x 9.2 metredir. Karma yapım tekniğine sahip binanın güneydoğu, güneybatı ve kuzeydoğu duvarları moloz yığma duvar üzerine kurt boğaz tekniği ile ahşap kâgir örülüdür. Kuzeybatı cephesi kot farkı sebebi ile tek kat yüksekliğinde tuğla yığma ile örülüdür (Şekil 4.28;29). Cami üst örtüsü ahşap kırma çatıdır.,,,Caminin kuzey cephesinde bir, doğu cephesinde üç adet olmak üzere toplamda dört girişi vardır. Kuzeydoğu cephesinin alt katında bulunan bu girişlerden ortadaki ve soldaki tek kanatlı ahşap kapı giriş holüne, sağdaki tek kanatlı ahşap kapı da üst katın giriş holüne çıkılan merdivene açılmaktadır. Caminin harimine, giriş holünün batısındaki tek kanatlı düz atkılı ahşap kapıdan girilmektedir. Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş ve harim kurgusu ile inşa edilmiştir. Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, harimin güneybatı duvarına yaslı tek kollu merdiven ile ulaşılmaktadır. Kadınlar mahfili ahşap strüktürlü, harim katından yükselen iki ahşap direk üzerine bindirilmiştir. Mahfil tek kollu çıkma yaparak çıkma mihrap duvarına bindirilerek taşınmıştır (Şekil 4. 30). Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde çerçeveli basık kemerli mihrap yer almaktadır (Şekil 4.30). Harim sadece mihrap cephesinde üstte iki ve iz düşümünde iki düz atkılı pencere ile doğal ışık almıştır. Caminin tavanı çıtalı düz ahşap kaplamalıdır. Tavanın ortasına iç içe geçmiş sekizgenlerden oluşan bir tavan göbeği yerleştirilmiştir (Şekil 4.31). Göbeğin ortası daire şeklinde olup aşağı doğru bir kademe sarkmıştır. Yapının ahşap strüktürlü minaresi kuzeydoğu cephesindeki ek yapının ikinci katından yükselmektedir ve saç kaplamalıdır. Caminin harim, kadınlar mahfili zemin kaplamaları rabıta tahtalıdır.,,,Yapıda yapım tarihi bilinmeyen çeşitli müdahaleler tespit edilmiştir. Yapıda harimin tavan sınırları caminin genişletilme yapılmadan önceki sınırlarını göstermektedir. Bu sınırlar dışında kuzeybatı cephesine harimin ve kadınlar mahfilinin de genişlemesi amacı ile müdahalede bulunulmuştur. Bu müdahale zamanla cemaatin arttığının bir kanıtı olduğunu düşündürmüştür. Benzer bir müdahale yöntemi ile yapının kuzeydoğu duvarına bitişik zeminde giriş holü ve odunluk olarak kullanılacak üst katta ise köy odası olarak kullanılmak amacıyla iki katlı ek yapı yapılmıştı. Ek yapıya doğrudan kuzeybatı cephesinden giriş sağlanmaktadır. Ek yapının Holün güneyinde yer alan kapıdan köy odasına geçilmektedir. Köy odası dikdörtgen planlı olup ahşap çantı tekniğinde yapılmıştır. Holün batısındaki kapıdan kadınlar mahfiline girilmektedir. Batısında bulunan koridor caminin kuzey cephesi boyunca uzanmaktadır. Doğusunda dairesel formlu sac kaplamalı minarenin kaidesi ve aşağı doğru inen bir merdiven yer almaktadır Ek yapının üst kat döşemesinden yükselen minarenin de cami yapıldığından sonra yapıldığı öngörülmüştür.,,,Caminin bozulma durumları incelendiğinde cephede sıva dökülmeleri ve alt yapıda bitki köklenmelerine bağlı bozulmalar dikkat çekmektedir. Aynı zamanda çatlaklar ve malzeme kaybı gözlemlenmiştir. Ahşap minarenin alt kısmında deformasyon ve bakımsızlık izleri mevcuttur. Harim iç duvar yüzeylerindeki boyada renk solmaları ve yer yer nem izleri gözlemlenmiştir. Tavan kaplamasında ahşap yüzeyde çatlama ve yıpranma izleri mevcuttur. Ahşap üzerine işli kök boya bezemelerde pigment kaybı sebebi ile soluklaşmalar gözlemlenmiştir. Alt katta nemlenme ve ahşap yüzeylerde küflenme izleri gözlemlenmiştir. Ahşap dikmeler de uçma delikleri ve kılcal çatlaklar mevcuttur.",
      imagePaths: [
        {
          number:
            "Şekil 4. 28. Akdoğan Köyü, Divan Cami; kuzeydoğu - giriş cephesi ",
          path: "/koyler/akdogan/sekil-4.28.jpg",
        },
        {
          number:
            "Şekil 4. 29. Akdoğan Köyü, Divan Cami; güneydoğu - mihrap cephesi ",
          path: "/koyler/akdogan/sekil-4.29.jpg",
        },
        {
          number: "Şekil 4. 30. Akdoğan Köyü, Divan Camii, mihrap cephesi ",
          path: "/koyler/akdogan/sekil-4.30-1.JPG",
        },
        {
          number: "Şekil 4.30 mahfil ",
          path: "/koyler/akdogan/sekil-4.30-2.JPG",
        },
        {
          number: "Şekil 4. 31. Akdoğan Köyü, Divan Cami; tavan göbeği detayı ",
          path: "/koyler/akdogan/sekil-4.31.jpg",
        },
      ],
    },
    {
      id: 5,
      name: "Kurt Köyü, Çirişoğlu Mah. Divan Camii",
      description:
        "Cami mihrap aksı üzerinde boyuna gelişim göstermiş olsa da, kareye yakın dikdörtgen planlıdır. Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş, son cemaat yeri ve harim kurgusu ile inşa edilmiştir (Şekil 4. 33). Caminin orijinal taban oturumu 10.4x11.7 metredir. Taş kâgir olan yapının duvar kalınlığı 100 cm’dir. Cami kaba yonu ve moloz taştan kâgir tekniği ile örülmüştür. Caminin köşeleri ise ince yonu taştır. Caminin tepe pencere üstü 3 sıra ahşap kaplama/bindirme tekniği üzerine çatı oturumu yapılmıştır (Şekil 4. 34).  Horasan harçlı olan beden duvarları içten sıva kaplamalı, dıştan derz dolguludur. Cami üst örtüsü ahşap kırma çatıdır.,,,Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, son cemaat yerinde yer alan tek kollu merdiven ile ulaşılmaktadır. Kadınlar Mahfilinde ahşap strüktürlüdür.  Doğu ve batı beden duvarlarına bitişik ve orta aksında mihrap hizasında üç adet konsol çıkma mevcuttur (Şekil 4.35).  Son Cemaat yeri harimden bir basamak yukarıda ve kadınlar mahfili iz düşümünde planlanmıştır. ,,,Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde sivri kemerli, alçı çerçeve ile genişletilmiş mihrap yer almaktadır (Şekil 4.35). Mihrap çerçevesi ve nişin iç kısımları basit geometrik formlar ile işlidir. Harim mihrap cephesinde iki adet düz atkılı tepe penceresi mevcuttur. Tepe Pencereler cephede kenarları kesme taş silmelerle çevrili olup dilimli kemerlidir. Caminin kuzeydoğu ve güneybatı cephelerinde ikişer adet tepe penceresi ve boy hizasında birer pencere mevcuttur. Bu pencerelerde cephede kesme taş silmeler ile çevrelenmiştir. Pencereler ahşap strüktürlüdür. Caminin tavanı köşelerde üçgen silmeleri olan ahşap düz tavandır. Sekizgen bir tavan göbeğine sahiptir.  Caminin harim, kadınlar mahfili ve son cemaat yeri zemin kaplaması rabıta tahtalıdır. Temeli hususunda bilgi edinilememiştir. Caminin iç duvarları ile giriş cephesinin dış duvarı sıvalı ve üzeri kök boyalar ile bezelidir. Sütun formundaki bezemeler yapının dört cephesinde de mevcuttur. Tepe penceresi hizasında Arapça harfler ile “ALLAH” “Muhammed” yazıları yazılmıştır. Kuzeydoğu ve güney batı cephelerinde güneş formunu andıran dairesel biçimler mevcuttur. Güneş formundaki bezeme caminin giriş kapısının üstünde de yer almaktadır. Bezemelerin cami yapısının ilk yapıldığı dönemde yapıldığına dair bilgi edinilememiş olsa da bezemeler yapıldığı dönemin eki olarak özgündür. Caminin minberi çıtakari ahşap işçiliği ile yapılmış kök boyalar ile bezenmiştir (Şekil 4.36).,,,Caminin kuzeybatı – giriş cephesine yapım tarihi tespit edilememiş bir ek yapılmıştır. Ek yapı cami için bir geçiş mekanı oluşturmaktadır. Aynı zamanda yapıya sonradan eklenen minareye de bu alandan ulaşım sağlanmıştır. Girişin sağ tarafında da bir odunluk mevcuttur. Yapıya sonradan eklenen minare ahşap strüktürlü cephesi saç levha kaplıdır. Yapıya dönem eki olarak eklenen başka bir müdahale yoktur.,,,Yapının tescil altında olmasından kaynaklı bakım ve onarım süreçlerinin kontrollü olması gerekliliği yapıda pek çok bozulmanın etkisini arttırmasına sebep olmaktadır. Yapının kadınlar mahfilinin tavanında çatı yükünden kaynaklı sehim oluşmuştur. Zeminde oluşan rutubetten kaynaklı cephede taş malzemede renk değişiklikleri ve yosunlaşmalar mevcuttur. Zaman içerisinde rüzgârın etkisi ile derz aralarında boşalmalar gerçekleşmiş ve çatlak izleri oluşmuştur. Derz boşalmalarından ve Çatı akmasından kaynaklı yapı içerinde alçı sıva üzerinde rutubet izleri oluşumu mevcuttur (Şekil 4.37;38). Sonradan eklenen minare kendi ağırlığı ve uygulama hataları sebebi ile kuzeybatı cephesine doğru yatmaya başlamıştır. Bu bozulma yapıyı ve kullanıcıları en çok tehdit eden bozulma durumudur.,,,",
      imagePaths: [
        {
          number:
            "Şekil 4. 34. Kurt Köyü, Çirişoğlu Mahalle Cami; kuzeybatı cephesi  ",
          path: "/koyler/kurt/sekil-4.34-1.JPG",
        },
        {
          number:
            "Şekil 4. 34. Kurt Köyü, Çirişoğlu Mahalle Cami; güneydoğu- mihrap cephesi  ",
          path: "/koyler/kurt/sekil-4.34-2.JPG",
        },
        {
          number:
            "Şekil 4. 35. Kurt Köyü, Çirişoğlu Mahalle Cami; mihrap cephesi  ",
          path: "/koyler/kurt/sekil-4.35-1.JPG",
        },
        {
          number:
            "Şekil 4. 35. Kurt Köyü, Çirişoğlu Mahalle Cami; mahfil ve son cemaat yeri   ",
          path: "/koyler/kurt/sekil-4.35-2.JPG",
        },
        {
          number:
            "Şekil 4. 36. Kurt Köy, Çirişoğlu Mah. Kurt Cami minber üzerine işli bezeme detayı  ",
          path: "/koyler/kurt/sekil-4.36-1.JPG",
        },
        {
          number: "Şekil 4. 36. Kurt Köy, Çirişoğlu Mah. Kurt Cami kapı detayı",
          path: "/koyler/kurt/sekil-4.36-2.JPG",
        },
        {
          number:
            "Şekil 4. 37. Kurt Köy, Çirişoğlu Mah. Kurt Cami cephesinde derz boşalmaları ",
          path: "/koyler/kurt/sekil-4.37-1.JPG",
        },
        {
          number:
            "Şekil 4. 37. Kurt Köy, Çirişoğlu Mah. Kurt Cami girişte oluşan taş ve ahşaptaki yosunlaşmalar ",
          path: "/koyler/kurt/sekil-4.37-2.JPG",
        },
        {
          number:
            "Şekil 4. 38. Kurt Köy, Çirişoğlu Mah. Kurt Cami harim içi kuzeydoğu cephesi rutubet izi ",
          path: "/koyler/kurt/sekil-4.38-2.JPG",
        },
      ],
    },
    {
      id: 6,
      name: "Yazıbelen Köyü, Kıvraç Camii",
      description:
        "Cami mihrap aksı üzerinde boyuna gelişim göstererek, dikdörtgen planlıdır. Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş, son cemaat yeri ve harim kurgusu ile inşa edilmiştir (Şekil 4.40).  Caminin orijinal taban oturumu 8 x 16 metredir. Taş kâgir olan yapının duvar kalınlığı 80 cm’dir. Cami moloz taştan kâgir tekniği ile örülü üstü sıva ile kaplıdır. Cami üst örtüsü ahşap kırma çatıdır (Şekil 4.41). ,,,Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, son cemaat yerinde yer alan tek kollu merdiven ile ulaşılmaktadır. Kadınlar mahfili iz düşümünde konumlanan son cemaat yeri ve kadınalar mahfili ahşap hazeran örgü malzeme ile kapatılmıştır. Kadınlar Mahfili orta aksında konsol çıkma mevcuttur (Şekil 4.42). Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında ahşap çerçeve ile genişletilmiş basık kemerli mihrap yer almaktadır (Şekil 4.42). Harim mihrap cephesinde iki düz atkılı pencere yer almaktadır. Harimin kuzeydoğu cephesin de bir adet düz atkılı, kanatlı pencere yer almaktadır. Son cemaat yerinde (kuzeybatı cephesi) iki adet düz atkılı pencere mevcuttur. Pencereler PVC dir. Caminin kadınlar mahfilinde ve güney batı cephesinde pencere mevcut değildir. Caminin tavanı ahşap çıtakaridir. Tavanı taşıması için harimden yükselen iki adet 13*13 cm kesitinde dikme mevcuttur. Tana orta aksı dikmeler arsında orta göbeği geometrik motiflidir. Kalemişi ya da bezeme mevcut değildir. Caminin harim, kadınlar mahfili ve son cemaat yeri zemin kaplaması rabıta tahtalıdır. Temeli hususunda bilgi edinilememiştir.,,,Caminin kuzey batı cephesine yapım tarihi tespit edilememiş iki katlı ek yapı yapılmıştır. Ek yapı zemin katta giriş alanı oluştururken üst katta kuran kursu için mekân oluşturmaktadır. Kuzeydoğu cephesi ise yan parseldeki yapının bahçesi ile kapatılmıştır. Yapının cepheleri sıvanarak kapatılmıştır. Yapının tavanı ise 1951 yılında tamir edilmiştir.  Caminin harim duvarları, ısı yalıtımı sağlanması amacı ile pencere hizasına kadar ahşap kaplanmıştır. Yapıdaki dikmeler kalaslar ile çevrelenmiş ve boyanmıştır.,,,Cami binasının cephelerinde yer yer boya dökülmeleri ve yüzey kirlenmeleri göze çarpmaktadır. Yapının çatısında bulunan kiremitlerde kayma, kırılma ve eksilmeler fark edilmektedir. Çatı kaplamasında kullanılan sac malzemenin korozyona uğradığı ve yüzeyde paslanmalar olduğu görülmektedir. Tavan ve direklerde kullanılan ahşap malzemelerde kararma ve deformasyon gözlemlenmektedir. Ayrıca, tavanda nem kaynaklı olabilecek yüzey bozulmaları mevcuttur. Uçma delikleri ve bundan kaynaklı kuru çürümeler ve tozlaşmalar mevcuttur.,,,Çatıda gözlemlenen bozulmalar ve iç mekandaki tavan deformasyonları, nem ve su sızıntısı problemlerini işaret etmektedir. Yapının taş, ahşap ve sıva gibi malzemelerinde ciddi aşınmalar ve bozulmalar mevcuttur.",
      imagePaths: [
        {
          number:
            "Şekil 4. 41. Yazıbelen Köyü Kıvraç Cami; güneydoğu- mihrap cephesi  ",
          path: "/koyler/yazibelen/sekil-4.41-1.JPG",
        },
        {
          number:
            "Şekil 4. 41. Yazıbelen Köyü Kıvraç Cami; güneydoğu- kuzeybatı cephesi-giriş cephesi  ",
          path: "/koyler/yazibelen/sekil-4.41-2.JPG",
        },
        {
          number: "Şekil 4. 42. Yazıbelen Köyü Kıvraç Cami; mihrap cephesi ",
          path: "/koyler/yazibelen/sekil-4.42-1.jpg",
        },
        {
          number:
            "Şekil 4. 42. Yazıbelen Köyü Kıvraç Cami; mahfil ve son cemaat yeri ",
          path: "/koyler/yazibelen/sekil-4.42-2.jpg",
        },
      ],
    },
    {
      id: 7,
      name: "Bozkocatepe Divan Camii",
      description:
        "Cami mihrap aksı üzerinde boyuna gelişim göstererek, dikdörtgen planlıdır (Şekil 4.45). Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş, son cemaat yeri ve harim kurgusu ile inşa edilmiştir. Caminin orijinal taban oturumu 10.4 x15.2 metredir. Taş kâgir olan yapının duvar kalınlığı 90 cm’dir. Almaşık teknikle inşa edilmiş yapının kuzeybatı(giriş) cephesi kaba yonu taş ve kırmızı tuğla ile baklava desenli örülü olup, diğer cepheler kaba yonu taş ve köşeler kesme taş ile inşa edilmiştir (Şekil 4.46). Pencere üstleri tuğla taş almaşık tekniği ile kemer formunda örülmüştür. Güneybatı(mihrap)cephesinin orta üst aksında kufi tekniği ile “kelime-i tevhid” yazılıdır (Şekil 4.47). Tuğlalar ile diğer cephelerde de motifler mevcuttur. Camii beden duvarları içten sıva kaplamalı, dıştan derz dolguludur. Cami üst örtüsü ahşap kırma çatıdır.,,,Caminin beden duvarları muhafaza edilerek 1974 yılında iç yapı elemanları betonarme tekniği ile yenilenmiştir. Harim döşemesine binen dört kolon çatı strüktürünü taşımaktadır. Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, giriş alanından İki kollu merdiven ile çıkılmaktadır. Kadınlar mahfili iz düşümünde son cemaat yeri mevcuttur.  Kadınalar mahfili ahşap hazeran örgü malzeme ile kapatılmıştır. (Şekil 4.48). Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında mermer çerçeve ile genişletilmiş sivri kemerli mihrap yer almaktadır (Şekil 4.48). Harim mihrap cephesinde dört düz atkılı pencereden ikisi tepe pencere ve iz düşümünde kanatlı iki pencere daha yer almaktadır. Harimin güneybatı cephesin de iki adet düz atkılı, kanatlı pencere ve bir tepe pencere yer almaktadır. Son cemaat yerinde (kuzeybatı cephesi) iki adet düz atkılı pencere mevcuttur. Pencereler ahşap dır. Caminin kadınlar mahfilinde ve güney batı cephesinde pencere mevcut değildir. Kalemişi ya da bezeme mevcut değildir. Temeli hususunda bilgi edinilememiştir.,,,Yapı 1974 yılında beden duvarlarının özgünlüğünü koruyarak iç strüktür ve çatı betonarme tekniği ile tekrar inşa edilmiştir. Camiye yapılan betonarme müdahaleye ek olarak cephelerde de çimento bazlı sıva ile derz dolgu ve onarım çalışmaları yapılmıştır. Yapının güneybatı cephesine bitişik kare kaide üzerinde yükselen betonarme minare eklenmiştir.,,,Camii cephelerinde yüzey kayıpları, erozyon ile derzlerde boşalmalar ve bitkilenme/yosun oluşma gibi sorunlar görülmektedir. Derzlerde ve taşlarda deformasyon yaygındır. ,,,İç mekânda seramik kaplamaların özgün yapıyı bozduğu, çağdaş müdahalelerin özgün malzeme ve tekniklerden uzak olduğu anlaşılmaktadır. Yapının maruz kaldığı onarım süreci yapının özgün dokusunun zedelenmesine sebep olmuştur.",
      imagePaths: [
        {
          number:
            "Şekil 4. 46. Bozkocatepe Köyü Kadı Çelebi Cami; kuzeybatı cephesi-giriş cephesi ",
          path: "/koyler/bozkocatepe/sekil-4.46-1.JPG",
        },
        {
          number:
            "Şekil 4. 46. Bozkocatepe Köyü Kadı Çelebi Cami; kuzeydoğu cephesi ",
          path: "/koyler/bozkocatepe/sekil-4.46-2.JPG",
        },
        {
          number:
            "Şekil 4. 47. Bozkocatepe Köyü, Kadı Çelebi Caminin Güneydoğu Cephesi ",
          path: "/koyler/bozkocatepe/sekil-4.47-1.JPG",
        },
        {
          number:
            "Şekil 4. 48. Bozkocatepe Köyü Kadı Çelebi Cami; mihrap cephesi ",
          path: "/koyler/bozkocatepe/sekil-4.48-1.jpg",
        },
        {
          number:
            "Şekil 4. 48. Bozkocatepe Köyü Kadı Çelebi Cami; mahfil ve son cemaat yeri  ",
          path: "/koyler/bozkocatepe/sekil-4.48-2.jpg",
        },
      ],
    },
    {
      id: 8,
      name: "Doğuörcün Köyü, Biyoğlu Camii",
      description:
        "Cami mihrap aksı üzerinde merkezi plan özelliği taşır, kare planlıdır. Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş ve harim kurgusu ile inşa edilmiştir (Şekil 4. 50). Caminin orijinal taban oturumu 10.3x11.6 metredir. Taş kâgir olan yapının duvar kalınlığı 100 cm’dir. Cami kaba yonu ve moloz taştan kâgir tekniği ile örülmüştür. (Şekil 4. 51).  Horasan harçlı olan beden duvarları içten sıva kaplamalı, dıştan derz dolguludur. Cami üst örtüsü ahşap kırma çatıdır.,,,Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, son cemaat yerinde yer alan tek kollu merdiven ile ulaşıldığı düşünülmektedir. Kadınlar Mahfili ahşap strüktürlüdür.  orta aksında mihrap hizasında konsol çıkmanın olduğu düşünülmektedir. Son Cemaat yeri harimden bir basamak yukarıda ve kadınlar mahfili iz düşümünde planlanmıştır (Şekil 4.35). Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde sivri kemerli mihrap mevcuttur(Şekil 4.52).  Harim mihrap cephesinde ikisi tepe ve ikisi harim olmak üzere dört düz atkılı pencere yer almaktadır. Diğer cephelerde pencere açıklığı mevcut değildir. Caminin tavanı ahşap düz tavandır. Tavanı taşıması için orta akstan bir ahşap kiriş mevcuttur. Kalemişi ya da bezeme mevcut değildir. Caminin harim, kadınlar mahfili ve son cemaat yeri zemin kaplaması rabıta tahtalıdır.,,,Yapı hakkında herhangi müdahale bilgisine ulaşılmamıştır. Gözlemler sonucu yapıldığı süreçten sonra derz boşluklarının doldurulduğu anlaşılmaktadır. Yapı terk sonucu vandalizme maruz kalmıştır (Şekil 4. 53). Döşeme kaldırılmış ve zemin kazılmıştır. Pencere kasaları ve mahfil tahtaları çıkarılmıştır. Hem ahşap hem taş yapı elemanlarının nemden bozulmalara maruz kaldığı görülmektedir. Ahşap yüzeylerde oluşan mantar ve taş yüzeylerdeki biyolojik oluşumlar (yosun, liken) yapıyı yoğunlaştırmıştır. Yapı terk tehdidi sonucu bütünlüğünü ve işlevsel yapısını kaybetmiştir. Yapıya uzun süre müdahale edilmemesi, mevcut bozulmaların hızlanmasına neden olmuştur. ",
      imagePaths: [
        {
          number:
            "Şekil 4. 51. Doğuörcün Köyü Biyo Mahalle Cami; güneydoğu cephesi-mihrap cephesi  ",
          path: "/koyler/doguorcun/sekil-4.51-1.JPG",
        },
        {
          number:
            "Şekil 4. 51. Doğuörcün Köyü Biyo Mahalle Cami; güneybatı cephesi   ",
          path: "/koyler/doguorcun/sekil-4.51-2.JPG",
        },
        {
          number:
            "Şekil 4. 52. Doğuörcün Köyü Biyo Mahalle Cami; mihrap cephesi  ",
          path: "/koyler/doguorcun/sekil-4.52-1.jpg",
        },
        {
          number:
            "Şekil 4. 52. Doğuörcün Köyü Biyo Mahalle Cami; mahfil ve son cemaat yeri  ",
          path: "/koyler/doguorcun/sekil-4.52-2.jpg",
        },
        {
          number:
            "Şekil 4. 53. Doğuörcün Köyü Biyo Mahalle Cami vandalizm sonucu bozulma   ",
          path: "/koyler/doguorcun/sekil-4.53-1.jpg",
        },
      ],
    },
    {
      id: 9,
      name: "Alaçay Köyü, Kır Camii",
      description:
        "Cami mihrap aksı üzerinde boyuna gelişim göstererek dikdörtgen planlıdır. Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş, son cemaat yeri ve harim kurgusu ile inşa edilmiştir. Caminin orijinal taban oturumu 8.9 x12.8 metredir. Taş kâgir olan yapının duvar kalınlığı 90 cm’dir. Cami kâgir tekniği ile inşa edilmiştir (Şekil 4. 34).  Cami üst örtüsü ahşap kırma çatıdır.,,,Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, son cemaat yerinde yer alan tek kollu merdiven ile ulaşılmaktadır. Kadınlar Mahfilinde ahşap strüktürlüdür.  Orta aksında mihrap hizasında konsol çıkma mevcuttur (Şekil 4.57).  Son Cemaat yeri harimden bir basamak yukarıda ve kadınlar mahfili iz düşümünde planlanmıştır. Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde sivri kemerli mihrap yer almaktadır. Harim mihrap cephesinde ikisi tepe ve ikisi harim olmak üzere dört düz atkılı pencere yer almaktadır. Diğer cephelerde pencere açıklığı mevcut değildir. Caminin tavanı ahşap düz tavandır. Tavanı taşıması için orta akstan bir ahşap dikme ve uzun kenara paralel ahşap kiriş mevcuttur (Şekil 4.57). Dikme ve kirişin tavan için yapılan bir müdahale sonrası yapıldığı düşünülmektedir.  Caminin harim, kadınlar mahfili ve son cemaat yeri zemin kaplaması rabıta tahtalıdır. Temeli hususunda bilgi edinilememiştir. Kalemişi ya da bezeme mevcut değildir.,,,Camii hakkında müdahale bilgisine ulaşılmamıştır. ,,,Camii terk tehdidi ile karşı karşıyadır. Bu sebeple bozulmalar gözlenmektedir. Çatı örtüsü üzerinde kırık ve kaymış kiremitler görülmektedir. Bu durum çatıdaki su sızdırmazlık özelliğini kaybetmesine neden olmuştur. İç sıva yüzeylerinde nem nedeniyle kabarma, dökülme ve renk değişimleri görülmektedir. Duvarda kötü kullanımdan kaynaklı yüzey deformasyonları mevcuttur. Yapının kenar rabıta tahtaları sökülmüştür. Benzer şekilde kadınlar mahfili silmelerin kalemişleri sökülmüştür (Şekil 4.58). Tavan yüzeyinde kuş yuvaları ve ahşap böcekleri tarafından yapılan tahribat dikkat çekmektedir (Şekil 4.58). ",
      imagePaths: [
        {
          number: "Şekil 4. 56. Alaçay Köyü Kır Cami; kuzeybatı-giriş cephesi",
          path: "/koyler/alacay/sekil-4.56-1.JPG",
        },
        {
          number: "Şekil 4. 56. Alaçay Köyü Kır Cami; güneybatı cephesi",
          path: "/koyler/alacay/sekil-4.56-2.JPG",
        },
        {
          number: "Şekil 4. 57. Alaçay Köyü Kır Cami; mihrap cephesi",
          path: "/koyler/alacay/sekil-4.57-1.JPG",
        },
        {
          number:
            "Şekil 4. 57. Alaçay Köyü Kır Cami; mahfil ve son cemaat yeri  ",
          path: "/koyler/alacay/sekil-4.57-2.JPG",
        },
        {
          number:
            "Şekil 4. 58. Alaçay Köyü Kır Cami; rabıta tahtalarında bozulmalar",
          path: "/koyler/alacay/sekil-4.58-1.JPG",
        },
        {
          number:
            "Şekil 4. 58. Alaçay Köyü Kır Cami; kirişe yaslanan kuş yuvası",
          path: "/koyler/alacay/sekil-4.58-2.JPG",
        },
      ],
    },
    {
      id: 10,
      name: "Çayırcık Mahallesi, İsmail Bey Camii",
      description:
        "Cami mihrap aksı üzerinde boyuna gelişim göstererek dikdörtgen planlıdır. Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş, son cemaat yeri ve harim kurgusu ile inşa edilmiştir. (Şekil 4.60). Caminin orijinal taban oturumu 9 x 12 metredir. Taş kâgir olan yapının duvar kalınlığı 80 cm’dir. Cami kaba yonu ve moloz taştan kâgir tekniği ile örülmüştür. (Şekil 4. 61).  Horasan harçlı olan beden duvarları içten sıva kaplamalı, dıştan derz dolguludur. Cami üst örtüsü ahşap kırma çatıdır.,,,Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, girişte yer alan ek yapıdan L biçimli, iki kollu merdiven ile ulaşılmaktadır. Kadınlar mahfili ahşap strüktürlü, doğu ve batı beden duvarlarına bitişik iki kollu konsol çıkma mevcuttur (Şekil 4.62).  Son Cemaat yeri harimden bir basamak yukarıda ve kadınlar mahfili iz düşümünde planlanmıştır. Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde sivri kemerli, seramik çerçeve ile genişletilmiş mihrap yer almaktadır. Harimin güneydoğu cephesinde üç, kuzeydoğu ve güney batı cephelerinde birer adet sivri kemerli tepe penceresi ve  üç cephede ikişer adet düz atkılı harim penceresi mevcuttur. Caminin tavanı düz tavandır. Caminin harim, kadınlar mahfili ve son cemaat yeri zemin kaplaması rabıta tahtalıdır.Yapı 2007 yılında Vakıflar Bölge Müdürlüğü tarafından restorasyon geçirmiştir. Restorasyon sırasında bütünleme tekniği ile betonarme ile müdahale edilerek giriş kısmı eklenmiştir. Yapı askıya alınarak zemin betonarme ile desteklenmiştir.,,,Ahşap kaplamada doğal yaşlanma izleri gözlenmiştir. Ahşap yüzeylerde renk solması, çatlamalar ve yer yer deformasyonlar mevcuttur. Zeminde yağmur suyunun ve toprak neminin etkisiyle deformasyon ve çürümeler oluşmuştur. Harçlarda dökülme ve taş birleşimlerinde bozulmalar mevcut. Ayrıca taş yüzeylerin nemlenme izleri veya yüzeyde kirlenme gözlemleniyor.,,,Cephelerin bakım ve temizliğinin yetersiz olduğu, restorasyon sonrası bozulmaların devam ettiği ve bakımsız kaldığı gözlemlenmiştir.",
      imagePaths: [
        {
          number:
            "Şekil 4. 61. Çayırcık Mahallesi, İsmail Bey Cami; kuzeybatı-giriş cephesi",
          path: "/koyler/cayircik/sekil-4.61-1.JPG",
        },
        {
          number:
            "Şekil 4. 61. Çayırcık Mahallesi, İsmail Bey Cami; güneydoğu-mihrap cephesi  ",
          path: "/koyler/cayircik/sekil-4.61-2.JPG",
        },
        {
          number:
            "Şekil 4. 62. Çayırcık Mahallesi, İsmail Bey Cami; mihrap cephesi ",
          path: "/koyler/cayircik/sekil-4.62-1.JPG",
        },
        {
          number:
            "Şekil 4. 62. Çayırcık Mahallesi, İsmail Bey Cami; mahfil ve son cemaat yeri",
          path: "/koyler/cayircik/sekil-4.62-2.JPG",
        },
      ],
    },
    {
      id: 11,
      name: "Kadirbeyoğlu Köyü, Duran Camii",
      description:
        "Cami mihrap aksı üzerinde boyuna gelişim göstermiş olsa da, kareye yakın dikdörtgen planlıdır Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş, son cemaat yeri ve harim kurgusu ile inşa edilmiştir (Şekil 4.64). Caminin orijinal taban oturumu 9 x 12 metredir. Taş kâgir olan yapının duvar kalınlığı 80 cm’dir. Cami kaba yonu ve moloz taştan kâgir tekniği ile örülmüştür. (Şekil 4. 65).  Horasan harçlı olan beden duvarları içten sıva kaplamalı, dıştan derz dolguludur. Cami üst örtüsü ahşap kırma çatıdır.,,,Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, son cemaat yerinde yer alan tek kollu merdiven ile ulaşılmaktadır. Kadınlar mahfili ahşap strüktürlü, doğu ve batı beden duvarlarına bitişik iki kollu konsol çıkma mevcuttur (Şekil 4.66).  Son Cemaat yeri harimden bir basamak yukarıda ve kadınlar mahfili iz düşümünde planlanmıştır. Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde basık kemerli, alçı çerçeve ile genişletilmiş mihrap yer almaktadır. Harimin güneydoğu cephesinde iki ve kuzeydoğu cephesi ile güneybatı cephesinde birer adet düz atkılı tepe penceresi mevcuttur. Caminin tavanı tekne tavandır. Caminin harim, kadınlar mahfili ve son cemaat yeri zemin kaplaması rabıta tahtalıdır. Kalemişi ya da bezeme mevcut değildir.,,,Yapı hakkında müdahale bilgisine ulaşılmamıştır. İç mekan sıva ile kaplanmıştır.,,,Yapı, hem cephelerinde hem de iç mekânında ciddi oranda bozulma göstermektedir. Taş duvarlarda yüzey kaybı ve malzeme erimeleri görülmektedir. Taşların arasındaki derz dolguları aşınmış, bazı bölgelerde tamamen yok olmuştur. Yosunlanma izleri dikkat çekmektedir. Kiremit örtüsünde çökme ve kaymalar görülmektedir. Bazı kiremitler eksik ya da kırılmış durumdadır. Bu, suyun iç mekâna sızmasına ve iç mekânın zarar görmesine neden oluşturmuştur. Saçak altında ahşap kısımlarında bozulmalar başlamış, yer yer çürümeler oluşmuştur. Sıva tabakası büyük oranda dökülmüş; küf ve rutubet izleri yaygın olarak görülmektedir. Ahşap tavan kirişlerinde yer yer çürümeler ve böceklenmeler dikkat çekmektedir. Alt bölümlerde sıva tamamen dökülmüş, tuğla ve taş yüzeyler açığa çıkmıştır. Yeşil renkli küf ve yosunlanmalar özellikle pencerelerin alt bölgelerinde yoğundur. Merdiven ve minber gibi unsurlarda da malzeme kaybı ve renk solmaları mevcuttur. Duvar köşelerinde ve pencere altlarında yoğun nem izleri ve yosun oluşumu gözlemlenmektedir. Zeminde rutubet nedeniyle yüzey bozulmaları (çökme ve renk değişimi) mevcuttur.,,,Yapı terk tehdidi sonucu bozulma süreci hızlanmış ve strüktürel kayıplar yaşamaktadır.",
      imagePaths: [
        {
          number:
            "Şekil 4. 65. Kadirbey Mahallesi Duran Cami; kuzeybatı-giriş cephesi",
          path: "/koyler/duran/sekil-4.65-1.JPG",
        },
        {
          number:
            "Şekil 4. 65. Kadirbey Mahallesi Duran Cami; güneydoğu-mihrap cephesi",
          path: "/koyler/duran/sekil-4.65-2.JPG",
        },
        {
          number: "Şekil 4. 66. Kadirbey Mahallesi Duran Cami; mihrap cephesi",
          path: "/koyler/duran/sekil-4.66-1.JPG",
        },
        {
          number:
            "Şekil 4. 66. Kadirbey Mahallesi Duran Cami; mahfil ve son cemaat yeri",
          path: "/koyler/duran/sekil-4.66-2.JPG",
        },
      ],
    },
    {
      id: 12,
      name: "Çontay Köyü, Lala Paşa Camii",
      description:
        "Cami mihrap aksı üzerinde merkezi plan özelliği taşır, kare planlıdır. Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş, son cemaat yeri ve harim kurgusu ile inşa edilmiştir (Şekil 4. 68). Caminin orijinal taban oturumu 10.8x13.4 metredir. Taş kâgir olan yapının duvar kalınlığı 100 cm’dir. Cami kaba yonu ve moloz taştan kâgir tekniği ile örülmüştür. (Şekil 4. 569).  Horasan harçlı olan beden duvarları içten sıva kaplamalı, dıştan derz dolguludur. Cami üst örtüsü ahşap kırma çatıdır.,,,Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, son cemaat yerinde yer alan tek kollu merdiven ile ulaşılmaktadır. Kadınlar Mahfilinde ahşap strüktürlüdür.  Orta aksında mihrap hizasında konsol çıkma mevcuttur (Şekil 4.70).  Son Cemaat yeri harimden bir basamak yukarıda ve kadınlar mahfili iz düşümünde planlanmıştır. Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde basık kemerli mihrap yer almaktadır. Harimin güneydoğu ceğhesinde iki ve kuzeydoğu cephesi ile güneybatı cephesinde birer adet düz atkılı kanatlı ahşap pencere mevcuttur.Caminin tavanı ahşap düz tavandır. Harimin orta aksta üç ahşap dikme ve uzun kenara paralel üç ahşap kiriş tavanı desteklemektedir (Şekil 4.70). Caminin harim, kadınlar mahfili ve son cemaat yeri zemin kaplaması rabıta tahtalıdır. Kalemişi ya da bezeme mevcut değildir.,,,Yapı 2018 sonrası Restorasyonu yapılmıştır.  Yapı genel olarak iyi derecede korunmuş olmakla birlikte, uzun süreli bakım eksikliği nedeniyle cephede taş yüzeylerde aşınmalar, iç mekân da ahşap malzemelerde deformasyonlar görülmektedir. Cephe yüzeylerinde görülen taş malzemede renk değişimi ve yer yer aşınmalar mevcut. Özellikle yapı derzlerinde kopmalar, boşalmalar göze çarpmaktadır. Cephe de alt bölümlerde zemine yakın kısımlarda nem etkisiyle oluşmuş hafif lekelenmeler ve bitki oluşumları dikkat çekmektedir.,,,Günümüzde imamı olmayan cami bahar ve yaz aylarına denk gelen bayram namazlarında ve Cuma namazlarında kullanılmaya devam etmektedir. Yapı belli günlerde kullanılmaktadır ve somut olmayan miras değeri bu kullanımı sürekli hale getirmektedir (Şekil 4. 70).",
      imagePaths: [
        {
          number:
            "Şekil 4. 69. Çontay Köyü, Lala Paşa Cami; kuzeybatı-giriş cephesi",
          path: "/koyler/lalapasa/sekil-4.69.JPG",
        },
        {
          number:
            "Şekil 4. 70. Çontay Köyü, Lala Paşa Cami; mahfil ve son cemaat yeri",
          path: "/koyler/lalapasa/sekil-4.70-1.JPG",
        },
        {
          number:
            "Şekil 4. 70. Çontay Köyü, Lala Paşa Cami; 2023 yılı Ramazan Bayramı bayram namazına ait fotoğraf",
          path: "/koyler/lalapasa/sekil-4.70-2.JPG",
        },
      ],
    },
    {
      id: 13,
      name: "Halife Köyü Divan Camii",
      description:
        "Cami mihrap aksı üzerinde boyuna gelişim göstermiş olsa da, kareye yakın dikdörtgen planlıdır. Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş, son cemaat yeri ve harim kurgusu ile inşa edilmiştir. (Şekil 4.73) Yapı 8.5 x 10.4 metrelik bir taban oturumuna sahiptir. Taş kagir sistemi ile inşa edilmiş yapının duvar kalınlığı 80 cm’dir (Şekil 4.74). Cami üst örtüsü ahşap kırma çatıdır.,,,Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, girişte yer alan ek yapıdan L biçimli, iki kollu merdiven ile ulaşılmaktadır. Son cemaat yeri harimden bir basamak yukarıda ve kadınlar mahfili iz düşümünde planlanmıştır. Kadınlar mahfilinde ahşap strüktürlü, doğu ve batı beden duvarlarına bitişik iki kollu konsol çıkma mevcuttur(Şekil 4.75). Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde, basık kemerli mihrap; alçı çerçeve ile genişletilmiştir (Şekil 4.75). Harimin güneydoğusunda ve kuzeydoğusunda ikişer adet tepe pencersi ve iz düşümlerinde ikişer adet kanatlı ahşap pencere yer almaktadır. Caminin tavanı ahşap düz tavandır.,,,Yapı günümüz konforuna göre müdahalelerde bulunulmuştur. Yapının giriş önüne eklenen bina 40 yıl dan önce yapıldığı ifade edilmiştir . Yapılan ek yapı betonarme malzeme ile inşa edilmiş olup, yapı içerinde giriş ve son cemaat yeri döşemesine beton malzeme dökülmüştür. İçeride kalorifer döşenmiştir. Yapı duvarlarında çatlaklar oluştuğu için alçı sıva ile onarılmıştır. Yapının Harim içinde ısı yalıtımı sağlanması amacı ile pencere hizasına kadar lambiri döşenmiştir.,,,Dış cephedeki boyalarda yer yer dökülmeler ve çatlamalar görülmektedir. Cephe yüzeylerinde bazı bölgelerde nemden kaynaklanan kabarmalar mevcut. Alt kotlarda rutubet izleri fark edilmiştir. Saçak altındaki ahşap elemanlarda güneş ve yağış etkisiyle solmalar ve çürümeler gözlemlenmektedir.  Tavan kaplamasındaki ahşap malzemelerde yer yer kararma ve deformasyon izlenmiştir. Kalem işi süslemelerde solma ve dökülmeler mevcuttur. Yapının maruz kaldığı onarım süreci yapının özgün dokusunun zedelenmesine sebep olmuştur.,,,",
      imagePaths: [
        {
          number: "Şekil 4. 74. Halife Köyü Merkez Cami, kuzeydoğu cephesi",
          path: "/koyler/halife/sekil-4.74-1.jpg",
        },
        {
          number:
            "Şekil 4. 74. Halife Köyü Merkez Cami, kuzeybatı-mihap cephesi",
          path: "/koyler/halife/sekil-4.74-2.jpg",
        },
        {
          number: "Şekil 4. 75. Halife Köyü Merkez Cami; mihrap cephesi",
          path: "/koyler/halife/sekil-4.75-1.jpg",
        },
        {
          number:
            "Şekil 4. 75. Halife Köyü Merkez Cami; mahfil ve son cemaat yeri",
          path: "/koyler/halife/sekil-4.75-2.jpg",
        },
      ],
    },
    {
      id: 14,
      name: "Kasaba Köyü, Mahmut Bey Camii",
      description:
        "Beden duvarları moloztaş yığma, ahşap dikmeli cami, Kastamonu kırsalında Yer alan enderlik değeri yüksek bir yapıdır. Tavan örtü sisteminin yapım tekniği ve yapının ahşap üzerine kök boyalar ile yapılan kalem işleri ile özgün miras değeri taşımaktadır. Ahşap tavan örtüsü dört dikme üzerine ahşap bindirme sistemle inşa edilen caminin birleşim detaylarında çivi kullanılmamış ve geçme ve bindirme tekniği uygulanmıştır (Şekil 4. 81). Cami 11.5 x 17 metre taban oturumuna sahip, boyuna yerleşim gösteren dikdörtgen planlıdır. Duvar kalınlığı 118 cm dir. Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; revaklı son cemaat yeri, giriş ve harim kurgusu ile inşa edilmiştir. Son cemaat yeri ahşap direkler üzerinde girişi vurgulamaktadır. Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfili diğer tüm yapılardan farklı olarak iki katlı planlanmış ve harim içerisinde yükselen ahşap direkler üzerine beden duvarlarından bağımsız inşa edilmiştir(Akok, 1946). (Şekil 4. 80) Mevcutta yer alan 2. Mahfil katı sonraki dönem ekidir. Aynı zamanda harim içinde kadınlar mahfili önünde hünkar mahfili yer almaktadır. Kadınlar mahfiline doğu cephesinde kadınlar mahfilinin iz düşümünde, harimden bir basamak yukarıda yer alan son cemaat yerinden tek kollu merdiven ile ulaşılmaktadır. Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde, mukarnas kavsaralı mihrap; alçı çerçeve ile genişletilmiştir. (Şekil 4. 79) Alçı çerçeve ihtişamı ve işçiliği ile kendini göstermektedir. Altı bordür ile çevrelenen mihrap, mukarnaslar, kabaralar, geometrik ve bitkisel motifler ile bezelidir. Nişin iki yanındaki mermer sütunlar ise yerleştirildikleri alanda kendi eksenlerinde hareket etmektedir. Bu hareketlilik yapının oturum durumu bize göstermektedir. Mihrabın iki yanında düz atkılı ve alçı çerçeveli ahşap giyotin pencere yer almaktadır. Mihrabın üstünde kemerli ve vitray detaylı tepe penceresi bulunmaktadır. Pencerelerde yer alan alçı süslemeler 17.-18. Yy eki olma ihtimali vardır (Akok, 1946). Caminin beden duvarlarına açılan pencereler düz atkılı ve giyotin ahşap, tepe pencereler sivri kemerli ve kanatlıdır.,,,Yapı ahşap bindirme tavan ve ahşap konstrüksiyon üzerine kökboyalar ile nakşedilmiş kalemişleri ile ön plana çıkmaktadır. (Şekil 4.82; Şekil 4.83) Akok (1946)’a göre kalem işleri iki farklı usta tarafından icra edilmiştir ve üst üste renklendirmelerin mevcut olduğunu ifade etmiştir. Cami içerinde yer alan ahşap sütunların sütun başları da ahşap oyma tekniği ile mukarnaslıdır.,,,Camiye, tarihi süreçte bazı müdahaleler gerçekleştirilmiştir. Müdahaleler hakkında bilgiye 1946 yılında cami üzerine çalışmalar yürüten Mahmut Akok’un yaptığı çizimler ve rölöve raporundan elde etmekteyiz. Akok’un cephe çizimlerinde minarenin formu ve plandaki yerinin günümüzdekinden farklı olduğu anlaşılmaktadır. Gökoğlu (1950) eserinde minarenin depremlerle kullanılmaz hale geldiğini ve kesme taştan yapılı minare için yıkım kararı alındığını ifade etmektedir. Günümüzde Son cemaat yerinden girilen ve beden duvarının iç kısmından inşa edilen ahşap minare 1950 sonrası ekidir. (Şekil 4.84) Benzer şekilde son cemaat yerinin zemin kaplamasının ahşap ve dört direğinin yuvarlak biçimli olduğu arşiv kayırlarından anlaşılırken (Akok, 1946) günümüzde son cemaat yeri kırmızı renkli taş kaplama ve dikmeler kare kesitlidir.  ",
      imagePaths: [
        {
          number: "Şekil 4. 78. Mahmut Bey Cami cephe fotoğrafları ",
          path: "/koyler/mahmutbey/sekil-4.78-1.jpg",
        },
        {
          number: "Şekil 4. 78. Mahmut Bey Cami cephe fotoğrafları ",
          path: "/koyler/mahmutbey/sekil-4.78-2.JPG",
        },
        {
          number: "Şekil 4. 79. Mahmut Bey Cami Mihrap ",
          path: "/koyler/mahmutbey/sekil-4.79.jpg",
        },
        {
          number:
            "Şekil 4. 80. Mahmut Bey Cami, ahşap direkler üzerine oturtulan iki katlı kadınlar mahfili ile hünkar mahfili",
          path: "/koyler/mahmutbey/sekil-4.80-1.jpg",
        },
        {
          number: "Şekil 4. 81. Mahmut Bey Cami tavan görseli",
          path: "/koyler/mahmutbey/sekil-4.81-1.jpg",
        },
        {
          number: "Şekil 4. 82. Mahmut Bey Cami kalemişi detaylar",
          path: "/koyler/mahmutbey/sekil-4.82-1.jpg",
        },
        {
          number:
            "Şekil 4. 83. Mahmut Bey Cami ahşap strüktür üzerine uygulanan kalem işi detaylar ",
          path: "/koyler/mahmutbey/sekil-4.83-1.jpg",
        },
        {
          number:
            "Şekil 4. 83. Mahmut Bey Cami ahşap strüktür üzerine uygulanan kalem işi detaylar ",
          path: "/koyler/mahmutbey/sekil-4.83-2.jpg",
        },
      ],
    },
    {
      id: 15,
      name: "Duruçay Köyü, Halil Bey Camii",
      description:
        "Cami mihrap aksı üzerinde boyuna gelişim göstererek kare planlıdır. Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; revaklı son cemaat yeri, giriş ve harim kurgusu ile inşa edilmiştir. Ayrıca harim içinde de üç saflık bir son cemaat alanı oluşturulmuştur. Taş kâgir olan yapı 8.7 x 8.8 metrelik bir taban oturumuna sahiptir. Duvar kalınlığı 126 cm’dir. Cami üst örtüsü ahşap kırma çatıdır.,,,Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, iz düşümünde yer alan, harimden bir basamak yukarıda yer alan son cemaat yerine yer alan tek kollu merdiven ile ulaşılmaktadır. Kadınlar Mahfilinde, mihrap aksı doğrultusunda dairesel biçimli konsol çıkma mevcuttur. Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde, mukarnasla bezeli sivri kemerli mihrap; alçı çerçeve ile genişletilmiştir (Şekil 4.89). Harim mihrap cephesi ve batı cephesinde ikişer tane sivri kemerli tepe penceresi ile aydınlatılmaktadır. Batı cephesinde çift kanatlı düz atkılı bide harim penceresi mevcuttur. Sonradan değiştirildiği anlaşılan tepe pencereler pvcdir. Caminin tavanı çıtakari tekniği ile ızgara biçimindedir. Orta göbeği kare formunda ve kök boyalar ile palmet ve rumi desenlerinden oluşan kalemişi tekniği ile bezelidir (Şekil 4.90). Cami içerisinde tek bezeme örneğine tavan göbeğinde rastlanmıştır. Yapıda ahşam malzemelerin sonraki dönemlerde boyanarak böceklenmelere karşı önlem alındığı anlaşılmaktadır. Bu durum mevcuttaki bezeme detaylarını örtmüş olma olasılığı düşündürse de bir ize rastlanmamıştır.,,,Yapı çalışma sahasında devşirme malzeme kullanılan tek mimari yapıdır. Son cemaat yeri taş yivli iki sütun ve üç sivri kemerle revaklı bir giriş oluşturmaktadır (Şekil 4.91). Son cemaat için kullanılan bu alan da kullanılan iyon sütun başlıklarının ve yer yer kullanılan alınlık parçaların ve silmelerin nereden getirildiği tespit edilememiştir. Kullanılan iki sütun başlığı farklı motifler ile işlidir. Köyde başka bir yapıda da devşirme malzeme kullanımı gözlenmemiştir. Bizans dönemine ait olduğu düşünülen bu malzemeleri sadece caminin giriş aksında son cemaat yerinde görmekteyiz. Caminin beden duvarlarının derzlerinin dökülmesi sonucunda yalıtım da sağlanacağı düşüncesiyle sıvanarak kapatıldığı için caminin başka alanlarında devşirme malzeme kullanımı tespit edilememektedir. Cami Bahçesinde bir iyon sütun başlığı da musalla taşı olarak kullanılmaktadır (Şekil 4.92).,,,Cami kullanımı devam ettiği ve tescil altında olmadığı için yapıya daha kolay müdahale edilmektedir.  Caminin özgünlüğünü etkileyen en önemli müdahale caminin devşirme malzemelerinin görüldüğü son cemaat yerinin ahşap strüktür ile kapatılmasıdır.  Yapılan sözlü görüşmelerden, ahşap müdahalenin yapılış tarihi ile ilgili bir bilgiye erişilmemiştir. Niteliksiz ekin 1952 yılından sonra yapıldığını, Gökoğlu’nun yayınlanan çalışmasında yer alan fotoğrafa bakılarak söylemek mümkündür.  Fotoğrafta sivri kemerleri birbirine bağlayan gergi çubuğu ve iki sütun arasında yer alan düz atkılı bir girişin varlığı söz konusudur(Gökoğlu, 1952).  Bir başka ek ise yapının batı cephesini boylu boyunca örtecek biçimde 4.6 metre eninde ahşap karkas sistem ile inşa edilen yapıdır Kuran kursu ve İmam odasının bulunduğu bu ek yapıya özgün yapıdan geçiş sağlanabilmesi adına yığma yapıya müdahalede bulunulmuştur. Kadınlar mahfilinde ve harim de pencere olarak açılan açıklık kapı açıklığına çevrilmiştir. Yapının orijinalinde minarenin olup olmadığına yönelik mimari bir bulunamamıştır. Mevcuttaki iki minarede sonradan yapılan eklerdir. Ahşap minare iki kez onarım geçirmiştir. 1986 yılında bina dışında kare kaide üzerinde yükselen tuğladan örülü ikinci minare yapılmıştır. Ayrıca, hazire içerisinde bulunan caminin şadırvanı, abdestliği bulunmaktadır (Şekil 4.92).,,,",
      imagePaths: [
        {
          number:
            "Şekil 4. 88. Halil Bey Cami giriş cephesi 2015 müdahale öncesi",
          path: "/koyler/durucay/sekil-4.88-1.jpg",
        },
        {
          number: "Şekil 4. 88. Halil Bey Cami giriş cephesi müdahale sonrası",
          path: "/koyler/durucay/sekil-4.88-2.jpg",
        },
        {
          number:
            "Şekil 4. 89. Halil Bey Cami Harim, Mihrap ve sonradan açılan kapı",
          path: "/koyler/durucay/sekil-4.89.jpg",
        },
        {
          number: "Şekil 4. 90. Halil Bey Cami çıta kari tavan detayı",
          path: "/koyler/durucay/sekil-4.90-1.jpg",
        },
        {
          number: "Şekil 4. 90. Halil Bey Cami tavan göbeği bezeme detayı ",
          path: "/koyler/durucay/sekil-4.90-2.jpg",
        },
        {
          number:
            "Şekil 4. 91. Halil Bey Cami son cemaat yeri yivli sütun başlıkları",
          path: "/koyler/durucay/sekil-4.91-1.JPG",
        },
        {
          number:
            "Şekil 4. 91. Halil Bey Cami son cemaat yerinin sağı ve sonunda yer alan devşirme malzeme",
          path: "/koyler/durucay/sekil-4.91-2.JPG",
        },
        {
          number:
            "Şekil 4. 92. Halil Bey Cami bahçesinde yer alan iyon sütun başlığından devşirilmiş musalla taşı",
          path: "/koyler/durucay/sekil-4.92-1.JPG",
        },
        {
          number:
            "Şekil 4. 92. Halil Bey Cami bahçesinde yer alan iyon sütun başlığından devşirilmiş musalla taşı",
          path: "/koyler/durucay/sekil-4.92-2.jpg",
        },
      ],
    },
    {
      id: 16,
      name: "Talipler Köyü, Rüstem Paşa Camii",
      description:
        "Cami mihrap aksı üzerinde boyuna gelişim göstermiş olsa da, kareye yakın dikdörtgen planlıdır. Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; revaklı son cemaat yeri, giriş ve harim kurgusu ile inşa edilmiştir (Şekil 4.94). Caminin orijinal taban oturumu 12.7 x 17 metredir. Taş kâgir olan yapının duvar kalınlığı 90 cm’dir. İnce yonu taşların örülmesi ile inşa edilmiştir (Şekil 4. 95). Cami üst örtüsü ahşap kırma çatıdır.,,,Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, iz düşümünde yer alan, harimden bir basamak yukarıda yer alan son cemaat yerine yer alan tek kollu merdiven ile ulaşılmaktadır. Kadınlar mahfili ahşap strüktürlü olup harim girişinin sağ tarafında kafe formlu olarak tasarlanmıştır. Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde, mukarnasla bezeli sivri kemerli mihrap; alçı çerçeve ile genişletilmiştir (Şekil 4.96). Harimin kuzeydoğu, güneydoğu ve güney batı cephelerinde ikişer adet sivri kemerli, vitray detaylı pencere ve iz düşümlerinde düz atkılı ikişer adet ahşap doğramalı pencere mevcuttur. Ayrıca revaklı son cemaat yerine açılan kuzeybatı cephesinde de düz atkılı ahşap iki adet pencere bulunmaktadır. Caminin tavanı kırlangıç tavan örneğine benzerlik göstermektedir. Üç kademede yükselmektedir (Şekil 4.97). Cami içerisinde tek süsleme örneğine mihrap kavsarasında raslanmıştır. Caminin harim, kadınlar mahfili ve son cemaat yeri zemin kaplaması rabıta tahtalıdır.,,,Yapı 1972 yılında Vakıflar Bölge Müdürlüğü tarafından restorasyon geçirmiştir. Mihrap çerçevesine uygulama tarihi tespit edilemeyen alçı sıva uygulaması yapılmıştır. Yakın zamanda yapılan raspa ile sıvanın altından bezeme detayları tespit edilmiştir.,,,Kuzey cephe taşlarının birleşim yerlerinde, nemin etkisiyle bitki oluşumu ve yosunlanmalar mevcuttur. Cephe yüzeylerinde aşınmalar ve renk değişimleri ile, yer yer derz boşalmaları gözlenmiştir. Pencere parmaklıklarında korozyon ve paslanmalar izlenmiştir. Son cemaat yerinin üst örtüsünü taşıyan ahşap kolonlar ciddi çürüme belirtileri göstermektedir. Özellikle alt kısımlarda kuru çürümeden kaynaklı fiziksel bozulma ve çatlamalar mevcuttur. Mihrabın alt bölgesinde rutubet kaynaklı boya dökülmeleri ve yüzey aşınmaları izlenmiştir. Aynı şekilde yüzeyinde kir tabakası oluşumu mevcuttur.,,,Günümüzde imamı olmayan cami bahar ve yaz aylarına denk gelen bayram namazlarında ve Cuma namazlarında kullanılmaya devam etmektedir. Somut olmayan miras değerini taşıyan bir ibadet yapısıdır.   Yapıda genel olarak doğal çevresel koşullardan (nem, yağış, bitki oluşumu) ve yetersiz bakım nedeniyle bozulmalar bulunmaktadır. Farklı dönemlerde yapılan müdahaleler, uyumsuz malzeme kullanımı nedeniyle estetik bütünlüğü bozmuş ve bazı bölgelerde yapı hasarına neden olmuştur.,,,Caminin yapıldığı dönemde de var olabileceği düşünülen dergâh yapısı 50 yıl öncesine kadar aş evi olarak da kullanıldığı, ahşap strüktüre sahip olduğu, caminin kuzey batı bahçe duvarına sınırı olduğu ifade edilmiştir. Caminin yapılışı hakkında da yöre halkı arasında rivayetler-mitler vardır. Caminin ALLAH dostu bir kimse tarafından geyiklerin malzemeleri taşıması ile gece vakitlerinde yaptığı sonrasında köy halkının bu kimsenin sözünü dinlememesi ile o zaman bu caminin çevresi viran olsun diyerek dua ettiği, o zamandan bu yana da caminin çevresinde yerleşim yerinin kurulamadığı ifade edilmektedir.",
      imagePaths: [
        {
          number: "Şekil 4. 95. Rüstem Paşa Cami çatı görüntüsü",
          path: "/koyler/talipler/sekil-4.95-1.JPG",
        },
        {
          number: "Şekil 4. 95. Rüstem Paşa Cami mihap dış cephe",
          path: "/koyler/talipler/sekil-4.95-2.JPG",
        },
        {
          number: "Şekil 4. 96. Rüstem Paşa Cami harim içinden mihrap cephesi",
          path: "/koyler/talipler/sekil-4.96-1.JPG",
        },
        {
          number:
            "Şekil 4. 96. Rüstem Paşa Cami harim içinden kadınlar mahfili",
          path: "/koyler/talipler/sekil-4.96-1.jpg",
        },
        {
          number: "Şekil 4. 97. Rüstem Paşa Cami kırlangıç tavan",
          path: "/koyler/talipler/sekil-4.97.JPG",
        },
      ],
    },
    {
      id: 17,
      name: "Göl Köy, Şeyh Ahmet Camii",
      description:
        "Cami mihrap aksı üzerinde boyuna gelişim göstermiş, dikdörtgen planlıdır. Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş, son cemaat yeri ve harim kurgusu ile inşa edilmiştir (Şekil 4.99). Taş kâgir olan yapı 9 x 14.5 metrelik bir taban oturumuna sahiptir. Duvar kalınlığı 120 cm’dir. Cami üst örtüsü ahşap kırma çatıdır.,,,Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, son cemaat yerinde yer alan tek kollu merdiven ile ulaşılmaktadır. Son cemaat yeri harimden bir basamak yukarıda ve kadınlar mahfili iz düşümünde planlanmıştır. Kadınlar mahfilinde ahşap strüktürlü, doğu ve batı beden duvarlarına bitişik iki kollu konsol çıkma mevcuttur. Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde, basık kemerli mihrap; alçı çerçeve ile genişletilmiştir. Yapı düz atkılı, kanatlı ahşap pencereler ile aynı aksta kemerli tepe pencerelere sahiptir (Şekil 4.101).,,,Yapı inşa edildiği günden beri kullanılmaktadır. Bu durum yapıda eklere ve müdahalelere sebep olmuştur. Yapının beden duvarlarının çimento sıva ile sıvanması ve harim iç duvarda pencere hizasına kadar lambiri uygulamasının yapılması kullanıcıların ısı yalıtımı amacı ile müdahale de bulunduğunu göstermektedir. Başka bir müdahale yöntemi ise yapıya kuzeybatı giriş aksı doğrultusunda genişletme amacı ile ek yapı yapılmasıdır. Ahşap karkas sistem ile yapılan bu ek de yapı yalıtımı için bir ara geçiş alanı oluşturur zeminde. Üst katta harimden duvar açılarak bu ek yapıya giriş sağlanmıştır.,,,Cami Osmanlı döneminde de çevre köyler için bir odak noktası oluşturmuştur. Cuma ve Bayram namazlarına gelinen cami Nefsi Göl Divanının Divan Cami olarak kullanılmıştır. Günümüzde Caminin Batısında yer alan aş evi sonradan yapılmıştır. İlk yapıldığı yer bilinmemektedir. Aş evi ilk yapıldığı dönemden bugüne kadar bayram arifelerinde ve Regaip Kandili’nde yemek vererek kültürel geleneği devam ettirmektedir. Tekkeşin ailesi bu görevi soylar boyu devam ettirmektedir.",
      imagePaths: [
        {
          number: "Şekil 4. 100. Şeyh Ahmet Cami ve aş evi",
          path: "/koyler/seyhahmet/sekil-4.100-1.jpg",
        },
        {
          number: "Şekil 4. 100. şeyh Ahmet Cami ve Türbe",
          path: "/koyler/seyhahmet/sekil-4.100-2.jpg",
        },
        {
          number: "Şekil 4. 101. Şeyh Ahmet Cami Mihrap",
          path: "/koyler/seyhahmet/sekil-4.101-1.jpg",
        },
        {
          number:
            "Şekil 4. 101. Şeyh Ahmet Cami kadınlar mahfili ve son cemaat yeri",
          path: "/koyler/seyhahmet/sekil-4.101-1.jpg",
        },
      ],
    },
    {
      id: 18,
      name: "Karamukmolla Köyü, Tekke Mah. Camii",
      description:
        "Cami mihrap aksı üzerinde boyuna gelişim göstererek dikdörtgen planlıdır. Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş, son cemaat yeri ve harim kurgusu ile inşa edilmiştir (Şekil 4.103). Karma yapım tekniğine sahip 6 x 8.5 metrelik bir taban oturumuna sahiptir. Duvar kalınlığı 50 cm’dir. Cami üst örtüsü ahşap kırma çatıdır.,,,Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, girişte yer alan ek yapıdan L biçimli, iki kollu merdiven ile ulaşılmaktadır. Ek yapı kadınlar mahfilini genişletmiştir. Mahfil ahşap strüktürlü ve çıkmasızdır (Şekil 4.105). Harim içerisinde son cemaat yeri planlanmamıştır. Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde, basık kemerli mihrap; alçı çerçeve ile genişletilmiştir. Yapı da güneydoğu ve kuzeydoğu cephelerinde ikişer adet düz atkılı, ahşap pencerelere sahiptir (Şekil 4.105). Caminin tavanı çıtalı düz tavandır. Caminin harim ve kadınlar mahfili zemin kaplaması rabıta tahtalıdır. Temeli hususunda bilgi edinilememiştir.,,,Yapının batı duvarına bitişik bir köy evi yapılmıştır. Kuzeybatı duvarına da ek bir bina yapılmıştır. Merdiven Hariç içinden ek yapıya taşınmıştır.,,,Yapının özellikle sıva ve boyasında bozulmalar gözlemlenmiştir. Kiremit çatının bazı bölümlerinde yer yer kaymalar, eksilmeler ve deformasyonlar mevcuttur. Bu durum, yapının su sızdırma riskini artırmaktadır. Minarenin ahşap yüzeyinde grileşmeler, boya kayıpları ve yüzey bozulmaları gözlemlenmiştir. İç mekân sıvalarda dökülmeler, nemlenme izleri ve küf oluşumları görülmektedir.,,,Özellikle köşe birleşim yerlerinde nem kaynaklı bozulmalar bulunmaktadır. Taşıyıcı ahşap direklerin taban bağlantı noktalarında oturma izleri ve çürümeler mevcuttur. Ahşap merdiven, minber ve kadınlar mahfilinde yüzey aşınmaları mevcuttur.",
      imagePaths: [
        {
          number:
            "Şekil 4. 104. Karamukmolla Köyü, Tekke Mahallesi Cami; kuzeybatı cephesi",
          path: "/koyler/karamukmolla/sekil-4.104-1.JPG",
        },
        {
          number:
            "Şekil 4. 104. Karamukmolla Köyü, Tekke Mahallesi Cami; güneydoğu-mihap cephesi",
          path: "/koyler/karamukmolla/sekil-4.104-2.JPG",
        },
        {
          number:
            "Şekil 4. 105. Karamukmolla Köyü, Tekke Mahallesi Cami; mihrap cephesi",
          path: "/koyler/karamukmolla/sekil-4.105-1.jpg",
        },
        {
          number:
            "Şekil 4. 105. Karamukmolla Köyü, Tekke Mahallesi Cami; mahfil ve son cemaat yeri",
          path: "/koyler/karamukmolla/sekil-4.105-2.jpg",
        },
      ],
    },
    {
      id: 19,
      name: "Kayalı Köyü Divan Camii",
      description:
        "Cami mihrap aksı üzerinde boyuna gelişim göstermiş olsa da, kareye yakın dikdörtgen planlıdır. Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş, son cemaat yeri ve harim kurgusu ile inşa edilmiştir (Şekil 4.70). Yapı 12 x 15 metrelik bir taban oturumuna sahiptir. Taş kagir sistemi ile inşa edilmiş yapının duvar kalınlığı 90 cm’dir (Şekil 4.113). Cami üst örtüsü ahşap kırma çatıdır.,,,Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, son cemaat yerinden tek kollu merdiven ile ulaşılmaktadır. Kadınlar Mahfili ve son cemaat yeri ahşap strüktürlüdür.  Mahfil; orta aks da mihrap hizasında köşeli konsol çıkma mevcuttur (Şekil 4.110). Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde kemerli, alçı çerçeve ile genişletilmiş mihrap yer almaktadır (Şekil 4.110). Harimin mihrap cephesinde, kuzeydoğu ve güneybatı cephelerinde ikişer adet düz atkılı tepe penceresi mevcuttur. Kuzeydoğu cephesinde ve güneybatı cephesindeki tepe pencerelerinin iz düşümlerinde kanatlı düz atkılı pencereler mevcuttur. Pencereler ahşap doğramadır. Caminin tavanı çıtalı düz tavandır. Caminin harim, kadınlar mahfili ve son cemaat yeri zemin kaplaması rabıta tahtalıdır. Temeli hususunda bilgi edinilememiştir.,,,Yapının tarihi bilinmeyen bir dönemde kuzeybatı giriş aksının 3 metre genişletildiği yapı strüktüründeki farklılaşma ile anlaşılmaktadır. Kadınlar Mahfilinin ve iz düşümünde bulunan son cemaat yerinin ahşap karkas sistem ile örülü olduğu tespit edilmiştir. Bu durumda Kadınlar Mahfilinden ulaşım sağlanan minarenin de bir dönem eki olduğu kabul edilmiştir. Yapının Cephesi çimento sıva ile sıvanıp üzeri boyanmıştır.,,,Çatı sacında yoğun paslanma ve malzeme yorgunluğu görülmektedir. Minarenin kaplama malzemesinde deformasyon ve yırtılmalar dikkat çekmektedir. Ahşap elemanlarda boya kayıpları ve malzeme bozulmaları bulunmaktadır. Minarenin metal elemanlarında da korozyon belirtileri mevcuttur. Duvar yüzeylerinde sıva dökülmeleri, çatlaklar ve boya kayıpları görülmektedir. Sobanın kurumundan kaynaklı cephe yüzeyinde kir birikmesi izlenmiştir. Alt kotlarda nemlenme kaynaklı tuzlanma ve küf izleri bulunmaktadır. Ahşap tavanın boyası yer yer dökülmüş olup cilasında bozulmalar mevcuttur. Ahşap elemanlarda çürümeye bağlı deformasyon izlenmektedir. Minberde ve mihrapta ahşap oyma detaylarında boya dökülmeleri ve malzeme aşınması gözlemlenmektedir. Mahfillerin korkuluklarının alt kısımlarında çürüme izleri belirgindir.,,,Caminin yapılış amacı olan divan kültürü devam ettirilmemektedir. Yapı genelinde hem iç hem dış mekanlarda malzeme bozulmaları ve yıpranmalar belirgindir. Çatıda paslanma, duvarlarda nem kaynaklı zararlar, ahşap elemanlarda çürüme ve estetik açıdan uyumsuz onarımlar tespit edilmiştir. Bu bozulmalar yapının uzun vadeli koruna bilirliğini tehdit etmektedir.",
      imagePaths: [
        {
          number: "Şekil 4. 109. Kayalı Köyü Divan Cami Çatı Görüntüsü",
          path: "/koyler/kayali/sekil-4.109-1.JPG",
        },
        {
          number: "Şekil 4. 109. Kayalı Köyü Divan Güneybatı Cephesi",
          path: "/koyler/kayali/sekil-4.109-2.JPG",
        },
        {
          number:
            "Şekil 4. 110. Kayalı Köyü Divan Cami Harim içinden kadınlar mahfili ve son cemaat yeri",
          path: "/koyler/kayali/sekil-4.110-1.JPG",
        },
        {
          number: "Şekil 4. 110. Kayalı Köyü Divan Cami Mihrap iç Cephe",
          path: "/koyler/kayali/sekil-4.110-2.JPG",
        },
      ],
    },
    {
      id: 20,
      name: "Pehlivan Köyü, Derviş Camii",
      description:
        "Cami mihrap aksı üzerinde boyuna gelişim göstermiş olsa da, kareye yakın dikdörtgen planlıdır (Şekil 4.112).  Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş, son cemaat yeri ve harim kurgusu ile inşa edilmiştir. Yapı 8 x 10.1 metrelik bir taban oturumuna sahiptir. Taş kagir sistemi ile inşa edilmiş yapının duvar kalınlığı 80 cm’dir. Cami moloz taştan kâgir tekniği ile örülmüştür (Şekil 4.113). Cami üst örtüsü ahşap kırma çatıdır.,,,Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, girişte yer alan ek yapıdan L biçimli, iki kollu merdiven ile ulaşılmaktadır. Kadınlar Mahfili ve son cemaat yeri ahşap strüktürlüdür.  Son cemaat yeri, yapıya yapılan ek yapıda planlanmıştır (Şekil 4.114). Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde sivri kemerli, ahşap çerçeve il genişletilmiş mihrap yer almaktadır (Şekil 4.114). Harimin mihrap cephesinde iki adet, kuzeydoğu cephesinde üç adet ve güneybatı cephesinde iki adet düz atkılı tepe penceresi mevcuttur. Mihrap cephesinde ve güneybatı cephesindeki tepe pencerelerinin iz düşümlerinde kanatlı düz atkılı pencereler mevcuttur. Pencereler PVC dir. Caminin tavanı çıtalı düz tavandır. Caminin harim, kadınlar mahfili ve son cemaat yeri zemin kaplaması rabıta tahtalıdır. Temeli hususunda bilgi edinilememiştir.,,,Yapının beden duvarlarının çimento sıva ile sıvanması ve harim iç duvarda pencere hizasına kadar lambiri uygulamasının yapılması kullanıcıların ısı yalıtımı amacı ile müdahale de bulunduğunu göstermektedir. Başka bir müdahale yöntemi ise 20.yy’a tarihlenen, yapıya kuzeybatı giriş aksı doğrultusunda genişletme amacı ile ek yapı yapılmasıdır. Ahşap karkas sistem ile yapılan ek yapı zemin katta, yapı yalıtımı için bir ara geçiş alanı oluşturur. Aynı zamanda son cemaat yeri olarak iç mekânda mekân oluşumu sağlamıştır. Üst katta ise kadınlar mahfilini genişletmektedir. Ek yapının yapılması ile çatı kaplama malzemesi olarak galvanize saç tercih edilerek çatı onarılmıştır. Yapının orijinal planında minarenin olup olmadığı tespit edilememiş, güneybatı cephesi bitişiğindeki minare betonarme tekniği ile günümüz ekidir.,,,Cephelerde yüzeyde boya dökülmeleri ve sıva çatlakları gözlemlenmiştir. Bazı alanlarda rutubet kaynaklı renk değişimleri ve kabarmalar bulunmaktadır. Ayrıca metal pencere korkuluklarında paslanma izleri fark edilmektedir. Çatının eğimindeki metal kaplamalarda paslanma ve bazı kısımlarda deformasyon mevcuttur. Cephelerde bitki köklerinin sıva altına girmesiyle oluşan hasarlar gözlemlenmiştir. İç mekânda, duvarlarda rutubet izleri ve boya dökülmeleri gözlemlenmiştir. Ayrıca minber ve mihrap çevresinde ahşap dekoratif elemanlarda aşınmalar fark edilmiştir. Tavan ahşap kaplamasında deformasyon ve çatlaklar gözlenmiştir. Mahfilin korkuluklarında boya dökülmesi ve ahşap elemanlarda çatlamalar gözlemlenmiştir.,,,Caminin yapılış amacı olan divan kültürü devam ettirilmemektedir. Çevredeki bitki örtüsünün kontrolsüz yayılımı yapıya zarar vermektedir.",
      imagePaths: [
        {
          number:
            "Şekil 4. 113. Pehlivan Köyü, Derviş Mahalle Cami, Kuzeybatı Cephesi",
          path: "/koyler/pehlivan/sekil-4.113-1.JPG",
        },
        {
          number:
            "Şekil 4. 113. Pehlivan Köyü, Derviş Mahalle Cami, Güneydoğu-Mihrap Cephesi",
          path: "/koyler/pehlivan/sekil-4.113-2.JPG",
        },
        {
          number:
            "Şekil 4. 114. Pehlivan Köyü, Derviş Mahalle Cami Harim içinden Mihrap Cephesi",
          path: "/koyler/pehlivan/sekil-4.114-1.JPG",
        },
        {
          number:
            "Şekil 4. 114. Pehlivan Köyü, Derviş Mahalle Cami kadınlar mahfili ve son cemaat yeri",
          path: "/koyler/pehlivan/sekil-4.114-2.JPG",
        },
      ],
    },
    {
      id: 21,
      name: "Eceoğlu Köyü Divan Camii",
      description:
        "Cami mihrap aksı üzerinde boyuna gelişim göstermiş, dikdörtgen planlıdır. Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş ve harim kurgusu ile inşa edilmiştir (Şekil 4.116). Yapı 7.7 x 14,3 metrelik bir taban oturumuna sahiptir. Ahşap iskelet sistemi ile inşa edilmiş yapının duvar kalınlığı 30 cm’dir. Sürekli taş temeller üzerine ahşap dikmeler ve kirişler arasına kerpiç dolgu ile örülü yapılı camii bağdadi çıta üzeri sıva ile kaplanmıştır (Şekil 4.117). Cami üst örtüsü ahşap kırma çatıdır.,,,Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, harimden iki kollu L formunda merdiven ile ulaşılmaktadır. Kadınlar Mahfili ahşap strüktürlüdür.  Mahfil de kuzeydoğu ve güneybatı cephelerine bitişik konsol çıkma mevcuttur (Şekil 4.118).   Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde, sivri kemerli, ahşap çerçeve ile genişletilmiş mihrap yer almaktadır (Şekil 4.118). Harimin mihrap cephesinde iki adet ve güneybatı cephesinde de bir adet düz atkılı pencere yer almaktadır. Pencereler ahşaptır. Caminin tavanı çıtalı düz tavandır. Caminin harimi ve kadınlar mahfili zemin kaplamaları rabıta tahtalıdır. Caminin özgün minaresine harimin güneybatı köşesinden ulaşılmaktadır. Minare ahşap strüktürlü, şerefelidir.,,,Orijinal yapı 1960 yılında yanıp yıkıldıktan sonra günümüz yapısında müdahale tespit edilmemiştir.,,,Cephe sıvaları genel olarak düzgün görünse de bazı bölgelerde sıva dökülmeleri ve çatlaklar mevcuttur. Duvar yüzeylerinde nem kaynaklı lekelenmeler ve yüzey bozulmaları gözlenmiştir. Ahşap minarenin yüzeyinde boya kalkmaları, deformasyon ve yer yer çürüme izlenmiştir. Döşemede ahşap elemanlarda aşınma, nemden kaynaklanan renk değişimleri ve zayıflamalar gözlenmiştir. Yapıda mahfil döşemesindeki kirişlerin kuru çürüme ile yüzey kaybına maruz kaldığı gözlemlenmiştir.,,,Cami geleneğin devam edebilmesi yönünde tekrar yapılarak 20.yy yapısı olarak divan cami geleneğini yaşatmaktadır. Camide ahşap elemanlarda (minare, tavan, döşeme) ve dış cephede doğal yaşlanma, iklim etkileri ve bakım eksikliğine bağlı bozulmalar bulunmaktadır.",
      imagePaths: [
        {
          number: "Şekil 4. 117. Eceoğlu Köyü, Divan Cami, Kuzeybatı Cephesi",
          path: "/koyler/eceoglu/sekil-4.117-1.jpg",
        },
        {
          number:
            "Şekil 4. 117. Eceoğlu Köyü, Divan Cami, Güneydoğu-Mihrap Cephesi",
          path: "/koyler/eceoglu/sekil-4.117-2.jpg",
        },
        {
          number:
            "Şekil 4. 118. Eceoğlu Köyü, Divan Cami Harim içinden Mihrap Cephesi",
          path: "/koyler/eceoglu/sekil-4.118-1.jpg",
        },
        {
          number:
            "Şekil 4. 118. Eceoğlu Köyü, Divan Cami kadınlar mahfili ve son cemaat yeri",
          path: "/koyler/eceoglu/sekil-4.118-2.jpg",
        },
      ],
    },
    {
      id: 22,
      name: "Emir Köyü, Cuma yanı Camii",
      description:
        "Cami mihrap aksı üzerinde boyuna gelişim göstermiş olsa da, kareye yakın dikdörtgen planlıdır. Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş, son cemaat yeri ve harim kurgusu ile inşa edilmiştir (Şekil 4.120). Yapı 10.3 x 11.8 metrelik bir taban oturumuna sahiptir. Taş kagir sistemi ile inşa edilmiş yapının duvar kalınlığı 90 cm’dir. Cami moloz taştan kâgir tekniği ile örülmüştür (Şekil 4.121). Cami üst örtüsü ahşap kırma çatıdır.,,,Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, girişte yer alan ek yapıdan L biçimli, iki kollu merdiven ile ulaşılmaktadır. Kadınlar Mahfili ve son cemaat yeri ahşap strüktürlüdür.  Mahfil; orta aks da mihrap hizasında köşeli konsol çıkma mevcuttur (Şekil 4.122).  Son Cemaat yeri harimden bir basamak yukarıda ve kadınlar mahfili iz düşümünde 50 cm geride planlanmıştır. Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde düz atkılı fayans kaplamalı mihrap yer almaktadır (Şekil 4.122). Harimin mihrap cephesinde iki adet, kuzeydoğu cephesinde üç adet ve güneybatı cephesinde dört adet düz atkılı tepe penceresi mevcuttur. Tepe pencereleri çıtakari motiflidir. Tepe pencerelerinin iz düşümlerinde kanatlı düz atkılı pencereler mevcuttur. Pencereler ahşap strüktürlüdür. Caminin tavanı çıtalı düz tavandır. Orta göbeği kare formunda yıldız motiflidir. Caminin harim, kadınlar mahfili ve son cemaat yeri zemin kaplaması rabıta tahtalıdır. Temeli hususunda bilgi edinilememiştir.,,,Yapıya kuzeybatı giriş aksı doğrultusunda genişletme amacı ile ek yapı yapılmıştır. Ahşap karkas sistem ile yapılan bu ek harim katında, yapı yalıtımı için bir ara geçiş alanı oluşturur. Mahfil katında ise kapı açılarak ek yapıya geçiş sağlanmıştır.  Ek yapının üst katında, ek yapının yapım tarihi ile aynı zamanda yapıldığı düşünülen minare kaidesi yer almaktadır. Yapı kullanım durumunu koruduğu için kullanımdan kaynaklı bozulmalar meydana gelmiş ve ona yönelik onarımlar ve müdahaleler gerçekleşmiştir. 1950 minber tekrar yapılmış, 1965 yılında ise kadınlar mahfilinin tamir edildiği mahfil sütunu üzerine işli tarihten anlaşılmaktadır. Tarihi bilinmeyen bir müdahalede mihrabın seramik ile kaplanmasıdır. Pencerelerinde değiştirildiği muhtar tarafından ifade edilen camide özgün dokusu bozulmadan ahşap malzeme ve çıtalı pencere uygulaması yapılmıştır.Ahşap çatıda çürüme ve deformasyon görülmektedir. Çatı örtüsü kiremitlerin yerinden çıkması ve kırılması nedeniyle bozulmuştur. Duvar yüzeylerinde nem nedeniyle kabarma ve dökülmeler izlenmiştir (Şekil 4.123). Cephe genelinde duvarın alt kısımlarında zemin ile temas eden yüzeylerinde suyun etkisiyle oluşmuş nem izleri izlenmiştir. Kuzeybatı giriş cephesindeki su basanında ve minarede; moloz duvarın derz aralarında yosun oluşumu mevcuttur (Şekil 4.123). Ahşap tavan elemanlarında boya dökülmesi ve çatlaklar mevcut. Tavan kirişlerinde uçma delikleri ve çürümeler mevcuttur. Ahşap pencere doğramaları ve kapılarda bozulmalar, menteşelerde paslanmalar gözlenmektedir (Şekil 4.123). ",
      imagePaths: [
        {
          number: "Şekil 4. 121. Emir Köyü, Cuma Cami; kuzeydoğu cephesi-giriş",
          path: "/koyler/emir/sekil-4.121-1.JPG",
        },
        {
          number: "Şekil 4. 121. Emir Köyü, Cuma Cami; güneybatı cephesi",
          path: "/koyler/emir/sekil-4.121-2.JPG",
        },
        {
          number: "Şekil 4. 122. Emir Köyü, Cuma Cami Mihrap",
          path: "/koyler/emir/sekil-4.122-1.jpg",
        },
        {
          number:
            "Şekil 4. 122. Emir Köyü, kadınlar mahfili ve son cemaat yeri",
          path: "/koyler/emir/sekil-4.122-2.jpg",
        },
      ],
    },
    {
      id: 23,
      name: "Ümit Köyü, Kavun Mahallesi Camii",
      description:
        "Cami mihrap aksı üzerinde boyuna gelişim göstermiş olsa da kareye yakın dikdörtgen planlıdır. Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş, son cemaat yeri ve harim kurgusu ile inşa edilmiştir. (Şekil 4.126). Yapı 9.7 x 13.1 metrelik bir taban oturumuna sahiptir. Taş kâgir olan yapının duvar kalınlığı 74 cm’dir (Şekil 4.127). Cami üst örtüsü ahşap kırma çatıdır.,,,Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, son cemaat yerinde yer alan L planlı iki kollu merdiven ile ulaşılmaktadır. Kadınlar Mahfilinde, mihrap aksı doğrultusunda dairesel biçimli konsol çıkma mevcuttur. Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde kemerli mihrap; alçı çerçeve ile genişletilmiştir (Şekil 4.128). Harim; kuzeydoğu, güneydoğu ve güneybatı cephelerinde ikişer kemerli tepe pencereleri ve iz düşümlerinde ikişer düz atkılı kanatlı pencereler ile aydınlatılmaktadır. Kadınlar mahfilinde kuzeybatı cephesinde iki adet pencere mevcuttur. Pencereler ahşaptır. Caminin tavanı çıtakari tekniği ile ızgara biçimindedir. Orta göbeği kare formunda yıldız motiflidir. Cami içerisinde tek bezeme örneğine tavan göbeğinde rastlanmıştır. Caminin harim, kadınlar mahfili ve son cemmat yerinin zemini rabıta tahtalıdır.,,,Yapıya kuzeybatı giriş aksı doğrultusunda genişletme amacı ile ek yapı yapılmıştır (Şekil 4.129). Ahşap karkas sistem ile yapılan ek yapı zemin katta, yapı yalıtımı için bir ara geçiş alanı oluşturur. Ek yapıya bağlantı için üst katta ana yapının kuzeybatı cephesinde yer alan pencere açıklığı kapı açıklığına çevrilmiştir (Şekil 4.129). Yapının beden duvarlarının çimento sıva ile sıvanması ve harim iç duvarda pencere hizasına kadar lambiri uygulamasının yapılması kullanıcıların ısı yalıtımı amacı ile müdahale de bulunduğunu göstermektedir. Kuzeybatı cephesi bitişiğindeki minare betonarme tekniği ile günümüz ekidir.,,,Sıva yüzeyinde kısmi lekelenmeler, yer yer kirlenme ve eskiyen boya katmanları görülmektedir. Nem etkisi sonucu oluşmuş hafif renk değişimleri mevcut. Tavan kaplamasında boya dökülmeleri, nemlenmeden kaynaklı yüzey pürüzlenmeleri ve eskiyen boyalı yüzeyler gözlemlenmektedir. Kenar hatlarında mikro çatlaklar gözlemlenmektedir. Ahşap tavan yapısında yüzeysel çatlaklar ve boyada hafif bozulmalar mevcuttur.,,,Günümüzde de aktif kullanılan cami bayram namazlarında ve Cuma namazlarında diğer mahalle ve köylerden de katılım sağlanarak kullanılmaya devam etmektedir. Somut olmayan Miras değerini korumaktadır. Yapıda genel olarak doğal çevresel koşullardan (nem, yağış, bitki oluşumu) ve yetersiz bakım nedeniyle bozulmalar bulunmaktadır.",
      imagePaths: [
        {
          number:
            "Şekil 4. 127. Ümit Köyü, Beycebey Cami; kuzeydoğu cephesi-giriş",
          path: "/koyler/umit/sekil-4.127-1.JPG",
        },
        {
          number: "Şekil 4. 127. Ümit Köyü, Beycebey Cami; güneybatı cephesi",
          path: "/koyler/umit/sekil-4.127-2.JPG",
        },
        {
          number: "Şekil 4. 128. Ümit Köyü, Beycebey Cami; mihrap cephesi",
          path: "/koyler/umit/sekil-4.128-1.JPEG",
        },
        {
          number:
            "Şekil 4. 128. Ümit Köyü, Beycebey Cami; mahfil ve son cemaat yeri ",
          path: "/koyler/umit/sekil-4.128-2.JPEG",
        },
        {
          number:
            "Şekil 4. 129 Ümit Köyü, Beycebey Cami;cümle kapısının açıldığı ek yapı",
          path: "/koyler/umit/sekil-4.129-2.JPEG",
        },
      ],
    },
    {
      id: 24,
      name: "Esenli Köyü, Sağıroğlu Mahalle Camii",
      description:
        "Cami mihrap aksı üzerinde boyuna gelişim göstermiş dikdörtgen planlıdır (Şekil  4.131). Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş, son cemaat yeri ve harim kurgusu ile inşa edilmiştir. Taş kâgir yapı 8.7 x 14.6 metrelik bir taban oturumuna sahiptir (Şekil 4.132). Yapı karma kâgir teknik ile inşa edilmiştir. Harim katında taş kâgir örgü tekniği ve üst katı ise ahşap kagir tekniği kullanılmıştır. Taş kâgir duvar kalınlığı 60 cm ve ahşap duvarda 25 cm’dir. Cami üst örtüsü ahşap kırma çatıdır.,,,Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, son cemaat yerinde yer alan iki kollu L biçimindeki merdiven ile ulaşılmaktadır. Son Cemaat yeri harimden bir basamak yukarıda ve kadınlar mahfili iz düşümünde planlanmıştır. Sonradan kapatıldığı anlaşılan son cemaat yeri kuzeydoğu ve güneybatı cephelerinde birer oda oluşturacak şekilde ahşap konstrüksiyon ile kapatılmıştır. Kadınlar Mahfiline ulaşan merdiven açıkta bırakılmıştır. Mahfil orta aksında, mihrap hizasında yarım daire biçiminde konsol çıkma yapmıştır (Şekil 4. 133). Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde, mukarnas kavsaralı mihrap; ahşap çerçeve ile genişletilmiştir (Şekil 4.133). Harimde mihrap cephesinde, kuzeydoğu ve güneybatı cephelerinde üçer tane kemerli tepe pencere ve iz düşümlerinde düz atkılı kanatlı pencereler mevcuttur. Güneybatı cephesinde kadınlar mahfili altında iki düz atkılı kanatlı pencere mevcuttur. Pencereler PVC dir. Caminin tavanı çıtalı düz tavandır. Orta göbeği köşeli formda ve kök boyalar ile yıldız desenlerinden oluşan kalemişi tekniği ile bezelidir. Tavanın köşe silmeleri testere motifli kök boyalıdır (Şekil 4.134). Caminin harim, kadınlar mahfili rabıta tahtalı ve son cemmat yerinin zemini beton malzemedir.,,,Cephe boyasında yer yer çatlaklar ve dökülmeler mevcuttur. Alt kısımlarda sıva kayıpları ve nem etkisiyle oluşmuş kararmalar gözlemlenmektedir. Ahşap tavanın boyası soyulmaya başlamış ve renk kayıpları mevcuttur. Ayrıca bazı yerlerde nem nedeniyle deformasyonlar görülmektedir. Minber, korkuluklar ve mahfil gibi ahşap detaylarda boya aşınmaları ve malzeme çatlamaları gözlemlenmiştir. Merdiven rabıta tahtalarında aşınma ve bazı kısımlarında çürümeler mevcuttur.,,,Cami geleneğin devam edebilmesi yönünde tekrar yapılarak 20.yy yapısı olarak divan cami geleneğini yaşatmaktadır.  ",
      imagePaths: [
        {
          number:
            "Şekil 4. 132. Esenli Köyü, Sarıoğlu Mahaller Cami Cephe Fotoğrafı",
          path: "/koyler/sagiroglu/sekil-4.132-1.JPG",
        },
        {
          number:
            "Şekil 4. 134. Esenli Köyü, Sarıoğlu Mahaller Cami tavan göbeği bezeme detayı",
          path: "/koyler/sagiroglu/sekil-4.134.JPG",
        },
      ],
    },
    {
      id: 25,
      name: "Şeyh Köyü Akça-su Camii",
      description:
        "Cami mihrap aksı üzerinde boyuna gelişim göstermiş olsa da kareye yakın dikdörtgen planlıdır (Şekil 4.136). Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş, son cemaat yeri ve harim kurgusu ile inşa edilmiştir. Taş kâgir yapı 9.4 x 15.4 metrelik bir taban oturumuna sahiptir (Şekil 4.137). Duvar kalınlığı 115 cm.’dir. Cami üst örtüsü ahşap kırma çatıdır.,,,Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, iz düşümünde yer alan, harimden bir basamak yukarıda yer alan son cemaat yerine yer alan L formundaki merdiven ile ulaşılmaktadır (Şekil 4.138). Kadınlar Mahfilinde, mihrap aksı doğrultusunda dairesel biçimli konsol çıkma mevcuttur. Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde yer alan mihrap 2010 yılında yenilenmiştir. Ahşap çerçeve ile genişletilen mihrap günümüz ahşap oymacılığının bir örneğidir. 1940larda bir deprem sonrası yıkılan batı duvarında basık kemerli iki adet, doğu cephesinde üç ve mihrap cephesinde iki düz atkılı pencere yer almaktadır. Aynı zamanda mihrap cephesinde düz atkılı üç tepe penceresi mevcuttur. Caminin tavanı düz çıtalıdır. Mevcutta var olan göbek sonradan eklendiği ya da boyandığı üzerindeki işlemelerden anlaşılmaktadır. Cami içeresindeki ahşap strüktürün tamamı boyalıdır.,,,15. yy.da yapının kullanımının devam etmediği ve harap halde olması sebebi ile Mevlânâ Hayreddin tarafından tamir ettirilmiştir (Yakupoğlu, 2009). Cami tarihi süreç içerisinde çeşitli müdahaleler geçirmiş ve ek yapılar yapılmıştır. Cami imamından, yapının 1940larda geçirdiği deprem sonrası batı duvarının ve duvara bitişik özgün minarenin yıkıldığı, sonrasında köy halkından bir hayırsever tarafından yaptırıldığı öğrenilmiştir. Minare yaptıran hayırseverin hicazda gördüğü ve beğendiği minare formunda inşa edilmiştir. Yapının beden duvarları harç dökülmeleri sebebi ile çimento sıvanarak örtülmüştür. Yapının kuzey cephesinde iki katlı yükselen ek yapı da günümüz ekidir. Yanın genişlemesi sebebi ile değil, günümüz işlevlerine bir çözüm olarak inşa edilmiştir. Köy konağı ve kuran kursu olarak kullanılan bu yapı ahşap karkas tekniği ile inşa edilmiştir.,,Cephelerde yer yer sıva çatlakları ve boyanın dökülmeye başladığı görülmektedir. Özellikle minarenin çevresinde, alt kısmındaki taş örgü yüzeylerde derz dolgularında aşınma ve taş yüzeylerinde kirlenme mevcuttur. Ahşap saçaklarda deformasyon ve güneş etkisiyle renk kaybı gözlemlenmiştir. Tavan ahşap kaplamasında bölgesel renk kaybı, çatlaklar ve deformasyonlar gözlemlenmiştir. Boyalarda dökülmeler ve katman kayıpları bulunmaktadır. İç mekân duvar yüzeylerinde sıva çatlakları ve yer yer dökülmeler mevcuttur. Kadınlar mahfilinde kullanılan ahşap elemanlarda yıpranma ve zamanla oluşmuş çatlaklar gözlemlenmiştir. Merdiven korkuluklarının bağlantı noktalarında aşınma söz konusudur. ",
      imagePaths: [
        {
          number: "Şekil 4. 137. Akçasu Cami cephe fotoğrafları",
          path: "/koyler/akcasu/sekil-4.137-1.JPG",
        },
        {
          number: "Şekil 4. 137. Akçasu Cami cephe fotoğrafları",
          path: "/koyler/akcasu/sekil-4.137-2.JPG",
        },
        {
          number: "Şekil 4. 138. Akçasu Cami mihrap cephesi",
          path: "/koyler/akcasu/sekil-4.138-1.JPG",
        },
        {
          number: "Şekil 4. 138. Akçasu Cami mahfil cephesi",
          path: "/koyler/akcasu/sekil-4.138-2.JPG",
        },
      ],
    },
    {
      id: 26,
      name: "Alpı Köyü Divan Camii",
      description:
        "Cami mihrap aksı üzerinde boyuna gelişim göstermiş dikdörtgen planlıdır. Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş, son cemaat yeri ve harim kurgusu ile inşa edilmiştir. Ahşap iskelet sistemi ile inşa edilmiştir. Sürekli taş temel üzerine ahşap dikmeler ve kirişler arasına kerpiç dolgu ile örülü yapılı camii bağdadi çıta üzeri sıva ile kaplanmıştır (Şekil 4.140). Cami üst örtüsü ahşap kırma çatıdır.,,,Yapının içine doğru çatısının çökmesi sebebi ile girilememiş olup yapı üzerinde yerinde incelemeler yapılamamıştır. Yapının beden duvarlarının çimento sıva ile kapatıldığı ve giriş aksı doğrultusunda üst katta köy odası alt katta ise bir giriş alanı tanımlayan ek yapının yapıldığı söylenebilir.,,,Cephelerdeki sıvalarda yoğun dökülmeler gözlenmiştir. Taş ve ahşap birleşim yerlerinde harç erimeleri mevcuttur. Ahşap hatıl elemanlarında çürümeler ve çatlamalar oluşmuş, bazı bölümlerde ahşap tamamen kırılarak yerinden ayrılmıştır. Cam pencereler eksik ve korunmasız durumdadır. Pencere sövelerindeki ahşaplar deforme olmuş ve büyük oranda bozulmuştur. Yapının kuzey cephesi, güney cepheye göre daha fazla yıpranmıştır. Özellikle ahşap konstrüksiyonda yer yer kayıplar meydana gelmiştir. Çatıda yer alan kiremitler tamamen bozulmuş, çatı örtüsü parçalanmış ve yapının içine su girişine yol açmaktadır (Şekil 4.142). Çatı örtüsünün büyük kısmı çökmüş durumdadır. Ahşap taşıyıcılar (mertek ve aşıklar) çürüyerek taşıma kapasitesini kaybetmiştir.",
      imagePaths: [
        {
          number: "Şekil 4. 137. Akçasu Cami cephe fotoğrafları",
          path: "/koyler/alpi/sekil-4.140-2.jpg",
        },
        {
          number: "Şekil 4. 137. Akçasu Cami cephe fotoğrafları",
          path: "/koyler/alpi/sekil-4.141-1.JPG",
        },
        {
          number: "Şekil 4. 138. Akçasu Cami mihrap cephesi",
          path: "/koyler/alpi/sekil-4.141-2.JPG",
        },
        {
          number: "Şekil 4. 138. Akçasu Cami mahfil cephesi",
          path: "/koyler/alpi/sekil-4.142-1.jpg",
        },
      ],
    },
    {
      id: 27,
      name: "Mescid Köyü Divan Camii",
      description:
        "Cami mihrap aksı üzerinde boyuna gelişim göstermiş, dikdörtgen planlıdır (Şekil 4.144). Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş, son cemaat yeri ve harim kurgusu ile inşa edilmiştir. Yapı 14.3 x 23.2 metrelik bir taban oturumuna sahiptir. Taş kâgir olan yapının duvar kalınlığı 85 cm’dir. (Şekil 4.145). Cami üst örtüsü ahşap kırma çatıdır.,,,Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, son cemaat yerinde yer alan tek kollu merdiven ile ulaşılmaktadır. Son Cemaat yeri harimden bir basamak yukarıda ve kadınlar mahfili iz düşümünde planlanmıştır. Kadınlar mahfili ahşap strüktürlü, harim katından yükselen yedi ahşap direk üzerine bindirilmiştir. Mahfil kuzeybatı ve güney batı duvarı boyunca uzanarak L formundadır.  Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde, sivri kemerli mihrap; mermer çerçeve ile genişletilmiştir (Şekil 4.146). Harimde mihrap cephesinde, kuzeydoğu ve güneybatı cephelerinde üçer tane sivri kemerli tepe penceresi mevcuttur. Güneybatı cephesinde kadınlar mahfili altında iki düz atkılı kanatlı pencere mevcuttur. Pencereler ahşaptır. Caminin tavanı çıtalı düz tavandır. Orta göbeği köşeli formda ve kök boyalar ile rumi desenlerinden oluşan kalemişi tekniği ile bezelidir (Şekil 4.146). Caminin harim, kadınlar mahfili ve son cemmat yerinin zemin kaplamaları rabıta tahtalıdır.,,,Yapının dış cephesinde boya dökülmeleri, çatlaklar ve çatı kiremitlerinde kaymalar mevcuttur. Ahşap tavanlarda geniş çatlaklar, deformasyonlar ve renk kaybı gözlemlenmiştir. Ahşap yüzeylerde yüzey bozulmaları, çatlaklar ve deformasyonlar belirgindir. Yer yer ahşap direklerde derin çatlaklar ve ayrışmalar mevcuttur. Kiremit çatının yer yer bozulduğu ve bazı kiremitlerin kaydığı gözlenmektedir.  Yapının dış cephesinde yeni boya uygulaması mevcut, ancak yer yer çatlak ve dökülmeler mevcuttur. Ahşap tavanlarda geniş çatlaklar, deformasyonlar ve renk kaybı gözlemlenmiştir.  Yapının ahşap korkuluklarında, özellikle el işçiliği detaylarının korunduğu görülmektedir. Ancak ahşap yüzeylerde yüzey bozulmaları, çatlaklar ve deformasyonlar izlenmiştir. Ahşap direklerde derin çatlaklar ve ayrışmalar mevcuttur. Ahşap panellerin birleşim noktalarında açıklıklar ve yer yer ahşap liflerinde ayrışmalar tespit edilmiştir. Ahşap üzerine yapılmış geleneksel motifler korunmuş fakat pigment kayıpları gözlenmiştir.,,,Cami geleneğin devam edebilmesi yönünde tekrar yapılarak 20.yy yapısı olarak divan cami geleneğini yaşatmaktadır",
      imagePaths: [
        {
          number:
            "Şekil 4. 145. Mescit Köyü Divan Cami; güneydoğu-mihrap cephesi",
          path: "/koyler/mescid/sekil-4.145-1.JPEG",
        },
        {
          number: "Şekil 4. 145. Mescit Köyü Divan Cami; kuzeydoğu cephesi",
          path: "/koyler/mescid/sekil-4.145-2.JPEG",
        },
        {
          number: "Şekil 4. 146. Mescit Köyü Divan Cami; mihrap",
          path: "/koyler/mescid/sekil-4.146-1.JPEG",
        },
        {
          number:
            "Şekil 4. 146. Mescit Köyü Divan Cami; kadınlar mahfili ve son cemaat yeri",
          path: "/koyler/mescid/sekil-4.146-2.JPEG",
        },
      ],
    },
    {
      id: 28,
      name: "Saraycık Köyü, Dere Mah. Camii",
      description:
        "Cami mihrap aksı üzerinde, boyuna gelişim göstererek dikdörtgen planlıdır. (Şekil 4. 148).  Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş, son cemaat yeri ve harim kurgusu ile inşa edilmiştir. Yapı 6.6 x 11,8 metrelik bir taban oturumuna sahiptir. Ahşap iskelet sistemi ile inşa edilmiş yapının duvar kalınlığı 30 cm’dir. Sürekli taş temeller üzerine ahşap dikmeler ve kirişler arasına kerpiç dolgu ile örülü yapılı camii bağdadi çıta üzeri sıva ile kaplanmıştır (Şekil 4.149). Cami üst örtüsü ahşap kırma çatıdır.,,,Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, iz düşümünde yer alan, harimden bir basamak yukarıda yer alan son cemaat yerine yer alan iki kollu L formunda merdiven ile ulaşılmaktadır. Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde, kemerli mihrap yer almaktadır (Şekil 4.150). Harim; mihrap cephesinde mihrap izdüşümünde, kuzeydoğu cephesinde ve güneybatı cephesinde bir tane düz atkılı tepe penceresi ile aydınlatılmaktadır. Mihrap cephesinde iki düz atkılı açılabilir pencere mevcuttur. Pencereler ahşaptır. Caminin tavanı dört köşeden yay şeklinde tekne tavan izlenimi vermektedir. Sıva kaplıdır. Caminin harim, kadınlar mahfili ve son cemmat yerinin zemin kaplamaları rabıta tahtalıdır. Yapıda mermer sütun kaideleri harim içinde mahfil sütunları için yastık olarak kullanılmıştır (Şekil 4. 151). Sütun kaidelerinin dönemi tespit edilememiş olup yapıda başka bir devşirme malzeme kullanılmamıştır.,,,Yapının cephelerinde çimento sıva uygulaması yapıldığı tespit edilmiştir. Tavanın ahşap yüzeyi çimento sıva ve üzeri boya ile kapatılmıştır.,,,Yapının sıvasında dökülmeler ve çatlamalar mevcuttur. Boya tabakası yer yer kaybolmuş, yapı malzemesi doğrudan çevresel etkilere maruz kalmaktadır. Ahşap hatıllarda ve diğer taşıyıcı elemanlarda deformasyon, renk değişimi ve uçma delikleri gözlemlenmektedir. Temel seviyesinde su etkisine bağlı aşınma ve liken oluşumu gözlenmektedir. Kar, yağmur ve rüzgar gibi doğal etkenlerin yapının dış cephesinde ciddi tahribat yarattığı anlaşılmaktadır. Tavan yüzeyinde nem kaynaklı kabarma, dökülme ve renk değişiklikleri görülmektedir. Tavanın bazı bölgelerinde ciddi delikler ve çökme belirtileri mevcut. İç duvarlarda nem kaynaklı leke ve kabarma izleri bulunmaktadır. Boya tabakasının soyulduğu, duvarların bazı yerlerinde malzemenin açığa çıktığı görülmektedir. Ahşap zemin, yapısal deformasyon ve nem etkisiyle çürümeye başlamış. Bazı bölgelerde zemin sağlamlığını kaybetmiş durumdadır (Şekil 4.152).,,, ",
      imagePaths: [
        {
          number:
            "Şekil 4. 149. Saraycık Köyü, Divan Cami, Kuzeybatı – Giriş Cephesi",
          path: "/koyler/saraycik/sekil-4.149-1.jpg",
        },
        {
          number: "Şekil 4. 149. Saraycık Köyü, Divan Cami, Kuzeydoğu Cephesi",
          path: "/koyler/saraycik/sekil-4.149-2.jpg",
        },
        {
          number:
            "Şekil 4. 150. Saraycık Köyü, Divan Cami Harim içinden Mihrap Cephesi",
          path: "/koyler/saraycik/sekil-4.150-1.jpg",
        },
        {
          number:
            "Şekil 4. 150. Saraycık Köyü, Divan Cami kadınlar mahfili ve son cemaat yeri",
          path: "/koyler/saraycik/sekil-4.150-2.jpg",
        },
        {
          number:
            "Şekil 4. 151. Saraycık Köyü, Divan Cami Kadınlar Mahfili taşıyıcı direğinde yastık olarak kullanılan taş sütun kaidesi ",
          path: "/koyler/saraycik/sekil-4.151.JPG",
        },
      ],
    },
    {
      id: 29,
      name: "Kemerler Köyü Divan Camii",
      description:
        "Cami mihrap aksı üzerinde boyuna gelişim göstermiş olsa da, kareye yakın dikdörtgen planlıdır (Şekil 4. 155).  Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş, son cemaat yeri ve harim kurgusu ile inşa edilmiştir.  Ahşap kâgir olan yapı 8.7 x 9.7 metrelik bir taban oturumuna sahiptir. Duvar kalınlığı 35 cm’dir. Cami ahşap kütüklerin kara boğaz tekniği ile üst üste bindirilerek örülmüştür. İç kısımda çıtalı kalaslar ile dış beden duvarları ise sıva üzeri boya ile kapatılmıştır. Cami üst örtüsü ahşap kırma çatıdır.,,,Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, iz düşümünde yer alan, harimden bir basamak yukarıda yer alan son cemaat yerine yer alan tek kollu merdiven ile ulaşılmaktadır. Kadınlar Mahfilinde, mihrap aksı doğrultusunda dairesel ve beden duvarlarına yaslı yay biçimli konsol çıkmalar mevcuttur. Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde, sivri kemerli mihrap; ahşap çerçeve ile genişletilmiştir (Şekil 4.157). Harim mihrap cephesinde iki ve kuzeydoğu cephesinde bir tane düz atkılı tepe penceresi mevcuttur. Mihrap cephesinde iki, kuzeydoğu ve güneybatı cephesinde birer düz atkılı çift kanatlı pencere mevcuttur. Pencereler ahşaptır. Caminin tavanı çıtalı düz tavandır. Orta göbeği dairesel formunda ve kök boyalar ile rumi desenlerinden oluşan kalemişi tekniği ile bezelidir (Şekil 4.158). Yakın dönem olduğu düşünülen; kadınlar mahfili balkonunun silmelerinde, tavan göbeği ile köşe silmelerde ve mihrap kavsarasında rumi motifleri ile geometrik motifler mevcuttur. Minber ve tavan çıtakari tekniği ile bezelidir. Caminin harim, kadınlar mahfili ve son cemmat yerinin zemin kaplamaları rabıta tahtalıdır.,,,Yapının kuzeybatı cephesine iki katlı ek yapı yapılmıştır. Alt katta giriş alanı oluşturan bu yapı üst katta kuran kursu olarak kullanılmaktadır. Kadınlar mahfilinden geçiş oluşturulması için ana binanın kuzeybatı cephesine kapı açıklığı açılmıştır (Şekil 4.159). Yapı askıya alınarak zeminde betonarme ile desteklenmiştir.  Yapının iç duvarları ahşap kalaslar ile kapatılarak yalıtım sağlanması amaçlanmıştır. Pencere denizlik hizasına kadar harim içi lambiri döşenmiştir. Mevcutta var olan minare yapının orijinal minaresi değildir. Ek olarak sonradan yapılmıştır.,,,Cephelerde zamanla oluşan nem etkisi nedeniyle yer yer boya kalkmaları ve sıva dökülmeleri gözlemlenmiştir. Yapının alt kısımlarında su etkisine bağlı olarak kararma ve lekelenmeler mevcut. Çatıda kullanılan kiremitlerin bir kısmında kayma ve eksilme olduğu görülmektedir. Tavan malzemesi olan ahşap kaplamalarda zamanla oluşan doğal ton değişimleri ve ufak çatlaklar bulunmaktadır. Tavan ve duvar birleşimlerinde bazı bölgelerde uçma delikleri izlenmiştir.,,,Camiye çevre köylerden Cuma ve bayram namazlarına geleneği devam ettirmek amacı ile gelen cemaatin olması ile Somut olmayan Miras değerini korumaktadır. ",
      imagePaths: [
        {
          number: "Şekil 4. 154. Kemerler Köyü Divan Caminin Kitabesi",
          path: "/koyler/kemerler/sekil-4.154.JPG",
        },
        {
          number:
            "Şekil 4. 156. Kemerler Köyü, Divan Cami, Güneydoğu – Mihrap Cephesi",
          path: "/koyler/kemerler/sekil-4.156-1.JPEG",
        },
        {
          number: "Şekil 4. 156. Kemerler Köyü, Divan Cami, Güneybatı Cephesi",
          path: "/koyler/kemerler/sekil-4.156-2.JPEG",
        },
        {
          number:
            "Şekil 4. 157. Kemerler Köyü, Divan Cami Harim içinden Mihrap Cephesi",
          path: "/koyler/kemerler/sekil-4.157-1.JPEG",
        },
        {
          number:
            "Şekil 4. 157. Kemerler Köyü, Divan Cami kadınlar mahfili ve son cemaat yeri",
          path: "/koyler/kemerler/sekil-4.157-2.JPEG",
        },
        {
          number: "Şekil 4. 158. Kemerler Köyü, Divan Cami bezeme detayları",
          path: "/koyler/kemerler/sekil-4.158-1.jpg",
        },
        {
          number: "Şekil 4. 158. Kemerler Köyü, Divan Cami bezeme detayları",
          path: "/koyler/kemerler/sekil-4.158-2.JPEG",
        },
        {
          number: "Şekil 4. 158. Kemerler Köyü, Divan Cami bezeme detayları",
          path: "/koyler/kemerler/sekil-4.158-3.jpg",
        },
      ],
    },
    {
      id: 30,
      name: "Çavundur Köyü, Yeni Cuma Camii",
      description:
        "Cami mihrap aksı üzerinde merkezi plan özelliği taşır, kare planlıdır. Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş ve harim kurgusu ile inşa edilmiştir (Şekil 4.161).  Caminin orijinal taban oturumu 8.5 x 9 metredir. Taş kâgir olan yapının duvar kalınlığı 110 cm’dir. Moloz ve kaba yonu taşların ahşap hatıllar arasında örülmesi ile inşa edilmiştir (Şekil 4. 162). Yapı yalıtım sağlanması amacıyla içten 2.5 cm kalınlığındaki kalaslar ile kaplanmıştır (Şekil 4. 163). Cami üst örtüsü ahşap kırma çatıdır.,,,Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, harimin kuzeybatı duvarına yaslı merdiven ile ulaşıldığı düşünülmektedir. Mahfil kuzeydoğu ve güneybatı cephelerine yaslı çıkma yapmıştır (Şekil 4. 163). Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde sivri kemerli mihrap yer almaktadır (Şekil 4.163). Harim, mihrap cephesinde, kuzeydoğu ve güneybatı cephelerinde birer düz atkılı pencere ile doğal ışık almıştır. Pencereler açıklıkları farklı boyutlarda ve doğramaları çıkarılmıştır Kuzeybatı cephesinde cümle kapısı ile aynı düşey aksta kadınlar mahfili katında da bir kapı açıklığı yer almaktadır. Caminin tavanı çıtalı düz ahşap kaplamalıdır. Caminin harim, kadınlar mahfili zemin kaplamaları rabıta tahtalıdır.,,,Caminin doğu duvarında yer alan saçak 1987 yılında yapılmıştır. Doğu duvarında yer alan ocak nişi de bu ek sırasında mı yapıldı bina ilk yapıldığı dönemde de var mıydı tespit edilememiştir. Yapının tavanının bel vermesi sebebi ile harimden yükselen aynı aks üzerinde iki ahşap kesitli dikme yerleştirilmiştir.,,,Yapının beden duvarlarında rüzgâr erozyonu sonucu derz boşalmaları ve harç kaybı mevcuttur. Cephe taşlarının üzerinde iklim koşullarından kaynaklı yüzey bozulmaları mevcuttur. Taşlarda yosunlaşma veya renk farklılıkları gibi biyolojik etkiler gözlenmiştir. Yağmur erozyonu sonucu çatı ve tavan döşemede rutubet izleri, yer yer çürüme ve yüzey kayıpları izlenmiştir. İç mekânda kullanılan ahşap elemanların birçoğunda nem kaynaklı çürüme ve ahşap zararlılarının etkisi görülmektedir. İç mekânda bazı alanlar orijinal formlarını kaybetmiş ve kullanılmaz hale gelmiştir. Özellikle balkon ve korkuluk detaylarında aşınma belirgindir. Vandalizm sonucu beden taşları üzerinde yazılar, zemin kaplamaları, yapı eleman kasaları, duvar kaplamaları sökülmüştür (Şekil 4.163). Yapının kuzeydoğusunda, kadınlar mahfili katında duvar çökmesi mevcuttur. Kuzey doğu cephesindeki ocak da tamamen çökmüştür (Şekil 4.165).,,,Yapı, taş ve ahşap malzemenin birlikte kullanıldığı bir geleneksel mimari örneği olarak, doğal etkenlere karşı ciddi ölçüde yıpranmıştır. Çatı korumasının yetersizliği, yağmur ve nemin yapı içine sızmasına neden olmuştur. Malzeme eskimesi ve gerekli bakımın yapılmamış olması, yapının taşıyıcı elemanlarının ciddi şekilde zarar görmesine yol açmıştır. Yapı terk edildiği için vandalizme ve hırsızlığa yabanıl yaşama açık hale gelmiştir.",
      imagePaths: [
        {
          number:
            "Şekil 4. 162. Çavundur Köyü, Yeni Cuma Cami Kuzeybatı – Giriş Cephesi",
          path: "/koyler/cavundur/sekil-4.162-1.jpg",
        },
        {
          number:
            "Şekil 4. 162. Çavundur Köyü, Yeni Cuma Cami kuzeydoğu cephesi",
          path: "/koyler/cavundur/sekil-4.162-2.jpg",
        },
        {
          number:
            "Şekil 4. 163. Çavundur Köyü, Yeni Cuma Cami Harim içinden Mihrap Cephesi",
          path: "/koyler/cavundur/sekil-4.163-1.jpg",
        },
        {
          number:
            "Şekil 4. 163. Çavundur Köyü, Yeni Cuma Cami kadınlar mahfili ve son cemaat yeri",
          path: "/koyler/cavundur/sekil-4.163-2.jpg",
        },
      ],
    },
    {
      id: 31,
      name: "Canbaz Köyü Divan Camii",
      description:
        "Cami mihrap aksı üzerinde merkezi plan özelliği taşır, kare planlıdır. Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş ve harim kurgusu ile inşa edilmiştir (Şekil 4.167). Caminin orijinal taban oturumu 7x 8.5 metredir. Taş kâgir olan yapının duvar kalınlığı 78 cm’dir (Şekil 4. 168). Yapı yalıtım sağlanması amacıyla içten 2.5 cm kalınlığındaki kalaslar ile kaplanmıştır. Cami üst örtüsü ahşap kırma çatıdır.,,,Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, ek yapıdaki L formundaki iki kollu merdivenden ulaşım sağlanmaktadır. Mahfil orta aksında, mihrap hizasında konsol çıkma yapmıştır (Şekil 4. 169). Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde ahşap çerçeveli basık kemerli mihrap yer almaktadır (Şekil 4. 169). Harim, mihrap cephesinde bir ve kuzeydoğu cephesinde üç ve güneybatı cephesinde iki düz atkılı pencere ile doğal ışık almıştır. Pencereler farklı boyutlarda ve ahşaptır. Caminin tavanı çıtalı düz ahşap kaplamalıdır. Harimin iç beden duvarları çıtalı kaplamalar ile kaplanmıştır. Caminin harim, kadınlar mahfili zemin kaplamaları rabıta tahtalıdır.,,,Yapım tarihi bilinmeyen caminin kuzeybatı cephesine iki katlı ek yapı yapılmıştır. Ek yapı girişte Harim girişi için rüzgarlık oluştururken üst katta köy odası – kuran kursu için mekan oluşturmaktadır. Harim içerisinden kadınlar mahfiline çıkan merdiven kaldırılmıştır. Kadınlar Mahfiline ek yapıdan ulaşım verilmiş dolayısı ile mahfil katında giriş aksı üzerinde beden duvarına kapı açıklığı açılmıştır. Yakın tarihte ek yapının kuzeybatısına tek katlı abdesthane ve hela yapısı eklenmiştir.,,,Yapıda güneybatı Cephesi'nde tüm duvarı zeminden başlayarak saran çatlaklar ve nem etkisi ile rutubet izleri gözlemlenmiştir. Cephelerde belirgin yüzey bozulmaları ve boya dökülmeleri mevcuttur. Yapının sıvasında çatlamalar ve dökülmeler görülmektedir. Ahşap kaplamalı duvarlarda yer yer deformasyonlar ve renk farklılıkları gözlemlenmiştir. Tavan kaplamasında bozulmalar, birleşim yerlerinde açıklıklar ve boya dökülmeleri mevcuttur.,,,Caminin yapılış amacı olan divan kültürü devam ettirilmemektedir.",
      imagePaths: [
        {
          number: "Şekil 4. 168. Canbaz Köyü, Divan Cami, Kuzeybatı Cephesi",
          path: "/koyler/canbaz/sekil-4.168-1.jpg",
        },
        {
          number:
            "Şekil 4. 168. Canbaz Köyü, Divan Cami, Güneydoğu-Mihrap Cephesi",
          path: "/koyler/canbaz/sekil-4.168-2.jpg",
        },
        {
          number:
            "Şekil 4. 169. Canbaz Köyü, Divan Cami Harim içinden Mihrap Cephesi",
          path: "/koyler/canbaz/sekil-4.169-1.jpg",
        },
        {
          number:
            "Şekil 4. 169. Canbaz Köyü, Divan Cami kadınlar mahfili ve son cemaat yeri",
          path: "/koyler/canbaz/sekil-4.169-2.jpg",
        },
      ],
    },
    {
      id: 32,
      name: "Karaçomak Köyü Camii",
      description:
        "Cami mihrap aksı üzerinde boyuna gelişim göstermiş olsa da kareye yakın dikdörtgen planlıdır. Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş ve harim kurgusu ile inşa edilmiştir (Şekil 4. 172). Caminin orijinal taban oturumu 7.5 x 9.6 metredir. Ahşap kâgir olan yapının duvar kalınlığı 30 cm’dir. Cami ahşap kütüklerin kara boğaz tekniği ile üst üste bindirilerek örülmesi ile inşa edilmiştir (Şekil 4. 173). Yapı yalıtım sağlanması amacıyla içten ve dıştan 2.5 cm kalınlığındaki kalaslar ile kaplanmıştır (Şekil 4. 174). Cami üst örtüsü ahşap kırma çatıdır.,,,Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, minare kaidesinin arkasında, harimin kuzeybatı duvarına yaslı tek kollu merdiven ile ulaşılmaktadır. Mahfil orta aksında, mihrap hizasında dairesel biçimli konsol çıkma yapmıştır (Şekil 4. 174). Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde ahşap çerçeveli basık kemerli mihrap yer almaktadır (Şekil 4.174). Harim, mihrap cephesinde iki ve kuzeydoğu cephesinde dört ve güneybatı cephesinde iki düz atkılı pencere ile doğal ışık almıştır. Pencereler farklı boyutlarda ve ahşaptır. Caminin tavanı çıtalı düz ahşap kaplamalıdır. Tavanın ortasında kare çerçeve içerisinde geniş kasnaklı göbek bulunmaktadır. Harimin iç beden duvarları çıtalı kaplamalar ile kaplanmıştır. Caminin harim, kadınlar mahfili zemin kaplamaları rabıta tahtalıdır.,,,Yapıya yapıldığı tarihten sonra kuzeybatı giriş aksı doğrultusunda genişletme amacı ile ek yapılmıştır. Ahşap karkas sistem ile yapılan bu ek harim katında, yapı yalıtımı için bir ara geçiş alanı oluşturmaktadır. Mahfil katında ise mahfilden de geçiş sağlanacak şekilde cami odası yapılmıştır. Bir başka ekse, yapıya 1958 yılında yapının kuzeydoğu cephesinde tuvaletinde olduğu üstü sundurma çatılı bir giriş alanı yapılmıştır. Tek katlı olan bu ek ahşap kâgirdir. Yapı yapıldığı dönemden sonra içi ve dışı kalaslar ile kapatılmış ve kalaslar ile yığma kütük duvar arasına köpük sıkılarak yalıtım yapılmıştır.,,,Dış cephe ahşap kaplaması, uzun süreli bakım eksikliği nedeniyle oldukça yıpranmış durumdadır. Özellikle alt kat duvarlarında ahşap elemanlarda renk kaybı, çürüme ve çatlaklar gözlemlenmiştir. Minarenin özellikle üst kısımda deformasyonlar ve çürümeler mevcuttur (Şekil 4.176). Yapının giriş kısmında yabani bitki istilası mevcuttur. Rutubet kaynaklı kararma ve yosunlanma görülmektedir. Tavanın ahşap süslemeleri korunmuş olmakla birlikte, boyanın yer yer döküldüğü ve nem kaynaklı kabarmalar olduğu görülmektedir. Ahşap döşeme tahtalarında yer yer kırılmalar ve eğilmeler mevcuttur. Mihrabın boyaları dökülmüş, ahşap yüzeyinde çatlaklar oluşmuştur. Yapının strüktürünü oluşturan ahşap kütüklerde uçma delikleri ve kuru çürümeden kaynaklı tozlaşmalar izlenmiştir.",
      imagePaths: [
        {
          number: "Şekil 4. 173. Karaçomak Köyü, Divan Cami, Kuzeybatı Cephesi",
          path: "/koyler/karacomak/sekil-4.173-1.jpg",
        },
        {
          number:
            "Şekil 4. 173. Karaçomak Köyü, Divan Cami, Güneydoğu-Mihap Cephesi",
          path: "/koyler/karacomak/sekil-4.173-2.jpg",
        },
        {
          number:
            "Şekil 4. 174. Karaçomak Köyü, Divan Cami Harim içinden Mihrap Cephesi",
          path: "/koyler/karacomak/sekil-4.174-1.jpg",
        },
        {
          number:
            "Şekil 4. 174. Karaçomak Köyü, Divan Cami Harim kadınlar mahfili ve son cemaat yeri",
          path: "/koyler/karacomak/sekil-4.174-2.jpg",
        },
      ],
    },
    {
      id: 33,
      name: "Ahlat Köyü, Benlisultan Camii",
      description:
        "Cami diğer tüm camilerden farklı olarak dış sofalı üç odalı bir plan şemasına sahiptir. (Şekil 4.178). Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; Kuzeydoğu cephesinde yer alan dış sofadan giriş sağlanmaktadır. Dış sofa son cemaat yeri olarak kullanılmaktadır (Şekil 4. 179). Orta oda giriş ve harim kurgusu ile planlanmış, harim iki basamak yüksekliğinde ahşap bir yükseltide yer almaktadır. Kuzeybatıda yer alan oda ise kadınlar mahfili olarak kullanılmaktadır. Güneydoğudaki son oda da ise bir ocak bulunur ve aş evi olarak planlanmıştır. Caminin orijinal taban oturumu 10 x 25.4 metredir. Taş kâgir olan yapının duvar kalınlığı 110 cm’dir. Camii kaba yonu taş ve tuğla ile düzensiz almaşık tekniğinde örülmüştür (Şekil 4. 179). Cami üç sıra kubbe önü sundurma ahşap saçak ile örtülüdür (Şekil 4. 179).,,,Harim, orta odanın giriş kapısından 1 metre uzağında iki basamaklık bir yükselti üzerindedir. Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde mukarnas kavsaralı mihrap yer almaktadır (Şekil 4.180). Giriş kısmındaki düşük kotlu alan sağındaki ve solundaki odalara geçiş imkânı tanımaktadır. Kuzeybatıda yer alan oda kadınların ibadeti için ayrılmıştır. Ve odanın güneybatı duvarında mihrap aksında harimi gören bir pencere açıklığı yer almaktadır (Şekil 4.180). Aynı odaya sofadan da giriş sağlanmaktadır. Harim odasının güneydoğusunda yer alan oda ise nakiphane (derviş odası) olarak kullanılmaktadır. Bu odada bir ocak ve yüklük yer almaktadır. Tüm odalarda güneybatı cephelerinde birer kemerli tepe penceresi ve sofaya açılan birer düz atkılı ahşap pencere yer almaktadır. Her bir oda kubbe ile örtülüdür. Kubbe içi alçı sıvalıdır. Yapının zemini taş malzeme ile kaplıdır. Yükseltiler ahşap rabıta tahtalıdır.,,,Yapı 2015 tarihinde kapsamlı restorasyon geçirmiştir. Buna rağmen yapıda tespit edilen bozulma durumları mevcuttur. Taş cephelerde yüzeysel ayrışmalar ve yer yer harç kayıpları görülmektedir. Çevresel koşullar, yağmur ve don etkisi bu bozulmaları hızlandırmıştır. Alt kotlarda nem izleri ve biyolojik oluşumlar (yosun, liken) gözlemlenmiştir (Şekil 4. 181). Metal korkuluklarda paslanma ve boya kayıpları gözlemlenmektedir. Ahşap yüzeylerde zamanla oluşan renk değişimleri, deformasyonlar ve çürüme izleri gözlemlenmektedir. Ahşap taşıyıcı elemanlarda yer yer çatlaklar ve deformasyonlar mevcuttur. İç mekânda tavan yüzeylerinde ahşap kaplamalarda hafif çatlaklar ve deformasyonlar görülmektedir. Ayrıca, sıvalı yüzeylerde mikro çatlaklar mevcuttur. Duvarlarda nem kaynaklı lekelenmeler ve boya dökülmeleri fark edilmektedir.,,,Yapı günümüzde de geleneksel ve kültürel varlığını sürdürmektedir. Somut olmayan Miras değeri taşımaktadır.",
      imagePaths: [
        {
          number: "Şekil 4. 179. Ahlat köyü, Benli Sultan Cami dış sofa",
          path: "/koyler/benlisultan/sekil-4.179-1.jpg",
        },
        {
          number:
            "Şekil 4. 179. Ahlat köyü, Benli Sultan Cami Güneybatı cephesi",
          path: "/koyler/benlisultan/sekil-4.179-2.jpg",
        },
        {
          number: "Şekil 4. 180. Ahlat köyü, Benli Sultan Cami harim içi",
          path: "/koyler/benlisultan/sekil-4.180-1.jpg",
        },
        {
          number: "Şekil 4. 180. Ahlat köyü, Benli Sultan Cami harim içi",
          path: "/koyler/benlisultan/sekil-4.180-2.jpg",
        },
        {
          number:
            "Şekil 4. 181. Ahlat köyü, Benli Sultan Cami ahşap yüzeylerde pigment kaybı",
          path: "/koyler/benlisultan/sekil-4.181-2.JPEG",
        },
      ],
    },
    {
      id: 34,
      name: "Hüseyinli Köyü Camii",
      description:
        "Cami mihrap aksı üzerinde, boyuna gelişim göstererek dikdörtgen planlıdır (Şekil 4.183). Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş ve harim kurgusu ile inşa edilmiştir. Caminin orijinal taban oturumu 8 x 11.4 metredir. Ahşap kâgir olan yapının duvar kalınlığı 30 cm’dir. Camii, ahşap kütüklerin kara boğaz tekniği ile üst üste bindirilerek örülmüştür (Şekil 4. 184). Cami üst örtüsü ahşap kırma çatıdır.,,,Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, harimin kuzeybatı duvarına yaslı L formunda iki kollu merdiven ile ulaşılmaktadır. Mahfil kuzeydoğu ve güneybatı cephelerine yaslı çıkma yapmıştır (Şekil 4. 185). Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde ahşap çerçeveli sivri kemerli mihrap yer almaktadır (Şekil 4.185). Harim, mihrap cephesinde iki ve güneybatı cephesinde iki düz atkılı pencere ile doğal ışık almıştır. Pencereler farklı boyutlarda ve ahşaptır. Caminin tavanı çıtalı düz ahşap kaplamalıdır. Caminin harimi ve kadınlar mahfilinin zemin kaplamaları rabıta tahtalıdır. Giriş kısmı betonarme döşemedir.,,,Yapının kuzeybatı cephesi ile kuzeydoğu cephesine 1975 tarihinde ek yapı yapılmıştır. Kuzeydoğu cephesine yapılan ek yapı cami ile bağlantılı değildir. Köy konağı olarak kullanılması amaçlanmıştır. Kuzeybatı cephesine eklenen yapı ise zeminde bir rüzgarlık alanı oluşturmakta üst katta ise kadılar mahfilinde açıldığı bir oda olarak kullanılmıştır. Bu açıklık ek yapı ile açılmıştır (Şekil 4.186). Ek yapının yapıldığı dönemde cami askıya alınarak zemini beton dökülerek yenilenmiştir (Şekil 4.186).  Minarede sonradan yapılmış olup kuzeybatı cephesine eklenen yapının 2. Katından geçiş mevcuttur. Yapıya yapılan başka bir müdahale ise iç beden duvarlarının yonga levha ile kapatılarak boyanması olmuştur.,,,Duvar yüzeylerinde çatlaklar ve lokalize çökmeler gözlemleniyor. Ahşap kaplama elemanlarında renk değişimleri ve çürümeler mevcut (Şekil 4. 187). Güney cephesindeki ahşap kütüklerde uçma delikleri gözlenmiştir. Yapı alt zemin taş duvarlarında yosunlaşma ve tuz kusmaları mevcuttur. Tavan ahşap elemanlarında nemden kaynaklı deformasyon ve mantar oluşumları mevcuttur (Şekil 4. 187). Yapıda kullanılan sobanın duman izi tavan ve duvar yüzeylerinde kirlenmelere yol açmıştır.,,,Camiye çevre köylerden Cuma ve bayram namazlarına geleneği devam ettirmek amacı ile gelen cemaatin olması ile Somut olmayan Miras değerini korumaktadır",
      imagePaths: [
        {
          number: "Şekil 4. 184. Hüseyinli Köyü Cami Kuzeybatı – Giriş Cephesi",
          path: "/koyler/huseyinli/sekil-4.184-1.jpg",
        },
        {
          number:
            "Şekil 4. 184. Hüseyinli Köyü Cami güneydoğu – Mahfil cephesi",
          path: "/koyler/huseyinli/sekil-4.184-2.jpg",
        },
        {
          number:
            "Şekil 4. 185. Hüseyinli Köyü Cami Harim içinden Mihrap Cephesi",
          path: "/koyler/huseyinli/sekil-4.185-1.jpg",
        },
        {
          number:
            "Şekil 4. 185. Hüseyinli Köyü Cami kadınlar mahfili ve son cemaat yeri",
          path: "/koyler/huseyinli/sekil-4.185-2.jpg",
        },
        {
          number:
            "Şekil 4. 186. Hüseyinli Köyü Camii ek yapıdan kadınlar mahfiline açıklık",
          path: "/koyler/huseyinli/sekil-4.186-1.jpg",
        },
        {
          number:
            "Şekil 4. 186. Hüseyinli Köyü Camii yapının zeminine dökülen beton temel",
          path: "/koyler/huseyinli/sekil-4.186-2.jpg",
        },
      ],
    },
    {
      id: 35,
      name: "Burhanlı Köyü, Fadıra Camii",
      description:
        "Cami mihrap aksı üzerinde boyuna gelişim göstermiş olsa da kareye yakın dikdörtgen planlıdır (Şekil 4.189). Kuzeybatı Güneydoğu mihrap aksı boyunca uzanan cami; giriş ve harim kurgusu ile inşa edilmiştir. Caminin orijinal taban oturumu 6.5 x 8 metredir. Ahşap kâgir olan yapının duvar kalınlığı 30 cm’dir. Cami tekil taş temeller üzerine ahşap kütüklerin kara boğaz tekniği ile üst üste bindirilerek örülmüştür. Yapı yalıtım sağlanması amacıyla içten ve dıştan 2.5 cm kalınlığındaki kalaslar ile kaplanmıştır (Şekil 4. 190). Cami üst örtüsü ahşap kırma çatıdır.,,,Harimin kuzey/kuzeybatı cephesinde yer alan kadınlar mahfiline, harimin kuzeybatı duvarına yaslı tek kollu merdiven ile ulaşılmaktadır. Mahfil kuzeydoğu ve güneybatı cephelerine yaslı çıkma yapmıştır (Şekil 4. 191). Harimin güney/güneybatı cephesinde, tam orta aksta yer alan, beden duvarında niş biçiminde ahşap çerçeveli sivri kemerli mihrap yer almaktadır (Şekil 4. 191). Harim, mihrap cephesinde iki ve kuzeydoğu cephesinde bir düz atkılı pencere ile doğal ışık almıştır. Pencereler farklı boyutlarda ve ahşaptır. Caminin tavanı çıtalı düz ahşap kaplamalıdır. Caminin harim, kadınlar mahfili zemin kaplamaları rabıta tahtalıdır.,,,Yapının yapım tarihi bilinmemekle birlikte, görüşmelerden öğrenildiği şekli ile yapının iç ve dış duvarları ahşap kalaslar ile kapatılarak yalıtım sağlanması amaçlanmıştır. Benzer bir düşünce ile yapının girişini vurgulayan sundurma galvanize saç çatı ile örtülü ve kalaslar ile kapatılmış bir rüzgarlık kuzeybatı cepheye ek yapı olarak yapılmıştır. Rüzgarlığın güneybatı kısmı odunluk olarak kullanılmaktadır.,,,Yapının beden duvarlarını kaplayan kaplama tahtaları uzun süre güneş ışığına ve neme maruz kaldığı için renk değişikliği- pigment bozulmasına maruz kalmıştır. Yer yer kararma ve renk değişimi izlenmiştir (Şekil 4.193).  Ahşap yüzeylerde çürümeler ve çatlaklar gözlemlenmektedir. Bu durum özellikle zemin seviyesine yakın bölgelerde daha belirgindir. Kiremitlerde kırılmalar ve yer yer eksilmeler bulunmaktadır. Zemin kaplamasında rutubet kaynaklı kabarmalar ve deformasyonlar gözlemlenmektedir. İç mekandaki ahşap panellerde nemden kaynaklanan deformasyonlar (şişme ve çatlaklar) görülmektedir. Kaplama tahtasının arkasındaki kütüklerde kuru çürümeye bağlı tozlaşma ve uçma delikleri izlenmiştir. Ahşap elemanlarda yüzeysel birikimler (kir ve toz) bakım eksikliğini göstermektedir.,,,Günümüzde imamı olmayan cami bahar ve yaz aylarına denk gelen bayram namazlarında ve Cuma namazlarında kullanılmaya devam etmektedir. Somut olmayan Miras değerini korumaktadır. Yapının zemini bataklık olduğu için tehdit altındadır.",
      imagePaths: [
        {
          number: "Şekil 4. 184. Hüseyinli Köyü Cami Kuzeybatı – Giriş Cephesi",
          path: "/koyler/fadira/sekil-4.190-1.JPG",
        },
        {
          number:
            "Şekil 4. 184. Hüseyinli Köyü Cami güneydoğu – Mahfil cephesi",
          path: "/koyler/fadira/sekil-4.190-2.JPG",
        },
        {
          number:
            "Şekil 4. 185. Hüseyinli Köyü Cami Harim içinden Mihrap Cephesi",
          path: "/koyler/fadira/sekil-4.191-1.JPG",
        },
        {
          number:
            "Şekil 4. 185. Hüseyinli Köyü Cami kadınlar mahfili ve son cemaat yeri",
          path: "/koyler/fadira/sekil-4.191-2.JPG",
        },
      ],
    },
  ],
};
