import { ReactNode, useState } from "react";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import { Card, CardFooter, CardHeader } from "@heroui/card";
import Image from "next/image";
import inventory from "@/img/IMG20210430161235.jpg";
import { mosqueMockup } from "@/config/mosqueMockup";
import Link from "next/link";

interface FlipCardProps {
  frontContent: ReactNode;
  backContent: ReactNode;
  className?: string;
}

function FlipCard({
  frontContent,
  backContent,
  className = "",
}: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${className}`}
      onClick={() => setFlipped(!flipped)}
      role="button"
    >
      <div
        style={{ height: 400 }}
        className={`flip-card-inner ${flipped ? "flipped" : ""}`}
      >
        <div style={{ height: 400 }} className="flip-card-front">
          {frontContent}
        </div>
        <div style={{ height: 400 }} className="flip-card-back">
          {backContent}
        </div>
      </div>
      <style>{`
        .flip-card {
          perspective: 1000px;
          width: 100%;
          height: 100%;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flipped {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}

export default function DivanlarPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h1 style={{ alignSelf: "start" }} className={title()}>
          Dijital Envanter
        </h1>
        <div className="py-10 grid grid-cols-1 sm:grid-cols-3 gap-20 w-full max-w-8xl">
          {mosqueMockup.mosque.map((item) => (
            <FlipCard
              key={item.id}
              className="max-w-sm h-[400px]"
              frontContent={
                <Card
                  isFooterBlurred
                  className="flex flex-col h-full"
                  radius="lg"
                >
                  <CardHeader className="text-center">{item.name}</CardHeader>
                  <div style={{ height: 400 }} className="relative w-full">
                    <Image
                      alt={item.name}
                      className="object-cover rounded-lg"
                      src={item.imagePath || inventory}
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
                      <Link href={`/detail/${item.id}`}>Daha Fazla</Link>
                    </Button>
                  </CardFooter>
                </Card>
              }
              backContent={
                <Card
                  isFooterBlurred
                  className="flex flex-col h-full bg-gray-100"
                  radius="lg"
                >
                  <CardHeader className="text-center">Detaylar</CardHeader>
                  <div className="p-4">
                    <p className="text-justify">
                      {item.description || "Ekstra bilgi buraya gelebilir."}
                    </p>
                  </div>
                </Card>
              }
            />
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
