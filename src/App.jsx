import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};
console.log("ReCAPTCHA site key:", import.meta.env.VITE_RECAPTCHA_SITE_KEY);
console.log("EmailJS service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log("EmailJS template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log("EmailJS public key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export default App;
