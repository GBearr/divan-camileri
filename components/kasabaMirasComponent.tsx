import React from "react";
import { subtitle, title } from "./primitives";
import { useRouter } from "next/router";
import { projectMockup } from "@/config/projectMockup";
import { kasabaMimariMirasMockup } from "@/config/kasabaMirasDetailMockup";

export const KasabaMirasComponent = () => {
  const router = useRouter();
  const { id } = router.query;

  const miras = kasabaMimariMirasMockup.miras.find(
    (item) => item.id === parseInt(id as string)
  );

  if (!miras) {
    return <div>Miras bulunamadı</div>;
  }

  //   const cleanedDescription = miras.description.trim().replace(/^-\s*/, "");

  //   const formattedDescription = cleanedDescription
  //     .split(/(?=-)/)
  //     .map((item, index) => (
  //       <li key={index} className="mb-2">
  //         {item.replace("-", "").trim()}{" "}
  //       </li>
  //     ));

  return (
    <div className="p-6">
      <div className={title()}>{miras.name}</div>
      <div className="mt-4">
        <ul className="list-disc pl-5 text-lg text-default-600 py-10 text-justify">
          {miras.description1}
        </ul>
      </div>
    </div>
  );
};
