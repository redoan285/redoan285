import ProjectsContent from "./ProjectsContent";

export const metadata = {
  title: "Projects & Masterpieces | RM Redoan",
  description: "Explore the portfolio of RM Redoan, featuring high-performance web applications, full-stack projects, and innovative digital solutions built with Next.js, React, and Node.js.",
  keywords: [
    "RM Redoan projects", "RM Redoan portfolio", "web development projects",
    "Next.js projects", "React projects", "full stack projects Bangladesh",
    "software engineering portfolio", "full stack developer projects",
    "frontend developer portfolio", "backend developer projects",
    "hiring full stack developer portfolio", "frond end developer showcase"
  ],
  openGraph: {
    title: "Projects & Masterpieces | RM Redoan",
    description: "A showcase of innovative web solutions and full-stack projects by RM Redoan.",
    url: "https://my-portfolio-lake-chi-f0cf9xubd5.vercel.app/projects",
    type: "website",
  },
  alternates: {
    canonical: "https://my-portfolio-lake-chi-f0cf9xubd5.vercel.app/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
