export type Category = "fullstack" | "frontend" | "backend";

export type Project = {
  title: string;
  label: string;
  category: Category;
  description: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
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
