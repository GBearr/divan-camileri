import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import { Card, CardFooter, CardHeader } from "@heroui/card";
import Image from "next/image";
import inventory from "@/img/IMG20210430161235.jpg";
import { mosqueMockup } from "@/config/mosqueMockup";
import Link from "next/link";

export default function TubitakPage() {
  return (
    <DefaultLayout>
      <div className="w-full py-10">
        <div className="p-6">
          <div className={title()}>TÜBİTAK</div>
          <div className="mt-4">
            <ul className="list-disc pl-5 text-lg text-default-600 py-10">
              Kastamonu ili kırsal alanlarında, tabiat varlıkları ile uyumlu,
              topoğrafya, iklim ve çevresel koşulların şekillendirdiği
              geleneksel yöntemle inşa edilmiş zengin mimarlık örnekleri
              bulunmaktadır. Yapılış amaçları ile anı ve ruhani değer taşıyan
              mimari belge niteliğindeki kırsal camiler korunmaya değer mimari
              miras öğeleridir. İlçeden ilçeye ve hatta köyden köye mimari
              özellikleri değişkenlik gösteren camilerden günümüze kadar ulaşan
              yapıların maruz kaldığı müdahaleler ile özgün değerleri üzerine
              tartışma yapılabilmektedir. 13. yy itibari ile Türk İslam
              kültürünün etkisinde kalan coğrafyada Cuma (Divan) Camileri,
              sadece bir inanç mimarisi değil aynı zamanda sosyo kültürel bir
              buluşma mekanını da temsil etmektedir. Coğrafi şartlar sebebi ile
              Osmanlı Devleti’nin dağınık yerleşim gösteren bölgelerde
              uyguladığı idari düzenin cami mimarisine yansıması bu sebeple
              önemlidir. Cuma (Divan) Camileri genellikle birkaç köyün birlikte
              kullanabileceği uzaklıkta, köy yerleşim yerlerinde olmayan
              çoğunlukla zaman içerisinde cami çevresinde yerleşimin oluştuğu
              yapılardır. Bu sebeple çevresinde köy kurulmamış Camiler;
              Cumhuriyetin İlanı ile Cuma namazları için uygulanan kısıtlamanın
              (Cuma namazının Padişahın berat verdiği camide kılınması geleneği)
              kalkması, geleneksel teknik ve malzeme ile üretilen yapıların
              günümüz konfor anlayışına olanak tanımaması, köylerin
              insansızlaşması, zaman içerisinde maruz kaldığı atmosferik olaylar
              ve afetler sonucunda oluşan hasarlar ve bozulmalar, köy halkının
              bu camileri terk etmesine camilerinde gün geçtikçe köhneleşmesine
              sebep olmuştur. Bir dönemin sosyo kültürel anlayışına ve inanç
              olgusuna ışık tutan bu camiler günümüzde kimliklerini yitirmiş,
              özgün değerinin bellekteki hatırasını kaybetme tehlikesi ile karşı
              karşıya kalmışlardır. Bu sebeple planlanan çalışma da kırsal
              üretimin, geleneksel tekniğin bir ürünü olan ve sosyo-kültürel
              değerleri yansıtan Cuma (Divan) Camilerini gelecek nesillere
              aktarılması için korunması yolunda araştırmaların yapılması
              amaçlanmıştır. Bu amaç doğrultusunda; sözlü ve yazılı arşiv
              çalışmaları ve mimari ölçüm teknikleri ile kataloglanması ve
              dijital ortamda belgelenmesinin sağlanması gerekmektedir. Çalışma
              kapsamı 1871 Vilayet Nizamnamesi ile şekillenen Kastamonu Kazasını
              kapsamaktadır. Günümüzde dijital arşivi bulunmayan ve risk altında
              bulunan Kastamonu kazası cuma camilerinin kapsamlı bir listesini
              oluşturulacak, yapıların bozulma durumları tespit edilerek
              yapıların mimari kimliklerini tehdit eden riskler üzerinden
              değerlendirilmeler yapılacaktır. Böylece yapıların korunması
              üzerine farkındalık oluşturmak ve ileride planlı koruma
              çalışmalarında kullanılmak üzere veri sağlamak hedeflenmiştir.
              Oluşturulacak dijital arşiv yapıların mimari kayıtlarını, 360
              derece yersel ve havasal fotoğraflarını, sözlü tarih çalışmaları
              ile elde edilen folklorik değeri aktaracak bir platform olacaktır.
              Bu sayede bilgiye ulaşım kolaylığı sağlanarak özgün değerin
              kültürel bellekteki izi korunmuş olacaktır.
            </ul>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
