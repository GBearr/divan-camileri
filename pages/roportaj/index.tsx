import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function RoportajPage() {
  const interviewees = [
    { id: 1, name: "Prof. Dr. Cevdet Yakupoğlu", village: "Kemerler Köyü" },
    { id: 2, name: "Dr. Murat Karasalihoğlu", village: null },
    { id: 3, name: "Vahide Civekoğlu", village: "Kemerler Köyü" },
    { id: 4, name: "Mahmut İslam", village: null },
    { id: 5, name: "Tuncay Sakallıoğlu", village: null },
    { id: 6, name: "İsmail Cırt", village: "Kaşçılar Köyü" },
    { id: 7, name: "Mustafa Gençoğlu", village: "Talipler Köyü" },
    { id: 8, name: "Özlem Gezer", village: "Tekke Köyü" },
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Röportajlar</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-8">
          {interviewees.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-background cursor-pointer"
              title="Röportajlar yakında eklenecektir"
            >
              <h2 className="text-lg font-semibold text-foreground">
                {item.name}
              </h2>
              <h2 className="text-lg font-semibold text-foreground py-5">
                {item.village ? item.village : null}
              </h2>
            </div>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
