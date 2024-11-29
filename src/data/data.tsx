import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import FacebookIcon from '../components/Icon/FacebookIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
// import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/me.png';
import porfolioImage4 from '../images/portfolio/KamayniHesus.jpg';
import loginOTP from '../images/portfolio/loginOTP.jpg';
import porfolioImage3 from '../images/portfolio/milktea.jpg';
import shozada from '../images/portfolio/shozada.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Viron Digital Resume',
  description: 'A Full Stack Web Developer',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Viron Navarro.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        A <strong className="text-stone-100">Full Stack Web Developer</strong>, currently working at{' '}
        <strong className="text-stone-100">National Center for Mental Health</strong> creating a web applications from
        scratch using React Typescript as front end and Laravel as a backend
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I enjoy coding personal projects, including building recognition models with TensorFlow. I am
        passionate about learning the latest technologies and continuously improving my skills as a web developer.
      </p>
    </>
  ),
  actions: [
    {
      href: 'assets/MyResume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
      target: '_blank',
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ` A full stack web developer and a tech enthusiast. I have a passion for learning and creating. I am always looking for new things to learn. Aspiring to become greatest web developer in our country. `,
  aboutItems: [
    {label: 'Location', text: 'Pila, Laguna, Philippines', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Filipino', Icon: FlagIcon},
    {label: 'Interests', text: 'Gaming, Coding', Icon: SparklesIcon},
    {label: 'Study', text: 'Laguna State Polytechnic University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Working.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 7,
      },
      {
        name: 'Tagalog',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'blade',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 6,
      },
      {
        name: 'Laravel',
        level: 8,
      },
    ],
  },
  {
    name: 'Database',
    skills: [
      {
        name: 'MySQL',
        level: 8,
      },
    ],
  },
  {
    name: 'WordPress Development',
    skills: [
      {
        name: '',
        level: 9,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'React Ecommerce',
    description:
      'A React Ecommerce Web Application created using react js and ts, it has a backend of Laravel and a frontend of react js and ts.',
    url: 'https://github.com/Viron1121/EcommerceProject',
    image: shozada,
  },
  {
    title: 'Laravel Login with email verification',
    description: 'a simple project that has OTP verification using email address',
    url: 'https://github.com/Viron1121/LoginWithEmailOTP/tree/master',
    image: loginOTP,
  },
  {
    title: 'WordPress Ecommerce',
    description: 'a simple ecommerce website using wordpress',
    url: 'https://github.com/Viron1121/EcommerceWordPress',
    image: porfolioImage3,
  },
  {
    title: 'Kamay ni Hesus Ecommerce Project',
    description: 'Our college project using php native with sms verification',
    url: 'https://github.com/Viron1121/KamayniHesusEcommerce',
    image: porfolioImage4,
  },

  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2019 - 2023',
    location: 'Bachelor of Science in Information Technology',
    title: 'Laguna State Polytechnic University',
    content: (
      <p>
        During my studies, I gained a solid foundation in programming, including core web technologies such as HTML,
        CSS, and JavaScript. I also developed a strong understanding of Object-Oriented Programming (OOP) principles and
        explored various programming languages commonly used in web development.
      </p>
    ),
  },
  {
    date: '2017 - 2019',
    location: 'Information and Communication Technology',
    title: 'Pila Senior High School',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'September 14 2023 - Present',
    location: 'National Center for Mental Health',
    title: 'Full Stack Web Developer',
    content: (
      <>
      <p>
        Currently working at the National Center for Mental Health, where I build web applications from scratch using
        React and TypeScript for the frontend, and Laravel for the backend. In addition to developing new features, I
        also troubleshoot and resolve bugs across full-stack Laravel projects to ensure smooth functionality and optimal
        performance.
      </p>
      <br />
      <h1 className='text-xl font-bold'>Technology Stack</h1>
      <div className='grid grid-cols-2'>
        <p className=''>React Typescript - for the frontend</p>
        <p className=''>Laravel - for the backend</p>
        <p>MySQL - for the database</p>
        <p>Laravel FullStack</p>
        <p>Git: GItLab, Gitlab CI/CD for DevSecOps</p>
        <p>Figma for UI/UX Design</p>
        <p>draw io for team collaboration and workflow
        process</p>
        <p>API - RestAPI and Middleware Development
        Technology</p>
      </div>
      <br />
      <hr className='color-black'/>
      </>
    ),
  },
  {
    date: '',
    location: 'Sammy Snake LTD Internship (Remote) Monmouthshire, United Kingdom, NP25 5JA',
    title: 'Game Analyst Backend Developer',
    content: (
      <>
      <p>
      As a Game Analyst and Backend Developer, I am responsible for analyzing the Nova Rally game, focusing on its integration with NFTs and blockchain technologies. My role involves assessing player needs and providing insights to enhance the gameplay experience. I collaborate with the team to ensure the game mechanics are intuitive, engaging, and tailored to player preferences. Additionally, I am involved in developing and maintaining a website that tracks player race history, allowing users to view their past performances and progress within the game. This helps players stay connected to their achievements and fosters community engagement.
      </p>
      <br />
      <h1 className='text-xl font-bold'>Technology Stack</h1>
      <p className=''>Node js - for the backend</p>
      <p>Github - for version control</p>
      <p>React js - for the frontend</p>

      </>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Currently Seeking for Full Time Job',
      text: '',
      image: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjl5dWg0cGQ2NzZ5MTdoYzF4ZTF0cXMxanBveDI0NWV2ODQ3N29xeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AUz0mzKFXZN4FJxWdn/giphy.webp',
    },
    {
      name: "I'll make things happen.",
      text: "Let's talk about your next project!",
      image: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdqcW9iZWpwZmwzZTI5eGFnMnUxZTVkbmNjejJpZG1vMmNnOWU1YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xFYs2LARiXps9uZFhq/giphy.webp',
    },
   
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'viron3210@gmail.com',
      href: 'mailto:viron3210@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Pila, Laguna, Philippines',
      href: 'https://www.google.ca/maps/place/Pila,+Laguna/@14.2318075,121.3291844,13z/data=!3m1!4b1!4m6!3m5!1s0x3397e20560af3791:0x33dfd36ba32967fc!8m2!3d14.2346148!4d121.3655989!16zL20vMDRwY201?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      type: ContactType.Instagram,
      text: '@vayrouxs',
      href: 'https://www.instagram.com/vayrouxs/',
    },
    {
      type: ContactType.Github,
      text: 'Viron',
      href: 'https://github.com/viron1121',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/viron1121'},
  {label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/phunghoatrien/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/vayrouxs/'},
];
