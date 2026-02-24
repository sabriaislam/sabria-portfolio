import Link from "next/link";
import Image from "next/image";

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

      <section className="card space-y-4 p-6">
        <h2 className="display text-2xl">Previous Icons</h2>
        <figure className="mx-auto w-full max-w-3xl overflow-hidden rounded-xl border border-[#d9dee8] bg-[#f7f9fc] p-2">
          <Image
            src="/silver-logo/previousicons.png"
            alt="Previous NYU Silver icons"
            width={1400}
            height={900}
            className="h-auto w-full rounded-lg object-contain"
          />
        </figure>
      </section>

      <section className="card space-y-4 p-6">
        <h2 className="display text-2xl">Client Constraints & Pain Points</h2>
        <p className="text-sm text-[#4b5163]">
          I collaborated with the Dean of NYU Silver and the Office of
          Inclusive Engagement &amp; Student Life to redesign their core value
          icons, aligning them more closely with the school&apos;s mission and
          community identity.
        </p>
        <p className="text-sm text-[#4b5163]">
          One of the primary constraints was to <b>abstain from depicting human
          bodies.</b> This decision was rooted in inclusivity, avoiding
          representations that might unintentionally privilege specific
          identities, abilities, or experiences. The client also felt the <b>previous
          color palette was muted</b> and failed to reflect the vibrancy, care, and
          advocacy central to the school&apos;s values.
        </p>
        <p className="text-sm text-[#4b5163]">
          Through iterative sketching, critique sessions, and careful
          refinement, I explored abstract symbolic forms that could communicate
          belonging, empowerment, and collective action without relying on
          figurative imagery.
        </p>
  
      </section>

      <section className="card space-y-4 p-6">
        <h2 className="display text-2xl">Final Icons</h2>
        <figure className="mx-auto w-full max-w-3xl overflow-hidden rounded-xl border border-[#d9dee8] bg-[#f7f9fc] p-2">
          <Image
            src="/silver-logo/final-icons.png"
            alt="Final NYU Silver icons"
            width={1400}
            height={900}
            className="h-auto w-full rounded-lg object-contain"
          />
        </figure>
        <p className="text-sm text-[#4b5163]">
          The final icon system balances clarity and symbolism, using bold color
          and simplified form to express NYU Silver&apos;s core values in a way
          that is modern, inclusive, and emotionally resonant.
        </p>
      </section>
    </div>
  );
}
