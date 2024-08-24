import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
// import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfoliodrone from '../images/portfolio/drone.jpg';
import porfolioevpi from '../images/portfolio/evpi.jpg';
import porfolioHexapod_1 from '../images/portfolio/Hexapod_1.jpg';
import porfoliopangolin from '../images/portfolio/pangolin.jpg';
import porfolioPBL_3 from '../images/portfolio/PBL_3.png';
import porfolioquadruped from '../images/portfolio/quadruped.jpg';
import porfoliospot from '../images/portfolio/spot.jpg';
import profilepic from '../images/profilepic.jpg';
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
  title: 'Bruce Lin Personal Website',
  description: "",
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
  // Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Bruce Lin.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        {/* I'm a Victoria based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Instant Domains</strong> helping build a modern, mobile-first, domain
        registrar and site builder. */}
        I'm a Robotics Researcher based in Taiwan, currently developing <strong className="text-stone-100">innovative robotic systems</strong> at CSL.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        {/* In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>. */}
        In my free time, you can catch me practicing my moves on the dance floor, enjoying outdoor activities, or shooting hoops on the basketball court.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
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
  description: `I'm a Robotics Researcher based in Taiwan, currently developing innovative robotic systems at CSL. 
  In my free time, you can catch me practicing my moves on the dance floor, enjoying outdoor activities, or shooting hoops on the basketball court.`,
  aboutItems: [
    {label: 'Location', text: 'Taipei', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Taiwan', Icon: FlagIcon},
    {label: 'Interests', text: 'Street Dance, Reading, Baskitball', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Victoria', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'City Science Lab@Taipei Tech, a cooperation with MIT Media Lab', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  // {
  //   name: 'Spoken languages',
  //   skills: [
  //     {
  //       name: 'English',
  //       level: 10,
  //     },
  //     {
  //       name: 'French',
  //       level: 4,
  //     },
  //     {
  //       name: 'Spanish',
  //       level: 3,
  //     },
  //   ],
  // },
  // {
  //   name: 'Frontend development',
  //   skills: [
  //     {
  //       name: 'React',
  //       level: 9,
  //     },
  //     {
  //       name: 'Typescript',
  //       level: 7,
  //     },
  //     {
  //       name: 'GraphQL',
  //       level: 6,
  //     },
  //   ],
  // },
  // {
  //   name: 'Backend development',
  //   skills: [
  //     {
  //       name: 'Node.js',
  //       level: 8,
  //     },
  //     {
  //       name: 'Rust',
  //       level: 5,
  //     },
  //     {
  //       name: 'Golang',
  //       level: 4,
  //     },
  //   ],
  // },
  // {
  //   name: 'Mobile development',
  //   skills: [
  //     {
  //       name: 'React Native',
  //       level: 9,
  //     },
  //     {
  //       name: 'Flutter',
  //       level: 4,
  //     },
  //     {
  //       name: 'Swift',
  //       level: 3,
  //     },
  //   ],
  // },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: "CSL x TUIC Smart Taipei",
    description: `Explore Taipei's urban intelligence through stunning 
    visualizations. Collaborating for a smarter city experience. 
    Discover the unseen stories of Taipei`,
    url: "hexapod",
    image: porfoliodrone,
    tech: "React.js, Redux-Saga, Socket IO, Django",
    link: [
      {
        text: "Slides",
        href: "https://docs.google.com/presentation/d/1H7_tLEYGnq9QImoCqG1hEHPcaFKUCPPrFXwjJ0VIuz0/edit?usp=sharing",
      },
      {
        text: "React.js Made Slides Demo",
        href: "https://taipei-basin-dashboard.vercel.app/",
      },
      {
        text: "Facebook Post",
        href: "https://www.facebook.com/photo/?fbid=773092807946615&set=pcb.773092944613268",
      },
    ],
  },
  {
    title: "Planning Better Future: Kharkiv",
    description: `Harness citizen voices for post-war reconstruction. 
    Empowering urban planners with an open-source participatory tool. 
    Rebuilding Ukraine together through collective wisdom 
    and sustainable interventions.
    `,
    url: "",
    image: porfolioHexapod_1,
    tech: "React.js, Redux-Saga, Babylon.js, Colyseus, Django, MySQL",
    link: [
      {
        text: "Slides",
        href: "https://docs.google.com/presentation/d/1aE0SKLxjxAxnWkV3sbdbFs1VPCc4kx5RsHqHEcTutiY/edit?usp=sharing",
      },
      {
        text: "Issue Discussion in City Science Summit 2022",
        href: "https://www.youtube.com/watch?v=q2A-BApijoc&list=PLdxKi6kbAWz4A5EB4V9P84vUFUSYpJR8w",
      },
    ],
  },
  {
    title: "CityGPT",
    description: `Step into a world where imagination meets reality. 
    Our cutting-edge AI model generates stunning cityscapes, 
    bringing vision to life. From familiar streets to extraordinary realms, 
    unleash artistic expression and shape the cities of tomorrow`,
    url: "",
    image: porfoliopangolin,
    tech: "React.js, Redux-Saga, Pytorch, FastAPI, Docker, PostgreSQL",
  },
  {
    title: "Edge Device Detection Tracking",
    description:
      "Tensorflow Lite and OpenCV to detect and track object, used in HITCON PEACE 2022",
    url: "https://ntut-club-animation.vercel.app",
    image: porfolioPBL_3,
    tech: "Tensorflow Lite, OpenCV, Deep Sort, YoloV5, Coral Dev Board",
    link: [
      {
        text: "HITCON PEACE 2022 News",
        href: "https://www.inside.com.tw/article/28677-taiwan-hitcon-peace-2022",
      },
    ],
  },
  {
    title: "Taipei Blueprint",
    description: `Advocate citizens to shape their city. Comment on blueprint, 
    share thoughts on Taipei's areas, and influence policy decisions. 
    A data-driven platform connecting citizens and decision-makers.`,
    url: "",
    image: porfolioevpi,
    tech: "React.js, React Query, Tailwind CSS",
    link: [
      {
        text: "Blueprint Demo",
        href: "https://taipei-blueprint.vercel.app/",
      },
    ],
  },
  {
    title: "OpenHCI Campus Recycle Game",
    description: `A fun-filled mission to tackle waste misclassification. 
    Earn points, learn proper waste sorting, and champion environmental 
    knowledge on campus`,
    url: "",
    image: porfolioquadruped,
    tech: "Unity, React.js, Arduino",
    link: [
      {
        text: "Youtube Video",
        href: "https://youtu.be/LCSyyrT7GcY",
      },
      {
        text: "Facebook Post",
        href: "https://www.facebook.com/openhci/photos/pb.100057624692945.-2207520000./5433225003405588/?type=3",
      },
    ],
  },
  {
    title: "Self Moving Car",
    description: `Representing school in the PBL competition, 
    unite with Japanese and Taiwanese college students. Combining Arduino, 
    C programming, and mechanical design, create 
    self-propelled car.`,
    url: "",
    image: porfoliospot,
    tech: "Arduino, C, Mechanical Design",
    link: [
      {
        text: "Post",
        href: "https://johnsonafool.netlify.app/posts/pbl/",
      },
    ],
  },
  // {
  //   title: "Programming Club Meeting App",
  //   description: `Powered by Next.js 13, join our programming club's
  //   immersive 3D web meeting room. Experience the future of discussions,
  //   where in future will be Discord integration and an OpenAI-powered
  //   chatbot elevate knowledge sharing. Develop with Turbo Repo,
  //   `,
  //   url: "",
  //   image: porfolioImageMeetingRoom,
  //   tech: "Next.js 13, Socket IO, Three.js, Tailwind CSS",
  //   link: [
  //     {
  //       text: "App Demo",
  //       href: "https://meeting-app-frontend.vercel.app/",
  //     },
  //   ],
  // },

  // {
  //   title: "netflix web and native",
  //   description: "",
  //   url: "https://timbaker.me",
  //   image: porfolioImage9,
  // },
  // {
  //   title: "j55",
  //   description: "",
  //   url: "https://timbaker.me",
  //   image: porfolioImage9,
  // },
  // {
  //   title: "design institute",
  //   description: "",
  //   url: "https://timbaker.me",
  //   image: porfolioImage9,
  // },
  // {
  //   title: "degital pet",
  //   description: "",
  //   url: "https://timbaker.me",
  //   image: porfolioImage9,
  // },
  // {
  //   title: "vue club animate",
  //   description: "",
  //   url: "https://timbaker.me",
  //   image: porfolioImage9,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
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
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'brucelin90620@gmail.com',
      href: 'mailto:brucelin90620@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Taipei, Taiwan',
      href: 'https://www.google.ca/maps/place/%E5%8F%B0%E5%8C%97%E5%B8%82/@25.0854061,121.5615012,11z',
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    {
      type: ContactType.Github,
      text: 'BruceLin',
      href: 'https://github.com/BruceLin90620',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/BruceLin90620'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/bruce-lin-231b9424a/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
