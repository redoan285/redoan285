import ResumeContent from "./ResumeContent";

export const metadata = {
  title: "Professional Resume | RM Redoan",
  description: "View the professional resume of RM Redoan. MERN Stack Developer and CSE Student with expertise in React, Next.js, Node.js, and modern software engineering practices.",
  keywords: [
    "RM Redoan resume", "RM Redoan CV", "full stack developer resume",
    "software engineer CV Bangladesh", "developer portfolio resume"
  ],
  openGraph: {
    title: "Professional Resume | RM Redoan",
    description: "Detailed professional background, technical skills, and experience of RM Redoan.",
    url: "https://my-portfolio-lake-chi-f0cf9xubd5.vercel.app/resume",
    type: "website",
  },
  alternates: {
    canonical: "https://my-portfolio-lake-chi-f0cf9xubd5.vercel.app/resume",
  },
};

export default function ResumePage() {
  return <ResumeContent />;
}
