import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import inventory from "@/img/IMG20210430161235.jpg";
import Image from "next/image";
import { mirasMockup } from "@/config/mirasMockup";
import Link from "next/link";
import { useRouter } from "next/router";

export default function MimariMirasPage() {
  const router = useRouter();
  const { id } = router.query;

  console.log("Id : ", id);

  const data = mirasMockup.miras;

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h1 style={{ alignSelf: "center" }} className={title()}>
          Mimari Miras
        </h1>
        <div className="py-10 grid sm:grid-cols-2 gap-20 w-full max-w-6xl">
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
                  fill
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
                  <Link href={`/${item.slug}/${id}`}> Daha Fazla </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
