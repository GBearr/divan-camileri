export type SomutMockup = typeof somutMockup;

type ImagePathsType = {
  original: string;
  thumbnail: string;
};

type Somut = {
  id: number;
  name: string;
  imgPath: string;
  imagePaths: ImagePathsType[];
};

export const somutMockup: { somut: Somut[] } = {
  somut: [
    {
      id: 1,
      name: "Çorbacı Köyü, Lala Paşa Cami - Bayramlaşma 2023",
      imgPath: "/lala-pasa/lala-pasa-1.jpg",
      imagePaths: [
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
      ],
    },
    {
      id: 2,
      name: "Talipler Köyü, Rüstem Paşa Cami - Divan Mevlüdü 2024",
      imgPath: "/rustem-pasa/rustem-pasa-1.jpg",
      imagePaths: [
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
      ],
    },
  ],
};
