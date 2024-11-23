import Image from 'next/image';
import React, {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import computer from '../../images/portfolio/evpi/computer.png';
import evpi from '../../images/portfolio/evpi/evpi.jpg';
// import demo_hitcon from '../../images/portfolio/evpi/demo_hitcon.png';
import motorcontrol_hhevos from '../../images/portfolio/evpi/motorcontrol_hhevos.jpg';
import pcb from '../../images/portfolio/evpi/pcb.jpg';
// import evpi01 from '../../images/portfolio/evpi_1.jpg';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  return (
    <Section className="bg-neutral-800 text-white" sectionId={SectionId.None}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Autonomous Vehicle - EVπ</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6">
          Collaborated with Foxconn on integrating HHEV.OS into EVπ control system, 
    ensuring compatibility with ROS2 navigation and localization while enhancing security. 
    Responsible for circuit board design and fabrication, including schematic design, PCB layout, and physical production.
          </p>
          <div className="flex justify-center">
          <Image
                alt="Drone"
                className="rounded-lg"
                src={evpi}
                width={600}
              />
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">HHEV.OS</h2>
              <p className="text-xs sm:text-sm md:text-base mb-3">
              HHEV.OS is a middleware designed specifically for automobiles. Its main feature is balancing the performance of various automotive components, achieving real-time communication and stability. This platform provides service containers and functions such as execution, startup, configuration, scheduling, monitoring, and communication management to support the computational needs of different modules like BCM, IVI, ADAS, and VCU.
              </p>
              <p className="text-xs sm:text-sm md:text-base mb-3">
              In automotive software architecture, there is a gradual shift from traditional point-to-point communication towards a service-oriented architecture (SOA). HHEV.OS is an implementation based on the vehicle software SOA architecture, building a foundation of coarse-grained, loosely coupled service systems, laying the groundwork for Software-Defined Cars.
              </p>
              <p className="text-xs sm:text-sm md:text-base mb-3">
              HHEV.OS is implemented based on DDS, using the same communication protocol as the original ROS2-based system architecture of EVpi, thus ensuring high compatibility between the two. In the early stages of research, we redefined the ROS2-based EVpi software architecture according to HHEV.OS's SOA design, and reimplemented system modules such as motor control, UWB, and Zed2 based on HHEV.OS's API. Subsequently, these functions were deployed to Raspberry Pi for stability testing. Currently, EVpi's software system can operate normally while running both ROS2 and HHEV.OS simultaneously.
              </p>
              <div className="flex justify-center">
              <Image
                alt="Drone"
                className="rounded-lg"
                src={motorcontrol_hhevos}
                width={1000}
              />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">Hardware circuit board production</h2>
              <p className="text-xs sm:text-sm md:text-base mb-3">
               Participated in redesigning the circuit system architecture of EVpi, a layered power supply system with a 36V battery as the main power source, to meet the different voltage requirements of various modules. Responsible for producing the required circuit boards in the project, from initial schematic design (including voltage divider circuits, buck modules, fuse design, and CAN bus communication modules) to PCB layout planning, and finally completing the physical circuit board production.
              </p>
              <div className="grid grid-cols-2 gap-10">
              <div className="relative aspect-[5/3]">
              <Image
                alt="Drone"
                className="rounded-lg object-cover w-full h-full"
                src={computer}
                width={200}
              />
              </div>
              <div className="relative aspect-[5/3]">
              <Image
                alt="Drone"
                className="rounded-lg object-cover w-full h-full"
                src={pcb}
                width={400}
              />
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Final Project Video</h2>
          <div className="relative w-full" style={{paddingBottom: '50%'}}>
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/eDP0tDafy4A?si=_4tVsErWvTg7jCFf"
            ></iframe>
          </div>
        </div>


        {/* <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">Event Photos</h2>
              <p className="text-sm sm:text-sm md:text-base mb-3">
              </p>
              <div className="flex justify-center space-x-4">
              <Image
                alt="Drone"
                className="rounded-lg"
                src={demo_hitcon}
                width={200}
              />
              <Image
                alt="Drone"
                className="rounded-lg"
                src={demo_csl}
                width={400}
              />
              </div>
            </div>
          </div>
        </div> */}


      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;