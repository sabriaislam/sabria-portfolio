const strengths = [
  "Learning research",
  "Visual storytelling",
  "Playful prototyping",
  "Accessibility-first design",
];

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="surface grid gap-8 bg-white/80 p-10 shadow-[0_20px_60px_rgba(17,17,24,0.08)] md:grid-cols-[1fr_0.9fr]">
        <div className="space-y-4">
          <h1 className="display text-4xl md:text-5xl">
            Hi, I&apos;m Sabria.
          </h1>
          <p className="text-lg text-[#4b5163]">
            I&apos;m an aspiring designer in K-12 edtech who loves crafting
            colorful, student-centered experiences. I care about how visuals,
            storytelling, and interaction design can make learning feel
            welcoming, curious, and empowering.
          </p>
          <div className="flex flex-wrap gap-2">
            {strengths.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          <div className="placeholder h-44" />
          <div className="grid grid-cols-2 gap-4">
            <div className="placeholder h-28" />
            <div className="placeholder h-28" />
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
        <div className="card space-y-4 p-6">
          <h2 className="display text-2xl">My design values</h2>
          <p className="text-sm text-[#4b5163]">
            Learning should feel inclusive, brave, and imaginative. I prioritize
            feedback loops with educators, rapid prototyping with students, and
            designs that celebrate different ways of understanding.
          </p>
        </div>
        <div className="card space-y-4 p-6">
          <h3 className="display text-2xl">Currently inspired by</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="placeholder h-24" />
            <div className="placeholder h-24" />
            <div className="placeholder h-24" />
          </div>
        </div>
      </section>
    </div>
  );
}
