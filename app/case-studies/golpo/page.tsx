"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

import { caseStudies } from "../data";
import CaseStudyHeader from "../components/CaseStudyHeader";
import CaseStudyMetaCard from "../components/CaseStudyMetaCard";

const study = caseStudies.find((entry) => entry.slug === "golpo");

const panels = [
  {
    src: "/senior-project/panels.png",
    alt: "Panel 1 — overview layout",
    caption: "Early panel layout exploring how questions would be presented inside the booth.",
  },
  {
    src: "/senior-project/panel-2.png",
    alt: "Panel 2 — prompt design",
    caption: "Iteration on prompt wording — finding language that felt open without being overwhelming.",
  },
  {
    src: "/senior-project/panel-3.png",
    alt: "Panel 3 — final prompt",
    caption: "Final prompt panel used in the installation. Simple, handwritten, inviting.",
  },
];

const additionalImages = [
  {
    src: "/senior-project/written-answers.jpg",
    alt: "My written answers",
    label: "My Answers",
  },
  {
    src: "/senior-project/stickersheet.jpg",
    alt: "Sticker sheet",
    label: "Sticker Sheet",
  },
];

export default function GolpoPage() {
  if (!study) return null;

  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: dir === "left" ? -400 : 400, behavior: "smooth" });
  };

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

      {/* Hero image */}
      <a
        href="https://golpo-project.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="case-reveal delay-4 group mx-auto block w-full overflow-hidden rounded-xl border border-[#d9dee8] bg-[#f7f9fc] p-2"
      >
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src="/senior-project/golpo-answers.png"
            alt="Golpo installation — visit golpo-project.com"
            width={1400}
            height={800}
            className="h-auto w-full object-cover transition group-hover:opacity-90"
          />
          <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition">
            <span className="rounded-full bg-[#111118] px-3 py-1 text-xs font-semibold text-white">
              Visit golpo-project.com →
            </span>
          </div>
        </div>
      </a>
      {/* Project Brief */}
      <section className="case-reveal delay-4 card space-y-4 p-6">
        <h2 className="case-heading case-heading-black display text-2xl">Artist Statement</h2>
        <p className="text-sm text-[#4b5163]">
          We perform different versions of ourselves for every person we meet. With friends and
          family, and even some strangers, I&apos;m talkative — but with my Bengali-speaking
          relatives, I often go quiet. Conversations on the phone are typically one-sided because
          I lost fluency somewhere during childhood.
        </p>
        <p className="text-sm text-[#4b5163]">
          At dawats (family functions), I&apos;ve learned to exist differently. I still enjoy
          sitting around their conversations, listening to their stories. What started as a gap
          allowed me to strengthen this side of me — the side that listens.
        </p>
        <p className="text-sm text-[#4b5163]">
          <i>Golpo </i>in Bangla means &ldquo;story.&rdquo; In this installation, I turn the
          listening outwards, inviting others to share a story, and offering it to strangers to hear.
        </p>
      </section>
      {/* Installation — speech + installation side by side */}
      <section className="case-reveal delay-4 card space-y-4 p-6">
        <h2 className="case-heading case-heading-black display text-2xl">Installation</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <figure className="overflow-hidden rounded-xl border border-[#d9dee8] bg-[#f7f9fc] p-2">
            <div className="aspect-video overflow-hidden rounded-lg bg-white">
              <Image
                src="/senior-project/speech.JPG"
                alt="Introducing the project to a group of my peers"
                width={960}
                height={540}
                className="h-full w-full cursor-zoom-in object-cover"
                data-lightbox="true"
              />
            </div>
            <figcaption className="px-1 pt-2 text-xs text-[#4b5163]">
              Introducing the project to a group of my peers.
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-xl border border-[#d9dee8] bg-[#f7f9fc] p-2">
            <div className="overflow-hidden rounded-lg bg-white">
              <Image
                src="/senior-project/installation.jpeg"
                alt="Golpo installation at the exhibition"
                width={960}
                height={1280}
                className="h-auto w-full cursor-zoom-in object-contain"
                data-lightbox="true"
              />
            </div>
            <figcaption className="px-1 pt-2 text-xs text-[#4b5163]">
              Stories I told by responding to the prompts in the experience, using an object to represent each one.</figcaption>
          </figure>
        </div>
      </section>
      {/* Additional Elements */}
      <section className="case-reveal delay-7 card space-y-4 p-6">
        <h2 className="case-heading case-heading-black display text-2xl">Additional Elements</h2>

        {/* Images */}
        <div className="grid gap-4 md:grid-cols-2">
          {additionalImages.map(({ src, alt, label }) => (
            <figure key={src} className="overflow-hidden rounded-xl border border-[#d9dee8] bg-[#f7f9fc] p-2">
              <div className="overflow-hidden rounded-lg bg-white">
                <Image
                  src={src}
                  alt={alt}
                  width={1200}
                  height={900}
                  className="h-auto w-full cursor-zoom-in object-contain"
                  data-lightbox="true"
                />
              </div>
              <figcaption className="px-1 pt-2 text-xs text-[#4b5163]">{label}</figcaption>
            </figure>
          ))}
        </div>

        {/* Video */}
        <div className="mx-auto w-1/2">
          <a
            href="https://youtu.be/Ej2PDRuQXig"
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-xl border border-[#d9dee8] bg-[#f7f9fc] p-2"
          >
            <div className="relative overflow-hidden rounded-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://img.youtube.com/vi/Ej2PDRuQXig/maxresdefault.jpg"
                alt="Watch the Golpo video on YouTube"
                className="h-auto w-full object-cover transition group-hover:opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111118]/80 text-white transition group-hover:bg-[#111118]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 translate-x-0.5">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 flex items-end justify-end p-3 opacity-0 group-hover:opacity-100 transition">
                <span className="rounded-full bg-[#111118] px-3 py-1 text-xs font-semibold text-white">
                  Watch on YouTube →
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Process */}
      <section className="case-reveal delay-5 card space-y-4 p-6">
        <h2 className="case-heading case-heading-black display text-2xl">Process</h2>
        <p className="text-sm text-[#4b5163]">
          This project was inspired by my parents' immigration to the US. We didn't have much documentation of their lives before they came to America, so the only way to know them intimately was through the stories they told. It got me thinking about how important it is to document our faces as we create memories. Photobooths felt like a fitting way to explore this idea — the pictures are small, intimate mementos that capture a moment in time.
        </p>
        <p className="text-sm text-[#4b5163]">
          <b>Family History:</b> I explored an archive of my family history through photo albums and footage from our old Handycam. This inspired me to create a video introduction in which I spoke in Bangla about my family's relationship to documentation.
        </p>
        <p className="text-sm text-[#4b5163]">
          <b>Prototyping the Prompts:</b> I built a basic demo that asked users to write a story across five categories: (1) the story of an object, (2) the story of a language, (3) the story of a change, (4) the story of a friendship, and (5) the story of a place. Each one captures a slice of the memories that shape a person.
        </p>
        <p className="text-sm text-[#4b5163]">
          <b>Experience Aesthetic:</b> The themes were originally dark and sleek, but I shifted toward a more colorful, scrapbook-like vibe to better match the spirit of the project. I also swapped the typeface for something funkier and more artistic.
        </p>
        <p className="text-sm text-[#4b5163]">
          <b>Fabrication:</b> The booth itself was a monitor paired with a webcam and printer, surrounded by room dividers to create an intimate space. The entire experience was hooked onto a raspberry pi and ran with an older monitor which offered a retro feel.
        </p>
      </section>

      {/* Old design / redesign comparison */}
      <section className="case-reveal delay-6 card space-y-4 p-6">
        <h2 className="case-heading case-heading-black display text-2xl">Design Iterations</h2>
        <p className="text-sm text-[#4b5163]">
          The visual language of the installation went through two major phases. Early designs
          leaned heavily on text; later iterations stripped back to emphasize the color and theme.
        </p>
        <div className="mx-auto grid w-full max-w-4xl gap-4 md:grid-cols-2">
          <figure className="overflow-hidden rounded-xl border border-[#d9dee8] bg-[#f7f9fc] p-2">
            <Image
              src="/senior-project/old-design.png"
              alt="Early design exploration"
              width={1200}
              height={900}
              className="h-auto w-full cursor-zoom-in rounded-lg object-contain"
              data-lightbox="true"
            />
            <figcaption className="px-1 pt-2 text-xs text-[#4b5163]">
              Early design — sleek, black and white aesthetics.
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-xl border border-[#d9dee8] bg-[#f7f9fc] p-2">
            <Image
              src="/senior-project/redesign.png"
              alt="Redesigned interface"
              width={1200}
              height={900}
              className="h-auto w-full cursor-zoom-in rounded-lg object-contain"
              data-lightbox="true"
            />
            <figcaption className="px-1 pt-2 text-xs text-[#4b5163]">
              Redesign — pops of pink, blue, and yellow for a more playful and fun interaction.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Panels carousel */}
      <section className="case-reveal delay-7 card space-y-4 p-6">
        <h2 className="case-heading case-heading-black display text-2xl">Panels</h2>
        <p className="text-sm text-[#4b5163]">
          Here are a few screenshots of the photobooth experience.
        </p>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-3 rounded-full border border-[#d9dee8] bg-white p-2 shadow-sm hover:bg-[#f7f9fc] transition"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-3 rounded-full border border-[#d9dee8] bg-white p-2 shadow-sm hover:bg-[#f7f9fc] transition"
          >
            →
          </button>

          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {panels.map((panel) => (
              <figure
                key={panel.src}
                className="min-w-[480px] max-w-[480px] shrink-0 overflow-hidden rounded-xl border border-[#d9dee8] bg-[#f7f9fc] p-2"
              >
                <div className="aspect-[2/1] overflow-hidden rounded-lg bg-white">
                  <Image
                    src={panel.src}
                    alt={panel.alt}
                    width={960}
                    height={540}
                    className="h-full w-full cursor-zoom-in object-contain"
                    data-lightbox="true"
                  />
                </div>
                <figcaption className="px-1 pt-2 text-xs text-[#4b5163]">
                  {panel.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Live site */}
      <section className="case-reveal delay-8 card space-y-4 p-6">
        <h2 className="case-heading case-heading-black display text-2xl">Experience It</h2>
        <p className="text-sm text-[#4b5163]">
          The adapted experience is available to try until May 2027.
        </p>
        <a
          href="https://golpo-project.com/welcome"
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden rounded-xl border border-[#d9dee8] bg-[#f7f9fc] p-2"
        >
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/senior-project/golpo-start.jpg"
              alt="Start the Golpo experience"
              width={1400}
              height={900}
              className="h-auto w-full object-cover transition group-hover:opacity-90"
            />
            <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition">
              <span className="rounded-full bg-[#111118] px-3 py-1 text-xs font-semibold text-white">
                Visit golpo-project.com →
              </span>
            </div>
          </div>
        </a>
      </section>

      {/* Reflection */}
      <section className="case-reveal delay-9 card space-y-4 p-6">
        <h2 className="case-heading case-heading-black display text-2xl">Reflection</h2>
        <p className="text-sm text-[#4b5163]">
          Watching people use Golpo, what struck me most was how many said "I haven't written in a while." The playful, photo-booth framing got them to do something they'd been missing. The gift was offering people a low-stakes prompt to be reflective in a culture that rarely asks. And once written, their stories live on.</p>
      </section>
    </div>
  );
}
