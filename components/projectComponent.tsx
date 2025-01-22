import React from "react";
import { subtitle, title } from "./primitives";
import { useRouter } from "next/router";
import { projectMockup } from "@/config/projectMockup";

export const ProjectComponent = () => {
  const router = useRouter();
  const { id } = router.query;

  const project = projectMockup.project.find(
    (item) => item.id === parseInt(id as string)
  );

  if (!project) {
    return <div>Cami bulunamadı</div>;
  }

  const cleanedDescription = project.description.trim().replace(/^-\s*/, "");

  const formattedDescription = cleanedDescription
    .split(/(?=-)/)
    .map((item, index) => (
      <li key={index} className="mb-2">
        {item.replace("-", "").trim()}{" "}
      </li>
    ));

  return (
    <div className="p-6">
      <div className={title()}>{project.name}</div>
      <div className="mt-4">
        <ul className="list-disc pl-5 text-lg text-default-600 py-10">
          {formattedDescription}
        </ul>
      </div>
    </div>
  );
};
