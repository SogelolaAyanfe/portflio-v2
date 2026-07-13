import picture from "../../../public/picture.jpg";
import bioBg from "../../../public/bio-bg.jpg";
import { motion } from "motion/react";

const Bio = () => {
  return (
    <section
      className="
        min-h-screen
        w-full

        bg-cover
        bg-center

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
        className="mb-12"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ amount: 0.1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide text-[#C0DC6E] text-center lg:text-left">
          Biography
        </h1>
      </motion.div>

      {/* Content */}
      <div
        className="
          flex
          flex-col
          lg:flex-row

          items-center
          justify-between

          gap-12
          lg:gap-20
        "
      >
        {/* Picture */}
        <div
          className="
            w-full
            lg:w-1/2

            flex
            justify-center
            items-center
          "
        >
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ amount: 0.1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.img
              src={picture}
              alt="Ayanfeoluwa"
              className="
                w-[80vw]
                sm:w-[60vw]
                md:w-[50vw]
                lg:w-[32vw]

                max-w-[420px]
                min-w-[240px]

                h-auto

                rounded-md
                p-2
              "
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1.03, opacity: 1 }}
              viewport={{ amount: 0.1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-[#C0DC6E]" />
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-[#C0DC6E]" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-[#C0DC6E]" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-[#C0DC6E]" />
          </motion.div>
        </div>

        {/* Introduction */}
        <motion.div
          className="
            w-full
            lg:w-1/2

            flex
            flex-col
            gap-6

            justify-center

            text-center
            lg:text-left
          "
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h3
            className="
              text-white/80
              tracking-wide
              leading-8

              border-t
              pt-8

              text-base
              lg:text-lg
            "
          >
            Hello! My name is Ayanfeoluwa Sogelola, and I am a Software Engineer
            with a strong foundation in both Engineering and Frontend Web
            Development. I hold a Bachelor of Engineering degree in Civil
            Engineering from the University of Ilorin, which has equipped me
            with strong problem-solving abilities and a keen attention to detail
            that I now apply in Software Engineering.
          </h3>

          <h3
            className="
              text-white/80
              tracking-wide
              leading-8

              border-b
              pb-8

              text-base
              lg:text-lg
            "
          >
            I am passionate about creating intuitive user experiences,
            optimizing performance, and continuously learning new tools and
            frameworks to stay ahead in the ever-evolving field of Software
            Engineering.
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default Bio;
