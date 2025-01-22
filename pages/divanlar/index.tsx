import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import { Card, CardFooter, CardHeader } from "@heroui/card";
import Image from "next/image";
import inventory from "@/img/IMG20210430161235.jpg";
import { mosqueMockup } from "@/config/mosqueMockup";
import Link from "next/link";

export default function DivanlarPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h1 style={{ alignSelf: "start" }} className={title()}>
          Dijital Envanter
        </h1>
        <div className="py-10 grid grid-cols-1 sm:grid-cols-3 gap-20 w-full max-w-8xl">
          {mosqueMockup.mosque.map((item) => (
            <Card
              isFooterBlurred
              className="border-none max-w-sm max-h-[700px] flex flex-col"
              radius="lg"
            >
              <CardHeader className="text-center">{item.name}</CardHeader>
              <div className="relative w-full h-[300px]">
                <Image
                  alt={item.name}
                  className="object-cover rounded-lg"
                  src={item.imagePath || inventory}
                  layout="fill"
                  objectFit="cover" // Resimleri kutuya sığdır
                />
              </div>
              <CardFooter className="flex justify-end mt-auto">
                <Button
                  className="font-semibold text-sm text-black bg-white border rounded-none"
                  color="default"
                  size="sm"
                  variant="flat"
                  radius="md"
                >
                  <Link href={`/detail/${item.id}`}>Daha Fazla</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
