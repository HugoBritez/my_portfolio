import ContactForm from "@/components/Contactpage/ContactForm";
import { DottedBackground } from "../components/DottedBackground";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <>
      <ContactHeroSection />
      <ContactForm />
      <DottedBackground />
    </>
  );
};

export default ContactPage;

const ContactHeroSection = () => {
  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.8,
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    }),
  };

  return (
    <section className="relative z-10 flex h-full w-3/4 items-center justify-center gap-16">
      <motion.h1
        className="text-5xl font-bold lg:text-8xl"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        SAY NO MORE. LET'S BRING YOUR PROJECT TO LIFE.
      </motion.h1>
    </section>
  );
};
