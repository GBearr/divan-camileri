import React, { useEffect, useRef, useState } from "react";
import { Viewer } from "@photo-sphere-viewer/core";
import "@photo-sphere-viewer/core/index.css";
import { useRouter } from "next/router";
import { mosqueMockup } from "@/config/mosqueMockup";

const PanoramaViewerModal = ({ isOpen, onClose }: any) => {
  const viewerRef = useRef<HTMLDivElement | null>(null);
  const viewerInstance = useRef<Viewer | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mosquePanoramas, setMosquePanaromas] = useState<String[]>([]);
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  const mosque = mosqueMockup.mosque.find(
    (item) => item.id === parseInt(id as string)
  );

  useEffect(() => {
    setMosquePanaromas(mosque?._360Path || []);
  }, []);

  useEffect(() => {
    if (isOpen && viewerRef.current) {
      // Yeni bir viewer oluştur
      viewerInstance.current = new Viewer({
        container: viewerRef.current,
        panorama: mosquePanoramas[currentIndex],
        navbar: true,
        defaultZoomLvl: 50,
        touchmoveTwoFingers: true,
      });

      return () => {
        viewerInstance.current?.destroy();
        viewerInstance.current = null;
      };
    }
  }, [isOpen, mosquePanoramas]);

  // Panorama değişikliklerinde setPanorama çağrılır
  useEffect(() => {
    if (viewerInstance.current && mosquePanoramas[currentIndex]) {
      viewerInstance.current.setPanorama(mosquePanoramas[currentIndex]);
    }
  }, [currentIndex, mosquePanoramas]);

  if (!isOpen) return null;

  // if (!isOpen || mosquePanoramas.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mosquePanoramas.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + mosquePanoramas.length) % mosquePanoramas.length
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative bg-white w-11/12 md:w-3/4 lg:w-1/2 h-3/4 p-4 rounded">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-red-600 px-3 py-1 rounded z-20"
        >
          Kapat
        </button>
        <div
          ref={viewerRef}
          style={{ width: "100%", height: "100%" }}
          className="rounded z-10"
        ></div>
        <div className="absolute bottom-2 left-2 right-2 flex justify-between z-20">
          <button
            onClick={handlePrevious}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Önceki
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Sonraki
          </button>
        </div>
      </div>
    </div>
  );
};

export default PanoramaViewerModal;
