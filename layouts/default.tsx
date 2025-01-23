import { Link } from "@heroui/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import Carousel from "@/components/carousel/carousel";
import Image from "next/image";
import tubitak from "@/img/tubitak.svg";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function DefaultLayout({
  children,
  layoutConfig,
}: {
  children: React.ReactNode;
  layoutConfig?: "main" | "custom";
}) {
  const router = useRouter();

  useEffect(() => {
    router.replace("/home"); // Kullanıcıyı otomatik olarak /home'a yönlendir
  }, []);
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      {layoutConfig === "custom" ? (
        <main className="container mx-auto max-w-6xl flex-grow ">
          {children}
        </main>
      ) : (
        <main className="container mx-auto flex-grow ">{children}</main>
      )}
      <footer className="w-full flex flex-col gap-2 items-center justify-center py-3 bg-teal-700">
        <Image alt="tubitak" src={tubitak} />
        <span className="text-foreground text-semibold text-sm">
          "Bu çalışma, Türkiye Bilimsel ve Teknolojik Araştırma Kurumu (TÜBİTAK)
          tarafından 222K339 Numaralı proje ile desteklenmiştir. Projeye verdiği
          destekten ötürü TÜBİTAK'a teşekkürlerimizi sunarız."
        </span>
        <Link
          isExternal
          className="flex flex-col items-center gap-2 text-current"
          href="https://unis.kastamonu.edu.tr/akademisyen/gokcengokgoz"
        >
          <span className="text-foreground text-semibold text-sm py-5 underline underline-offset-4go">
            Öğr. Gör. Gökçen GÖKGÖZ GEDİK
          </span>
        </Link>
      </footer>
    </div>
  );
}
