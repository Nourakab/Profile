import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Scroll,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  ComputersCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-hero-pattern h-64 mt-32">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative z-10">
          <Navbar />
          <Hero />
          <Scroll />
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

export default App;
