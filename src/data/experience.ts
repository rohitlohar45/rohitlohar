import { TShowCaseListDetatils } from "@/components/ShowCaseList";

export const EXPERIENCE: TShowCaseListDetatils[] = [
  {
    title: "SDE Intern",
    organisation: {
      name: "Diamanti",
      href: "https://diamanti.com/",
    },
    date: "Oct 2023 - Present",
    location: "Remote",
    description: `
      Proficient in deploying, managing, and scaling applications using Kubernetes orchestration.
      Experience in containerization with Docker, creating Docker images, and managing containerized applications.
      Configured and optimized VM virtual machines for various workloads.
      Managed storage solutions and implemented networking configurations for Kubernetes clusters.
    `,
  },
  {
    title: "SDE Intern",
    organisation: {
      name: "MyMegaMinds",
      href: "https://mymegaminds.com/",
    },
    date: "Feb 2023 - Sep 2023",
    location: "Remote",
    description: `
      Implemented a chat application with functionalities like reacting to messages, forwarding messages, attachments, and the ability to delete messages.
      Created a quiz section integrated with the company’s user authentication system, allowing users to create, take, and review quizzes.
      Worked on a React Native App for Android and iOS devices, implementing the same features as the website.
      Gained experience with VPS as hosted the server.
    `,
  },
  {
    title: "Web Developer Intern",
    organisation: {
      name: "NoQs Digital",
      href: "https://noqsdigital.com/",
    },
    date: "Jul 2022 - Oct 2022",
    location: "Remote",
    description: `
      Developed an app that accepts a CSV file, extracts data, and generates a string, which when added to XML, produces the desired output.
      Responsibilities included working on WordPress and JQuery to create beautiful and engaging websites.
    `,
  },
];
