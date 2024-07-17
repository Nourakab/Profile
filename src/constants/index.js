import {
  mobile,
  frontEnd,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  bootstrap,
  nodejs,
  mongodb,
  googleCloud,
  git,
  docker,
  kubernetes,
  villeDeLaval,
  bnc,
  hungryTummy,
  amazonClone,
  youtubeClone,
  Hao,
  Rabih,
  Haythem,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Front-End Developer",
    icon: frontEnd,
  },
  {
    title: "Back-End Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Google Cloud",
    icon: googleCloud,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "Ville de Laval",
    icon: villeDeLaval,
    iconBg: "#383E56",
    date: "May 2021 -March 2024",
    points: [
      "Led development of a city inspection application, enhancing efficiency by 40% through automated features and intuitive UI in React and Node.js. ",
      "Designed and implemented interactive front-end interfaces using React, improving user engagement by integrating features such as image capture, comments, annotations, calendar integration and real-time route tracking using maps.",
      "Participating in daily scrums, Debugging and troubleshooting",
      "Built and maintained robust RESTful APIs, significantly improving data interaction and operational reliability.",
      "Managed state with Redux, ensuring fluid UX during real-time data handling.",
      "Championed Agile methodologies, enhancing team collaboration and project output.",
      "Strong problem-solving skills to identify and resolve issues that can arise during the development process",
      "Utilized Docker for containerization and Kubernetes for managing application deployment,scaling, and operations.",
      "Leveraged Elasticsearch for efficient data search and retrieval processes.",
      "Git for managing code changes and collaborating with other developers",
    ],
  },
  {
    title: "Front-End JavaScript Developer",
    company_name: "National Bank of Canada ",
    icon: bnc,
    iconBg: "#E6DEDD",
    date: "March 2020 - May 2021",
    points: [
      "Engineered and enhanced key features of Banque Nationale’s online banking platform, increasing user engagement by 20% and facilitating seamless financial transactions.",
      "Designed a dynamic, real-time financial dashboard using React, improving customer interaction with their financial data.",
      "Pioneered the adoption of TypeScript and modern JavaScript ES6+ features and React's advanced functional components and hooks, enhancing code modularity, readability, and reusability across the platform.",
      "Implemented responsive web design principles using CSS and JavaScript, enhancing accessibility and functionality across devices.",
      "Integrated RESTful APIs using Axios for data fetching and state management with Redux, facilitating efficient and dynamic updates to the UI without reloading the page.",
      "Collaborated with UX/UI teams, in an Agile environment, to revamp the platform’s interface, significantly boosting customer satisfaction.",
      "Ensured WCAG 2.0 compliance, broadening accessibility for users with disabilities.",
      "Utilised PostgreSQL for database management and data persistence.",
    ],
  },
];

const projects = [
  {
    name: "Recipe App",
    description:
      "A dynamic recipe website, developed from scratch, offering users the ability to save, review, and rate their favorite dishes for an enhanced culinary discovery experience. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
    ],
    image: hungryTummy,
    source_code_link: "https://github.com/",
  },
  {
    name: "Amazon Clone",
    description:
      "This project is a basic clone of Amazon, featuring a landing page where you can add to your shopping cart, a sign-in page and a check-out page.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: amazonClone,
    source_code_link: "https://github.com/Nourakab/amazon-clone",
  },
  {
    name: "Youtube Clone",
    description:
      "This project is a basic clone of Youtube. It features a landing page similar to the real one. It has a Home page with a search toolbar.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: youtubeClone,
    source_code_link: "https://github.com/Nourakab/youtube-clone",
  },
];

const testimonials = [
  {
    testimonial:
      "Working with Noura has been a game-changer for our project. Her ability to seamlessly integrate front-end and back-end technologies resulted in a more efficient and user-friendly application. Noura's attention to detail and dedication to writing clean, maintainable code has set a new standard for our development team.",
    name: "Hao Zheng",
    designation: "CEO",
    company: "Shiki Technologie",
    image: Hao,
  },
  {
    testimonial:
      "Noura's passion for technology and her commitment to excellence are truly inspiring. She has a natural talent for solving complex problems and is always willing to go the extra mile to ensure the success of the project. Her collaborative approach and strong communication skills make her a pleasure to work with.",
    name: "Rabih El Zaher",
    designation: "Senior Developer",
    company: "City of Laval",
    image: Rabih,
  },
  {
    testimonial:
      "Noura is a proactive and resourceful developer with a keen eye for detail. Her innovative approach to problem-solving and her dedication to continuous learning have made a significant impact on our project. She is a true professional who consistently delivers high-quality work.",
    name: "Haythem Rehouma",
    designation: "Professor",
    company: "Collège Rosemont",
    image: Haythem,
  },
];

export { services, technologies, experiences, testimonials, projects };
