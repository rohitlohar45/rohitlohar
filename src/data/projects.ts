import { ProjectCardProps } from "@/components/ProjectCard";
import { ProjectShowcaseListProps } from "@/components/ProjectShowcaseList";

export const PROJECT_SHOWCASE: ProjectShowcaseListProps[] = [
  {
    index: 0,
    title: "DistCache",
    href: "/projects",
    tags: [
      "Go",
      "Distributed Systems",
      "Consistent Hashing",
      "Fault Tolerance",
    ],
    image: {
      LIGHT: "/images/projects/distcache.webp",
      DARK: "/images/projects/distcache.webp",
    },
  },
  {
    index: 1,
    title: "TalkSync",
    href: "/projects",
    tags: [
      "ReactJS",
      "Typescript",
      "WebRTC",
      "Socketio",
      "Redux",
      "TailwindCSS",
      "NodeJS",
      "MongoDB",
    ],
    image: {
      LIGHT: "/images/projects/whatsapp.png",
      DARK: "/images/projects/whatsapp.png",
    },
  },
  {
    index: 2,
    title: "E-commerce",
    href: "/projects",
    tags: ["ReactJS", "TailwindCSS", "Redux", "NodeJS", "MongoDB", "Vercel"],
    image: {
      LIGHT: "/images/projects/e-commerce.png",
      DARK: "/images/projects/e-commerce.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "DistCache",
    favicon: "/icons/project.ico",
    imageUrl: [
      "/images/projects/distcache.webp",
      "/images/projects/distcache.webp",
    ],
    description:
      "DistCache is a distributed caching library for Go applications, providing fault tolerance and scalability. It uses consistent hashing to distribute data evenly across cache nodes, ensuring high availability and load balancing.",
    sourceCodeHref: "https://github.com/rohitlohar45/distcache",
    liveWebsiteHref: "#",
  },
  {
    name: "E-commerce",
    favicon: "/icons/project.ico",
    imageUrl: [
      "/images/projects/e-commerce.png",
      "/images/projects/e-commerce.png",
    ],
    description:
      "A Full Stack E-commerce platform built with ReactJS, TailwindCSS, Redux, NodeJS, MongoDB, Vercel. It is a fully functional e-commerce platform with features like cart, filtering, checkout, payment, etc.",
    sourceCodeHref: "https://github.com/rohitlohar45/e-commerce-backend",
    liveWebsiteHref: "https://e-commerce-backend-zeta-six.vercel.app/",
  },
  {
    name: "TalkSync",
    favicon: "/icons/project.ico",
    imageUrl: [
      "/images/projects/whatsapp.svg",
      "/images/projects/whatsapp.png",
    ],
    description:
      "A real time chat application with video call feature. Group chat, private chat, video call, etc. are some of the features of this application. It is built with ReactJS, NodeJS, MongoDB, Socketio, WebRTC, Redux, TailwindCSS.",
    sourceCodeHref: "https://github.com/rohitlohar45/whatsapp-client",
    liveWebsiteHref: "https://whatsapp-client-r6au.onrender.com",
  },
  {
    name: "Algorithm Visualizer",
    favicon: "/icons/project.ico",
    imageUrl: [
      "/images/projects/algorithm-viusalizer.svg",
      "/images/projects/algorithm-viusalizer.svg",
    ],
    description:
      "A web application that allows users to visualize the process of sorting algorithms such as Bubble Sort, Merge Sort, Quick Sort, and pathfinding algorithms such as Dijkstra’s Algorithm and A* Algorithm",
    sourceCodeHref: "https://github.com/rohitlohar45/algorithm-visulaizer",
    liveWebsiteHref: "https://algorithm-visulaizer.vercel.app/",
  },
  {
    name: "Coderigade",
    favicon: "/icons/project.ico",
    imageUrl: [
      "/images/projects/coderigade.svg",
      "/images/projects/coderigade.svg",
    ],
    description:
      "A real time code editor with live preview. It is built with ReactJS, NodeJS, Socketio.",
    sourceCodeHref: "https://github.com/rohitlohar45/coderigade",
    liveWebsiteHref: "https://coderigade.netlify.app/",
  },
  {
    name: "E-commerce using Context API",
    favicon: "/icons/project.ico",
    imageUrl: [
      "/images/projects/e-commerce-context-api.svg",
      "/images/projects/e-commerce-context-api.svg",
    ],
    description:
      "A ReactJs E-commerce application using Context API. It is a fully functional e-commerce platform with features like cart, filtering, checkout, etc.",
    sourceCodeHref: "https://github.com/rohitlohar45/e-commerce-context-api",
    liveWebsiteHref: "https://e-commerce-context-api.vercel.app/",
  },
];
