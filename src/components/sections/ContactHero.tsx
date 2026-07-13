import bioBg from "../../../public/bio-bg.jpg"
import { motion } from "motion/react";

const ContactHero = () => {
  return (
    <section
      className="flex items-center justify-center h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bioBg})` }}
    >
      <div className="flex flex-col gap-20 items-center justify-center text-center max-w-3xl p-6">
        <motion.h1
          className=" flex flex-col text-7xl max-sm:text-7xl w-200 gap-8 lg:text-8xl text-[#C0DC6E] text-center font-bold"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Let's
          <span>contact</span>
        </motion.h1>
        <motion.h3
          className=" max-sm:w-80 w-150 mx-auto text-white/80 tracking-wide"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          If you have a project you would like to discuss or a question you
          would like answered, please feel free to reach out to me. I'm always
          open to connecting with fellow enthusiasts and professionals in the
          field.
        </motion.h3>
      </div>
    </section>
  );
};

export default ContactHero;
