import { ReactNode, useState } from "react";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import { Card, CardFooter, CardHeader } from "@heroui/card";
import Image from "next/image";
import inventory from "@/img/IMG20210430161235.jpg";
import { publicationsMockup } from "@/config/publicationsMockup";
import Link from "next/link";

export default function PublicationsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h1 style={{ alignSelf: "start" }} className={title()}>
          Yayınlar
        </h1>
        <div className="py-10 grid grid-cols-1 sm:grid-cols-3 gap-10 w-full max-w-8xl">
          {publicationsMockup.publications.map((item) => (
            <Card
              key={item.address}
              isFooterBlurred
              radius="lg"
              className="flex flex-col h-full transform transition duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              <CardHeader className="text-center text-xl font-semibold py-4">
                {item.name}
              </CardHeader>
              <div className="px-4 flex-1">
                <p className="text-gray-700 text-justify">
                  {item.description || "Ekstra bilgi buraya gelebilir."}
                </p>
              </div>
              <CardFooter className="px-4 py-2 text-center">
                {item.address && (
                  <Link href={item.address}>
                    <Button>Detaylar</Button>
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
