import { HikayeDetailComponent } from "@/components/hikayeDetailComponent";
import DefaultLayout from "@/layouts/default";

export default function MirasDetail() {
  return (
    <DefaultLayout>
      <div className="w-full py-10">
        <HikayeDetailComponent />
      </div>
    </DefaultLayout>
  );
}
