import React from "react";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function SomutPage() {
  const lalaPasaImages = [
    {
      original: "/lala-pasa/lala-pasa-1.jpg",
      thumbnail: "/lala-pasa/lala-pasa-1.jpg",
    },
    {
      original: "/lala-pasa/lala-pasa-2.jpg",
      thumbnail: "/lala-pasa/lala-pasa-2.jpg",
    },
    {
      original: "/lala-pasa/lala-pasa-3.jpg",
      thumbnail: "/lala-pasa/lala-pasa-3.jpg",
    },
  ];

  const rustemPasaImages = [
    {
      original: "/rustem-pasa/rustem-pasa-1.jpg",
      thumbnail: "/rustem-pasa/rustem-pasa-1.jpg",
    },
    {
      original: "/rustem-pasa/rustem-pasa-2.jpg",
      thumbnail: "/rustem-pasa/rustem-pasa-2.jpg",
    },
    {
      original: "/rustem-pasa/rustem-pasa-3.jpg",
      thumbnail: "/rustem-pasa/rustem-pasa-3.jpg",
    },
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Somut Olmayan Miras Değeri</h1>
        </div>
        {/* Yan Yana Galeriler */}
        <div className="flex flex-col md:flex-row justify-center gap-8 w-full max-w-6xl">
          {/* Rüstem Paşa Galerisi */}
          <div className="flex-1 text-center">
            <h2 className="font-bold text-lg mb-4">
              Talipler Köyü, Rüstem Paşa Cami - Divan Mevlüdü 2024
            </h2>
            <ImageGallery items={rustemPasaImages} />
          </div>
          {/* Lala Paşa Galerisi */}
          <div className="flex-1 text-center">
            <h2 className="font-bold text-lg mb-4">
              Çorbacı Köyü, Lala Paşa Cami - Bayramlaşma 2023
            </h2>
            <ImageGallery items={lalaPasaImages} />
          </div>
        </div>

        {/* Coming Soon Galeri */}
        <div className="flex flex-col items-center justify-center w-full max-w-7xl mt-10">
          <h2 className="font-bold text-lg mb-4">
            Göl Köy, Şey Ahmet Cami - Arife 2025
          </h2>
          <div className="flex items-center justify-center border-2 border-gray-300 rounded-md bg-gray-100 h-64 w-full text-center">
            <span className="text-xl text-gray-500 font-semibold">
              Coming Soon
            </span>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
