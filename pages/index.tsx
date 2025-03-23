import Carousel from "@/components/carousel/carousel";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout layoutConfig="custom">
      <section className="flex flex-col items-center justify-center gap-4 w-full max-w-6xl align-center ">
        <Carousel />
      </section>
      <section className="flex flex-col items-center justify-center gap-4 w-full max-w-6xl align-center py-20 ">
        {/* <div
          style={{ backgroundColor: "red", width: "100%", height: "200px" }}
        ></div> */}
      </section>
    </DefaultLayout>
  );
}
