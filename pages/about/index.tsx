import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { aboutMockup } from "@/config/aboutConfig";
import { Card, CardFooter, CardHeader } from "@heroui/card";
import Image from "next/image";
import { Button } from "@heroui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h1 className={title()}>Hakkımızda</h1>
        <div className="py-10 grid grid-cols-1 sm:grid-cols-4 gap-20 w-full max-w-8xl">
          {aboutMockup.persons.map((item) => (
            <Card
              isFooterBlurred
              className="border-none max-w-sm max-h-[700px] flex flex-col"
              radius="lg"
            >
              <CardHeader className="text-center justify-center">
                {item.name}
              </CardHeader>
              <div className="relative w-full h-[300px]">
                <Image
                  alt={item.name}
                  className="object-cover rounded-lg"
                  src={item.imgPath || ""}
                  layout="fill"
                  objectFit="cover" // Resimleri kutuya sığdır
                />
              </div>
              {item.url != null ? (
                <CardFooter className="flex justify-center mt-auto">
                  <Button
                    className="font-semibold text-sm text-black bg-white border rounded-none"
                    color="default"
                    size="sm"
                    variant="flat"
                    radius="md"
                  >
                    <Link href={item.url} passHref legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer">
                        Daha Fazla
                      </a>
                    </Link>
                  </Button>
                </CardFooter>
              ) : null}
            </Card>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
