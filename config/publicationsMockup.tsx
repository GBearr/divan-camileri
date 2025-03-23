export type publicationsMockup = typeof publicationsMockup;

type Publications = {
  id: number;
  name: string;
  address?: string;
  description: string;
  _360Path?: string[];
  imgAdress?: string;
};

export const publicationsMockup: { publications: Publications[] } = {
  publications: [
    {
      id: 1,
      name: "Tübitak 1002-a Bilimsel Araştırma Projesi, 2023-2024",
      description:
        "Kastamonu Kırsalında Yer Alan Cuma (Divan) Camilerinin Risk Değerlendirilmesi ve Koruma Yaklaşımı",
      _360Path: ["/360/kadioglu.jpg"],
      imgAdress: "/cardimgs/tubitak.svg",
    },
    {
      id: 2,
      name: "[MAUIMTF] LİSANSÜSTÜ ARAŞTIRMALAR SEMPOZYUMU – IMaltepe Üniversitesi Mimarlık ve Tasarım Fakültesi 09-10 Mayıs 2024",
      address:
        "https://openaccess.maltepe.edu.tr/server/api/core/bitstreams/9a9ff72d-b16c-47ad-9648-5febc36c15bf/content",
      description:
        "Kırsal Mimari Miras Bağlamında Divan Camileri ve Koruma Sorunları: Kastamonu Merkez ve Devrekani İlçeleri Örneği",
    },
    {
      id: 3,
      name: "Art-Sanat 23/2025",
      address:
        "https://iupress.istanbul.edu.tr/tr/journal/art-sanat/article/kastamonu-beylikler-donemi-kirsal-camilerinin-mimari-koruma-baglaminda-incelenmesi",
      description:
        "Kastamonu Beylikler Dönemi Kırsal Camilerinin Mimari Koruma Bağlamında İncelenmesi",
    },
    {
      id: 4,
      name: "IIWC 2025 Annual Meeting and 27th Symposium in Samsun, Türkiye",
      description:
        "Documenting the Memory of Divan Mosques: The Case of Fadıra Mosque in Kastamonu",
    },
  ],
};
