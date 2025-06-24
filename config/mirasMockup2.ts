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
    // {
    //   id: 3,
    //   name: "Bozulma Durumları",
    //   address:
    //     "https://iupress.istanbul.edu.tr/tr/journal/art-sanat/article/kastamonu-beylikler-donemi-kirsal-camilerinin-mimari-koruma-baglaminda-incelenmesi",
    //   imgAdress: "/miras/bozulma.jpeg",
    // },
  ],
};
