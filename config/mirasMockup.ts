type Miras = {
  id: number;
  name: string;
  slug: "hikaye" | "miras"; // ⇐ URL’de kullanacağımız parça
  address?: string;
  imgAdress?: string;
};

export const mirasMockup: { miras: Miras[] } = {
  miras: [
    {
      id: 1,
      name: "Hikayesi",
      slug: "hikaye",
      imgAdress: "/miras/hikaye.jpeg",
    },
    {
      id: 2,
      name: "Mimarisi",
      slug: "miras",
      address:
        "https://openaccess.maltepe.edu.tr/server/api/core/bitstreams/9a9ff72d-b16c-47ad-9648-5febc36c15bf/content",
      imgAdress: "/cardimgs/kadioglu-miras.jpeg",
    },
  ],
};
