import Image from 'next/image';
import React, {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import computer from '../../images/portfolio/evpi/computer.jpg';
import evpi from '../../images/portfolio/evpi/evpi.jpg';
import motorcontrol_hhevos from '../../images/portfolio/evpi/motorcontrol_hhevos.jpg';
import pcb from '../../images/portfolio/evpi/pcb.jpg';
import Section from '../Layout/Section';

const EVPi: FC = memo(() => {
  return (
    <Section className="bg-neutral-900 text-white" sectionId={SectionId.None}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 sm:py-16 lg:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Autonomous Vehicle: EVπ
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 text-center max-w-2xl mx-auto">
            Collaborated with Foxconn on integrating HHEV.OS into EVπ control system, ensuring compatibility with ROS2 navigation and localization while enhancing security. Responsible for circuit board design and fabrication, including schematic design, PCB layout, and physical production.
          </p>
          <div className="flex justify-center">
            <Image
              alt="EVπ Vehicle"
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              src={evpi}
              width={600}
            />
          </div>
        </div>

        {/* HHEV.OS Section */}
        <div className="space-y-12 sm:space-y-16">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
                HHEV.OS Integration
              </h2>
              <div className="space-y-4">
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                HHEV.OS is a middleware designed specifically for automobiles. Its main feature is balancing the performance of various automotive components, achieving real-time communication and stability. This platform provides service containers and functions such as execution, startup, configuration, scheduling, monitoring, and communication management to support the computational needs of different modules like BCM, IVI, ADAS, and VCU.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                HHEV.OS is implemented based on DDS, using the same communication protocol as the original ROS2-based system architecture of EVpi, thus ensuring high compatibility between the two. In the early stages of research, we redefined the ROS2-based EVpi software architecture according to HHEV.OS's SOA design, and reimplemented system modules such as motor control, UWB, and Zed2 based on HHEV.OS's API. Subsequently, these functions were deployed to Raspberry Pi for stability testing. Currently, EVpi's software system can operate normally while running both ROS2 and HHEV.OS simultaneously.
                </p>
                {/* <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-300">
                  <li><span className="text-purple-400 font-semibold">Performance Balance:</span> Real-time communication and stability across automotive components</li>
                  <li><span className="text-purple-400 font-semibold">Service Management:</span> Execution, startup, configuration, scheduling, monitoring, and communication management</li>
                  <li><span className="text-purple-400 font-semibold">Module Support:</span> Comprehensive support for BCM, IVI, ADAS, and VCU modules</li>
                </ul> */}
                <div className="flex justify-center my-6">
                  <Image
                    alt="Motor Control HHEV.OS"
                    className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                    src={motorcontrol_hhevos}
                    width={1000}
                  />
                </div>
                {/* <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  Implementation highlights:
                </p>
                <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-300">
                  <li><span className="text-purple-400 font-semibold">DDS-Based:</span> Ensures high compatibility with ROS2-based system architecture</li>
                  <li><span className="text-purple-400 font-semibold">Architecture Redesign:</span> Redefined according to HHEV.OS's SOA principles</li>
                  <li><span className="text-purple-400 font-semibold">Module Implementation:</span> Successfully reimplemented motor control, UWB, and Zed2 systems</li>
                </ul> */}
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
              <div className="grid grid-cols-2 gap-2">
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

      </div>
    </Section>
  );
});

EVPi.displayName = 'EVPi';
export default EVPi;