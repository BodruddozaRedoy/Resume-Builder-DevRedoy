"use client";
import Template_1 from "@/components/modules/Builder/Resume/Templates/Template_1";
import Template_2 from "@/components/modules/Builder/Resume/Templates/Template_2";
import { useResume } from "@/store/useResume";
import { useTabSwitch } from "@/store/useTabSwitch";

export default function ResumePreview() {
  const { data, template } = useResume();
  const ts: any = useTabSwitch.getState?.() ?? {};
  const orderSlugs: string[] =
    ts?.tabs?.map((t: any) => t.slug) ??
    ts?.reorderable?.map((t: any) => t.slug) ??
    [
      "personal-details",
      "contact-information",
      "professional-summary",
      "skills",
      "employment-history",
      "education",
      "internship",
      "courses",
      "references",
      "languages",
      "hobbies",
      "links",
    ];

  const commonProps = { data, orderSlugs };

  return (
    <div className="scale-75 h-full origin-top">
      <div id="resume-preview" className="bg-white w-[210mm] h-[297mm] shadow-lg border rounded">
        {template === "left" ? (
          <Template_1 {...commonProps} />
        ) : (
          <Template_2 {...commonProps} />
        )}
      </div>
    </div>
  );
}
