export type mirasMockup2 = typeof mirasMockup2;

type Miras = {
  id: number;
  name: string;
  address?: string;
  imgAdress?: string;
};

export const mirasMockup2: { miras: Miras[] } = {
  miras: [
    {
      id: 1,
      name: "Hikayesi",
      imgAdress: "/miras/hikaye.jpeg",
    },
    {
      id: 2,
      name: "Mimarisi",
      address:
        "https://openaccess.maltepe.edu.tr/server/api/core/bitstreams/9a9ff72d-b16c-47ad-9648-5febc36c15bf/content",
      imgAdress: "/cardimgs/kadioglu-miras.jpeg",
    },
  ],
};
