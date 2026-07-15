import bioBg from "../../../public/bio-bg.jpg";
import { GoDotFill } from "react-icons/go";
import { motion } from "motion/react";

const socials = [
  { label: "Resume", href: "../../Documents/Resume.pdf" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ayanfeoluwa-sogelola-gmnse-70980b248/",
  },
  { label: "GitHub", href: "https://github.com/SogelolaAyanfe" },
];

const Footer = () => {
  return (
    <section
      className="flex flex-col w-full gap-4 "
      style={{ backgroundImage: `url(${bioBg})` }}
    >
      <footer className=" px-4 sm:px-6 py-10">
        <motion.div
          className="bg-[#C0DC6E] rounded-3xl max-w-7xl mx-auto px-6 sm:px-10 md:px-14 py-10 sm:py-14"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ amount: 0.1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-6">
            {/* Left: heading + CTA */}
            <div className="flex flex-col gap-5">
              <h2 className="text-3xl font-semibold text-black max-sm:text-2xl">
                Thanks for Visiting
              </h2>
              <p className="text-black text-base sm:text-lg">Got an idea?</p>
              <a href="/Contact">
                <button className=" flex items-center text-black border-2 rounded-4xl text-sm font-bold  tracking-wider p-3 gap-2 hover:bg-black hover:text-white hover:border-black transition-colors duration-800 ease-in-out ">
                  Let's Connect
                  <span className="flex items-center">
                    <GoDotFill />
                  </span>
                </button>
              </a>
            </div>

            {/* Right: socials + contact */}
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 md:gap-20">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-1">
                  Socials
                </h3>
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:font-extrabold transition-colors text-sm sm:text-base"
                  >
                    {social.label}
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-1">
                  Contact
                </h3>

                <a
                  href="mailto:ayanfe.sogelola@gmail.com"
                  className="flex items-center gap-2 text-black/80 hover:text-black transition-colors text-sm sm:text-base"
                >
                  <span className="break-all">ayanfe.sogelola@gmail.com</span>
                </a>

                <a
                  href="tel:+2348131164122"
                  className="flex items-center gap-2 text-black/80 hover:text-black transition-colors text-sm sm:text-base"
                >
                  <span className="break-all ">+234 813 116 4122</span>
                </a>

                <p className="text-black/80 text-sm sm:text-base mt-1">
                  Based in Nigeria, working remotely worldwide.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-black/60 mt-10 sm:mt-12 pt-5">
            <p className="text-center text-black text-xs sm:text-sm">
              © 2026. All Rights Reserved.
            </p>
          </div>
        </motion.div>
      </footer>
    </section>
  );
};

export default Footer;
