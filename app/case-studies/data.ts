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
    slug: "cookbook-website",
    title: "Creative Computing Cookboook",
    thumbnail: "/thumbnails/cookbook.png",
    focus: "Online STEM resource hub for middle & high school students",
    summary:
      "An educational resource hub for learning physical computing concepts and exploring project inspiration",
    tags: ["UX", "Web", "Content"],
    timeline: "12 weeks",
    roles: ["Product Designer", "Educational Content Creator"],
    skills: ["UX research", "Prototyping", "Content writing"],
    tools: ["Figma", "Adobe Premiere Pro"],
  },
  {
    slug: "aminas-first-day",
    title: "Amina's First Day",
    thumbnail: "/thumbnails/amina.png",
    focus: "Emotion-aware storytelling for empathy and cultural learning",
    summary:
      "Amina’s First Day is an interactive digital storybook that uses affective computing to help young students recognize emotions, build empathy, and engage with social-emotional learning through culturally grounded storytelling.",
    tags: ["Story", "Facial Detection", "JavaScript"],
    timeline: "8 weeks",
    roles: ["Experience Designer", "Illustrator"],
    skills: ["Game mechanics", "Narrative design", "Visual design"],
    tools: ["Figma", "Procreate", "After Effects"],
  },
  {
    slug: "adapt-accessible-fashion",
    title: "ADAPT Accessible Fashion",
    thumbnail: "/thumbnails/adapt.png",
    focus: "Co-designed adaptive costumes for theater performance",
    summary:
      "Co-create an accessible costume garment for an actor with physical disability",
    tags: ["Accessibility", "Sustainability", "Textile"],
    timeline: "10 weeks",
    roles: ["Product Designer", "Learning Designer"],
    skills: ["Sewing", "Prototyping", "Usability testing"],
    tools: ["Upcycle materials", "sewable magnets"],
  },
  {
    slug: "silver-core-values",
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
