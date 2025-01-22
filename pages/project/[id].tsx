import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { MosqueDetailComponent } from "@/components/mosqueDetailComponent";
import { useRouter } from "next/router";
import { projectMockup } from "@/config/projectMockup";
import { ProjectComponent } from "@/components/projectComponent";

export default function ProjectPage() {
  const router = useRouter();
  const { id } = router.query;

  const selectedMockup = projectMockup.project.find(
    (item) => item.id.toString() === id?.toString()
  );

  console.log("Selected Mockup", selectedMockup);

  return (
    <DefaultLayout>
      <div className="w-full py-10">
        <ProjectComponent />
      </div>
    </DefaultLayout>
  );
}
