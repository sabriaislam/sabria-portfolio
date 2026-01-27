type CaseStudyHeaderProps = {
  title: string;
  focus: string;
  summary: string;
};

export default function CaseStudyHeader({
  title,
  focus,
  summary,
}: CaseStudyHeaderProps) {
  return (
    <section className="space-y-3">
      <h1 className="display text-4xl md:text-5xl">{title}</h1>
      <p className="text-lg text-[#4b5163]">{focus}</p>
      <p className="max-w-3xl text-base text-[#4b5163]">{summary}</p>
    </section>
  );
}

