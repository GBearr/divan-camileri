import React, { useRef } from "react";
import AngleRightIcon from "@/icons/AngleRightIcon";
import Slider from "react-slick";
import slider1 from "@/img/IMG-20240629-WA0031.jpg";
import slider3 from "@/img/IMG20210430160035.jpg";
import slider5 from "@/img/IMG20210430161235.jpg";
import fadira from "@/img/fadira.jpg";
import alpi from "@/img/alpi.jpg";
import rustempasa from "@/img/rustempasa.jpg";
import Image from "next/image";
import { Card, CardFooter, CardHeader } from "@heroui/card";
import { Link } from "@heroui/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@heroui/button";

export default function SimpleSlider() {
  const slider = useRef(null);

  const next = () => {
    slider.current.slickNext();
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    draggable: true,
    lazyLoad: false,
  };

  const mosqueData = [
    { id: 34, name: "Hüseyinli Köyü / Divan Camii", image: slider1 },
    { id: 14, name: "Kasaba Köyü / Mahmutbey Camii", image: slider5 },
    { id: 35, name: "Burhanlı Köyü / Fadıra Camii", image: fadira },
    { id: 16, name: "Talipler Köyü / Rüstem Paşa Camii", image: rustempasa },
    { id: 26, name: "Alpı Köyü Divan Camii / Divan Camii", image: alpi },
    { id: 14, name: "Kasaba Köyü / Mahmutbey Camii", image: slider3 },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full">
        <Slider ref={slider} {...settings} className="slider">
          {mosqueData.map((mosque) => (
            <Card
              key={mosque.id}
              isFooterBlurred
              className="border-none"
              radius="leg"
            >
              <Image
                className="rounded-lg"
                src={mosque.image}
                alt={mosque.name}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-2 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">{mosque.name}</p>
                <Link href={`/detail/${mosque.id}`}>
                  <Button
                    className="text-tiny text-white bg-black/20"
                    color="default"
                    radius="lg"
                    size="sm"
                    variant="flat"
                  >
                    İncelemek İçin Tıklayınız
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </Slider>
        <button
          className="absolute left-[-3vw] top-1/2 transform -translate-y-1/2 "
          onClick={() => slider.current.slickPrev()}
        >
          <AngleRightIcon flip="true" />
        </button>
        <button
          className="absolute right-[-3vw] top-1/2 transform -translate-y-1/2 "
          onClick={() => next()}
        >
          <AngleRightIcon />
        </button>
      </div>
    </div>
  );
}
