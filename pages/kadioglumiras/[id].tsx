import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { useRouter } from "next/router";
import { projectMockup } from "@/config/projectMockup";
import { KadiogluMirasComponent } from "@/components/kadiogluMirasComponent";

export default function KadiogluMiras() {
  const router = useRouter();

  return (
    <DefaultLayout>
      <div className="w-full py-10">
        <KadiogluMirasComponent />
      </div>
    </DefaultLayout>
  );
}
