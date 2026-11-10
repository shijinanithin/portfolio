export type Category = "fullstack" | "frontend" | "backend";

export type Project = {
  title: string;
  label: string;
  category: Category;
  description: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "E-commerce Store",
    label: "Full-stack",
    category: "fullstack",
    description:
      "Product search, user sign-up and login, profile and a session-based cart, with an admin panel to manage products.",
    tags: ["Django", "PostgreSQL", "Bootstrap"],
  },
  {
    title: "Next.js Store",
    label: "Frontend",
    category: "frontend",
    description:
      "Six-page store with product detail and cart, built with both App Router and Pages Router and deployed on Vercel.",
    tags: ["Next.js", "React", "Vercel"],
  },
  {
    title: "Products REST API",
    label: "Backend",
    category: "backend",
    description:
      "15 CRUD endpoints for products, categories and brands, structured with the Repository pattern and tested in Postman.",
    tags: ["Flask", "PostgreSQL", "REST"],
  },
  {
    title: "Admin Dashboard",
    label: "Frontend · Dashboard",
    category: "frontend",
    description:
      "Login, protected routes and full product and category management connected to a live API.",
    tags: ["React", "Vite", "Material UI"],
  },
  {
    title: "Redux Shopping App",
    label: "Frontend",
    category: "frontend",
    description:
      "Amazon-style shop with cart and product state managed in a central Redux Toolkit store.",
    tags: ["React", "Redux Toolkit"],
  },
];
export type FeaturedProject = Project & {
  role: string;
  team: string;
  status: string;
  highlights: string[];
};

export const featuredProject: FeaturedProject = {
  title: "CRM Web Application",
  label: "Featured · Live company project",
  category: "frontend",
  description:
    "A CRM that helps a sales team track leads, companies, deals and support tickets in one place.",
  tags: ["React", "TypeScript", "Material UI", "React Context"],
  role: "Team lead",
  team: "5 developers",
  status: "Frontend complete",
  highlights: [
    "Leads, companies, deals and tickets modules",
    "Sales dashboard with charts and team performance",
    "Set up the project, reviewed merge requests and planned tasks",
    "Django, PostgreSQL and JWT backend in progress",
  ],
};
