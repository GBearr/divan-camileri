import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import inventory from "@/img/IMG20210430161235.jpg";
import Image from "next/image";
import { mosqueMockup } from "@/config/mosqueMockup";
import { mirasMockup } from "@/config/mirasMockup";
import Link from "next/link";
import { useRouter } from "next/router";
import { mirasMockup2 } from "@/config/mirasMockup2";

export default function MirasPage() {
  const router = useRouter();
  const { id } = router.query;

  const data = id === "1" ? mirasMockup.miras : mirasMockup2.miras;
  const route = id === "1" ? "/kadioglumiras" : "/kasabamiras";

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h1 style={{ alignSelf: "center" }} className={title()}>
          Miras
        </h1>
        <div className="py-10 grid grid-cols-1 sm:grid-cols-3 gap-20 w-full max-w-8xl">
          {data.map((item) => (
            <Card
              key={item.id}
              isFooterBlurred
              className="flex flex-col h-full"
              radius="lg"
            >
              <CardHeader className="text-center">{item.name}</CardHeader>
              <div style={{ height: 400 }} className="relative w-full">
                <Image
                  alt={item.name}
                  className="object-cover rounded-lg"
                  src={item.imgAdress || inventory}
                  layout="fill"
                  objectFit="cover"
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
                  <Link href={`${route}/${item.id}`}>Daha Fazla</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
