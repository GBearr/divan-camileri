import React from "react";
import { subtitle, title } from "./primitives";
import { useRouter } from "next/router";
import Image from "next/image";
import dynamic from "next/dynamic";
import { mimariDetailMockup } from "@/config/mimariDetailMockup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

export const MirasDetailComponent = () => {
  const router = useRouter();
  const { id } = router.query;

  const miras = mimariDetailMockup.miras.find(
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
      <div className={title()}>{miras.name} Mimarisi</div>
      <div className="mt-4">
        <ul className="list-disc pl-5 text-lg text-default-600 py-10 text-justify">
          {miras.description1}
        </ul>
      </div>
      {Array.isArray(miras.imagePaths) && (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="rounded-2xl shadow-xl mt-6"
        >
          {miras.imagePaths.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-72 md:h-[500px] overflow-hidden">
                <Image
                  src={src}
                  alt={`${miras.name} görsel ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};
