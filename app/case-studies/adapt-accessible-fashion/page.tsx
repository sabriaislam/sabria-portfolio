import Link from "next/link";
import Image from "next/image";

import { caseStudies } from "../data";
import CaseStudyHeader from "../components/CaseStudyHeader";
import CaseStudyMetaCard from "../components/CaseStudyMetaCard";

const study = caseStudies.find((entry) => entry.slug === "adapt-accessible-fashion");

export default function AdaptAccessibleFashionPage() {
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
          Overview
        </h2>
        <p className="text-sm text-[#4b5163]">
          A team of three NYU students partnered with ADAPT Community Network
          to co-design an adaptive theatrical costume for a wheelchair user in
          the ADAPT Theatre Group.
        </p>
        <p className="text-sm text-[#4b5163]">
          The project explored how accessibility, sustainability, and expressive
          design can coexist in performance wear when disabled performers are
          treated as co-design partners.
        </p>
      </section>

      <section className="case-reveal delay-5 card space-y-4 p-6">
        <h2 className="case-heading case-heading-black display text-2xl">
          The Challenge
        </h2>
        <p className="text-sm text-[#4b5163]">
          Traditional costumes often prioritize aesthetics over accessibility.
          Our challenge was to design a costume that:
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[#4b5163]">
          <li>Enabled independent and comfortable wear</li>
          <li>Supported movement and performance needs</li>
          <li>Reflected the performer&apos;s creative vision</li>
          <li>Used sustainable, adaptable materials</li>
        </ul>
      </section>

      <section className="case-reveal delay-6 card space-y-4 p-6">
        <h2 className="case-heading case-heading-black display text-2xl">
          Accessibility-Driven Goals
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[#4b5163]">
          <li>
            Practice co-design by centering the performer&apos;s lived
            experience
          </li>
          <li>
            Reduce physical and cognitive friction through accessible fasteners
          </li>
          <li>Design adaptable costume components that can evolve over time</li>
          <li>
            Show how inclusive design can enhance creativity rather than limit
            it
          </li>
        </ul>
      </section>

      <section className="case-reveal delay-7 card space-y-4 p-6">
        <h2 className="case-heading case-heading-black display text-2xl">
          My Role
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[#4b5163]">
          <li>Accessibility-focused ideation and critique</li>
          <li>
            Material sourcing with an emphasis on sustainability and comfort
          </li>
          <li>Prototyping and testing adaptive fastener systems</li>
          <li>Iterative refinement based on performer feedback</li>
        </ul>
      </section>

      <section className="case-reveal delay-8 card space-y-4 p-6">
        <h2 className="case-heading case-heading-black display text-2xl">
          Design Process
        </h2>
        <div className="space-y-3 text-sm text-[#4b5163]">
          <p>
            <b>Research &amp; Listening:</b> We attended live performances and
            collaborated with the performer and ADAPT staff to understand
            dressing challenges, performance context, and textile preferences.
          </p>
          <p>
            <b>Co-Design &amp; Prototyping:</b> We tested magnets, Velcro, and
            snaps so the performer could directly evaluate accessibility,
            comfort, and ease of use.
          </p>
          <p>
            <b>Sustainable Fabrication:</b> We sourced materials from thrift
            stores and repurposed garments to reduce waste and support
            adaptability.
          </p>
        </div>
        <div className="mx-auto grid w-full max-w-4xl gap-4 md:grid-cols-2">
          <figure className="overflow-hidden rounded-xl border border-[#d9dee8] bg-[#f7f9fc] p-2">
            <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg bg-white p-2">
              <Image
                src="/adapt/codesign.png"
                alt="Co-design session and iteration process"
                width={1200}
                height={900}
                className="h-full w-full object-contain"
              />
            </div>
            <figcaption className="px-1 pt-2 text-xs text-[#4b5163]">
              We used a piece of fabric with different types of closings to test which one
              our client preffered.
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-xl border border-[#d9dee8] bg-[#f7f9fc] p-2">
            <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg bg-white p-2">
              <Image
                src="/adapt/prototype.JPG"
                alt="Prototype exploration for adaptive costume elements"
                width={1200}
                height={900}
                className="h-full w-full object-contain"
              />
            </div>
            <figcaption className="px-1 pt-2 text-xs text-[#4b5163]">
              In this image our client is testing the fit and comfort of the adapted vest with magnet closures.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="case-reveal delay-9 card space-y-4 p-6">
        <h2 className="case-heading case-heading-black display text-2xl">
          Final Outcome
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[#4b5163]">
          <li>A red vest with magnetic closures for easier dressing</li>
          <li>
            Gingerbread-inspired pants with flexible decorative trim
          </li>
          <li>
            A theatrical headpiece designed for comfort and expressiveness
          </li>
        </ul>
        <p className="text-sm text-[#4b5163]">
          The final costume balanced accessibility with playful theatrical
          aesthetics and reflected the performer&apos;s personality and vision.
        </p>
        <figure className="mx-auto w-full max-w-3xl overflow-hidden rounded-xl border border-[#d9dee8] bg-[#f7f9fc] p-2">
          <Image
            src="/adapt/completed-work.png"
            alt="Completed adaptive costume work"
            width={1400}
            height={900}
            className="h-auto w-full rounded-lg object-cover"
          />
        </figure>
      </section>

      <section className="case-reveal delay-10 card space-y-4 p-6">
        <h2 className="case-heading case-heading-black display text-2xl">
          Impact
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[#4b5163]">
          <li>Improved ease of dressing through accessible fasteners</li>
          <li>Strengthened performer agency through co-design</li>
          <li>Demonstrated accessibility as a creative driver</li>
          <li>
            Established a reusable framework for future ADAPT costume projects
          </li>
        </ul>
      </section>

      <section className="case-reveal delay-11 card space-y-4 p-6">
        <h2 className="case-heading case-heading-black display text-2xl">
          Reflection
        </h2>
        <p className="text-sm text-[#4b5163]">
          This project reinforced that accessibility design is not about
          retrofitting solutions, it is about designing with people from the
          start. Centering collaboration and adaptability turned accessibility
          from a constraint into an expressive design opportunity.
        </p>
      </section>
    </div>
  );
}
