import { MirasDetailComponent } from "@/components/mirasDetailComponent";
import DefaultLayout from "@/layouts/default";

export default function MirasDetail() {
  return (
    <DefaultLayout>
      <div className="w-full py-10">
        <MirasDetailComponent />
      </div>
    </DefaultLayout>
  );
}
