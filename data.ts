import {
  faServer,
  faDesktop,
  faVial,
  faPaintBrush,
  faRocket,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";

import { IProjectCard, ISkillCard } from "./interfaces/interfaces";

export const aboutText: string = `I am from Buenos Aires, Argentina. Proactive and motivated, wanting to
          grow in the world of development and as a person. I have 2+ years of
          experience in Web Development and I'm a huge fan of JavaScript
          and its frameworks.`;

export const skills: ISkillCard[] = [
  {
    icon: faDesktop,
    title: "Frontend Development",
    subtitle:
      "Build a scalable and fully tested SPA using React.js, Next.js, React Native or Angular.",
  },
  {
    icon: faServer,
    title: "Backend Development",
    subtitle:
      "Handle server, REST API, database, authentication using Node.js with Express.js and MongoDB.",
  },
  {
    icon: faVial,
    title: "Testing",
    subtitle:
      "Code quality, unit, integration and E2E tests using Jenkins, Jest, Testing Library, Cypress, Jasmin, Karma.",
  },
  {
    icon: faRocket,
    title: "Deployment",
    subtitle:
      "Continuous and automated Testing in Agile and Continuous Integration/Delivery environments.",
  },
  {
    icon: faPaintBrush,
    title: "UI/UX Designs",
    subtitle: "Build designed interfaces in Figma and Framer.",
  },
  {
    icon: faCodeBranch,
    title: "Best Practices",
    subtitle:
      "Used to work following the SOLID principles and the FLUX pattern.",
  },
];

export const projects: IProjectCard[] = [
  {
    name: "Memories",
    imagePath: "/images/memories.jpg",
  },
];
