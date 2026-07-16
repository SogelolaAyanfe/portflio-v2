import { useEffect, useState } from "react";
import { Phone, MapPin, Clock } from "lucide-react";
import { GoDotFill } from "react-icons/go";
import bioBg from "../../../public/bio-bg.jpg";
import { motion } from "motion/react";

const ContactForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", import.meta.env.VITE_FORM_ACCESS_KEY);
    event.currentTarget.reset();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
    } else {
      setResult("Error");
    }
  };

  // Auto-dismiss the toast for terminal states only — "Sending...." naturally
  // gets replaced once the fetch resolves, so it doesn't need its own timer.
  useEffect(() => {
    if (result === "Form Submitted Successfully" || result === "Error") {
      const timer = setTimeout(() => setResult(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [result]);

  const isVisible =
    result === "Sending...." ||
    result === "Form Submitted Successfully" ||
    result === "Error";

  const toastStyles =
    result === "Form Submitted Successfully"
      ? "bg-black text-white"
      : result === "Error"
        ? "bg-red-600 text-white"
        : "bg-black text-white"; // Sending....

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row justify-between bg-[#C0DC6E] text-black p-6 sm:p-10 max-md:p-none ">
      <motion.div
        className="flex flex-col md:flex-row w-full gap-10 md:gap-0"
        initial={{ y: -100, opacity: 0, scale: 0.7 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
      >
        <div className="w-full md:w-[40%]">
          <div
            className="rounded-4xl max-md:rounded-none flex flex-col h-full p-8 sm:p-10 md:p-15 pb-6 md:pb-10 gap-10 max-sm:gap-4 md:gap-20 bg-cover bg-center text-white "
            style={{ backgroundImage: `url(${bioBg})` }}
          >
            <div className="flex flex-col gap-8  max-sm:gap-3 ">
              <h1 className="text-3xl font-bold max-sm:text-2xl">
                Contact Information
              </h1>
              <p className="text-base">
                If you have any questions, feel free to get in touch with me
              </p>
            </div>
            {/**Phone */}
            <div className="flex flex-col gap-10  max-sm:gap-3">
              <div className="flex flex-row gap-4 items-center">
                <Phone />
                <p className="font-medium">+2348131164122</p>
              </div>
              {/*Address */}
              <div className="flex flex-row gap-4 items-center">
                <MapPin />
                <p className="font-medium">Ibadan, Nigeria</p>
              </div>
            </div>
            <div className="flex flex-col gap-5  max-sm:gap-3">
              <p>Monday - Friday</p>
              <div className="flex flex-row gap-4 items-center">
                <Clock />
                <p className="font-medium">8:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        {/*Form*/}
        <div className="flex w-full md:w-[60%] justify-center max-sm:justify-start  items-center bg-[#C0DC6E]">
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-10 max-sm:w-full placeholde:bg-black"
          >
            {/*Name fields*/}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 w-full">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstname" className="font-semibold ">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  required
                  className="border-2 outline-black rounded-sm h-12 p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastname" className="font-bold ">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  required
                  className="border-2 outline-black rounded-sm h-12 p-2"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-bold ">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="border-2 outline-black rounded-sm h-12"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-bold ">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="border-2 outline-black rounded-sm  h-12 p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-bold  ">
                Message
              </label>
              <textarea
                name="message"
                required
                className="border-2 outline-black rounded-sm p-2 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="
              flex items-center gap-2 w-50 justify-center bg-black text-white p-4 rounded-full font-bold tracking-wider  transition-all duration-500 hover:bg-black/70 "
            >
              Submit Form
              <GoDotFill />
            </button>

            {isVisible && (
              <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30 z-100">
                <span
                  className={`flex items-center justify-center text-center h-22 px-10 font-bold tracking-wide shadow-lg ${toastStyles}`}
                >
                  {result}
                </span>
              </div>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
