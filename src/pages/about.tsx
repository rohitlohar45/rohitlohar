import Image from "next/image";
import { NextSeo } from "next-seo";
import FadeUp from "@/animation/FadeUp";
import { AnimatePresence } from "framer-motion";
import ShowCaseList from "@/components/ShowCaseList";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import avatar from "@/public/images/avatar.png";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { ACHIEVEMENTS } from "@/data/achievements";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Rohit Lohar | React and Frontend Developer"
        description="Learn more about Rohit Lohar, a dedicated React and Frontend Developer with 2 years of experience. Discover the journey, skills, and passion that drive me to create innovative and user-friendly web solutions."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Learn About Rohit Lohar - React and Frontend Developer",
          description:
            "Dive into the story of Rohit Lohar, a React and Frontend Developer. Uncover the experiences, skills, and passion that fuel a commitment to delivering exceptional web solutions.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Rohit Lohar - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "About Me, React Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Professional Journey, Skills, Passion for Web Development",
          },
        ]}
      />
      <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-20 text-center sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:text-left">
        <div className="w-full sm:w-1/2 md:w-2/3 lg:inline-block lg:h-full lg:w-1/2">
          <AnimatePresence>
            <FadeUp key="hero-image" duration={0.6}>
              <Image
                src={avatar}
                width={100}
                height={100}
                className="h-auto w-full px-0 xl:px-16"
                alt="hero image"
                unoptimized
              />
            </FadeUp>
          </AnimatePresence>
        </div>
        <div className="sm:1/2 mt-10 w-full lg:w-1/2">
          <AnimatePresence>
            <FadeUp key="title-greeting" duration={0.6}>
              <h1 className="text-6xl font-bold">Hi, I&apos;m Rohit Lohar</h1>
            </FadeUp>
            <FadeUp key="description-1" duration={0.6} delay={0.2}>
              <p className="mt-8 text-lg font-medium">
                I&apos;m a passionate React and Backend Developer with a knack
                for turning vision into reality with code. Whether I&apos;m
                crafting frontend components or architecting backend systems, I
                bring a commitment to excellence and problem-solving to every
                project.
              </p>
            </FadeUp>
            <FadeUp key="description-2" duration={0.6} delay={0.4}>
              <p className="mt-8 text-lg font-medium">
                Explore my latest projects showcasing my expertise in React,
                Next.js, JavaScript, TypeScript, Node.js, and backend
                development. From building interactive user interfaces to
                optimizing server performance, I excel in creating efficient and
                scalable solutions that meet project objectives.
              </p>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
      <ShowCaseList title="Experience" details={EXPERIENCE} />
      <ShowCaseList title="Achievements" details={ACHIEVEMENTS} />
      <ShowCaseList title="Education" details={EDUCATION} />
    </>
  );
}
