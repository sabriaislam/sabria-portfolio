type CaseStudyMetaCardProps = {
  timeline: string;
  roles: string[];
  skills: string[];
  tools: string[];
};

export default function CaseStudyMetaCard({
  timeline,
  roles,
  skills,
  tools,
}: CaseStudyMetaCardProps) {
  return (
    <section className="card grid gap-6 p-6 md:grid-cols-4">
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#4b5163]">
          Timeline
        </p>
        <p className="text-base text-[#111118]">{timeline}</p>
      </div>
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#4b5163]">
          Roles
        </p>
        <ul className="space-y-1 text-sm text-[#111118]">
          {roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
      </div>
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#4b5163]">
          Skills
        </p>
        <ul className="space-y-1 text-sm text-[#111118]">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#4b5163]">
          Tools
        </p>
        <ul className="space-y-1 text-sm text-[#111118]">
          {tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

