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
// import heroImage from '../images/header-background.png';
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
    {label: 'Interests', text: 'Street Dance, Reading, Basketball', Icon: SparklesIcon},
    {label: 'Study', text: 'National Taipei University of Technology', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Researcher at City Science Lab@Taipei Tech, a cooperation with MIT Media Lab', Icon: BuildingOffice2Icon},
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
    title: "Boston Dynamics Spot",
    description: `Developed an automated inspection system using Boston Dynamics' Spot robot for industrial environments. 
    Implemented remote control and autonomous navigation using Graph Nav API. 
    Utilized Lidar for PCD map generation and precise localization via ROS2. Provided a visualization interface for remote monitoring.`,
    url: "spot",
    image: porfoliospot,
    tech: "Python, ROS2, GraphNav",
    // link: [
      // {
      //   text: "Slides",
      //   href: "hexapod",
      // },
      // {
      //   text: "React.js Made Slides Demo",
      //   href: "https://taipei-basin-dashboard.vercel.app/",
      // },
      // {
      //   text: "Facebook Post",
      //   href: "https://www.facebook.com/photo/?fbid=773092807946615&set=pcb.773092944613268",
      // },
    // ],
  },
  {
    title: "Ummanned Vehicle - EVπ",
    description: `Collaborated with Foxconn on integrating HHEV.OS into EVπ control system, 
    ensuring compatibility with ROS2 navigation and localization while enhancing security. 
    Responsible for circuit board design and fabrication, including schematic design, PCB layout, and physical production.
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
    description: `Developed a biomimetic pangolin quadruped robot in collaboration with a designer. 
    Responsible for electrical and control systems using Nvidia Orin Nano and Dynamixel servos. 
    Integrated Realsense D435 camera with Nvidia Isaac ROS VSLAM and AprilTag SLAM for precise indoor localization. 
    Implemented autonomous navigation using Nav2 system.`,
    url: "Pangolin",
    image: porfoliopangolin,
    tech: "Control System、ROS2、SLAM、Navigation、AprilTag",
  },
  {
    title: "Super Controller",
    description: `Super Controller introduces a "What You See is What You Control" concept for managing multiple robots. 
    Unlike traditional joystick pairing, 
    users can scan tags on robots using mobile device cameras and select them to control corresponding robots in the environment. 
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
    description: `Representing school in the PBL competition, 
    unite with Japanese and Taiwanese college students. Combining Arduino, 
    C programming, and mechanical design, create 
    self-propelled car.`,
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
    date: "June 2023",
    location: "National Taipei University of Technology",
    title: "Bachelor of Science in Electronic and Computer Engineering",
    content: (
      <div className="flex flex-col gap-4">
        {/* <p>
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
    date: "2023 Sep",
    location:
      "Organziers: City Science Lab @ Taipei Tech, Foxconn; Co-organizer: MIT Media Lab",
    title: "First Prize in 2023 Science and AI Hackathon - AI on Wheels",
    content: (
      <div className="flex flex-col gap-4">
        {/* <p>
          As a college researcher selected by National Science and Technology
          Council, I conducted a biomedical engineering project which is to
          integrate physiological monitoring functions(heart rate, blood
          pressure and body temperature, etc.) to a mouse in order to analyze
          users' health conditions.
        </p>
        <p>
          I actively contributed to design Digital Signal Algorithms like
          Intrinsic Mode Function (IMF), Infinite Impulse Filter (IIR), and
          Moving Average Filter (MAF) Algorithms to remove Photoplethysmography
          (PPG) artifact noise.
        </p>
        <p>
          Besides, I trained a Deep Neural Network to predict body temperature
          through skin, ambient temperature and humidity
        </p>
        <p>
          Skills: Deep Learning and Machine Learning, Digital Signal Processing,
          Algorithms
        </p> */}
      </div>
    ),
  },
  {
    date: "2022 June",
    location: "National Taipei University of Technology",
    title: "First Prize in College Project Competition",
    content: (
      <div className="flex flex-col gap-4">
        {/* <p>
          Working with a innovative projects including CityGPT, Agent-Based
          Modeling with LLMs, dedicating on laveraging large language models
          with real-time urban data.
        </p>
        <p>
          My research includes large language models, data science(urban data).
          I have developed the system that can overcomes the challenge of
          spatial urban data query and analysis, and vectorize urban data in
          real-time.
        </p>
        <p>
          Skills: Large Language Models, Natural Language Processing, Data
          Science and Engineering
        </p> */}
      </div>
    ),
  },
  {
    date: "June 2022 - Feb 2023",
    location: "National Science and Technology Council",
    title: "Selected as a College Researcher",
    content: (
      <div className="flex flex-col gap-4">
        {/* <p>
          Working with a insightful project in City Science, CityScope,
          dedicating to leveraging data to solve complex problems in modern
          cities. The CityScope project aimed to analyze vast amounts of urban
          data, ranging from transportation patterns to energy consumption, in
          order to gain insights into city dynamics and develop innovative
          solutions.
        </p>
        <p>
          My work include data analysis, data engineering, machine learning,
          deep learning and visualization tools to uncover meaningful patterns
          and trends. This allowed myself to gain insights into the functioning
          of the city, detect inefficiencies, and propose data-driven solutions
          for urban planning and development. Working here not only exposed me
          to cutting-edge research methodologies but also fostered a culture of
          collaboration and innovation.
        </p>
        <p>
          Skills: Problem Solving, Collaboration, Interdisciplinary Research,
          Data Engineering, Data Science, Predictive Modeling, Edge Computing
          Programming, Web Development
        </p> */}
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
        <p>
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
        </p>
      </div>
    ),
  },
  {
    date: "Feburary 2023 - June 2023",
    location: "City Science Lab@Taipei Tech, a cooperation with MIT Media Lab",
    title: "Undergraduate Research Opportunity Program",
    content: (
      <div className="flex flex-col gap-4">
        <p>
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
        </p>
      </div>
    ),
  },
  {
    date: "June 2022 - Feb 2023",
    location: "National Science and Technology Council",
    title: "College Researcher",
    content: (
      <div className="flex flex-col gap-4">
        <p>
          As a college researcher selected by National Science and Technology
          Council, I conducted a biomedical engineering project which is to
          integrate physiological monitoring functions(heart rate, blood
          pressure and body temperature, etc.) to a mouse in order to analyze
          users' health conditions.
        </p>
        <p>
          I actively contributed to design Digital Signal Algorithms like
          Intrinsic Mode Function (IMF), Infinite Impulse Filter (IIR), and
          Moving Average Filter (MAF) Algorithms to remove Photoplethysmography
          (PPG) artifact noise.
        </p>
        <p>
          Besides, I trained a Deep Neural Network to predict body temperature
          through skin, ambient temperature and humidity
        </p>
        <p>
          Skills: Deep Learning and Machine Learning, Digital Signal Processing,
          Algorithms
        </p>
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
        {/* <p>
          Understanding in Mandarin, English, and basic Japanese give me chance
          to actively participate in diverse international volunteer programs
          and serve as an English tutor. These experiences have not only honed
          my language skills but also instilled a deep appreciation for
          cross-cultural communication. Additionally, I had the privilege of
          contributing to my school's international affairs department as a
          dedicated volunteer, where I played an instrumental role in organizing
          and coordinating impactful international events and initiatives.
        </p>
        <p>
          Moreover, my proficiency in basic Japanese allows me to navigate
          everyday situations and effectively communicate in a multicultural
          setting, showcasing my adaptability and eagerness to embrace new
          languages and cultures.
        </p>
        <p>
          The combination of my multilingual abilities and my diverse
          experiences has provided me with a unique perspective and a strong
          aptitude for connecting with individuals from diverse backgrounds. I
          am confident that my linguistic versatility, coupled with my passion
          for fostering intercultural understanding, will contribute to the
          success of [company/organization name]. I am committed to continuously
          expanding my linguistic horizons and making meaningful contributions
          to further enhance communication and collaboration in diverse
          environments.
        </p> */}
      </div>
    ),
  },
  {
    date: "",
    location: `C, Python, Matlab, C++`,
    title: "Computer Language",
    content: (
      <div className="flex flex-col gap-4">
        {/* <p>
          For me backend development is like a vivid book about what I learned
          from courses. In networking, I have to consider IP addressing, TCP/IP,
          UDP, DNS, and HTTP, according to need.
        </p>
        <p>
          It has strong connection with operating systems, like async, process
          management, threading, memory management, file systems, and . To make
          the server scalable, they are all important.
        </p>
        <p>
          Some of my friends like to joke around backend is really easy, since
          stuff we done on course only about CRUD, and my experience in CSL give
          me chance to design real system and consider more beyond that.
        </p>
        <p>
          Recently I have extend my backend knowledge to learn MLOps and DevOps,
          as working on deploy model on API and collect data continuously with
          distributed task scheduler such Airflow.
        </p> */}
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
        {/* <p>
          <span className="h-16 w-16">&#9679;</span>Full-Stack Web Development:
          React, Django, FastAPI, Flask, SocketIO, HTML, CSS
        </p>
        <p>
          <span className="h-16 w-16">&#9679;</span>Artifical
          Intelligence:LLaMA-2, Langchain, OpenAI, Transfomers
        </p>
        <p>
          <span className="h-16 w-16">&#9679;</span>Machine and Deep
          Learning:Tensorflow, Pytorch, Transformers, scikit-learn
        </p>
        <p>
          <span className="h-16 w-16">&#9679;</span>Data Visualization: Mapbox,
          DeckGL, QGIS, Open Street Map
        </p>
        <p>
          <span className="h-16 w-16">&#9679;</span>Database: MySQL, PostgreSQL,
          MongoDB, Pinecone (Vector Database), Neo4j
        </p> */}
        {/* <p>
          In CityScope project, there are many visualizations relating to urban,
          We usually doing the stack with React.js, Redux-Saga, DeckGL, and
          Mapboxgl to integrate with backend and database.
        </p> */}
      </div>
    ),
  },
  // {
  //   date: "",
  //   location: "Postgres, MySQL, MongoDB, Redis, Neo4j, Prisma",
  //   title: "Database Design & Management",
  //   content: (
  //     <div className="flex flex-col gap-4">
  //       <p></p>
  //       <p></p>
  //       <p></p>
  //     </div>
  //   ),
  // },
  // {
  //   date: "",
  //   location: "Tensorflow, Scikit-Learn, Airflow, Kafka, Spark, Hadoop, Pandas",
  //   title: "Data Engineering & Data Science",
  //   content: (
  //     <div className="flex flex-col gap-4">
  //       <p>""""</p>
  //     </div>
  //   ),
  // },
  // {
  //   date: "",
  //   location:
  //     "Linux (Ubuntu), GCP, Git Flow, Github CI / CD, Docker, Nginx, Terraform",
  //   title: "DevOps",
  //   content: (
  //     <div className="flex flex-col gap-4">
  //       <p>""""</p>
  //     </div>
  //   ),
  // },
  // {
  //   date: "",
  //   location: "Babylon.js, Three.js, Unity",
  //   title: "Three Dimension Modeling & Rendering",
  //   content: (
  //     <div className="flex flex-col gap-4">
  //       <p>
  //         I also try 3D rendering before, and there are some difference between
  //         WebGL and Unity Engine, I more prefer to use Three.js for the the
  //         convenience of integrating with React.js.
  //       </p>
  //     </div>
  //   ),
  // },
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
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
