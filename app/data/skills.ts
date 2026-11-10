export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      "HTML & CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Redux Toolkit",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: ["Python", "Django", "Flask", "REST APIs", "Authentication"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "SQL", "pgAdmin"],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "VS Code",
      "Postman",
      "Vercel",
      "Figma",
    ],
  },
];
