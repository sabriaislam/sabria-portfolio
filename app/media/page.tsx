"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const mediaSections = [
  {
    title: "Graphic Design",
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
    items: [
      {
        label: "Passion for compassion sticker",
        src: "/merch/1.png",
      },
      {
        label: "Action for change sticker",
        src: "/merch/10.png",
      },
      {
        label: "Orientation leader shirt (front)",
        src: "/merch/11.png",
      },
      {
        label: "Orientation photo booth strip",
        src: "/merch/photobooth pic.png",
      },
      {
        label: "Orientation leader shirt (back)",
        src: "/merch/IMG_9171.jpg",
      },
      {
        label: "Campus tote mockup",
        src: "/merch/IMG_9173.jpg",
      },
    ],
  },
  {
    title: "Video Editing",
    items: [
      {
        label: "Motion Capure Final",
        src: "https://www.youtube.com/embed/J9Woy2qrcvc",
        kind: "video",
      },
      {
        label: "Guacamole Recipe with HeartShare member",
        src: "https://www.youtube.com/embed/8fhsl3Amgfc",
        kind: "video",
      },
      {
        label: "Music Video",
        src: "https://www.youtube.com/embed/i9zOjkF85dA",
        kind: "video",
      },
      {
        label: "Still and Moving Images Final",
        src: "https://www.youtube.com/embed/dZ4U_OKvbus",
        kind: "video",
      },
    ],
  },
  {
    title: "Magazines",
    items: [
      {
        label: "Generasian 25",
        src: "/zines/generasian25.png",
        link: "https://drive.google.com/file/d/1VQBPF30rYE1M-lr9mUYOni7jtOBLoFwE/view?usp=sharing",
      },
      {
        label: "Threads (front)",
        src: "/zines/threads-front.png",
        link: "https://www.canva.com/design/DAF8o2YqS_M/yo3Z8T0eUI4Iqxelz2nbVw/view?utm_content=DAF8o2YqS_M&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hfcb2af1f68",
      },
    ],
  },
  {
    title: "3D Models",
    items: [
      {
        label: "Final render",
        src: "/3d/IslamSabriaFinalRender.jpg",
      },
    ],
  },
];

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
        <div className="w-full border border-black/5 bg-white px-8 py-8 md:px-10 md:py-10 shadow-[0_12px_32px_rgba(17,17,24,0.08)]">
          <h1 className="display text-4xl md:text-5xl font-semibold">Media</h1>
          <p className="mt-2 max-w-3xl text-lg text-[#4b5163]">
            An archive of past media projects in Graphic Design, Merchandise, Zines, and 3D Models.
          </p>
        </div>
      </section>

      <div className="space-y-10">
        {mediaSections.map((section) => (
          <section key={section.title} className="media-wrapper">
            <div className="media-section space-y-6">
              <div className="space-y-1">
                <h2 className="display text-3xl font-semibold">{section.title}</h2>
              </div>
              <div
                className={`media-grid ${
                  section.title === "Video Editing" ? "media-grid--videos" : ""
                }`.trim()}
              >
                {section.items.map((item, index) => {
                  const sizeClass =
                    index % 5 === 0 ? "tall" : index % 3 === 0 ? "wide" : "";
                  const label = typeof item === "string" ? item : item.label;
                  const src = typeof item === "string" ? null : item.src;
                  const link = typeof item === "string" ? null : item.link;
                  const isVideo =
                    typeof item === "string" ? false : item.kind === "video";
                  return (
                    <div key={label} className={`media-art ${sizeClass}`.trim()}>
                      {src && isVideo ? (
                        <iframe
                          className="media-video"
                          src={src}
                          title={label}
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : src && link ? (
                        <a
                          className="media-thumb"
                          href={link}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open ${label}`}
                        >
                          <Image src={src} alt={label} width={1200} height={900} />
                        </a>
                      ) : src ? (
                        <button
                          type="button"
                          className="media-thumb"
                          onClick={() => setActiveImage({ src, label })}
                          aria-label={`Expand ${label}`}
                        >
                          <Image src={src} alt={label} width={1200} height={900} />
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
              <Image
                src={activeImage.src}
                alt={activeImage.label}
                width={1600}
                height={1200}
              />
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
