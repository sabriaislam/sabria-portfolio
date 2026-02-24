import Link from "next/link";

import { caseStudies } from "./case-studies/data";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="surface grid gap-10 bg-white/70 p-10 shadow-[0_20px_60px_rgba(17,17,24,0.08)] backdrop-blur md:grid-cols-[1.4fr_0.6fr]">
        <div className="space-y-6">
          <h1 className="display text-4xl leading-tight text-[#111118] md:text-4xl">
            Designing inclusive interactive experiences that center emotion, learning, and community.
          </h1>
          <p className="text-lg text-[#4b5163]">
            Writing research papers @ Elevate Lab <br></br>
            Building my senior design project @ 370 Jay
          </p>
        </div>
      </section>
      <section className="home-case-studies space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <article
              key={study.title}
              className={`home-case-card home-case-card--${index + 1} card space-y-4 p-6`}
            >
              <Link
                href={`/case-studies/${study.slug}`}
                className="home-case-link block space-y-4"
                aria-label={`Open case study: ${study.title}`}
              >
                <div className="case-thumb w-full overflow-hidden">
                  <img
                    src={study.thumbnail}
                    alt={`${study.title} thumbnail`}
                    className="home-case-image h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="display text-2xl">{study.title}</h3>
                  <p className="text-sm text-[#4b5163]">{study.focus}</p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
