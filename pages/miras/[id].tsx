import DefaultLayout from "@/layouts/default";
import { useRouter } from "next/router";
import { MirasDetailComponent } from "@/components/mirasDetailComponent";

export default function MirasDetail() {
  const router = useRouter();

  return (
    <DefaultLayout>
      <div className="w-full py-10">
        <MirasDetailComponent />
      </div>
    </DefaultLayout>
  );
}
