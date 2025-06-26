import DefaultLayout from "@/layouts/default";
import { HikayeDetailComponent } from "@/components/hilayeDetailComponent";

export default function MirasDetail() {
  return (
    <DefaultLayout>
      <div className="w-full py-10">
        <HikayeDetailComponent />
      </div>
    </DefaultLayout>
  );
}
