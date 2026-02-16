import Link from "next/link";

import { caseStudies } from "../data";
import CaseStudyHeader from "../components/CaseStudyHeader";
import CaseStudyMetaCard from "../components/CaseStudyMetaCard";

const study = caseStudies.find((entry) => entry.slug === "nyu-silver-icon-redesign");

export default function NyuSilverIconRedesignPage() {
  if (!study) return null;

  return (
    <div className="space-y-10 pb-12">
      <Link
        href="/"
        className="inline-block text-sm font-semibold text-[#4b5163]"
      >
        ← Back to case studies
      </Link>

      <CaseStudyHeader
        title={study.title}
        focus={study.focus}
        summary={study.summary}
      />

      <CaseStudyMetaCard
        timeline={study.timeline}
        roles={study.roles}
        skills={study.skills}
        tools={study.tools}
      />

      <section className="card space-y-3 p-6">
        <h2 className="display text-2xl">Add your story</h2>
        <p className="text-sm text-[#4b5163]">
          Replace this with your process, visuals, outcomes, and reflections.
        </p>
      </section>
    </div>
  );
}
