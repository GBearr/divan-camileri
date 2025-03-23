import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { useRouter } from "next/router";
import { projectMockup } from "@/config/projectMockup";
import { KasabaMirasComponent } from "@/components/kasabaMirasComponent";

export default function KasabaMiras() {
  const router = useRouter();
  const { id } = router.query;

  const selectedMockup = projectMockup.project.find(
    (item) => item.id.toString() === id?.toString()
  );

  console.log("Selected Mockup", selectedMockup);

  return (
    <DefaultLayout>
      <div className="w-full py-10">
        <KasabaMirasComponent />
      </div>
    </DefaultLayout>
  );
}
