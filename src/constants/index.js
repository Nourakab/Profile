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
  nodejs,
  mongodb,
  google,
  mysql,
  villeDeLaval,
  hungryTummy,
  amazonClone,
  youtubeClone,
  Hao,
  Rabih,
  Haythem,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: mobile,
  },
  {
    title: 'Front-End Developer',
    icon: frontEnd,
  },
  {
    title: 'Back-End Developer',
    icon: backend,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Google',
    icon: google,
  },
  {
    name: 'MySql',
    icon: mysql,
  },
];

const experiences = [
  {
    title: 'Full Stack Web Developer',
    company_name: 'City of Laval',
    icon: villeDeLaval,
    iconBg: '#383E56',
    date: '2023 - 2024',
    points: [
      'Developed and maintained a city inspection application, enhancing efficiency by 40% through automated features and an intuitive UI using React & Node.js.',
      'Designed and implemented interactive front-end components in React, improving user engagement by integrating image capture, comments, annotations, calendar integration, and real-time route tracking using maps.',
      'Built and optimized RESTful APIs, improving data handling and reliability.',
      'Managed state with Redux, ensuring a fluid UX during real-time data updates.',
      'Implemented PostgreSQL as the primary database, optimizing data storage, retrieval, and ensuring high performance for inspection records and GIS extensions (location-based tracking).',
      'Leveraged Elasticsearch for fast data retrieval, enhancing search functionality for inspection records.',
      'Collaborated in Agile methodologies, contributing to sprint planning, code reviews, and feature enhancements.',
      'Strong problem-solving skills to identify and resolve issues that can arise during the development process.',
      'Git for managing code changes and collaborating with other developers.',
    ],
  },
];

const projects = [
  {
    name: 'Recipe App',
    description:
      'A dynamic recipe website, developed from scratch, offering users the ability to save, review, and rate their favorite dishes for an enhanced culinary discovery experience. ',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'blue-text-gradient',
      },
    ],
    image: hungryTummy,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Amazon Clone',
    description:
      'This project is a basic clone of Amazon, featuring a landing page where you can add to your shopping cart, a sign-in page and a check-out page.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'html',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: amazonClone,
    source_code_link: 'https://github.com/Nourakab/amazon-clone',
  },
  {
    name: 'Youtube Clone',
    description:
      'This project is a basic clone of Youtube. It features a landing page similar to the real one. It has a Home page with a search toolbar.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'html',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: youtubeClone,
    source_code_link: 'https://github.com/Nourakab/youtube-clone',
  },
];

const testimonials = [
  {
    testimonial:
      "Working with Noura has been a game-changer for our project. Her ability to seamlessly integrate front-end and back-end technologies resulted in a more efficient and user-friendly application. Noura's attention to detail and dedication to writing clean, maintainable code has set a new standard for our development team.",
    name: 'Hao Zheng',
    designation: 'CEO',
    company: 'Shiki Technologie',
    image: Hao,
  },
  {
    testimonial:
      "Noura's passion for technology and her commitment to excellence are truly inspiring. She has a natural talent for solving complex problems and is always willing to go the extra mile to ensure the success of the project. Her collaborative approach and strong communication skills make her a pleasure to work with.",
    name: 'Rabih El Zaher',
    designation: 'Senior Developer',
    company: 'City of Laval',
    image: Rabih,
  },
  {
    testimonial:
      'Noura is a proactive and resourceful developer with a keen eye for detail. Her innovative approach to problem-solving and her dedication to continuous learning have made a significant impact on our project. She is a true professional who consistently delivers high-quality work.',
    name: 'Haythem Rehouma',
    designation: 'Professor',
    company: 'Collège Rosemont',
    image: Haythem,
  },
];

export { services, technologies, experiences, testimonials, projects };
