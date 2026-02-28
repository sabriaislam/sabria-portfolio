import Link from "next/link";
import Image from "next/image";

import { caseStudies } from "../case-studies/data";

type ArchivedProject = {
  title: string;
  summary: string;
  tags: string[];
  thumbnail: string;
  href: string;
  external?: boolean;
};

const archivedProjects: ArchivedProject[] = [
  {
    title: "Airline System | Database Management System",
    summary:
      "Designed and programmed a mock Airline System that includes customer portal and employee portal",
    tags: ["DBMS", "MySQL", "Relational Diagrams"],
    thumbnail: "/thumbnails/airlinesystem.png",
    href: "https://docs.google.com/document/d/1_X1sw9Dy_bkB28cMAeBWwnIZkwcMABBKzDpIwYkbllg/edit?usp=sharing",
    external: true,
  },
  {
    title: "Public Art Map | Van Alen Institute",
    summary:
      "Digital map of public art pieces in NYC",
    tags: ["Python", "Research", "Tool"],
    thumbnail: "/thumbnails/publicartmap.png",
    href: "https://dull-birch-940.notion.site/Public-Art-Map-Exhibition-311a38332a4880fa85e9fb1cfdb5a05d?source=copy_link",
    external: true,
  },
  {
    title: "Website Redesign | Eclipse SoundScape ",
    summary:
      "Redesigning Eclipse Soundscape's website",
    tags: ["UX/UI", "Web Redesign", "User Research"],
    thumbnail: "/thumbnails/escape-soundscapes.png",
    href: "https://dull-birch-940.notion.site/NASA-Eclipse-Soundscapes-Site-Redesign-311a38332a488038a948f38a85b8c73f?source=copy_link",
    external: true,
  },
  {
    title: "Making Accessible Art | HeartShare ",
    summary:
      "Co-creating visual descriptions with artsists with Disabilities",
    tags: ["Gallery Curation", "Accessibility", "Co-creation"],
    thumbnail: "/thumbnails/heartshare.png",
    href: "https://dull-birch-940.notion.site/Making-Art-Accessible-with-HeartShare-311a38332a48806f8f8fd26d7e5ef024?source=copy_link",
    external: true,
  },
  {
    title: "Seven To Eleven | Short Film",
    summary:
      "An experimental short film using motion capture",
    tags: ["Motion Capture", "Video Editing"],
    thumbnail: "/thumbnails/7to11.png",
    href: "https://dull-birch-940.notion.site/7-to-11-311a38332a4880738ec4ed5a3cbd37a6?source=copy_link",
    external: true,
  },
];

export default function WorkPage() {
  return (
    <div className="space-y-16 pb-12">
      <section className="surface grid gap-10 bg-white/70 p-10 shadow-[0_20px_60px_rgba(17,17,24,0.08)] backdrop-blur md:grid-cols-[1.4fr_0.6fr]">
        <div className="space-y-6">
          <h1 className="display text-4xl leading-tight text-[#111118] md:text-4xl font-semibold">
            Work
          </h1>
        </div>
      </section>

      <section className="home-case-studies space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="display text-3xl">Current Projects</h2>
        </div>
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
                  <Image
                    src={study.thumbnail}
                    alt={`${study.title} thumbnail`}
                    width={1200}
                    height={900}
                    className="home-case-image h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="display text-2xl">{study.title}</h3>
                  <p className="text-sm text-[#4b5163]">{study.focus}</p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span key={tag} className="chip chip--small">
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

      <section className="space-y-6 work-archive-section">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="display text-3xl">Archived Projects</h2>
          <span className="chip chip--small">Swipe</span>
        </div>
        <div className="work-archive-carousel" aria-label="Archived projects carousel">
          {archivedProjects.map((project) => (
            <article key={project.title} className="work-archive-slide card space-y-4 p-6">
              <Link
                href={project.href}
                className="block space-y-4"
                target={project.external ? "_blank" : undefined}
                rel={project.external ? "noreferrer" : undefined}
                aria-label={`Open archived project: ${project.title}`}
              >
                <div className="case-thumb w-full overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} thumbnail`}
                    width={1200}
                    height={900}
                    className="home-case-image h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="display text-2xl">{project.title}</h3>
                  <p className="text-sm text-[#4b5163]">{project.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip chip--small">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-[#111118]">
                    View project ↗
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
