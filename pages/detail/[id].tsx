import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { MosqueDetailComponent } from "@/components/mosqueDetailComponent";

export default function DetailPage() {
  return (
    <DefaultLayout>
      <div className="w-full py-10">
        <MosqueDetailComponent />
      </div>
    </DefaultLayout>
  );
}
