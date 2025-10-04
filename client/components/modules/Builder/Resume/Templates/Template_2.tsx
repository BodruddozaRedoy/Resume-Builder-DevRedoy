"use client";
import React from "react";
import type { ResumeData } from "@/types/resume.types";

type Props = { data: ResumeData; orderSlugs: string[] };

export default function Template_2({ data, orderSlugs }: Props) {
  const Section: Record<string, React.ReactNode> = {
    "personal-details": (
      <header className="mb-4">
        <h1 className="text-2xl font-bold">{data.personalDetails.name}</h1>
        {data.personalDetails.title && <p className="text-gray-600">{data.personalDetails.title}</p>}
      </header>
    ),
    "contact-information": (
      <div className="text-sm mb-4">
        <p>
          {data.contactInformation.email} • {data.contactInformation.phone} •{" "}
          {data.contactInformation.location}
        </p>
        <p>
          {data.contactInformation.linkedin} • {data.contactInformation.github} •{" "}
          {data.contactInformation.website}
        </p>
      </div>
    ),
    "professional-summary": (
      <section className="mb-4">
        <h2 className="font-semibold border-b mb-2">Professional Summary</h2>
        <p className="text-sm">{data.professionalSummary}</p>
      </section>
    ),
    skills: (
      <section className="mb-4">
        <h2 className="font-semibold border-b mb-2">Skills</h2>
        <p className="text-sm">{data.skills.join(" • ")}</p>
      </section>
    ),
    "employment-history": (
      <section className="mb-4">
        <h2 className="font-semibold border-b mb-2">Employment History</h2>
        {data.employmentHistory.map((e) => (
          <div key={e.id} className="mb-2">
            <p className="font-medium">
              {e.jobTitle} – {e.company}
            </p>
            <p className="text-xs text-gray-500">
              {e.start} – {e.end || "Present"}{e.location ? ` | ${e.location}` : ""}
            </p>
            {e.description && <p className="text-sm">{e.description}</p>}
          </div>
        ))}
      </section>
    ),
    education: (
      <section className="mb-4">
        <h2 className="font-semibold border-b mb-2">Education</h2>
        {data.education.map((ed) => (
          <div key={ed.id} className="mb-2">
            <p className="font-medium">{ed.degree}</p>
            <p className="text-xs text-gray-500">
              {ed.institute} {ed.start ? `• ${ed.start}` : ""} {ed.end ? `– ${ed.end}` : ""}
            </p>
            {ed.description && <p className="text-sm">{ed.description}</p>}
          </div>
        ))}
      </section>
    ),
    internship: (
      <section className="mb-4">
        <h2 className="font-semibold border-b mb-2">Internship</h2>
        {data.internship.map((it) => (
          <div key={it.id} className="mb-2">
            <p className="font-medium">
              {it.jobTitle} – {it.company}
            </p>
            <p className="text-xs text-gray-500">
              {it.start} – {it.end || "Present"}
            </p>
            {it.description && <p className="text-sm">{it.description}</p>}
          </div>
        ))}
      </section>
    ),
    courses: (
      <section className="mb-4">
        <h2 className="font-semibold border-b mb-2">Courses</h2>
        <ul className="list-disc list-inside text-sm">
          {data.courses.map((c) => (
            <li key={c.id}>
              {c.title} {c.provider ? `– ${c.provider}` : ""} {c.year ? `(${c.year})` : ""}
            </li>
          ))}
        </ul>
      </section>
    ),
    references: (
      <section className="mb-4">
        <h2 className="font-semibold border-b mb-2">References</h2>
        {data.references.length ? (
          <ul className="text-sm">
            {data.references.map((r) => (
              <li key={r.id}>
                {r.referentName}
                {r.referentCompany ? ` – ${r.referentCompany}` : ""}
                {r.referentEmail ? ` | ${r.referentEmail}` : ""}
                {r.referentPhone ? ` | ${r.referentPhone}` : ""}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm">Available upon request</p>
        )}
      </section>
    ),
    languages: (
      <section className="mb-4">
        <h2 className="font-semibold border-b mb-2">Languages</h2>
        <ul className="text-sm">
          {data.languages.map((l) => (
            <li key={l.id}>
              {l.language}{l.proficiency ? ` — ${l.proficiency}` : ""}
            </li>
          ))}
        </ul>
      </section>
    ),
    hobbies: (
      <section className="mb-4">
        <h2 className="font-semibold border-b mb-2">Hobbies</h2>
        <p className="text-sm">{data.hobbies.map((h) => h.hobby).join(" • ")}</p>
      </section>
    ),
    links: (
      <section className="mb-4">
        <h2 className="font-semibold border-b mb-2">Links</h2>
        <ul className="text-sm">
          {data.links.map((l) => (
            <li key={l.id}>
              {l.title}: {l.url}
            </li>
          ))}
        </ul>
      </section>
    ),
  };

  return (
    <div className="w-full h-full p-8 overflow-hidden">
      {orderSlugs.map((slug) => (
        <div key={slug}>{Section[slug]}</div>
      ))}
    </div>
  );
}
