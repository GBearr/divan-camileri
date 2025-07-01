import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import inventory from "@/img/IMG20210430161235.jpg";
import Image from "next/image";
import { mirasMockup } from "@/config/mirasMockup";
import Link from "next/link";
import { useRouter } from "next/router";
import { mosqueMockup, MosqueMockup } from "@/config/mosqueMockup";

export default function MimariMirasPage() {
  const router = useRouter();
  const { id } = router.query;

  console.log("Id : ", id);

  const data = mirasMockup.miras;

  const selectedMosque = mosqueMockup.mosque.find(
    (item) => item.id === Number(id)
  );

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h1 style={{ alignSelf: "center" }} className={title()}>
          Mimari Miras
        </h1>
        <div className="py-10 grid sm:grid-cols-2 gap-20 w-full max-w-6xl">
          {data.map((item) => {
            // id-ye göre hangi alanı kullanacağımıza karar veriyoruz
            const imgSrc =
              item.id === 1
                ? selectedMosque?.imagePath
                : selectedMosque?.mirasImage;

            return (
              <Card
                key={item.id}
                isFooterBlurred
                className="flex flex-col h-full"
                radius="lg"
              >
                <CardHeader className="text-center">{item.name}</CardHeader>

                <div className="relative w-full h-72 md:h-[400px]">
                  {imgSrc ? (
                    <Image
                      src={imgSrc}
                      alt={item.name}
                      fill
                      className="object-cover rounded-lg transition-transform duration-500 ease-out hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={item.id === 1}
                    />
                  ) : (
                    /* yedek görsel veya boş state */
                    <div className="flex items-center justify-center w-full h-full bg-gray-100 rounded-lg text-gray-400">
                      Görsel bulunamadı
                    </div>
                  )}
                </div>

                <CardFooter className="flex justify-end mt-auto">
                  <Button
                    className="font-semibold text-sm text-black bg-white border rounded-none"
                    color="default"
                    size="sm"
                    variant="flat"
                    radius="md"
                  >
                    <Link href={`/${item.slug}/${id}`}>Daha Fazla</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>
    </DefaultLayout>
  );
}
