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

      <div className="flex gap-20 justify-center">
        <Card isFooterBlurred className="border-none" radius="none">
          <CardHeader>360 Fotoğraflar</CardHeader>
          <Image
            alt=""
            className="object-cover"
            height={350}
            src={mosque.imagePath || inventory}
            width={350}
          />
          <CardFooter className="flex justify-end">
            <Button
              className="font-semibold text-sm text-black bg-white border rounded-none"
              color="default"
              size="sm"
              variant="flat"
              onClick={() => handleOpenModal()}
            >
              Fotoğrafları Görüntüle
            </Button>
          </CardFooter>
        </Card>

        <Card isFooterBlurred className="border-none" radius="none">
          <CardHeader>Mimari Miras</CardHeader>
          <Image
            alt="Woman listing to music"
            className="object-cover"
            height={350}
            src={mosque.mirasImage || inventory}
            width={350}
          />
          <CardFooter className="flex justify-end">
            <Button
              className="font-semibold text-sm text-black bg-white border rounded-none"
              color="default"
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
