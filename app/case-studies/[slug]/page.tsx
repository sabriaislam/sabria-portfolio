import Link from "next/link";
import { notFound } from "next/navigation";

import { caseStudies } from "../data";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((entry) => entry.slug === slug);

  if (!study) notFound();

  return (
    <div className="space-y-10 pb-12">
      <section className="space-y-3">
        <Link
          href="/"
          className="inline-block text-sm font-semibold text-[#4b5163]"
        >
          ← Back to case studies
        </Link>
        <h1 className="display text-4xl md:text-5xl">{study.title}</h1>
        <p className="text-lg text-[#4b5163]">{study.focus}</p>
      </section>

      <section className="card grid gap-6 p-6 md:grid-cols-4">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#4b5163]">
            Timeline
          </p>
          <p className="text-base text-[#111118]">{study.timeline}</p>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#4b5163]">
            Roles
          </p>
          <ul className="space-y-1 text-sm text-[#111118]">
            {study.roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#4b5163]">
            Skills
          </p>
          <ul className="space-y-1 text-sm text-[#111118]">
            {study.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#4b5163]">
            Tools
          </p>
          <ul className="space-y-1 text-sm text-[#111118]">
            {study.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="card space-y-3 p-6">
        <h2 className="display text-2xl">Case study details</h2>
        <p className="text-sm text-[#4b5163]">
          This page is templated. You can now add your full narrative, process
          visuals, outcomes, and reflections for {study.title}.
        </p>
      </section>
    </div>
  );
}
