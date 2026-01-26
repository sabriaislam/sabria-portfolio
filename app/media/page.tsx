"use client";

import { useEffect, useState } from "react";

const mediaSections = [
  {
    title: "Graphic Design",
    description: "Posters, classroom visuals, and bold typography studies.",
    items: [
      {
        label: "Call for Student Volunteers @ Orientation",
        src: "/graphics/Call for Student Volunteers @ Orientation.png",
      },
      {
        label: "Fireside Chat",
        src: "/graphics/Fireside Chat.png",
      },
      {
        label: "Job Opportunities",
        src: "/graphics/Job Opportunities.png",
      },
      {
        label: "Silver Art Exhibit 2024  Conversations",
        src: "/graphics/Silver Art Exhibit 2024  Conversations.png",
      },
      {
        label: "Wasserman@Silver Navigating the Social Work Career Fair",
        src: "/graphics/Wasserman@Silver Navigating the Social Work Career Fair.png",
      },
      {
        label: "Praxis 2 Power with location",
        src: "/graphics/praxis 2 power with location_.png",
      },
    ],
  },
  {
    title: "Merchandise",
    description: "Stickers, shirts, and campus event kits.",
    items: [
      "Passion for compassion sticker",
      "Action for change sticker",
      "Orientation photo booth strip",
      "Orientation leader shirt (front)",
      "Orientation leader shirt (back)",
      "Campus tote mockup",
    ],
  },
  {
    title: "Video Editing",
    description: "Short-form explainers, openers, and story edits.",
    items: [
      "Lesson teaser trailer",
      "Educator spotlight edit",
      "Student showcase reel",
      "Motion title sequence",
      "Micro-learning explainer",
      "Behind-the-scenes cut",
    ],
  },
  {
    title: "Zine",
    description: "Print explorations for reflection and storytelling.",
    items: [
      "Learning reflections spread",
      "Classroom rituals feature",
      "Illustrated concept map",
      "Poetry + prompts layout",
      "Stamp and texture tests",
      "Community voices issue",
    ],
  },
  {
    title: "3D Model",
    description: "Playful objects that bring learning to life.",
    items: [
      "Puzzle learning kit",
      "Interactive globe concept",
      "Modular classroom desk",
      "Storytelling block set",
      "Science kit prototype",
      "Sensory learning tool",
    ],
  },
];

const colorClasses = ["pink", "blue", "green", "yellow", "purple", "orange"];

export default function MediaPage() {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    label: string;
  } | null>(null);

  useEffect(() => {
    if (!activeImage) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImage]);

  return (
    <div className="space-y-12 pb-12">
      <section className="space-y-4">
        <h1 className="display text-4xl md:text-5xl">Media + Experiments</h1>
        <p className="max-w-2xl text-lg text-[#4b5163]">
          A scrollable archive of graphics, merchandise, video edits, zines, and
          3D explorations.
        </p>
      </section>

      <div className="space-y-10">
        {mediaSections.map((section) => (
          <section key={section.title} className="media-wrapper">
            <div className="media-section space-y-6">
              <div className="space-y-1">
                <h2 className="display text-3xl">{section.title}</h2>
                <p className="text-sm text-[#4b5163]">
                  {section.description}
                </p>
              </div>
              <div className="media-section-hero" aria-hidden="true" />
              <div className="media-grid">
                {section.items.map((item, index) => {
                  const sizeClass =
                    index % 5 === 0 ? "tall" : index % 3 === 0 ? "wide" : "";
                  const label = typeof item === "string" ? item : item.label;
                  const src = typeof item === "string" ? null : item.src;
                  return (
                    <div key={label} className={`media-art ${sizeClass}`.trim()}>
                      {src ? (
                        <button
                          type="button"
                          className="media-thumb"
                          onClick={() => setActiveImage({ src, label })}
                          aria-label={`Expand ${label}`}
                        >
                          <img src={src} alt={label} loading="lazy" />
                        </button>
                      ) : (
                        "media"
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </div>

      {activeImage ? (
        <div className="media-lightbox" role="dialog" aria-modal="true">
          <button
            type="button"
            className="media-lightbox-backdrop"
            aria-label="Close expanded image"
            onClick={() => setActiveImage(null)}
          />
          <figure className="media-lightbox-content">
            <div className="media-lightbox-header">
              <button
                type="button"
                className="media-lightbox-close"
                aria-label="Close expanded image"
                onClick={() => setActiveImage(null)}
              >
                ×
              </button>
            </div>
            <button
              type="button"
              className="media-lightbox-image"
              aria-label="Close expanded image"
              onClick={() => setActiveImage(null)}
            >
              <img src={activeImage.src} alt={activeImage.label} />
            </button>
          </figure>
        </div>
      ) : null}

      <section className="card flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="display text-2xl">Media request?</h3>
          <p className="text-sm text-[#4b5163]">
            I&apos;m happy to share more process work or collaborate on an
            education project.
          </p>
        </div>
        <button className="bg-[#14151f] px-6 py-3 text-sm font-semibold text-white">
          Say hello
        </button>
      </section>
    </div>
  );
}
