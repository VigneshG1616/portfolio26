import profileImg from '../assets/portfolio_image_vignesh_g.jpg';

// ─── Navigation ──────────────────────────────────────────────────────────────
export const navLinks = [
  { label: 'About',    href: '#about'    },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const heroData = {
  name: 'Vignesh G',
  roles: ['Senior Web Developer', 'Full-Stack Developer', 'AI Driven Development'],
  bio: "I build fast, scalable web products — from React frontends to Node.js APIs and MongoDB data layers. Self-taught, shipping since 2019.",
  resumeUrl: '/assets/resume_vignesh_g_26.pdf',
  meta: [
    { label: 'Based in',  value: 'India' },
    { label: 'Stack',     value: 'MERN + PHP' },
    { label: 'Available', value: 'Freelance / Full-time' },
  ],
};

// ─── About ────────────────────────────────────────────────────────────────────
export const aboutData = {
  img: profileImg,
  paragraphs: [
    "I'm a self-taught developer who walked away from Aeronautical Engineering and fell in love with the web. My stack is JavaScript all the way — React on the front, Node + Express on the back, MongoDB and Firebase for data.",
    "I also work extensively in PHP / MySQL environments (Laravel-adjacent, vanilla MVC) and have shipped production-grade apps across both stacks. I care about clean code, good performance, and things that actually work.",
    "When I'm not coding: macro photography, graphic design, home fitness, and occasionally prompt-engineering my way into something fun.",
  ],
  quote: "Life is all about balancing the, Do what-you-love and love-what-you do !!",
  skillsByCategory: [
    {
      category: 'Frontend',
      skills: ['React', 'Redux', 'Next.js', 'JavaScript (ES2024+)', 'HTML5', 'CSS3 / SCSS', 'Bootstrap', 'jQuery'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'PHP', 'REST APIs'],
    },
    {
      category: 'Database',
      skills: ['MongoDB', 'MySQL', 'MariaDB', 'Firebase', 'Firestore'],
    },
    {
      category: 'Tools',
      skills: ['Git', 'Webpack', 'Vite', 'SEO', 'Figma', 'Prompt Engineering'],
    },
  ],
};

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projectsData = [
  {
    id: 1,
    title: 'Shopping Store',
    tags: ['React', 'Firebase', 'Redux', 'Styled Components'],
    year: '2023',
    liveUrl: 'https://vash-store.netlify.app/',
    sourceUrl: 'https://github.com/VigneshG1616/Clothing-Store-2023',
    featured: true,
    description: 'E-commerce SPA with Google OAuth, Redux Persist, Context API, and styled-components.',
  },
  {
    id: 2,
    title: 'Face Recognition App',
    tags: ['MERN', 'Express', 'Node.js', 'API'],
    year: '2023',
    liveUrl: 'https://vigneshg1616.github.io/Smart_Brain/',
    sourceUrl: 'https://github.com/VigneshG1616/Smart_Brain',
    featured: true,
    description: 'Detects faces in submitted photo URLs. Full MERN stack, front-end complete.',
  },
  {
    id: 3,
    title: 'Quote Generator',
    tags: ['JavaScript', 'REST API', 'HTML', 'CSS'],
    year: '2022',
    liveUrl: 'https://vigneshg1616.github.io/Quote_Generator_Modified/',
    sourceUrl: 'https://github.com/VigneshG1616/Quote_Generator_Modified',
    featured: false,
    description: 'Share inspirational quotes to X or clipboard. Zero dependencies.',
  },
  {
    id: 4,
    title: 'Needle Fragment',
    tags: ['HTML', 'CSS', 'JavaScript'],
    year: '2022',
    liveUrl: 'https://vigneshg1616.github.io/needle-fragment/',
    sourceUrl: 'https://github.com/VigneshG1616/needle-fragment',
    featured: false,
    description: 'B2B brand site for a fictional knitted fabric company.',
  },
  {
    id: 5,
    title: 'Number Guess Game',
    tags: ['Vanilla JS', 'HTML', 'CSS'],
    year: '2021',
    liveUrl: 'https://vigneshg1616.github.io/Guess_my_number/',
    sourceUrl: 'https://github.com/VigneshG1616/Guess_my_number',
    featured: false,
    description: 'Lightweight number guessing game — no frameworks, pure JS.',
  },
  {
    id: 6,
    title: 'Keiko Corp',
    tags: ['HTML', 'CSS', 'Figma → Code'],
    year: '2021',
    liveUrl: 'https://vigneshg1616.github.io/Keiko-corp/',
    sourceUrl: 'https://github.com/VigneshG1616/Keiko-corp',
    featured: false,
    description: 'Pixel-perfect implementation of a ZTM Figma design for a workshop.',
  },
];

// ─── Contact ──────────────────────────────────────────────────────────────────
export const contactData = {
  heading: "Let's build something.",
  sub: "Open to freelance projects, full-time roles, and interesting collaborations. I respond within 24 hours.",
  email: 'vigneshg1616@gmail.com',
  phones: ['+91 973 843 4916', '+91 776 026 7416'],
};

// ─── Social / Footer ──────────────────────────────────────────────────────────
export const socialLinks = [
  { id: 'github',   icon: 'fa-brands fa-github',   url: 'https://github.com/VigneshG1616',                       label: 'GitHub'   },
  { id: 'linkedin', icon: 'fa-brands fa-linkedin',  url: 'https://www.linkedin.com/in/vignesh-g-0023aa116/',      label: 'LinkedIn' },
  { id: 'twitter',  icon: 'fa-brands fa-x-twitter', url: 'https://twitter.com/VigneshGopal16',                    label: 'X'        },
  { id: 'facebook', icon: 'fa-brands fa-facebook',  url: 'https://www.facebook.com/vignesh.gopal.73/about',       label: 'Facebook' },
];
