import React, { useEffect, useState } from "react";
import { subtitle, title } from "./primitives";
import { MosqueMockup, mosqueMockup } from "@/config/mosqueMockup";
import { useRouter } from "next/router";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import inventory from "@/img/IMG20210430161235.jpg";
import Image from "next/image";
import { Viewer } from "@photo-sphere-viewer/core";
import PanoramaViewerModal from "./PanaromaViewerModal";
import Link from "next/link";

export const MosqueDetailComponent = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isModalOpen, setModalOpen] = useState(false);

  const mosque = mosqueMockup.mosque.find(
    (item) => item.id === parseInt(id as string)
  );

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  console.log("detail", mosque?._360Path);

  if (!mosque) {
    return <div>Cami bulunamadı</div>;
  }

  return (
    <div>
      <div className={title()}>{mosque.name}</div>
      <div
        className={
          "w-full my-2 text-lg lg:text-xl text-default-600 block max-w-full py-10 text-justify"
        }
      >
        {mosque.description}
      </div>

      <div className="flex flex-wrap gap-8 justify-center">
        {/* --- 360 Fotoğraflar --- */}
        <Card
          key="360"
          isFooterBlurred
          className="flex flex-col w-80 sm:w-96 h-[500px] overflow-hidden" /* eşit yükseklik */
          radius="none"
        >
          <CardHeader className="text-center">360 Fotoğraflar</CardHeader>

          {/* Sabit oran kutu */}
          <div className="relative w-full flex-1 aspect-[4/3]">
            <Image
              src={mosque.imagePath || inventory}
              alt={`${mosque.name} 360`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <CardFooter className="mt-auto flex justify-end">
            <Button
              onClick={handleOpenModal}
              className="font-semibold text-sm text-black bg-white border rounded-none"
              size="sm"
              variant="flat"
            >
              Fotoğrafları Görüntüle
            </Button>
          </CardFooter>
        </Card>

        {/* --- Mimari Miras --- */}
        <Card
          key="mimarimiras"
          isFooterBlurred
          className="flex flex-col w-80 sm:w-96 h-[500px] overflow-hidden"
          radius="none"
        >
          <CardHeader className="text-center">Mimari Miras</CardHeader>

          <div className="relative w-full flex-1 aspect-[4/3]">
            <Image
              src={mosque.mirasImage || inventory}
              alt={`${mosque.name} mimari`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <CardFooter className="mt-auto flex justify-end">
            <Button
              className="font-semibold text-sm text-black bg-white border rounded-none"
              size="sm"
              variant="flat"
            >
              <Link href={`/mimarimiras/${id}`}>Fotoğrafları Görüntüle</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      {mosque?._360Path && isModalOpen ? (
        <PanoramaViewerModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
        />
      ) : null}
    </div>
  );
};
