import { MapComponent } from "@/components/mapComponent";
import DefaultLayout from "@/layouts/default";

export default function MapPage() {
  return (
    <DefaultLayout>
      <div className="w-full py-10">
        <MapComponent />
      </div>
    </DefaultLayout>
  );
}
