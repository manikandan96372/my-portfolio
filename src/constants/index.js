import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  docker,
  mysql,
  psql,
  aws,
  nestjs
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack Engineer",
    icon: web,
  },
  {
    title: "Backend Engineer",
    icon: backend,
  },
  {
    title: "Freelance frontend developer",
    icon: mobile,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: psql,
  },
  {
    name: "Nest JS",
    icon: nestjs,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "docker",
    icon: docker,
  }
];

const experiences = [
  {
    title: "Product Engineer",
    company_name: "Codingmart Technologies",
    iconBg: "#383E56",
    date: "Januray 2019 - December 2020",
    points: [
      "Contributed towards developing an online doctor appointment booking app.",
      "Developing a seller portal for a leading Indian fashion & beauty e-commerce company",
      "Developing a centralized auth system for a leading Indian fashion & beauty e-commerce company."
    ],
  },
  {
    title: "Freelance Frontend Developer",
    company_name: "Heyschool",
    iconBg: "#E6DEDD",
    date: "December 2019 - May 2020",
    points: [
      "Contributed towards developing the frontend modules for a school management system."
    ],
  },
  {
    title: "Software Development Consultant",
    company_name: "Neudesic Technologies",
    iconBg: "#383E56",
    date: "Jan 2021 - July 2021",
    points: [
      "Contributed towards building an OKR management system for corporate organizations",
      "Collaborating with cross-functional teams and stakeholders for designing the backend system of the product."
    ],
  },
  {
    title: "Lead Software Engineer",
    company_name: "Tricog Health India",
    iconBg: "#E6DEDD",
    date: "August 2021 - Present",
    points: [
      "Contributed towards building the upgraded version of a workflow manager that determines the workflow of the complete product",
      "Developing and maintaining the admin panel for the product which is used by the internal teams",
      "Developing and maintaining a national STEMI registry application which is used by different state governments of India",
      "Contributed towards making the product HIPAA(The Health Insurance Portability and Accountability Act) compliant",
    ],
  },
];

const testimonials = [];

const projects = [];

export { services, technologies, experiences, testimonials, projects };
