import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const recaptchaRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!form.name) formErrors.name = "Name is required";
    if (!form.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      formErrors.email = "Email address is invalid";
    }
    if (!form.message) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    } else {
      setErrors({});
    }

    const token = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();

    if (!token) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    setLoading(true);

    const templateParams = {
      from_name: form.name,
      to_name: "Noura",
      from_email: form.email,
      to_email: "nourakabbara@gmail.com",
      message: form.message,
      "g-recaptcha-response": token, // Add the reCAPTCHA token
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template ID
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Public key
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for contacting me. I will get back to you as soon as possible."
          );

          // Reset the form
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 
              placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
            {errors.name && (
              <span className="text-red-500 mt-2">{errors.name}</span>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 
              placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
            {errors.email && (
              <span className="text-red-500 mt-2">{errors.email}</span>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 
              placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
            {errors.message && (
              <span className="text-red-500 mt-2">{errors.message}</span>
            )}
          </label>

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} // Replace with your reCAPTCHA site key
            size="invisible"
          />

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 
            outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
