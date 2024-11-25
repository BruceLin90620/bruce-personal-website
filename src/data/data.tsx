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
import heroImage from '../images/background.jpg';
import porfoliodrone from '../images/portfolio/drone/portfolio_drone.jpg';
import porfolioevpi from '../images/portfolio/evpi/portfolio_evpi.jpg';
import porfolioHexapod_1 from '../images/portfolio/hexapod/portfolio_hexapod.jpg';
import porfoliopangolin from '../images/portfolio/pangolin/portfolio_pangolin.jpg';
import porfolioPBL_3 from '../images/portfolio/pbl/portfolio_PBL.png';
import porfoliospot from '../images/portfolio/spot/portfolio_spot.jpg';
import porfoliosupercontroller from '../images/portfolio/supercontroller/portfolio_SuperController.png';
import porfoliotriceratops from '../images/portfolio/triceratops/portfolio_triceratops.jpg';
import profilepic from '../images/profile_picture.jpg';
import {
  About,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
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
      href: '/Resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
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
    {label: 'Employment', text: 'Researcher at MIT City Science Lab@Taipei Tech', Icon: BuildingOffice2Icon},
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
    title: "Large-Scale Inspection System : Spot",
    description: `An industrial inspection system was developed using Boston Dynamics' Spot. Implementing SLAM and Navigation via Spot SDK on ROS2, it features remote monitoring through a visualization interface. A Spot simulation in Isaac Sim validates algorithms and creates a Digital Twin.`,
    url: "spot",
    image: porfoliospot,
    tech: "Python, ROS2, GraphNav",
  },
  {
    title: "Autonomous Vehicle : EVπ",
    description: `EVπ is an open-source, modular platform for autonomous vehicle research. Its key feature is customizable hardware and software, adapting to specific research needs. This versatility suits various applications from testing to cybersecurity research in autonomous vehicles.
    `,
    url: "evpi",
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
    title: "Bio-Inspired Robot : Pangolin",
    description: `Develop a modular quadruped pangolin robot using biomimetics and ROS2, capable of walking and rolling. Features include standardized chassis, underactuated legs, detachable shell, and cable-driven tail. The project focuses on gait design, roll-over control, and modular software, offering students a robot development platform.`,
    url: "Pangolin",
    image: porfoliopangolin,
    tech: "Control System、ROS2",
  },

  {
    title: "Bio-Inspired Robot : Triceratops (VSLAM)",
    description: `Developed a biomimetic triceratops robot using ROS2 and computer vision, integrating Realsense D435 camera with Nvidia Isaac ROS VSLAM and AprilTag SLAM for indoor localization, while implementing Nav2 for autonomous navigation capabilities.`,
    url: "Triceratops",
    image: porfoliotriceratops,
    tech: "ROS2、SLAM、Navigation、AprilTag",
  },
  {
    title: "Multi-Robot Control : Super Controller",
    description: `Super Controller introduces "What You See is What You Control" for managing multi-robots. 
    Unlike traditional joystick pairing, users scan tags on robots using cameras and select them to control corresponding robots. 
    This approach aims to improve usability for workers managing multi-robots simultaneously.`,
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
    title: "CSL UROP Project : Hexapod Robot",
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
    title: "Undergraduate Project : Drone",
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
    title: "PBL Competetion : Self-Driving Car",
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
    date: "Sep. 2019 - Jun. 2023",
    location: "National Taipei University of Technology",
    title: "Bachelor of Science in Mechanical Engineering",
    content: (
      <div className="flex flex-col gap-4">
          <ul>
            <li style={{listStyleType: "none"}}>
              <strong>Class Rank:</strong> 2/51
            </li>
            <li style={{listStyleType: "none"}}>
            <strong>Academic Excellence Award: </strong>4 times
            </li>
          </ul>
      </div>
    ),
  },
];
export const awards: TimelineItem[] = [
  {
    date: "2022 Aug.",
    location:
      "Taipei, Taiwan",
    title: "International PBL Competition - Best Team",
    content: (
      <div className="flex flex-col gap-4">
      </div>
    ),
  },
  {
    date: "2018 Aug.",
    location: "Montréal, CA",
    title: "RoboCupJunior CoSpace Rescue Challenge - Semifinal",
    content: (
      <div className="flex flex-col gap-4">
      </div>
    ),
  },
  {
    date: "2017 Jul.",
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
    date: "Jul. 2023 - Present",
    location: "MIT City Science Lab@Taipei Tech",
    title: "Researcher - Robotics Team",
    content: (
      <div className="px-4">
      </div>
    ),
  },
  {
    date: "Feb. 2023 - Jun. 2023",
    location: "MIT City Science Lab@Taipei Tech",
    title: "Undergraduate Research Opportunities Program (UROP)",
    content: (
      <div className="px-4">
      </div>
    ),
  },
  {
    date: "Nov. 2022 - Jan. 2023",
    location: "Aeroprobing Inc.",
    title: "Assistant Engineer Intern",
    content: (
      <div className="">
      </div>
    ),
  },
  {
    date: "Jul. 2021 - Aug. 2022",
    location: "HIWIN Technologies Corporation",
    title: "Summer Intern",
    content: (
      <div className="">
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
    title: "Software Development",
    content: (
      <div className="flex flex-col gap-2">

      </div>
    ),
  },

];

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/BruceLin90620'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/bruce-jung-peng-lin'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/lalalala0620/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
