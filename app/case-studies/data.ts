export type CaseStudy = {
  slug: string;
  title: string;
  thumbnail: string;
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
    slug: "golpo",
    title: "Golpo",
    thumbnail: "/thumbnails/golpo.jpg",
    focus: "Photobooth installation created to share stories",
    summary:
      "Golpo is a physical installation that invites strangers to record and hear personal stories — a space for the kind of listening that exists between languages and across generations.",
    tags: ["Installation", "Physical Computing", "Sound"],
    timeline: "1 semester",
    roles: ["Designer", "Fabricator", "Developer"],
    skills: ["Physical computing", "Interaction design", "Fabrication"],
    tools: ["Arduino", "Laser cutter", "Figma"],
  },
  {
    slug: "cookbook-website",
    title: "Creative Computing Cookbook",
    thumbnail: "/thumbnails/cookbook.png",
    focus: "K-12 STEM Education",
    summary:
      "A platform for learning physical computing fundamentals and discovering creative computing projects",
    tags: ["UX", "Web", "Content"],
    timeline: "6 months",
    roles: ["Product Designer", "Educational Content Creator", "Interviewer"],
    skills: ["UX research", "Prototyping", "Content writing","Video Editing"],
    tools: ["Figma", "Adobe Premiere Pro"],
  },
  {
    slug: "aminas-first-day",
    title: "Amina's First Day",
    thumbnail: "/thumbnails/amina.png",
    focus: "Emotion-aware storytelling for cultural learning",
    summary:
      "Amina's First Day is an interactive digital storybook that uses affective computing to help young students recognize emotions, build empathy, and engage with social-emotional learning through culturally grounded storytelling.",
    tags: ["Story", "Facial Detection", "JavaScript"],
    timeline: "8 weeks",
    roles: ["Experience Designer", "Illustrator"],
    skills: ["Game mechanics", "Narrative design", "Visual design"],
    tools: ["Figma", "Procreate", "After Effects"],
  },
  {
    slug: "nyu-silver-icon-redesign",
    title: "Silver Core Values",
    thumbnail: "/thumbnails/silver.png",
    focus: "Values storytelling and brand system",
    summary:
      "Redesigned NYU Silver's core icons to better reflect school's values",
    tags: ["Branding", "Graphic Design"],
    timeline: "3 weeks",
    roles: ["Brand Designer", "Art Director"],
    skills: ["Visual systems", "Workshop facilitation", "Design direction"],
    tools: ["Adobe Illustrator", "Canva"],
  },
];
