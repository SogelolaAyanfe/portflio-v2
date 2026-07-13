import { useState } from "react";
import { motion } from "motion/react";
import bioBg from "../../../public/bio-bg.jpg";
import { GoDotFill } from "react-icons/go";
import Resume from "../../Documents/Resume.pdf";

interface Experience {
  company: string;
  role: string;
  period: string;
  tasks: string[];
}

const experiences: Experience[] = [
  {
    company: "Freelancer",
    role: "Frontend Web Developer",
    period: "(Oct 2024 - Present)",
    tasks: [
      "Built responsive portfolio and e-commerce sites with modern React-based stacks.",
      "Developed blog platforms and APIs with full CRUD functionality.",
      "Created cross-platform web and mobile applications with real-time features.",
    ],
  },
  {
    company: "Pentagon Engineering",
    role: "Civil Engineer",
    period: "(Dec 2023 – Oct 2024)",
    tasks: [
      "Designed structural elements for client projects under senior engineer supervision.",
      "Monitored on-site construction to ensure compliance with plans and safety standards.",
      "Collaborated with teams and clients on planning and project execution.",
    ],
  },
  {
    company: "Intecon Partnership",
    role: "Civil Engineering Intern",
    period: "(Dec 2021 – Jun 2022)",
    tasks: [
      "Used industry-standard CAD software for design, drafting, and modelling.",
      "Contributed to the design and analysis of public infrastructure projects.",
      "Built foundational knowledge of structural design under senior engineers.",
    ],
  },
  {
    company: "Bolcon Associates",
    role: "Civil Engineering Intern",
    period: "(Sept 2020 – Dec 2020)",
    tasks: [
      "Used CAD and structural design software for drafting and modelling.",
      "Developed foundational industry skills and best practices.",
    ],
  },
];

const Experiences = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = experiences[activeIndex];

  return (
    <section
      className="
        w-full

        bg-cover
        bg-center

        flex
        flex-col

        gap-6

        px-6
        sm:px-8
        md:px-10
        lg:px-16
        xl:px-20

        py-12
        lg:py-20
      "
      style={{ backgroundImage: `url(${bioBg})` }}
    >
      {/* Heading */}
      <motion.div
        className="flex justify-center lg:justify-end"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide text-[#C0DC6E] text-center lg:text-right">
          Experience
        </h2>
      </motion.div>

      {/* Experience Content */}
      <motion.div
        className="
          flex
          flex-col
          lg:flex-row gap-10
          lg:gap-16
          mt-4
        "
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Company Tabs */}
        <div
          className="
            flex
            lg:flex-col

            gap-2

            overflow-x-auto
            lg:overflow-visible

            scrollbar-hide

            pb-2

            w-full
            lg:w-60

            shrink-0
          "
        >
          {experiences.map((exp, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={`${exp.company}-${index}`}
                onClick={() => setActiveIndex(index)}
                className={`relative flex items-center gap-3 px-5 py-3 rounded-r-lg whitespace-nowrap transition-all duration-300 shrink-0 ${
                  isActive
                    ? "text-[#C0DC6E]"
                    : "text-white hover:text-[#C0DC6E]"
                }`}
              >
                <span
                  className={`absolute left-0 top-0 h-full w-[3px] rounded-md ${
                    isActive ? "bg-[#C0DC6E]" : "bg-transparent"
                  }`}
                />

                <span className="font-medium text-base lg:text-lg">
                  {exp.company}
                </span>
              </button>
            );
          })}
        </div>

        {/* Description */}
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-semibold leading-relaxed">
            {active.role}
            <span className="text-[#C0DC6E]"> @ {active.company}</span>
          </h3>

          <p className="mt-2 text-sm text-white/70">{active.period}</p>

          <ul className="mt-6 flex flex-col gap-4">
            {active.tasks.map((task, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C0DC6E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 mt-1 shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>

                <span className="text-sm sm:text-base leading-7 text-white/80">
                  {task}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Resume Button */}
      <div className="flex justify-center mt-10 lg:mt-12">
        <a href={Resume} target="_blank" rel="noopener noreferrer">
          <button
            className="
              flex
              items-center
              gap-2

              px-6
              py-3

              rounded-full
              border-2

              text-sm
              sm:text-base

              font-bold
              tracking-wider
              font-['Manrope',sans-serif]

              transition-all
              duration-500

              hover:bg-white
              hover:text-black
            "
          >
            Download CV
            <GoDotFill />
          </button>
        </a>
      </div>
    </section>
  );
};

export default Experiences;
