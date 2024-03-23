import { ContactForm } from "@/components/ContactForm";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center gap-6 bg-gradient-to-b from-teal-500 to-teal-600 px-6 py-8 sm:px-8 sm:py-12 lg:px-12"
    >
      <div className="max-w-3xl text-center">
        <h2 className="mb-2 text-xl font-bold text-white sm:mb-4 sm:text-2xl lg:text-3xl">
          Get in Touch
        </h2>
        <a
          href={`mailto:${siteMetadata.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4 inline-block text-sm font-semibold text-white underline sm:text-base lg:text-lg"
        >
          {siteMetadata.email}
        </a>
        <ContactForm />
      </div>
      <div className="flex items-center justify-center gap-6">
        <motion.a
          href={siteMetadata.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="text-white transition-colors duration-300 hover:text-teal-300"
        >
          <GithubIcon className="h-6 w-6 sm:h-8 sm:w-8" />
        </motion.a>
        <motion.a
          href={siteMetadata.twitter}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="text-white transition-colors duration-300 hover:text-teal-300"
        >
          <TwitterIcon className="h-6 w-6 sm:h-8 sm:w-8" />
        </motion.a>
        <motion.a
          href={siteMetadata.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="text-white transition-colors duration-300 hover:text-teal-300"
        >
          <LinkedinIcon className="h-6 w-6 sm:h-8 sm:w-8" />
        </motion.a>
      </div>
      <p className="mt-4 text-xs text-white sm:text-sm">
        © {new Date().getFullYear()} Rohit Lohar
      </p>
    </motion.footer>
  );
}
