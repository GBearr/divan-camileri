export type SomutMockup = typeof somutMockup;

type ImagePathsType = {
  original: string;
  thumbnail: string;
};

type Somut = {
  id: number;
  name: string;
  imgPath: string;
  imagePaths: string[];
};

export const somutMockup: { somut: Somut[] } = {
  somut: [
    {
      id: 1,
      name: "Çorbacı Köyü, Lala Paşa Cami - Bayramlaşma 2023",
      imgPath: "/lala-pasa/lala-pasa-1.jpg",
      imagePaths: [
        "/lala-pasa/lala-pasa-1.jpg",
        "/lala-pasa/lala-pasa-2.jpg",
        "/lala-pasa/lala-pasa-3.jpg",
      ],
    },
    {
      id: 2,
      name: "Talipler Köyü, Rüstem Paşa Cami - Divan Mevlüdü 2024",
      imgPath: "/assets/rustem-pasa/rustem-pasa-1.jpg",
      imagePaths: [
        "/assets/rustem-pasa/rustem-pasa-1.jpg",
        "/assets/rustem-pasa/rustem-pasa-2.jpg",
        "/assets/rustem-pasa/rustem-pasa-3.jpg",
      ],
    },
  ],
};
