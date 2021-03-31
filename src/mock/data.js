import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Samuel Eyob',
  subtitle: 'JavaScript Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I’m a developer with experience in building complex real-world applications from scratch. I have adequate problem-solving skills and debugging techniques in writing efficient codes for scalable applications. On each project, I aim to develop applications that are aesthetically pleasing, user friendly, and efficiently handles the problem it is solving.',
  paragraphTwo:
    'My professional journey has not stopped yet neither has my learning curve. Throughout my career I felt one thing; To learn more; One must be fundamentally fit to stay in the market and without proper formal education and professionalism. I always believed and focused towards research and development as I understand this is the key towards future. I have incorporated critical thinking and analytical reasoning into my professional path.',
  paragraphThree: '',
  resume: 'resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Trucking Management Software',
    info:
      'This Trucking Management Software (TMS) allows owners full control of their business to better serve brokers as well as drivers.  ',
    info2: '',
    url: 'https://garytruckingllc.netlify.app/',
    repo: 'https://github.com/samidela/Trucking-Service-Management/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Recipe Finder',
    info:
      'This application allows you to find a recipe for any cravings you have. It lists all the ingredients needed as well as the measurements.',
    info2: '',
    url: 'https://sami-kitchen.netlify.app/',
    repo: 'https://github.com/samidela/react-recipe', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'To-Do List',
    info:
      'This to-do-list can be used for day to day tasks, use it to complete tasks as you go through your day.',
    info2: '',
    url: 'https://daily-list.netlify.app/',
    repo: 'https://github.com/samidela/react-todo', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'samuelgeyob@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/samuel-eyob-139879112/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/samidela',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
