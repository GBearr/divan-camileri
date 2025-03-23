import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { SomutDetailComponent } from "@/components/somutDetailComponent";

export default function SomutDetailPage() {
  return (
    <DefaultLayout>
      <div className="w-full py-10">
        <SomutDetailComponent />
      </div>
    </DefaultLayout>
  );
}
