"use client";
import React from "react";
import type { ResumeData } from "@/types/resume.types";

type Props = { data: ResumeData; orderSlugs: string[] };

const leftSet = new Set([
  "personal-details",
  "contact-information",
  "skills",
  "languages",
  "hobbies",
  "links",
]);
const rightSet = new Set([
  "professional-summary",
  "employment-history",
  "education",
  "internship",
  "courses",
  "references",
]);

export default function Template_1({ data, orderSlugs }: Props) {
  const leftOrdered = orderSlugs.filter((s) => leftSet.has(s));
  const rightOrdered = orderSlugs.filter((s) => rightSet.has(s));

  const Section = {
    "personal-details": (
      <div>
        <h2 className="text-lg font-bold">{data.personalDetails.name}</h2>
        {data.personalDetails.title && <p className="text-gray-700">{data.personalDetails.title}</p>}
      </div>
    ),
    "contact-information": (
      <div>
        <h3 className="text-xs font-semibold tracking-wider text-gray-500">CONTACT</h3>
        <ul className="mt-2 space-y-1 text-sm">
          {data.contactInformation.email && <li>Email: {data.contactInformation.email}</li>}
          {data.contactInformation.phone && <li>Phone: {data.contactInformation.phone}</li>}
          {data.contactInformation.location && <li>Location: {data.contactInformation.location}</li>}
          {data.contactInformation.linkedin && <li>LinkedIn: {data.contactInformation.linkedin}</li>}
          {data.contactInformation.github && <li>GitHub: {data.contactInformation.github}</li>}
          {data.contactInformation.website && <li>Website: {data.contactInformation.website}</li>}
        </ul>
      </div>
    ),
    "professional-summary": (
      <section>
        <h2 className="text-base font-bold border-b pb-1 mb-2">Professional Summary</h2>
        <p className="text-sm">{data.professionalSummary}</p>
      </section>
    ),
    skills: (
      <div>
        <h3 className="text-xs font-semibold tracking-wider text-gray-500">SKILLS</h3>
        <ul className="mt-2 list-disc list-inside text-sm space-y-1">
          {data.skills.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>
    ),
    "employment-history": (
      <section>
        <h2 className="text-base font-bold border-b pb-1 mb-2">Employment History</h2>
        {data.employmentHistory.map((e) => (
          <div key={e.id} className="mb-3">
            <h3 className="font-semibold">{e.jobTitle} – {e.company}</h3>
            <p className="text-xs text-gray-500">
              {e.start} – {e.end || "Present"}{e.location ? ` | ${e.location}` : ""}
            </p>
            {e.description && <p className="text-sm mt-1">{e.description}</p>}
          </div>
        ))}
      </section>
    ),
    education: (
      <section>
        <h2 className="text-base font-bold border-b pb-1 mb-2">Education</h2>
        {data.education.map((ed) => (
          <div key={ed.id} className="mb-3">
            <h3 className="font-semibold">{ed.degree}</h3>
            <p className="text-xs text-gray-500">
              {ed.institute}{ed.start ? `, ${ed.start}` : ""}{ed.end ? ` – ${ed.end}` : ""}
            </p>
            {ed.description && <p className="text-sm mt-1">{ed.description}</p>}
          </div>
        ))}
      </section>
    ),
    internship: (
      <section>
        <h2 className="text-base font-bold border-b pb-1 mb-2">Internship</h2>
        {data.internship.map((it) => (
          <div key={it.id} className="mb-3">
            <h3 className="font-semibold">{it.jobTitle} – {it.company}</h3>
            <p className="text-xs text-gray-500">
              {it.start} – {it.end || "Present"}
            </p>
            {it.description && <p className="text-sm mt-1">{it.description}</p>}
          </div>
        ))}
      </section>
    ),
    courses: (
      <section>
        <h2 className="text-base font-bold border-b pb-1 mb-2">Courses</h2>
        <ul className="list-disc list-inside text-sm space-y-1">
          {data.courses.map((c) => (
            <li key={c.id}>
              {c.title}{c.provider ? ` – ${c.provider}` : ""}{c.year ? ` (${c.year})` : ""}
            </li>
          ))}
        </ul>
      </section>
    ),
    references: (
      <section>
        <h2 className="text-base font-bold border-b pb-1 mb-2">References</h2>
        {data.references.length === 0 ? (
          <p className="text-sm">Available upon request</p>
        ) : (
          <ul className="text-sm space-y-1">
            {data.references.map((r) => (
              <li key={r.id}>
                {r.referentName}
                {r.referentCompany ? ` – ${r.referentCompany}` : ""}
                {r.referentEmail ? ` | ${r.referentEmail}` : ""}
                {r.referentPhone ? ` | ${r.referentPhone}` : ""}
              </li>
            ))}
          </ul>
        )}
      </section>
    ),
    languages: (
      <div>
        <h3 className="text-xs font-semibold tracking-wider text-gray-500">LANGUAGES</h3>
        <ul className="mt-2 text-sm space-y-1">
          {data.languages.map((l) => (
            <li key={l.id}>
              {l.language}{l.proficiency ? ` — ${l.proficiency}` : ""}
            </li>
          ))}
        </ul>
      </div>
    ),
    hobbies: (
      <div>
        <h3 className="text-xs font-semibold tracking-wider text-gray-500">HOBBIES</h3>
        <ul className="mt-2 text-sm space-y-1">
          {data.hobbies.map((h) => (
            <li key={h.id}>{h.hobby}</li>
          ))}
        </ul>
      </div>
    ),
    links: (
      <div>
        <h3 className="text-xs font-semibold tracking-wider text-gray-500">LINKS</h3>
        <ul className="mt-2 text-sm space-y-1">
          {data.links.map((l) => (
            <li key={l.id}>
              {l.title}: {l.url}
            </li>
          ))}
        </ul>
      </div>
    ),
  } as Record<string, React.ReactNode>;

  return (
    <div className="w-full h-full flex">
      {/* Left Column */}
      <aside className="w-[35%] bg-gray-50 border-r p-6 text-sm space-y-6">
        {leftOrdered.map((slug) => (
          <div key={slug}>{Section[slug]}</div>
        ))}
      </aside>

      {/* Right Column */}
      <main className="flex-1 p-8 text-sm space-y-6 overflow-hidden">
        {/* Ensure Summary appears near top if present in order */}
        {rightOrdered.map((slug) => (
          <div key={slug}>{Section[slug]}</div>
        ))}
      </main>
    </div>
  );
}
