export type MosqueMockup = typeof mosqueMockup;

type Mosque = {
  id: number;
  local: string;
  name: string;
  address: string;
  description: string;
  imagePath?: string;
  mirasImage?: string;
  _360Path?: string[];
};

export const mosqueMockup: { mosque: Mosque[] } = {
  mosque: [
    {
      id: 1,
      local: "Devrekani",
      name: "Kadıoğlu Divan Camii",
      address: "Kadıoğlu Köyü",
      description:
        "Devrekani kent merkezinin kuzeyinde de yer alan Cami, Kadıoğlu köyü sınırları içinde yer almaktadır. Cami Kadıoğlu Köyü ile Saraydurak Köyü arasında vadi tabanında inşa edilmiştir. Caminin mevki “Cami Yanı” olarak geçmektedir. Camiye giden köy yolu 2021 yılı Eylül ayında gerçekleşen sel felaketi sonucu kapanmıştır. Günümüzde vadide oluşturulan patika yoldan ulaşım sağlanmaktadır.",
      mirasImage: "/cardimgs/kadioglu-miras.jpeg",
      _360Path: ["/360/kadioglu.jpg"],
    },
    {
      id: 2,
      local: "Devrekani",
      name: "Çörekçi Köyü, Elmalı Mahalle Camii",
      address: "Çörekçi Köyü",
      description:
        "Devrekani kent merkezinin kuzeydoğusunda yer alan Cami, Çörekçi Köyü sınırları içinde Elmalı Mahallesindedir. Güneyinden Meydan çayı akmaktadır. 2021 tarihinde yaşanan sel felaketinden etkilenmiştir. Yapının bir kitabesi bulunmadığı için yapım tarihi bilinememektedir.",
      _360Path: [
        "/360/corekci-ic-1.jpg",
        "/360/corekci-ic-2.jpg",
        "/360/corekci-ic-3.jpg",
      ],
      mirasImage: "/koyler/corekci/sekil-4.13-1.JPG",
    },
    {
      id: 3,
      local: "Devrekani",
      name: "Şenlik Köyü, Delimusa Camii",
      address: "Şenlik Köyü",
      description:
        "Devrekani kent merkezinin kuzeyinde yer alan Cami, Şenlik Köyü sınırları içinde Delimusa Mahallesindedir. Şenlik köyü Pazar yerine 3 km uzakta yer alan cami eğimli bir arazide mahale sınırındadır. Kitabesi bulunmadığı için kapının yanında saç levhaya yazılan H.1312 tarihi yapım yılı olarak kabul edilmiştir.",
      mirasImage: "/koyler/senlik/sekil-4.19.jpg",
    },
    {
      id: 4,
      local: "Devrekani",
      name: "Akdoğan Köyü Camii",
      address: "Akdoğan Köyü",
      description:
        "Devrekani kent merkezinin kuzeydoğunda yer alan Cami, Akdoğan Köyü sınırları içindedir. Yapının güneybatı cephesinde yer alan kitabede 1416 tarihi yazmaktadır, lakin köy halkı ile yapılan görüşmeler sonucu var olan kitabenin başka bir camiye ait olduğu öğrenilmiştir.",
      mirasImage: "/koyler/akdogan/sekil-4.28.jpg",
    },
    {
      id: 5,
      local: "Devrekani",
      name: "Kurt Köyü, Çirişoğlu Mah. Divan Camii",
      address: "Kurt Köyü",
      description:
        "Devrekani kent merkezinin kuzeydoğusunda yer alan Cami, Kurt Köyü sınırları içinde Çirişoğlu Mahallesindedir. Köy sınırında olan cami düz bir arazide kurulmuş ve çevresinde tarlalar mevcuttur. Cami hazire ve imam evi ile bir bahçe içerisinde yer almaktadır. Bahçe içerisinde bir anıt ağaç vardır.",
      _360Path: ["/360/kurt.jpg", "/360/kurt-ic.jpg", "/360/kurt-3.jpg"],
      mirasImage: "/koyler/kurt/sekil-4.34-1.JPG",
    },
    {
      id: 6,
      local: "Devrekani",
      name: "Yazıbelen Köyü, Kıvraç Camii",
      address: "Yazıbelen Köyü",
      description:
        "Devrekani kent merkezinin kuzeyinde yer alan Cami, Yazıbelen Köyü sınırları içindedir. Kapısının üzerinde yer alan kitabede 1159 Hicri tarihli bir tamirden bahsetmektedir. Bundan kaynaklı yapının yapım tarihinin 1159 Hicri tarihinden önce yapıldığı anlaşılmaktadır. Halk arasında Kıvraç Cami olarak bilinen yapının yapıldığı tarihten sonra çevresinde yerleşim yerinin oluştuğu ifade edilmiştir.",
      mirasImage: "/koyler/yazibelen/sekil-4.41-1.JPG",
    },
    {
      id: 7,
      local: "Devrekani",
      name: "Bozkocatepe Divan Camii",
      address: "Bozkocatepe Köyü",
      description:
        "Devrekani kent merkezinin kuzeyinde yer alan Cami, Bozkocatepe Köyü sınırları içindedir. Kapısının üzerinde yer alan kitabede 1578 tarihinde yapıldığı yazmaktadır.",
      mirasImage: "/koyler/bozkocatepe/sekil-4.44.jpg",
    },
    {
      id: 8,
      local: "Devrekani",
      name: "Doğuörcün Köyü, Biyoğlu Camii",
      address: "Doğuörcün Köyü",
      description:
        "Devrekani kent merkezinin kuzeydoğusunda yer alan Cami, Doğuörcün Köyü sınırları içindedir. En yakın yerleşim yeri 1 km uzaklıkta Ulamış Köyü Biyo Mahallesidir. Tarlalarla çevrili düz bir arazide inşa edilmiştir. Yapının kitabesi yoktur. Biyo Mahallesi sakinleri ile yapılan görüşmeden yapının 18. yy.dan sonra yapıldığı düşünülmüştür.",
      _360Path: ["/360/beyoglu-1.jpg", "/360/beyoglu-2.jpg"],
      mirasImage: "/koyler/doguorcun/sekil-4.51-1.JPG",
    },
    {
      id: 9,
      local: "Devrekani",
      name: "Alaçay Köyü, Kır Camii",
      address: "Alaçay Köyü",
      description:
        "Devrekani kent merkezinin kuzeydoğusunda yer alan Cami, Alaçay Köyü sınırları içindedir. En yakın yerleşim yeri 500 m uzaklıkta Alaçay Köyü Cinoğlu Mahallesidir. Mera alanları ile çevrili düz bir arazide inşa edilmiştir. Yapının kitabesi yoktur. Cinoğlu Mahallesi sakinleri ile yapılan görüşmeden yapının 18. Yy.dan sonra yapıldığı düşünülmüştür.",
      _360Path: [
        "/360/cinoglu-1.jpg",
        "/360/cinoglu-2.jpg",
        "/360/cinoglu-3.jpg",
      ],
      mirasImage: "/koyler/alacay/sekil-4.56-1.JPG",
    },
    {
      id: 10,
      local: "Devrekani",
      name: "Çayırcık Mahallesi, İsmail Bey Camii",
      address: "Çayırcık Mahallesi",
      description:
        "Devrekani kent merkezinin batısında yer alan Cami, Çayırcık mahallesi sınırları içindedir. Cami Candaroğlu Beyi İsmail Bey tarafından 1455 yılında ilk yapıldığı mescidin genişletilmesi amacı ile yeniden yaptırılmıştır. Arşiv kayıtlarından saray yapılarının da cami çevresinde olduğu ve caminin devlet dairesi olarak da kullanıldığı anlaşılmaktadır (Çiftçi, 2018)",
      mirasImage: "/koyler/cayircik/sekil-4.61-1.JPG",
    },
    {
      id: 11,
      local: "Devrekani",
      name: "Kadirbeyoğlu Köyü, Duran Camii",
      address: "Kadirbeyoğlu Köyü",
      description:
        "Devrekani kent merkezinin kuzeydoğusunda yer alan Cami, Kadirbey Mahallesi sınırları içindedir. En yakın yerleşim yeri 100 m uzaklıkta Duran Küme Evlerdir. Mera ve tarlalarla çevrili düz bir arazide inşa edilmiştir. Yapının kitabesi yoktur.",
      _360Path: ["/360/duran-ic.jpg"],
      mirasImage: "/koyler/duran/sekil-4.65-1.JPG",
    },
    {
      id: 12,
      local: "Devrekani",
      name: "Çontay Köyü, Lala Paşa Camii",
      address: "Çontay Köyü",
      description:
        "Devrekani kent merkezinin doğusunda yer alan Cami, Çontay Köyü sınırları içindedir. En yakın yerleşim yeri 1500 m uzaklıkta Çorbacı Köyü Gelinoğlu Mahallesidir. Orman ve tarla alanları ile çevrili düz bir arazide inşa edilmiştir. Yapının kitabesi yoktur. Arşiv kayıtlarına göre 1566 yılından önce yapıldığı anlaşılmaktadır.",
      mirasImage: "/koyler/lalapasa/sekil-4.69.JPG",
    },

    // Göl Nahiyesi
    {
      id: 13,
      local: "Göl",
      name: "Halife Köyü Divan Camii",
      address: "Halife Köyü",
      description:
        "Kastamonu kent merkezinin kuzeybatısında yer alan Cami, Halife Köyü sınırları içindedir. Yapının bir kitabesi bulunmadığı için yapım tarihi bilinememektedir.",
      mirasImage: "/koyler/halife/sekil-4.74-1.jpg",
    },
    {
      id: 14,
      local: "Göl",
      name: "Kasaba Köyü, Mahmut Bey Camii",
      address: "Kasaba Köyü",
      description:
        "Kitabesinden 1366 M. Tarihinde Emir Mahmut Bey tarafından yapıldığı anlaşılmaktadır. Eski adı Ilısu kasabası olan bu bölge aynı zamanda Emir Mahmut beyin karargahında bulunduğu mevki olduğu düşünülmektedir (Çiftçi, 1995). Cami 2014 yılında Unesco Geçici Miras Listesine alınmış ve 2023 yılında Anadolu’nun Orta Çağ Dönemi Ahşap Hipostil Camiileri kapsamında Miras listesine dahil edilmiştir. Ayrıca Köyde günümüzde mevcut olmayan medrese yapısının da varlığından bahsedilmektedir. Yapım tarihi ve yeri hakkında bilgi elde edilememiştir (Akok, 1946).",
      _360Path: [
        "/360/kasaba-dis.jpg",
        "/360/kasaba-dis.jpg",
        "/360/kasaba-180.jpg",
        "/360/kasaba-ic-1.jpg",
        "/360/kasaba-ic-2.jpg",
        "/360/kasaba-ic-3.jpg",
      ],
      mirasImage: "/koyler/mahmutbey/sekil-4.78-1.jpg",
    },
    {
      id: 15,
      local: "Göl",
      name: "Duruçay Köyü, Halil Bey Camii",
      address: "Duruçay Köyü",
      description:
        "Kastamonu kent merkezinin kuzeyinde yer alan Cami, halk arasında camili köy olarak bilinen Duruçay köyü sınırları içindedir. Cami kitabesine göre; Candaroğulları döneminde üst düzey asker olan Halil Bey tarafından 1363 M. Tarihinde yaptırıldığı anlaşılmaktadır. Cami kırsal yerleşim sahasında, devşirme malzeme kullanıldığı tespit edilen tek yapıdır.",
      _360Path: ["/360/durucay-1.jpg", "/360/durucay-2.jpg"],
      mirasImage: "/koyler/durucay/sekil-4.86.JPG",
    },
    {
      id: 16,
      local: "Göl",
      name: "Talipler Köyü, Rüstem Paşa Camii",
      address: "Talipler Köyü",
      description:
        "Kastamonu kent merkezinin kuzeybatısında yer alan Cami, Talipler Köyü sınırları içindedir. Yapı Kanuni Sultan Süleyman’ın Sadrazamı Rüstem Paşa tarafından 1530 yılında yaptırılmıştır. Cami Talipler köyünden 15 km uzaklıkta Menekşe tepesinde inşa edilmiştir. Caminin yapıldığı dönemde de var olabileceği düşünülen dergâh yapısı 50 yıl öncesine kadar aş evi olarak da kullanıldığı, ahşap strüktüre sahip olduğu, caminin kuzey batı bahçe duvarına sınırı olduğu ifade edilmiştir. Caminin yapılışı hakkında da yöre halkı arasında rivayetler-mitler vardır. Caminin ALLAH dostu bir kimse tarafından geyiklerin malzemeleri taşıması ile gece vakitlerinde yaptığı sonrasında köy halkının bu kimsenin sözünü dinlememesi ile o zaman bu caminin çevresi viran olsun diyerek dua ettiği, o zamandan bu yana da caminin çevresinde yerleşim yerinin kurulamadığı ifade edilmektedir.",
      _360Path: ["/360/rustem-pasa.jpg", "/360/talipler-1.jpg"],
      mirasImage: "/koyler/talipler/sekil-4.95-1.JPG",
    },
    {
      id: 17,
      local: "Göl",
      name: "Göl Köy, Şeyh Ahmet Camii",
      address: "Göl Köy",
      description:
        "Kastamonu kent merkezinin kuzeyin de yer alan Cami, Gölköy sınırları içindedir. Camiye ait bir kitabe bulunamamıştır. 1206 M. Tarihli vakfiye kaydında caminin adının geçmesi sebebi ile yapım yılının bu tarihten önce olduğu tahmin edilmektedir (Çiftçi, 1995). Şeyh Ahmet Cami bir dergah-zaviyeli camidir. Günümüzde Küçük ölçekte bir külliyeye sahiptir. Caminin doğu tarafında yer alan türbe ve aşevi bulunmaktadır. Yapı inşa edildiği günden beri kullanılmaktadır.",
      mirasImage: "/koyler/seyhahmet/sekil-4.100-1.jpg",
    },
    {
      id: 18,
      local: "Göl",
      name: "Karamukmolla Köyü, Tekke Mah. Camii",
      address: "Karamukmolla Köyü",
      description:
        "Kastamonu kent merkezinin batısında yer alan Cami, Karamukmolla Köyü, Tekke Mahallesi sınırları içindedir. Yapının bir kitabesi bulunmadığı için yapım tarihi bilinememektedir.",
      mirasImage: "/koyler/karamukmolla/sekil-4.104-1.JPG",
    },

    // Akkaya Nahiyesi
    {
      id: 19,
      local: "Akkaya",
      name: "Kayalı Köyü Divan Camii",
      address: "Kayalı Köyü",
      description:
        "Kastamonu kent merkezinin kuzeydoğusunda yer alan Cami, Kayalı Köyü ile Emirli Köyü arasında, Kayalı Köyü sınırları içindedir. Yapının bir kitabesi bulunmadığı için yapım tarihi, Müftülük Kütük defterine işlenen tarih olarak bilinmektedir. Köy halkı ile yapılan görüşmelerden yapının yapım tarihinin Osmanlı Dönemine kadar tarihlendiği ifade edebilmektedir. Çevresi tarlalarla çevrili yapıya en yakın yapılaşma 1.5 km uzaklıktadır.",
      mirasImage: "/koyler/kayali/sekil-4.109-1.JPG",
    },
    {
      id: 20,
      local: "Akkaya",
      name: "Pehlivan Köyü, Derviş Camii",
      address: "Pehlivan Köyü",
      description:
        "Kastamonu kent merkezinin kuzeydoğusunda yer alan Cami, Pehlivan Köyü, Kuşkara köyü ve Derviş Mahallesi arasında, Derviş mahallesine 1,5 km uzaklıkta Pehlivan Köyü sınırları içindedir. Yapının kitabesi rüzgâr erozyonuna maruz kaldığı için okunmakta güçlük çekilmiştir. Yapılış tarihi 1877 olarak tercüme edilmiştir. Günümüzde ikincil cami olarak sadece ilkbahar ve yaz aylarına denk gelen Cuma ve bayram namazlarında kullanılmaktadır.",
      mirasImage: "/koyler/pehlivan/sekil-4.113-1.JPG",
    },
    {
      id: 21,
      local: "Akkaya",
      name: "Eceoğlu Köyü Divan Camii",
      address: "Eceoğlu Köyü",
      description:
        "Kastamonu kent merkezinin Güneydoğusunda yer alan Cami, arazide Eceoğlu köyü sınırları içerisindedir. Yapı 1960 yılında bir yangın sonucu yıkılmış ve 1965 yılında köy halkı tarafından tekrar yanan yapının arazisine günümüzde kullanılan camini inşa etmişlerdir. Somut olmayan mirasın kültürel etkenleri sonucu inşa edilen cami de günümüzde ilkbahar ve yaz aylarına denk gelen bayram namazlarının kılınmaya devam etmektedir. Çevresinde araç yolu olmayan cami hakkında köy halkı arasında da mitler mevcuttur.",
      mirasImage: "/koyler/eceoglu/sekil-4.117-1.jpg",
    },
    {
      id: 22,
      local: "Akkaya",
      name: "Emir Köyü, Cuma yanı Camii",
      address: "Emir Köyü",
      description:
        "Kastamonu kent merkezinin güneydoğusunda yer alan Cami, Emir Köyü sınırları içerisinde köyden 3 km daha güneydoğuda yer almaktadır. Caminin kuzeyinden köyün ana yolu, doğusunda önceleri okul olarak kullanılmış iki katlı bina, güney cephesinde tarlalar ve batısında boş düz arsa yer almaktadır. Yapının bir kitabesi bulunmadığı için yapım tarihine dair bir bilgi elde edilememiştir. Vakıflar Arşivinde Mescidi Cuma Cami olarak ifade edilmiştir.",
      _360Path: ["/360/emir-1.jpg", "/360/emir-2.jpg"],
      mirasImage: "/koyler/emir/sekil-4.121-1.JPG",
    },

    // Kuzyaka Nahiyesi
    {
      id: 23,
      local: "Kuzyaka",
      name: "Ümit Köyü, Kavun Mahallesi Camii",
      address: "Ümit Köyü",
      description:
        "Kastamonu kent merkezinin güneyinde yer alan Cami, Ümit Köyü sınırları içinde Kavun Mahallesindedir. Yapının bir kitabesi bulunmadığı için yapım tarihi bilinememektedir.",
      _360Path: ["/360/umit-1.jpg", "/360/umit-2.jpg"],
      mirasImage: "/koyler/umit/sekil-4.127-1.JPG",
    },
    {
      id: 24,
      local: "Kuzyaka",
      name: "Esenli Köyü, Sağıroğlu Mahalle Camii",
      address: "Esenli Köyü",
      description:
        "Kastamonu kent merkezinin güneyinde yer alan Cami Esenli Köyü sınırları içinde, arazidedir. Kitabesi bulunmayan caminin 19.yy öncesi yapıldığı sözlü görüşmelerden öğrenilmiştir. 1984 yılında ise var olan divan cami yıkılarak aynı araziye tekrar yeniden cami yapılmış ve divan cami olarak 21 yy başlarına kadar kullanılmaya devam edilmiştir .",
      mirasImage: "/koyler/senlik/sekil-4.132-1.jpg",
    },
    {
      id: 25,
      local: "Kuzyaka",
      name: "Şeyh Köyü Akça-su Camii",
      address: "Şeyh Köyü",
      description:
        "Kastamonu kent merkezinin güneyinde de yer alan Cami, Şeyh Köyü sınırları içindedir. Camiye ait bir kitabe bulunamamıştır. Hüsamettin Çoban Bey tarafından yaptırıldığı 1308 tarihli Atabeygazi vakfına ait teamül ilamından tespit edilmiştir (Çiftçi, 1995). Cami 13yy’ın ilk çeyreğinde inşa edilmiştir (Yakupoğlu, 2009). Caminin haziresinde yer alan türbe Osmanlı Dönemine ait olmakla birlikte yapının kullanım amacının devam ettiği kitabesinde yer alan ifadelerden anlaşılmaktadır. Caminin bahçesinde bir medreseden bahsedilse de mevcutta bir mimari ize rastlanmamıştır .",
      mirasImage: "/koyler/akcasu/sekil-4.137-1.jpg",
    },
    {
      id: 26,
      local: "Kuzyaka",
      name: "Alpı Köyü Divan Camii",
      address: "Alpı Köyü",
      description:
        "Kastamonu kent merkezinin güneyinde yer alan Cami Alpı Köyü sınırları içindedir.Kitabesi bulunamayan caminin yapılış tarihi müftülük kayıt defterlerinden tespit edilmiştir. Geniş birdüzlükte yer alan caminin bulunduğu parsele 1998 yılında yapılan yeni cami yapılmıştır.",
      mirasImage: "/koyler/senlik/sekil-4.140-2.jpg",
    },
    {
      id: 27,
      local: "Kuzyaka",
      name: "Mescid Köyü Divan Camii",
      address: "Mescid Köyü",
      description:
        "Kastamonu kent merkezinin güneyinde yer alan Cami, Mescit köyü sınırları içerisindedir. Yapı 1955 yılında yıkılan yapının arazisine günümüzde kullanılan camini inşa etmişlerdir. Somut olmayan mirasın kültürel etkenleri sonucu inşa edilen cami de günümüzde ilkbahar ve yaz aylarına denk gelen bayram namazlarının kılınmaya devam etmektedir.",
      mirasImage: "/koyler/senlik/sekil-4.145-1.JPEG",
    },
    {
      id: 28,
      local: "Kuzyaka",
      name: "Saraycık Köyü, Dere Mah. Camii",
      address: "Saraycık Köyü",
      description:
        "Kastamonu kent merkezinin güneyinde de yer alan Cami, Saraycık Köyü, Dere Mahallesi sınırları içindedir. Yapının yapım tarihi bilinmemektedir. Mahalleye yakın dönemde betonarme yeni bir camii yapıldığı için bugün kullanılmamaktadır. Ağaçlı bahçelerle çevrili camii, doğudan batıya meyilli bir arsa üzerine kurulmuştur.",
      mirasImage: "/koyler/senlik/sekil-4.149-1.jpg",
    },
    {
      id: 29,
      local: "Kuzyaka",
      name: "Kemerler Köyü Divan Camii",
      address: "Kemerler Köyü",
      description:
        "Kastamonu kent merkezinin güneyinde yer alan Cami Kemerler Köyü sınırları içindedir. Kitabesinden 1879 M. Tarihinde Hacı İsmail Ağa tarafından yaptırıldığı anlaşılmaktadır. Kitabede Cuma ve Bayram namazlarının da kılınabilmesi için caminin kullanılabileceğinden bahsedilmiştir.",
      _360Path: ["/360/kemerler-1.jpg", "/360/kemerler-2.jpg"],
      mirasImage: "/koyler/senlik/sekil-4.154.JPG",
    },
    {
      id: 30,
      local: "Kuzyaka",
      name: "Çavundur Köyü, Yeni Cuma Camii",
      address: "Çavundur Köyü",
      description:
        "Kastamonu kent merkezinin güneyinde yer alan Cami, Çavundur Köyü sınırları içinde, Bayramlı Küme Evlerine traktör yolu ile 15 km uzaklıktadır. Cami kuzeyden güneye doğru hafif eğimli bir arazi üzerinde bulunmaktadır. Yapının güneyinde ve batısında dere bulunmakta olup kuzeyinde ve doğusunda boş araziler yer almaktadır. Yapının yapım tarihi bilinmemekle birlikte 18. Yy dönemine ait olduğu düşünülmektedir.",
      mirasImage: "/koyler/senlik/sekil-4.162-1.jpg",
    },
    {
      id: 31,
      local: "Kuzyaka",
      name: "Canbaz Köyü Divan Camii",
      address: "Canbaz Köyü",
      description:
        "Kastamonu kent merkezinin güneybatısında yer alan Cami, Cambaz Köyü sınırları içinde, köy merkezinden 3 km batıda inşa edilmiştir. Kitabesi bulunmayan cami 1983 yılında tescil altına alınmıştır.",
      mirasImage: "/koyler/senlik/sekil-4.168-1.jpg",
    },
    {
      id: 32,
      local: "Kuzyaka",
      name: "Karaçomak Köyü Camii",
      address: "Karaçomak Köyü",
      description:
        "Kastamonu kent merkezinin Güneybatısında yer alan Cami, arazide Karaçomak köyü sınırları içerisindedir. Yapı müftülük kütük defterine göre 1885 yılında inşa edilmiştir. Günümüzde yan parseline 1998 yılında yapılan yeni cami sebebi ile kullanıma kapatılmıştır.",
      mirasImage: "/koyler/senlik/sekil-4.173-1.jpg",
    },
    {
      id: 33,
      local: "Kuzyaka",
      name: "Ahlat Köyü, Benlisultan Camii",
      address: "Ahlat Köyü",
      description:
        "Yapı 1512-1520 yılları arsında Yavuz Sultan Selim tarafından inşa ettirilmiştir. Küçük bir külliye olarak planlanan cami çevresinde günümüze kadar gelmeyen bir medrese yapısı ve kütüphane yapısı olduğu da söylenmektedir. Zaviyeli cami olarak da karşımıza çıkan cami döneminde çevre köylerden Cuma ve bayram namazı için toplanılan bir merkez niteliğindedir.",
      mirasImage: "/koyler/senlik/sekil-4.179-1.jpg",
    },
    {
      id: 34,
      local: "Kuzyaka",
      name: "Hüseyinli Köyü Camii",
      address: "Hüseyinli Köyü",
      description:
        "Kastamonu kent merkezinin güneyinde yer alan Cami, Hüseyinli Köyü sınırları içindedir. Yapının kitabesi yoktur. Muhtar ile yapılan görüşmeden yapının 1850 yılında yapıldığı öğrenilmiştir. Cumhuriyet Döneminde caminin çevresine okul yapısı eklenmiştir.",
      mirasImage: "/koyler/huseyinli/sekil-4.184-1.jpg",
    },
    {
      id: 35,
      local: "Kuzyaka",
      name: "Burhanlı Köyü, Fadıra Camii",
      address: "Burhanlı Köyü",
      description:
        "Kastamonu kent merkezinin güneyinde yer alan Cami, Burhanlı Köyü sınırları içinde, eski Tosya yolu üzerindedir. En yakın yerleşim yeri 5 km uzaklıkta Hamzalı Köyüdür. Çevresi tarlalarla çevrilidir. Yapının kitabesi yoktur. Muhtar ile yapılan görüşmeden yapının 18. Yy.dan sonra yapıldığı düşünülmüştür. Çalışma sahasında gabari olarak en küçük camidir.",
      mirasImage: "/koyler/fadira/sekil-4.190-1.JPG",
    },
  ],
};

const imageFiles = [
  "1-kadioglu-cami.JPG",
  "2-corekci-cami.JPG",
  "3-delimusa-cami.JPG",
  "4-akdogan-cami.jpg",
  "5-kurt-cami.JPG",
  "6-yazibelen-cami.JPG",
  "7-bozkocatepe-cami.jpg",
  "8-doguorcun-cami.JPG",
  "9-kir-cami.JPG",
  "10-cayircik-cami.jpg",
  "11-duran-cami.jpg",
  "12-lala-cami.JPG",
  "14-halife-cami.jpg",
  "15-kasaba-cami.jpg",
  "16-durucay-cami.JPG",
  "18-talipler-cami.jpg",
  "19-seyh-cami.jpg",
  "20-kayali-cami.JPG",
  "21-pehlivan-cami.JPG",
  "22-karamukmolla-cami.JPG",
  "24-eceoglu-cami.jpg",
  "25-emir-cami.JPG",
  "26-umit-cami.jpg",
  "27-esenli-cami.jpg",
  "28-seyh-cami.JPG",
  "29-alpi-cami.JPG",
  "30-mescit-cami.jpg",
  "31-dere-cami.jpg",
  "32-kemerler-cami.jpg",
  "33-cavundur-cami.jpg",
  "34-canbaz-cami.jpg",
  "35-karacomak-cami.jpg",
  "36-benlisultan-cami.jpg",
  "37-huseyinli-cami.jpg",
  "38-fadira-cami.JPG",
];

mosqueMockup.mosque = mosqueMockup.mosque.map((mosque, index) => {
  mosque.imagePath = `/cardimgs/${imageFiles[index] || "default.jpg"}`;
  return mosque;
});
