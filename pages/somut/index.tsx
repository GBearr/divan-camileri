import React, { ReactNode, useState } from "react";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Button } from "@heroui/button";
import { Card, CardFooter, CardHeader } from "@heroui/card";
import Link from "next/link";
import { somutMockup } from "@/config/somutMockup";
import Image from "next/image";

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

export default function SomutPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center">
          <h1 className={title()}>Somut Olmayan Miras Değeri</h1>
        </div>
        <div className="py-10 grid grid-cols-1 sm:grid-cols-3 gap-20 w-full max-w-8xl">
          {somutMockup.somut.map((item) => (
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
                      src={item.imgPath}
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
                      <Link href={`/somutdetail/${item.id}`}>Daha Fazla</Link>
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
                </Card>
              }
            />
          ))}

          {/* Coming Soon Kart 1 */}
          <FlipCard
            key="coming-soon-1"
            className="max-w-sm h-[400px]"
            frontContent={
              <Card
                isFooterBlurred
                className="flex flex-col h-full"
                radius="lg"
              >
                <CardHeader className="text-center">
                  Göl Köy, Şey Ahmet Cami - Arife 2025
                </CardHeader>
                <div
                  style={{ height: 400 }}
                  className="relative w-full flex items-center justify-center"
                >
                  <span className="text-xl text-gray-500 font-semibold">
                    Coming Soon
                  </span>
                </div>
              </Card>
            }
            backContent={
              <Card
                isFooterBlurred
                className="flex flex-col h-full bg-gray-100"
                radius="lg"
              >
                <CardHeader className="text-center">
                  Göl Köy, Şey Ahmet Cami - Arife 2025
                </CardHeader>
                <div
                  style={{ height: 400 }}
                  className="relative w-full flex items-center justify-center"
                >
                  <span className="text-xl text-gray-500 font-semibold">
                    Yakında detaylar gelecek!
                  </span>
                </div>
              </Card>
            }
          />

          {/* Coming Soon Kart 2 */}
          <FlipCard
            key="coming-soon-2"
            className="max-w-sm h-[400px]"
            frontContent={
              <Card
                isFooterBlurred
                className="flex flex-col h-full"
                radius="lg"
              >
                <CardHeader className="text-center">
                  Talipler Köyü, Rüstem Paşa Cami - Divan Mevlüdü 2025
                </CardHeader>
                <div
                  style={{ height: 400 }}
                  className="relative w-full flex items-center justify-center"
                >
                  <span className="text-xl text-gray-500 font-semibold">
                    Coming Soon
                  </span>
                </div>
              </Card>
            }
            backContent={
              <Card
                isFooterBlurred
                className="flex flex-col h-full bg-gray-100"
                radius="lg"
              >
                <CardHeader className="text-center">
                  Talipler Köyü, Rüstem Paşa Cami - Divan Mevlüdü 2025
                </CardHeader>
                <div
                  style={{ height: 400 }}
                  className="relative w-full flex items-center justify-center"
                >
                  <span className="text-xl text-gray-500 font-semibold">
                    Yakında detaylar gelecek!
                  </span>
                </div>
              </Card>
            }
          />
        </div>
      </section>
    </DefaultLayout>
  );
}
