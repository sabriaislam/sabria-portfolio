import Link from "next/link";

import { caseStudies } from "../data";
import CaseStudyHeader from "../components/CaseStudyHeader";
import CaseStudyMetaCard from "../components/CaseStudyMetaCard";

const study = caseStudies.find((entry) => entry.slug === "aminas-first-day");

export default function AminasFirstDayPage() {
  if (!study) return null;

  return (
    <div className="cookbook-case-study space-y-10 pb-12">
      <Link
        href="/"
        className="case-reveal delay-1 inline-block text-sm font-semibold text-[#4b5163]"
      >
        ← Back to case studies
      </Link>

      <div className="case-reveal delay-2">
        <CaseStudyHeader
          title={study.title}
          focus={study.focus}
          summary={study.summary}
        />
      </div>

      <div className="case-reveal delay-3">
        <CaseStudyMetaCard
          timeline={study.timeline}
          roles={study.roles}
          skills={study.skills}
          tools={study.tools}
        />
      </div>

      <section className="case-reveal delay-4 card space-y-4 p-6">
        <h2 className="case-heading case-heading-black display text-2xl">
          Project Overview
        </h2>
        <p className="text-sm text-[#4b5163]">
          <i>Amina&apos;s First Day</i> was the final project for Affective
          Interfaces. We designed a digital interactive storybook to build
          emotional literacy through emotion detection software.
        </p>
        <p className="text-sm text-[#4b5163]">
          <b>
            How might we leverage digital storytelling and emotionally
            responsive technologies to foster social-emotional learning and
            cultural awareness in elementary students?
          </b>
        </p>
      </section>

      <section className="case-reveal delay-5 card space-y-4 p-6">
        <h2 className="case-heading case-heading-black display text-2xl">
          Target User
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[#4b5163]">
          <li>2nd-3rd grade students</li>
        </ul>
      </section>

      <section className="case-reveal delay-6 card space-y-4 p-6">
        <h2 className="case-heading case-heading-black display text-2xl">
          User Flow
        </h2>
        <p className="text-sm text-[#4b5163]">
          The experience follows Amina, a young Muslim girl navigating her
          first day of 5th grade, where she faces microaggressions from peers.
          As readers move through the story, they identify Amina&apos;s emotions
          through multiple-choice prompts and real-time facial expression
          detection.
        </p>
        <p className="text-sm text-[#4b5163]">
          Based on their responses, the story either continues or pauses for a
          teachable moment, reinforcing empathy and anti-bias learning.
        </p>
      </section>

      <section className="case-reveal delay-7 card space-y-4 p-6">
        <h2 className="case-heading case-heading-black display text-2xl">
          Preliminary Research &amp; Pain Points
        </h2>
        <p className="text-sm text-[#4b5163]">
          Methods: qualitative interviews with 2 elementary school teachers and
          3 student teachers.
        </p>
        <p className="text-sm text-[#4b5163]">
          Main pain points identified:
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[#4b5163]">
          <li>Inconsistent or superficial SEL integration</li>
          <li>Limited cultural learning opportunities</li>
          <li>Teacher overload and curriculum constraints</li>
        </ul>
      </section>

      <section className="case-reveal delay-8 card space-y-4 p-6">
        <h2 className="case-heading case-heading-black display text-2xl">
          Technical Implementation
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[#4b5163]">
          <li>Built with p5.js and adapted facial detection software</li>
          <li>Story progression controlled by emotional input</li>
          <li>Two interactive emotional decision points in the narrative</li>
          <li>
            Designed for children ages 6-8 with minimal reading and writing
            load
          </li>
        </ul>
        <p className="text-sm text-[#4b5163]">
          While limited in scope, the prototype demonstrated how affective
          computing can support emotional reflection in storytelling.
        </p>
      </section>

      <section className="case-reveal delay-9 card space-y-4 p-6">
        <h2 className="case-heading case-heading-black display text-2xl">
          User Flow Diagram
        </h2>
        <div className="case-placeholder rounded-xl border border-dashed border-[#cfd4df] bg-[#f7f8fb] p-4 text-sm text-[#4b5163]">
          Image placeholder: userflow.png
        </div>
      </section>

      <section className="case-reveal delay-10 card space-y-4 p-6">
        <h2 className="case-heading case-heading-black display text-2xl">
          Takeaways &amp; Reflections
        </h2>
        <p className="text-sm text-[#4b5163]">
          Educators found the experience engaging and well-suited for younger
          learners, describing it as a more interactive alternative to standard
          SEL activities.
        </p>
        <p className="text-sm text-[#4b5163]">
          Feedback also raised critical questions about privacy, consent, and
          ethical use of facial data. This reinforced the need for transparent
          communication and opt-in design as the product evolves.
        </p>
      </section>
    </div>
  );
}
