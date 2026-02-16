import Link from "next/link";

import { caseStudies } from "../data";
import CaseStudyHeader from "../components/CaseStudyHeader";
import CaseStudyMetaCard from "../components/CaseStudyMetaCard";

const study = caseStudies.find((entry) => entry.slug === "cookbook-website");

export default function CreativeComputingCookboookPage() {
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
        <h2 className="case-heading case-heading-green display text-2xl">
          Project Brief
        </h2>
        <p className="text-sm text-[#4b5163]">
          We collaborated with community partners Stem From Dance (SFD) and
          Community Word Project (CWP) to develop the Creative Computing
          Cookbook, an online resource hub for middle to high school students.
          It includes foundational content about physical computing components
          and breakdowns of past projects to help novices explore the
          intersection of art and physical computing.
        </p>
      </section>

      <section className="case-reveal delay-5 card space-y-4 p-6">
        <h2 className="case-heading case-heading-rust display text-2xl">
          Considerations
        </h2>
        <ol className="list-decimal space-y-1 pl-5 text-sm text-[#4b5163]">
          <li>
            How can we account for overlapping content and users across partner
            programs?
          </li>
          <li>
            How can we support learners in exploring the intersection between
            dance and technology?
          </li>
          <li>
            How can we inspire learners to create unique interactive visual art
            with physical computing components?
          </li>
          <li>How can we keep students engaged on the site?</li>
        </ol>
      </section>

      <section className="case-reveal delay-6 card space-y-4 p-6">
        <h2 className="case-heading case-heading-blue display text-2xl">
          User Research
        </h2>
        <p className="text-sm text-[#4b5163]">
          We worked with 2 small groups of teaching artists from a range of creative disciplines
          to review lo-fi designs. Across two 60-minute sessions, they
          navigated the website and shared feedback on the experience, content
          structure, and how this type of resource could support their teaching
          practice.
        </p>
      </section>

      <section className="case-reveal delay-7 card space-y-4 p-6">
        <h2 className="case-heading case-heading-pink display text-2xl">
          Key Findings
        </h2>
        <ol className="list-decimal space-y-1 pl-5 text-sm text-[#4b5163]">
          <li>
            Teaching artists opted for a robust filtering system that valued both artistic
            concepts and technical concepts equally.
          </li>
          <li>
            Creative examples should have dedicated pages, be clearly broken down, and be featured at the top of the homepage.
          </li>
          <li>Curricular tags are essential for helping both instructors and students map their learning within the program to classroom curricula</li>
        </ol>
      </section>

      <section className="case-reveal delay-8 card space-y-4 p-6">
        <h2 className="case-heading case-heading-green display text-2xl">
          Worked Examples in Creative Computing
        </h2>
        <p className="text-sm text-[#4b5163]">
          The teaching artists’ feedback became a turning point in our design process. Through conversation, it became clear that students needed more than exposure to physical components or polished creative examples, they needed visibility into the <i>process:</i> how ideas were constructed, how decisions were made, and how projects came together step by step. This realization pushed us to rethink the central content of the platform.
          <br></br><br></br>
          We began exploring worked examples as a way to scaffold learning in creative computing. Worked examples—step-by-step demonstrations of expert thinking—are strongly supported by research in Cognitive Load Theory (Ayres & Sweller, 2013; Sweller et al., 2011). They are widely used in mathematics and programming education, but we were curious about how they might translate into creative computing environments—spaces where problems are open-ended and expressive outcomes matter as much as technical precision. 
          <br></br><br></br>
          This tension between structure and creativity became central to our inquiry. If worked examples are typically designed for clearly defined problems, how might they function in contexts where ambiguity is part of the learning process? Prior research suggests they can extend into broader design domains (Rourke & Sweller, 2009), yet there is limited exploration of their role in creative computing specifically.
          <br></br><br></br>
          To ground these questions in practice, we conducted a study with dance instructors. Together, we explored how embodied creative processes could be translated into structured examples without reducing their expressive depth. These sessions allowed us to create an archive of worked examples for students to draw inspiration from.
        </p>
      </section>

      <section className="case-reveal delay-9 card space-y-4 p-6">
        <h2 className="case-heading case-heading-rust display text-2xl">
          Content Development
        </h2>
        <p className="text-sm text-[#4b5163]">
         We invited three SFD dance instructors to create short choreographies using LED strips, tilt sensors, and buttons in response to different prompts. Afterward, they annotated their dances, reflecting on their creative decisions, technical choices, and interactions with the electronics.
        </p>
        <div className="case-placeholder rounded-xl border border-dashed border-[#cfd4df] bg-[#f7f8fb] p-4 text-sm text-[#4b5163]">
          Image placeholder: clips from study
        </div>
        <p className="text-sm text-[#4b5163]">
          From these sessions, we produced 10 full-length videos and edited them into shorter annotated clips. We then applied the same annotation framework to previous CWP projects to ensure consistency across examples. These structured breakdowns directly informed the design of the beta experience, shaping how creative projects were presented and scaffolded on the platform.
        </p>
        <div className="case-placeholder rounded-xl border border-dashed border-[#cfd4df] bg-[#f7f8fb] p-4 text-sm text-[#4b5163]">
          Image placeholder: design of annotated vids
        </div>
      </section>

      <section className="case-reveal delay-10 card space-y-4 p-6">
        <h2 className="case-heading case-heading-blue display text-2xl">
          Solution
        </h2>
        <div className="case-placeholder rounded-xl border border-dashed border-[#cfd4df] bg-[#f7f8fb] p-4 text-sm text-[#4b5163]">
          Image placeholder: clips from beta version
        </div>
        <p className="text-sm text-[#4b5163]">
          In parallel, the team developed visual design mockups aligned with the
          refined user flows.
        </p>
        <div className="case-placeholder rounded-xl border border-dashed border-[#cfd4df] bg-[#f7f8fb] p-4 text-sm text-[#4b5163]">
          Image placeholder: mockups of the new version
        </div>
      </section>

      <section className="case-reveal delay-11 card space-y-4 p-6">
        <h2 className="case-heading case-heading-pink display text-2xl">
          Impact
        </h2>
        <p className="text-sm text-[#4b5163]">
          Students used the website during the 2025 summer iteration of the CWP
          program to support their first hands-on activity with physical
          computing electronics.
        </p>
      </section>

      <section className="case-reveal delay-12 card space-y-4 p-6">
        <h2 className="case-heading case-heading-green display text-2xl">
          Next Steps
        </h2>
        <p className="text-sm text-[#4b5163]">
          Develop and implement the new designs, then expand support for
          user-created content so more community members can contribute projects
          and learning materials.
        </p>
      </section>
    </div>
  );
}
