import React from "react";
import { subtitle, title } from "./primitives";
import { useRouter } from "next/router";
import { kadiogluMimariMirasMockup } from "@/config/kadiogluMirasDetailMockup";
// import ImageGallery from "react-image-gallery";
import dynamic from "next/dynamic";

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

export const KadiogluMirasComponent = () => {
  const router = useRouter();
  const { id } = router.query;

  const miras = kadiogluMimariMirasMockup.miras.find(
    (item) => item.id === parseInt(id as string)
  );

  if (!miras || !id) {
    return <div>Miras bulunamadı</div>;
  }

  //   const cleanedDescription = miras.description.trim().replace(/^-\s*/, "");

  //   const formattedDescription = cleanedDescription
  //     .split(/(?=-)/)
  //     .map((item, index) => (
  //       <li key={index} className="mb-2">
  //         {item.replace("-", "").trim()}{" "}
  //       </li>
  //     ));

  return (
    <div className="p-6">
      <div className={title()}>{miras.name}</div>
      <div className="mt-4">
        <ul className="list-disc pl-5 text-lg text-default-600 py-10 text-justify">
          {miras.description1}
        </ul>
      </div>
      <ImageGallery items={miras.imagePaths} renderItem={renderCustomItem} />
      <div className="flex gap-20 justify-center">-</div>
    </div>
  );
};
