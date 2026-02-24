import Link from "next/link";
import Image from "next/image";

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

      <section className="case-reveal delay-6 card space-y-4 p-6">
        <h2 className="case-heading case-heading-black display text-2xl">
          Storyline & User Flow
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
        <figure className="mx-auto w-full max-w-3xl overflow-hidden rounded-xl border border-[#d9dee8] bg-[#f7f9fc] p-2">
          <Image
            src="/amina/amina-user-flow.png"
            alt="Amina user flow diagram"
            width={1400}
            height={900}
            className="h-auto w-full rounded-lg object-cover"
          />
        </figure>
      </section>

      <section className="case-reveal delay-7 card space-y-4 p-6">
        <h2 className="case-heading case-heading-black display text-2xl">
          Preliminary Research &amp; Pain Points
        </h2>
        <p className="text-sm text-[#4b5163]">
          We conducted qualitative interviews with 2 elementary school teachers and
          3 student teachers and identified 3 main pain points in SEL and cultural learning: 
        </p>
        <ol className="list-disc space-y-1 pl-5 text-sm text-[#4b5163]">
          <li>Inconsistent or superficial SEL integration</li>
          <li>Limited cultural learning opportunities</li>
          <li>Teacher overload and curriculum constraints</li>
        </ol>
        <p className="text-sm text-[#4b5163]">
          In response, we designed a prototype of an interactive storybook. The experience was built using p5.js and adapted facial detection software. While the narrative maintained a familiar “next” button for structural clarity, facial expression recognition was embedded as an affective interaction layer. Rather than replacing navigation, the system leveraged children’s emotional responses as a form of participatory input — shaping select narrative moments and reinforcing engagement through embodied feedback.
          <br></br><br></br>
          Designed specifically for children ages 6–8, the interface minimized reliance on reading and writing, prioritizing visual communication, intuitive affordances, and developmentally appropriate interaction patterns.
        </p>
      </section>

      <section className="case-reveal delay-8 card space-y-4 p-6">
        <h2 className="case-heading case-heading-black display text-2xl">
          Technical Implementation
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[#4b5163]">
          <li>Built with p5.js and adapted facial detection software</li>
          <li>Story progression controlled by emotional input</li>
          <li>Two interactive emotional decision points in the narrative</li>
        </ul>
        <p className="text-sm text-[#4b5163]">
          While limited in scope, the prototype demonstrated how affective
          computing can support emotional reflection in storytelling.
        </p>
      </section>

      <section className="case-reveal delay-9 card space-y-4 p-6">
        <h2 className="case-heading case-heading-black display text-2xl">
          Demo
        </h2>
        <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-xl border border-[#d9dee8] bg-[#f7f9fc] p-2">
          <div className="aspect-video overflow-hidden rounded-lg">
            <iframe
              src="https://www.youtube.com/embed/3CNWZtCOaYc"
              title="Amina's First Day Demo"
              className="h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
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
