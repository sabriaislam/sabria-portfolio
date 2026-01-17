const caseStudies = [
  {
    title: "Playful Math Pathways",
    focus: "K-5 curriculum redesign",
    tags: ["Curriculum", "UX", "Prototype"],
  },
  {
    title: "Kindness Quest",
    focus: "SEL game-based learning",
    tags: ["Game Design", "Story", "Illustration"],
  },
  {
    title: "Brightline Teacher Hub",
    focus: "Resource discovery experience",
    tags: ["Research", "UI", "Content"],
  },
  {
    title: "Science Studio",
    focus: "Hands-on lab kits",
    tags: ["Physical", "Brand", "Packaging"],
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="surface grid gap-10 bg-white/70 p-10 shadow-[0_20px_60px_rgba(17,17,24,0.08)] backdrop-blur md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <h1 className="display text-4xl leading-tight text-[#111118] md:text-5xl">
            Building joyful learning moments for curious classrooms.
          </h1>
          <p className="text-lg text-[#4b5163]">
            I craft playful, research-driven experiences that help students feel
            brave, teachers feel supported, and learning feel alive.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-full bg-[#111118] px-6 py-3 text-sm font-semibold text-white">
              View case studies
            </button>
            <button className="rounded-full border border-[#111118]/15 px-6 py-3 text-sm font-semibold text-[#111118]">
              Let&apos;s collaborate
            </button>
          </div>
        </div>
        <div className="flower-cluster" aria-hidden="true">
          <img className="flower flower-blue" src="/Blue.svg" alt="" />
          <img className="flower flower-green" src="/Green.svg" alt="" />
          <img className="flower flower-orange" src="/Orange.svg" alt="" />
          <img className="flower flower-pink" src="/Pink.svg" alt="" />
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="display text-3xl">Case Studies</h2>
            <p className="text-[#4b5163]">
              Four deep dives into design for learning.
            </p>
          </div>
          <span className="chip">Updated 2024</span>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <article key={study.title} className="card space-y-4 p-6">
              <div className="placeholder h-40 w-full" />
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
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
        <div className="card flex flex-col gap-4 p-6">
          <h3 className="display text-2xl">What I&apos;m exploring</h3>
          <p className="text-sm text-[#4b5163]">
            Tactile learning artifacts, teacher-facing dashboards, and short-form
            student videos that spark curiosity.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="chip">Playful motion</span>
            <span className="chip">Story-based learning</span>
            <span className="chip">Equity in access</span>
          </div>
        </div>
        <div className="card grid gap-4 p-6 md:grid-cols-2">
          <div className="placeholder h-32" />
          <div className="placeholder h-32" />
          <div className="placeholder h-32" />
          <div className="placeholder h-32" />
        </div>
      </section>
    </div>
  );
}
