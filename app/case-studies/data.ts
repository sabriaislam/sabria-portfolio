export type CaseStudy = {
  slug: string;
  title: string;
  focus: string;
  summary: string;
  tags: string[];
  timeline: string;
  roles: string[];
  skills: string[];
  tools: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "adapt-accessible-fashion",
    title: "ADAPT Accessible Fashion",
    focus: "K-5 curriculum redesign",
    summary:
      "A playful set of math pathways that help students explore ideas through movement, stories, and quick wins.",
    tags: ["Curriculum", "UX", "Prototype"],
    timeline: "10 weeks",
    roles: ["Product Designer", "Learning Designer"],
    skills: ["Curriculum design", "Prototyping", "Usability testing"],
    tools: ["Figma", "FigJam", "Google Slides"],
  },
  {
    slug: "aminas-first-day",
    title: "Amina's First Day",
    focus: "SEL game-based learning",
    summary:
      "A game-driven SEL experience that turns classroom rituals into quests, rewards, and collaborative reflection.",
    tags: ["Game Design", "Story", "Illustration"],
    timeline: "8 weeks",
    roles: ["Experience Designer", "Illustrator"],
    skills: ["Game mechanics", "Narrative design", "Visual design"],
    tools: ["Figma", "Procreate", "After Effects"],
  },
  {
    slug: "nyu-silver-icon-redesign",
    title: "NYU Silver Icon Redesign",
    focus: "Resource discovery experience",
    summary:
      "A teacher-facing hub that reduces search fatigue and surfaces the right lesson assets at the right moment.",
    tags: ["Research", "UI", "Content"],
    timeline: "12 weeks",
    roles: ["UX Researcher", "UI Designer"],
    skills: ["Interviews", "Information architecture", "Design systems"],
    tools: ["Figma", "Notion", "Miro"],
  },
  {
    slug: "seven-to-eleven",
    title: "Seven to Eleven",
    focus: "Hands-on lab kits",
    summary:
      "A kit system that blends tactile experiments with clear facilitation cues so science feels inviting, not intimidating.",
    tags: ["Physical", "Brand", "Packaging"],
    timeline: "6 weeks",
    roles: ["Brand Designer", "Packaging Designer"],
    skills: ["Brand strategy", "Print design", "Prototyping"],
    tools: ["Illustrator", "Photoshop", "InDesign"],
  },
  {
    slug: "dbms-airline-system",
    title: "DBMS Airline System",
    focus: "Video-first learning moments",
    summary:
      "Short-form video experiments designed to hook attention in the first five seconds, then transition into active practice.",
    tags: ["Video", "Motion", "Story"],
    timeline: "7 weeks",
    roles: ["Creative Director", "Video Editor"],
    skills: ["Storyboarding", "Editing", "Motion design"],
    tools: ["Premiere Pro", "After Effects", "Audition"],
  },
  {
    slug: "van-alen-public-art-map-installation",
    title: "Van Alen | Public Art Map Installation",
    focus: "UX system for learning signals",
    summary:
      "A UX framework that helps educators notice patterns in student progress without turning classrooms into dashboards.",
    tags: ["UX", "Systems", "Research"],
    timeline: "9 weeks",
    roles: ["Product Designer", "Research Lead"],
    skills: ["Service mapping", "Prototyping", "Facilitation"],
    tools: ["Figma", "FigJam", "Notion"],
  },
];
