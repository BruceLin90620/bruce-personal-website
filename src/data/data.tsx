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
// import heroImage from '../images/header-background.webp';
// import heroImage from '../images/header-background.webp';
import heroImage from '../images/background.png';
// import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfoliodrone from '../images/portfolio/drone.jpg';
import porfolioevpi from '../images/portfolio/evpi_1.jpg';
import porfolioHexapod_1 from '../images/portfolio/Hexapod_1.jpg';
import porfoliopangolin from '../images/portfolio/pangolin01.jpg';
import porfolioPBL_3 from '../images/portfolio/PBL_3.png';
import porfoliospot from '../images/portfolio/spot.jpg';
import porfoliosupercontroller from '../images/portfolio/SuperController.png';
import profilepic from '../images/profilepic.jpg';
// import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  // TestimonialSection,
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
  None: "none"
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
        I'm Bruce, Jung-Peng Lin(林容鵬), a college student from Taipei. I am now interesting in <strong className="text-stone-100">innovative robotics</strong>, currently working as a researcher in <strong className="text-stone-100">City Science Lab @ Taipei Tech</strong> a cooperation with <strong className="text-stone-100">MIT Media Lab</strong>.
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
    // {
    //   href: `#${SectionId.Contact}`,
    //   text: 'Contact',
    //   primary: false,
    // },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `He graduated from the Department of Mechanical Engineering at National Taipei University of Technology. Currently, he is a researcher at City Science Lab, where his primary focus is on Robotics. His work involves developing innovative robots and integrating various cutting-edge technologies for applications in factories and urban environments.`,
  aboutItems: [
    {label: 'Location', text: 'Taipei', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Taiwan', Icon: FlagIcon},
    {label: 'Email', text: 'brucelin90620@gmail.com', Icon: SparklesIcon},
    {label: 'Study', text: 'Mechanical Engineering, National Taipei University of Technology', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Researcher at City Science Lab@Taipei Tech, a cooperation with MIT Media Lab', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [

];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: "Boston Dynamics Spot",
    description: `An industrial inspection system was developed using Boston Dynamics' Spot. Implementing SLAM and Navigation via Spot SDK on ROS2, it features remote monitoring through a visualization interface. A Spot simulation in Isaac Sim validates algorithms and creates a Digital Twin.`,
    url: "spot",
    image: porfoliospot,
    tech: "Python, ROS2, GraphNav",
  },
  {
    title: "Ummanned Vehicle - EVπ",
    description: `EVπ is an open-source, modular platform for autonomous vehicle research. Its key feature is customizable hardware and software, adapting to specific research needs. This versatility suits various applications from testing to cybersecurity research in autonomous vehicles.
    `,
    url: "EVpi",
    image: porfolioevpi,
    tech: "C++, ROS2, HHEV.OS, PCB Layout, Zenoh",
    // link: [
      // {
      //   text: "Slides",
      //   href: "https://docs.google.com/presentation/d/1aE0SKLxjxAxnWkV3sbdbFs1VPCc4kx5RsHqHEcTutiY/edit?usp=sharing",
      // },
      // {
      //   text: "Issue Discussion in City Science Summit 2022",
      //   href: "https://www.youtube.com/watch?v=q2A-BApijoc&list=PLdxKi6kbAWz4A5EB4V9P84vUFUSYpJR8w",
      // },
    // ],
  },
  {
    title: "Bionic Robot - Pangolin",
    description: `Develop a modular quadruped pangolin robot using biomimetics and ROS2, capable of walking and rolling. Features include standardized chassis, underactuated legs, detachable shell, and cable-driven tail. The project focuses on gait design, roll-over control, and modular software, offering students a robot development platform.`,
    url: "Pangolin",
    image: porfoliopangolin,
    tech: "Control System、ROS2、SLAM、Navigation、AprilTag",
  },

  {
    title: "Bionic Robot - Triceratops (VSLAM)",
    description: `Develop a modular quadruped pangolin robot using biomimetics and ROS2, capable of walking and rolling. Features include standardized chassis, underactuated legs, detachable shell, and cable-driven tail. The project focuses on gait design, roll-over control, and modular software, offering students a robot development platform.`,
    url: "Triceratops",
    image: porfoliopangolin,
    tech: "Control System、ROS2、SLAM、Navigation、AprilTag",
  },
  {
    title: "Super Controller",
    description: `Super Controller introduces "What You See is What You Control" for managing multiple robots. 
    Unlike traditional joystick pairing, users scan tags on robots using mobile cameras and select them to control corresponding robots. 
    This approach aims to improve usability for workers managing multiple robots simultaneously.`,
    url: "super_controller",
    image: porfoliosupercontroller,
    tech: "Zenoh, ROS2, AprilTags",
    // link: [
      // {
      //   text: "Youtube Video",
      //   href: "https://youtu.be/LCSyyrT7GcY",
      // },
      // {
      //   text: "Facebook Post",
      //   href: "https://www.facebook.com/openhci/photos/pb.100057624692945.-2207520000./5433225003405588/?type=3",
      // },
    // ],
  },
  {
    title: "CSL UROP Project - Hexapod Robot",
    description:
      `Developing a 2D-LiDAR-based mapping and navigation system for a hexapod robot. 
      Utilized Cartographer for SLAM and Nav2 for autonomous navigation. 
      Integrated camera-based AprilTag detection for precise final positioning and correction after LiDAR navigation to target locations.`,
    url: "hexapod",
    image: porfolioHexapod_1,
    tech: "Control System、ROS2、SLAM、Navigation、AprilTag",
    // link: [
      // {
      //   text: "HITCON PEACE 2022 News",
      //   href: "https://www.inside.com.tw/article/28677-taiwan-hitcon-peace-2022",
      // },
    // ],
  },
  {
    title: "Undergraduate Project - Drone",
    description: `The project utilized Solidworks for design, 
    ROS for software integration, and computer vision for navigation. 
    Successfully implemented hovering, line-following, traffic light recognition, 
    payload delivery, and landing functionalities.`,
    url: "Drone",
    image: porfoliodrone,
    tech: "Solidworks、ROS、MAVROS、PX4、Python、Image processing、Airsim",
    // link: [
      // {
      //   text: "Youtube Video",
      //   href: "https://youtu.be/LCSyyrT7GcY",
      // },
      // {
      //   text: "Facebook Post",
      //   href: "https://www.facebook.com/openhci/photos/pb.100057624692945.-2207520000./5433225003405588/?type=3",
      // },
    // ],
  },
  {
    title: "PBL Competetion - Self Moving Car",
    description: `Representing our school in the PBL competition, we unite with Japanese and Taiwanese college students. 
    Combining Arduino, C programming, and mechanical design, we create a self-moving car.`,
    url: "PBL",
    image: porfolioPBL_3,
    tech: "Arduino, C, Mechanical Design",
    // link: [
      // {
      //   text: "Blueprint Demo",
      //   href: "https://taipei-blueprint.vercel.app/",
      // },
    // ],
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: "June 2023",
    location: "National Taipei University of Technology",
    title: "Bachelor of Science in Mechanical Engineering",
    content: (
      <div className="flex flex-col gap-4">
        {
          <ul>
            <li>
              Academic Excellent Award for 4 semesters
            </li>
          </ul>
            /* <p>
          During my time at university, I have acquired a several skill includes
          understanding in programming languages like TypeScript, Python, and
          C++ and C#. By making course homework or collaborating with peers in
          projects.
        </p>
        <p>
          In school, I enrolled some courses, like Algorithm, Digital Signal
          Processing, Image Processing and Compression, Machine Learning,
          Database Design, Web Development, Computer Network, Operating System,
          help me to build a solid foundation in computer science and utilize
          the knowledge when I am programming.
        </p>
        <p>
          My involvement also includes active participation in the several
          clubs, engagement in various extracurricular activities and
          competitions, which broadened my skill set, and strengthened my
          ability to collaborate, communicate effectively, and thrive in diverse
          environments.
        </p> */}
      </div>
    ),
  },
];
export const awards: TimelineItem[] = [
  {
    date: "2022 Nov",
    location:
      "Taichung, Taiwan",
    title: "TSPE Research Project and Paper Competition",
    content: (
      <div className="flex flex-col gap-4">
      </div>
    ),
  },
  {
    date: "2022 Oct",
    location:
      "Tainan, Taiwan ",
    title: "2022 Taiwan TDK Robocon",
    content: (
      <div className="flex flex-col gap-4">
      </div>
    ),
  },
  {
    date: "2022 Aug",
    location:
      "Taipei, Taiwan",
    title: "International PBL Competition - Best Team",
    content: (
      <div className="flex flex-col gap-4">
      </div>
    ),
  },
  {
    date: "2018 Aug",
    location: "Montréal, CA",
    title: "RoboCupJunior CoSpace Rescue Challenge - Semifinal",
    content: (
      <div className="flex flex-col gap-4">
      </div>
    ),
  },
  {
    date: "2017 Jul",
    location: "Washington, D.C.",
    title: "FIRST Global Challenge robotics competition - (17/163)",
    content: (
      <div className="flex flex-col gap-4">
      </div>
    ),
  },
];
export const experience: TimelineItem[] = [
  {
    date: "July 2023 - Present",
    location: "City Science Lab@Taipei Tech, a cooperation with MIT Media Lab",
    title: "Researcher",
    content: (
      <div className="flex flex-col gap-4">
        {/* <p>
          As a researcher at City Science Lab, 
          I have been involved in multiple innovative projects including EVπ, 
          Quadruped Robot Spot, Biomimetic Robot, and Super Controller.
          My work spans robotics, automation systems, and intelligent control.
        </p>
        <p>
          - EVπ Project: Integrated Foxconn's HHEV.OS into the control system, verifying compatibility with ROS2. Redesigned the circuit system architecture, completing the process from schematic design to physical circuit board production.
        </p>
        <p>
          - Quadruped Robot Spot: Developed an automated inspection system for industrial environments, implementing remote control and autonomous navigation. Integrated PTZ cameras and Lidar for real-time image transmission and environmental mapping.
        </p>
        <p>
          - Biomimetic Robot: Developed a pangolin-inspired quadruped robot, responsible for circuit and control system development. Integrated depth cameras, SLAM technology, and Nav2 navigation system.
        </p>
        <p>
          - Super Controller: Developed an innovative multi-robot control system using the "What You See is What You Control" concept, improving operational efficiency.
        </p>
        <p>
          Additionally, I actively participate in guiding UROP (Undergraduate Research Opportunity Program) students, imparting robotics theory and directing students in laboratory projects.
        </p>
        <p>
          Hard Skills: C++, Python, ROS2, HHEVOS, Zenoh, SLAM, Navigation, AprilTag, PCB Design, Welding, 
        </p>
        <p>
          Soft Skills: Problem Solving, Collaboration, Interdisciplinary Research
        </p> */}
      </div>
    ),
  },
  {
    date: "Feburary 2023 - June 2023",
    location: "City Science Lab@Taipei Tech, a cooperation with MIT Media Lab",
    title: "Undergraduate Research Opportunity Program(UROP)",
    content: (
      <div className="flex flex-col gap-4">
        {/* <p>
          Key Project: Development of LiDAR SLAM and Navigation System for Hexapod Robot
        </p>
        <p>
          This project aimed to develop a system for environmental mapping and navigation using 2D-LiDAR, integrated with camera and AprilTag for precise final positioning and calibration.
        </p>
        <p>
          - Phase 1: Implemented basic motion control (movement, turning) for the hexapod robot and integrated joystick control using ROS2 as middleware.
        </p>
        <p>
          - Phase 2: Utilized Cartographer as the SLAM (Simultaneous Localization and Mapping) algorithm to create 2D maps. Integrated the Nav2 navigation system to develop autonomous navigation capabilities for the hexapod robot within the map.
        </p>
        <p>
          - Phase 3: Developed camera-based AprilTag detection for positioning. After LiDAR navigation to the target point, the system activates camera scanning of AprilTags for final movement calibration.
        </p>
        <p>
          - Super Controller: Developed an innovative multi-robot control system using the "What You See is What You Control" concept, improving operational efficiency.
        </p>
        <p>
          Additionally, I actively participate in guiding UROP (Undergraduate Research Opportunity Program) students, imparting robotics theory and directing students in laboratory projects.
        </p>
        <p>
          Hard Skills: C++, Python, Control Systems, ROS2, SLAM, Navigation, AprilTag,
        </p>
        <p>
          Soft Skills: Problem Solving, Collaboration
        </p> */}
      </div>
    ),
  },
  {
    date: "Nov 2022 - Jan 2023",
    location: "Aeroprobing Inc.",
    title: "Assistant Engineer (intern)",
    content: (
      <div className="flex flex-col gap-4">

      </div>
    ),
  },
  {
    date: "Jul 2021 - Aug 2022",
    location: "HIWIN TECHNOLOGIES CORPORATION",
    title: "Summer Intern",
    content: (
      <div className="flex flex-col gap-4">

      </div>
    ),
  },
];

export const skill: TimelineItem[] = [
  {
    date: "",
    location: "Mandarin, English",
    title: "Language",
    content: (
      <div className="flex flex-col gap-4">
        <p>
          {/* English: TOEIC: 925, TOEFL: 91, International volunteer, English
          tutor, School international affair department volunteering */}
        </p>
      </div>
    ),
  },
  {
    date: "",
    location: `C, Python, Matlab, C++`,
    title: "Computer Language",
    content: (
      <div className="flex flex-col gap-4">

      </div>
    ),
  },
  {
    date: "",
    location: ``,
    // , Babylon.js, Three.js, WebGL, WebGPU
    title: "Software Development",
    content: (
      <div className="flex flex-col gap-2">

      </div>
    ),
  },

];

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
  // {label: 'Instagram', Icon: InstagramIcon, href: 'mailto:brucelin90620@gmail.com'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
