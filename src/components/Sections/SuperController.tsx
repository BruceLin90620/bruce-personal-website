import Image from 'next/image';
import React, {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import supercontroll_2 from '../../images/portfolio/supercontroller/supercontroll_2.png';
import supercontroll_framework from '../../images/portfolio/supercontroller/supercontroll_framework.png';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  return (
    <Section className="bg-neutral-900 text-white" sectionId={SectionId.None}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 sm:py-16 lg:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Multi-Robot Control: Super Controller
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 text-center max-w-2xl mx-auto">
            The project aims to develop a control interface for ROS2-based devices, enhancing interaction efficiency in multi-robot collaboration scenarios. This interface will enable users to remotely control robots in the future.
          </p>
          <div className="flex justify-center">
            <Image
              alt="Super Controller Interface"
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              height={400}
              src={supercontroll_2}
              width={600}
            />
          </div>
        </div>

        {/* Key Components Section */}
        <div className="space-y-12 sm:space-y-16">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
                The project encompasses the following key components:
              </h2>
              <ul className="space-y-4">
                <li className="text-sm sm:text-base md:text-lg text-gray-300">
                  <span className="font-semibold text-purple-400">1. Remote Control Software:</span> A web-based application designed for ROS2, prioritizing convenience. This software will allow users to access data from ROS2 devices and send control commands remotely using any computer or mobile device.
                </li>
                <li className="text-sm sm:text-base md:text-lg text-gray-300">
                  <span className="font-semibold text-purple-400">2. Control Commands:</span> The remote control software will empower managers to direct robot movements. For instance, they can modify robot routes or instruct robots to navigate to specific locations.
                </li>
                <li className="text-sm sm:text-base md:text-lg text-gray-300">
                  <span className="font-semibold text-purple-400">3. Real-time Data:</span> Sensor data from ROS2 devices will be transmitted to the remote control software in real-time. This information will be visually presented, allowing managers to intuitively understand the status of various devices and robots, facilitating timely responses when necessary.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* System Architecture Section */}
        <div className="space-y-12 sm:space-y-16 mt-12">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 text-blue-400">
                System Architecture:
              </h2>
              <div className="flex justify-center mb-6 sm:mb-8">
                <Image
                  alt="System Architecture"
                  className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                  height={500}
                  src={supercontroll_framework}
                  width={800}
                />
              </div>
              <div className="space-y-4">
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  The multi-robot communication system consists of front-end and back-end components, with data transferred between them via Socket connections. The front-end is a Unity-developed application for smartphones and tablets. This app uses the device's front camera to read AprilTags attached to robots. Users can select these tags to bind the control interface to the corresponding robot.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  Control commands from the front-end are sent through Socket communication to a Socket server on a central Raspberry Pi. This server receives and organizes all control signals before forwarding them to a Zenoh Router. The Zenoh Router connects all robots, enabling inter-robot communication.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  As the laboratory robots are developed using ROS2 middleware, and both ROS2 and Zenoh are DDS systems, we can easily utilize Zenoh's Bridge DDS feature. This allows us to convert ROS messages into Zenoh format and transmit them to target robots.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  This unified communication protocol and platform facilitates convenient and efficient control of various robots, paving the way for more intelligent applications in multi-robot environments.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Project Video Section */}
        <div className="mt-16 sm:mt-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 text-center text-blue-400">
            Final Project Video
          </h2>
          <div className="relative w-full" style={{paddingBottom: '56.25%'}}>
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
              src="https://www.youtube.com/embed/iEp8NJe1Z8A?si=giUsoE4eCEe8Wd-R&mute=1"
            ></iframe>
          </div>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;