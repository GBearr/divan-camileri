import React from "react";
import { title } from "./primitives";
import { useRouter } from "next/router";
import Image from "next/image";
import { mimariDetailMockup } from "@/config/mimariDetailMockup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const MirasDetailComponent = () => {
  const router = useRouter();
  const { id } = router.query;

  const miras = mimariDetailMockup.miras.find(
    (item) => item.id === parseInt(id as string)
  );

  const camsWithoutDescription = mimariDetailMockup.miras.filter(
    (camii) => !camii.description || camii.description.trim() === ""
  );

  const camsWithoutImagePaths = mimariDetailMockup.miras.filter(
    (camii) => !camii.imagePaths || camii.imagePaths.length === 0
  );

  console.log("Resim verisi eksik olan camiler:", camsWithoutImagePaths);

  console.log("Açıklaması eksik olan camiler:", camsWithoutDescription);

  if (!miras || !id) {
    return <div>Miras bulunamadı</div>;
  }

  return (
    <div className="p-6">
      <div className={title()}>{miras.name} Mimarisi</div>
      <div className="mt-4">
        <div className="text-lg text-default-600 py-10 text-justify space-y-4">
          {miras.description
            ?.split(",,,")
            .map((paragraph, index) => <p key={index}>{paragraph.trim()}</p>)}
        </div>
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
              <div className="relative w-full h-72 md:h-[800px] overflow-hidden group">
                <Image
                  src={src.path}
                  alt={`${miras.name} görsel ${i + 1}`}
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
