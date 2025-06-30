import React from "react";
import { title } from "./primitives";
import { useRouter } from "next/router";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { hikayeDetailMockup } from "@/config/hikayeDetailMockup";

export const HikayeDetailComponent = () => {
  const router = useRouter();
  const { id } = router.query;

  const hikaye = hikayeDetailMockup.hikaye.find(
    (item) => item.id === parseInt(id as string)
  );

  const camsWithoutDescription = hikayeDetailMockup.hikaye.filter(
    (camii) => !camii.description || camii.description.trim() === ""
  );

  const camsWithoutImagePaths = hikayeDetailMockup.hikaye.filter(
    (camii) => !camii.imagePaths || camii.imagePaths.length === 0
  );

  console.log("Resim verisi eksik olan camiler:", camsWithoutImagePaths);

  console.log("Açıklaması eksik olan camiler:", camsWithoutDescription);

  if (!hikaye || !id) {
    return <div>Hikaye bulunamadı</div>;
  }

  return (
    <div className="p-6">
      <div className={title()}>{hikaye.name} Hikayesi</div>
      <div className="mt-4">
        <div className="text-lg text-default-600 py-10 text-justify space-y-4">
          {hikaye.description
            ?.split(",,,")
            .map((paragraph, index) => <p key={index}>{paragraph.trim()}</p>)}
        </div>
      </div>
      {Array.isArray(hikaye.imagePaths) && (
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
          {hikaye.imagePaths.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-72 md:h-[800px] overflow-hidden group">
                <Image
                  src={src.path}
                  alt={`${hikaye.name} görsel ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <h3
                  className="absolute top-4 left-1/2 -translate-x-1/2 text-center
                             px-4 text-white text-lg md:text-2xl font-semibold
                             tracking-wide drop-shadow-lg pointer-events-none"
                >
                  {src.number}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};
