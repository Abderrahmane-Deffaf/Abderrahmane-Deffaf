import { ProjectProps } from "@/components/project";
import khedamniDashboard from "@/assets/khedamni-dashboard.png";
import khedamniLanding from "@/assets/khedamni-landing.png";
import falcoLanding from "@/assets/falco-landing.png";
import inoobyte from "@/assets/innobyte.png";
import todo from "@/assets/todo.png";
import ELearningLanding from "@/assets/e-learning-landing.png";
import ELearning from "@/assets/e-learning.png";
import dzMohami from "@/assets/dz-mohami.png";

export const projects: ProjectProps[] = [
  {
    type: "Freelance",
    name: "Khedamni Dashboard",
    description:
      "Khedamni is new startup that relate users with qualified artisans, the dashboard used to manage the mobile app from managing users, handymens to managing categories, plans, payments ...etc",
    tech: ["React", "TypeScript", "Zustand", "TailwindCSS", "Shadcn", "Vite"],
    image: khedamniDashboard,
    alt: "Screenshot of the App related to the dashboard",
  },
  {
    type: "Freelance",
    name: "Khedamni Landing Page",
    description: `This is the landing page of Khedamni App build to present the
                  product and also, used htmlFor the preinscription, contain
                  also the terms and confitions. Support 2 languages: Arabic and
                  French, and responsive htmlFor both mobile and laptops. you
                  can check it :<a href="https://khedamni.com/fr">here</a>`,
    tech: ["NextJs", "React Hook Form", "TailwindCSS", "Next Intel"],
    image: khedamniLanding,
    alt: "Screenshot of khedamni landing page",
  },
  {
    type: "Startup",
    name: "Falcospy Landing",
    description: ` A landing page htmlFor preinscription and product
                  presentation, Falcospy is SaaS revolutionizing e-commerce
                  space in Algeria, Falcospy is compititor analysis tool and
                  price monitoring, used to find new good products and analize
                  them. Multi-language it support: Arabic and French. Responsive
                  htmlFor all devices.`,
    tech: [
      "NextJs",
      "React Hook Form",
      "TailwindCSS",
      "Next Intel",
      "Shadcn",
      "NodeJs",
      "ExpressJs",
      "Prisma",
    ],
    image: falcoLanding,
    alt: "Screenshot of falcosyp landing page.",
  },
  {
    type: "Club Project",
    name: "Innobyte",
    description: `At InnoByte, we live htmlFor community, learning,
                  problem-solving, and the creation of extraordinary things.
                  Join us to explore the limitless possibilities, connect with
                  like-minded enthusiasts, and shape the future. Hosted by
                  <a href="https://www.linkedin.com/company/bytecraft-club/posts/?feedView=all">
                    ByteCraft
                  </a>
                  and <a href="https://innobyte.vercel.app/">here</a> is link
                  when you can see the website htmlFor the registrations.`,
    tech: ["ReactJs", "CSS"],
    image: inoobyte,
    alt: "Screenshot of Inoobyte page",
  },
  {
    type: "Pesonnel",
    name: "Todo App",
    description: `A todo app using next js and prisma along with postgresql db,
                  the app features: see all the todos, add a todo, and completed
                  or incomplete a todo. So if you wanna add your todo now visit
                  the website
                  <a href="https:/todo-nine-flame-67.vercel.app/">here</a>`,
    tech: ["NextJs", "TailwindCSS", "Prisma"],
    image: todo,
    alt: "Screenshot of todo app.",
  },
  {
    type: "School Project",
    name: "E-learning Landing",
    description: `This is school project htmlFor the 2nd year, at
                  <a href="https://estin.dz/">ESIN</a> where we were a team of 5
                  personnes, responsible htmlFor building a real world project,
                  that satisfie a client creatira, we choosed ELITE school
                  htmlFor english, and they were interesseted in building an
                  e-learning plathtmlForm htmlFor their students and this is the
                  landing page htmlFor it. You can check the repo of this
                  project
                  <a href="https://github.com/LenaSaidi/E-LEARNING-PlathtmlForm-project-2cp">
                    here
                  </a>`,
    tech: ["ReactJs", "React Router Dom", "Vite", "TailwindCSS", "Javascript"],
    image: ELearningLanding,
    alt: "Screenshot of e-learning landing page",
  },
  {
    type: "School Project",
    name: "E-learning Main App",
    description: `This is the dashboard of the app, like we have three different
                  users, an Admin, Teacher, and Student. The role would be
                  specifed when the user logs in. Also you can check htmlFor the
                  repo
                  <a href="https://github.com/LenaSaidi/E-LEARNING-PlathtmlForm-project-2cp">
                    here
                  </a>`,
    tech: ["ReactJs", "React Router Dom", "Vite", "TailwindCSS", "Javascript"],
    image: ELearning,
    alt: "Screenshot of e-learning app.",
  },
  {
    type: "School Project",
    name: "Dz Mohami",
    description: `This is school project htmlFor the 3rd year, at
                  <a href="https://estin.dz/">ESIN</a> where we were a team of 5
                  personnes, responsible htmlFor building a plathtmlForm htmlFor
                  lawyers where lawyers can present their work, and clients
                  could book a lawyer. This app has 3 parts: Admin, Laywer and
                  Client. It includes google auth, and db seed with data from
                  this
                  <a href="https://avocatalgerien.com/">Website</a> scraped
                  using scrapy spider. You can check the repo
                  <a href="https://github.com/Abderrahmane-Deffaf/dz_mohami_front">
                    here
                  </a>`,
    tech: [
      "ReactJs",
      "React Router Dom",
      "Vite",
      "TailwindCSS",
      "Javascript",
      "Shadcn",
    ],
    image: dzMohami,
    alt: "Screenshot of dz mohami app",
  },
];

export const skills = [
  {
    title: "Programming Langugaes",
    skills: ["JavaScript", "TypeScript", "Python", "C"],
  },
  {
    title: "Frontend Technologies",
    skills: [
      "HTML5",
      "CSS3",
      "TailwindCSS",
      "ReactJs",
      "NextJs",
      "Redux Tool Kit",
      "Zustand",
      "TanStack",
    ],
  },
  {
    title: "Backend Technologies",
    skills: ["NodeJs", "ExpressJs"],
  },
  {
    title: "DataBases",
    skills: ["MySQL", "PostgreSQL", "Prisma"],
  },
  {
    title: "Hosting",
    skills: ["Hostinger", "Digital Ocean", "Cpanel"],
  },
  {
    title: "Version Controls",
    skills: ["Git", "Github", "Github Actions"],
  },
  {
    title: "Tools",
    skills: ["Docker", "Playwright", "K8s", "VsCode", "Linux"],
  },
];
