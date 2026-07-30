import bioBg from "../../../public/bio-bg.jpg";
import { motion } from "motion/react";
import projectOne from "../../assets/projects-images/project-0.avif";
import projectThree from "../../assets/projects-images/project-3.avif";
import projectFive from "../../assets/projects-images/project-2.avif";
import projectFour from "../../assets/projects-images/project-4.avif";
import { GoDotFill } from "react-icons/go";

const Projects = () => {
  return (
    <section
      className=" min-h-full w-full max-w-360 mx-auto bg-cover bg-center px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20 py-12 lg:py-20"
      style={{ backgroundImage: `url(${bioBg})` }}
    >
      {/* Heading */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ amount: 0.1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="flex max-sm:justify-center text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide text-[#C0DC6E]">
          Projects
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.h2
        className="
          mt-10
          mb-12

          text-center

          text-2xl
          sm:text-3xl
          lg:text-4xl

          font-medium
          
        "
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ amount: 0.05 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        My Best Creations
      </motion.h2>

      {/* Projects Grid */}
      <motion.div
        className="
          grid
          grid-cols-1
          md:grid-cols-2

          gap-8
          lg:gap-12
        "
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ amount: 0.1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {[
          { image: projectOne, title: "Gui Beauty" },
          { image: projectFive, title: "Blogged" },
          { image: projectFour, title: "Taskflow" },
          { image: projectThree, title: "Ticketed" },
        ].map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-4"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ amount: 0.15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="
                w-full

                aspect-video
                object-cover

                rounded-xl
                border-2
                border-black

                hover:scale-[1.02]
                transition-transform
                duration-300
              "
            />

            <h2 className="text-lg text-white/80 sm:text-xl font-medium ">
              {project.title}
            </h2>
          </motion.div>
        ))}
      </motion.div>

      {/* Button */}
      <div className="flex justify-center mt-14">
        <a href="/projects">
          <button
            className="
              flex items-center gap-2 px-6 py-3 rounded-full border-2 text-sm m:text-base font-bold tracking-wider transition-colors ease-in duration-500 hover:bg-white hover:text-black
            "
          >
            View All
            <GoDotFill />
          </button>
        </a>
      </div>
    </section>
  );
};

export default Projects;
