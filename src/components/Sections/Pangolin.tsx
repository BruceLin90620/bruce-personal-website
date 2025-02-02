import Image from 'next/image';
import React, {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import curl_state from '../../images/portfolio/pangolin/curl_state.jpg';
import hardware_framework from '../../images/portfolio/pangolin/hardware_framework.jpg';
import mechanical from '../../images/portfolio/pangolin/mechanical.png';
import software_framework from '../../images/portfolio/pangolin/software_framework.jpg';
import Section from '../Layout/Section';

const Pangolin: FC = memo(() => {
  return (
    <Section className="bg-neutral-900 text-white" sectionId={SectionId.None}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 sm:py-16 lg:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Bio-Inspired Robot: Pangolin
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 text-center max-w-2xl mx-auto">
            This project integrates biomimetics, software architecture, and control systems to teach students how to use the ROS2 robot operating system for modular system design. It aims to advance hands-on learning and educational tools, providing students with insights into quadruped robot applications.
          </p>
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl aspect-video">
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                src="https://www.youtube.com/embed/qN7IXwsKODI?si=t2n0xto09ZLPDRxR"
              />
            </div>
          </div>
        </div>

        {/* Mechanical Design Section */}
        <div className="space-y-12 sm:space-y-16">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
                Mechanical Design
              </h2>
              <div className="space-y-4">
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  We designed a two-stage quadruped robot base with a standardized chassis housing batteries and electronic control systems. The base uses seven servo motors for leg movement (four), head rotation (two), and body actuation (one). Its modular design allows users to easily change drive mechanisms without altering the chassis structure.
                </p>
                <div className="flex justify-center my-6">
                  <Image
                    alt="Mechanical Design"
                    className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                    src={mechanical}
                    width={400}
                  />
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  A forward underactuated leg mechanism was created using linkage combinations. This design keeps legs vertical when standing, maximizing protection during movement. It provides a cushioning effect when the pangolin robot rights itself after rolling over and uses a swinging motion for walking.
                </p>
                <div className="flex justify-center my-6">
                  <Image
                    alt="Curl State"
                    className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                    src={curl_state}
                    width={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hardware Architecture Section */}
        <div className="space-y-12 sm:space-y-16 mt-12">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
                Electrical Hardware Architecture
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6">
                The hardware architecture integrates signals from IMU and Joystick, routing this information to a Raspberry Pi. This setup enables the activation and control of corresponding motor systems, achieving various intended actions such as head rotation, leg movement, and body bending.
              </p>
              <div className="flex justify-center">
                <Image
                  alt="Hardware Framework"
                  className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                  src={hardware_framework}
                  width={600}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Software Architecture Section */}
        <div className="space-y-12 sm:space-y-16 mt-12">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
                Software Architecture
              </h2>
              <div className="space-y-4">
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  The software architecture utilizes ROS2 to modularize and separate various functional components, allowing them to operate independently. Data transmission is achieved through DDS, resulting in a highly scalable and easily maintainable architecture.
                </p>
                <div className="flex justify-center my-6">
                  <Image
                    alt="Software Framework"
                    className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                    src={software_framework}
                    width={600}
                  />
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  We conducted systematic research to propose gait design solutions suitable for the pangolin robot, ensuring stable and smooth movement during forward, backward, and rotational motions. Inverse kinematics calculations determine the required angles for each motor, ensuring precise control for the designed gait patterns.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* My Work Section */}
        <div className="space-y-12 sm:space-y-16 mt-12">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
                My Work
              </h2>
              <ul className="space-y-4">
                <li className="text-sm sm:text-base md:text-lg text-gray-300">
                  <span className="font-semibold text-purple-400">Software Architecture:</span> Architected ROS2-based software system with modular nodes for motor control, sensor integration, and motion planning.
                </li>
                <li className="text-sm sm:text-base md:text-lg text-gray-300">
                  <span className="font-semibold text-purple-400">Electrical System:</span> Developed complete electrical system and communication protocols between Raspberry Pi and peripheral components.
                </li>
                <li className="text-sm sm:text-base md:text-lg text-gray-300">
                  <span className="font-semibold text-purple-400">Motion Control:</span> Implemented robot motion algorithms for walking gaits, rolling behavior, and self-righting capabilities.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

Pangolin.displayName = 'Pangolin';
export default Pangolin;