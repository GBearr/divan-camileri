// components/SomutDetailComponent.tsx
import React from "react";
import { title } from "./primitives";
import { somutMockup } from "@/config/somutMockup";
import { useRouter } from "next/router";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const SomutDetailComponent: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <div>Yükleniyor...</div>;

  const somut = somutMockup.somut.find(
    (item) => item.id === parseInt(id as string)
  );

  if (!somut) return <div>Somut Olmayan Miras bulunamadı</div>;

  const paths = somut.imagePaths.map((p: any, idx: number) => ({
    src: typeof p === "string" ? p : p.path,
    label:
      typeof p === "string"
        ? `${idx + 1}/${somut.imagePaths.length}`
        : (p.number ?? `${idx + 1}/${somut.imagePaths.length}`),
  }));

  console.log("Paths : ", paths);

  return (
    <section className="px-4 md:px-6 pb-16">
      <h1 className={title()}>{somut.name}</h1>

      {/* --- Swiper --- */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500 }}
        className="rounded-2xl shadow-2xl mt-10"
      >
        {paths.map(({ src, label }, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-72 sm:h-[450px] md:h-[650px] overflow-hidden group">
              <Image
                src={src}
                alt={`${somut.name} görseli ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

              <span className="absolute top-4 left-1/2 -translate-x-1/2 text-center px-4 py-1 rounded-full bg-black/50 text-white text-sm md:text-base tracking-wider backdrop-blur-sm">
                {label}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
