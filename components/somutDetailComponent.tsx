import React, { useState } from "react";
import { title } from "./primitives";
import { somutMockup } from "@/config/somutMockup";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
// import ImageGallery from "react-image-gallery";

const ImageGallery = dynamic(() => import("react-image-gallery"), {
  ssr: true,
});

const renderCustomItem = (item: any) => (
  <div className="relative w-full h-[750px]">
    <img
      src={item.original}
      alt=""
      className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105 mt-10"
    />
  </div>
);

export const SomutDetailComponent = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <div>Yükleniyor...</div>;
  }

  const somut = somutMockup.somut.find(
    (item) => item.id === parseInt(id as string)
  );

  if (!somut) {
    return <div>Somut Olmayan Miras bulunamadı</div>;
  }

  return (
    <div>
      <div className={title()}>{somut.name}</div>
      <ImageGallery items={somut.imagePaths} renderItem={renderCustomItem} />
      <div className="flex gap-20 justify-center">-</div>
    </div>
  );
};
