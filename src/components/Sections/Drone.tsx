import Image from 'next/image';
import React, {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import airsim from '../../images/portfolio/drone/airsim.png';
import drone_3d from '../../images/portfolio/drone/drone_3d.png';
import drone from '../../images/portfolio/drone/portfolio_drone.jpg';
import real from '../../images/portfolio/drone/real.jpg';
import Section from '../Layout/Section';

const DroneProject: FC = memo(() => {
  return (
    <Section className="bg-neutral-900 text-white" sectionId={SectionId.None}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 sm:py-16 lg:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Undergraduate Project: Autonomous Drone
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 text-center max-w-2xl mx-auto">
            A quadcopter UAV project that combines advanced flight control with computer vision capabilities, designed to tackle complex navigation tasks and demonstrate real-world applications in autonomous flight.
          </p>
          <div className="flex justify-center">
            <Image
              alt="Drone Project Overview"
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              src={drone}
              width={600}
            />
          </div>
        </div>

        {/* Motivation Section */}
        <div className="space-y-12 sm:space-y-16">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
                Project Motivation
              </h2>
              <div className="space-y-4">
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                Drone applications are expanding rapidly, from entertainment to military and industrial uses, driving market growth. Taiwan's advantage in drone development stems from its strong ICT industry, providing key components like batteries, chips, cameras, and antennas. This mature supply chain offers cost benefits in R&D. Our research focuses on integrating stable drone flight and image recognition with ROS (Robot Operating System). We aim to demonstrate our achievements by completing the TDK flying competition course. This project leverages Taiwan's ICT strengths to advance drone technology, particularly in flight stability and computer vision, potentially leading to broader industrial applications and innovations in the drone sector.
                </p>
                {/* <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-300">
                  <li><span className="text-purple-400 font-semibold">Industry Growth:</span> From entertainment to military and industrial applications, driving market expansion</li>
                  <li><span className="text-purple-400 font-semibold">Taiwan's Advantage:</span> Leveraging strong ICT industry for key components like batteries, chips, cameras, and antennas</li>
                  <li><span className="text-purple-400 font-semibold">Research Focus:</span> Integration of stable flight control and image recognition using ROS (Robot Operating System)</li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>

        {/* Teamwork Section */}
        <div className="space-y-12 sm:space-y-16 mt-12">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
                Development Process
              </h2>
              <div className="space-y-4">
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  The project development was divided into two main phases:
                </p>
                <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-300">
                  <li><span className="text-purple-400 font-semibold">Phase 1:</span> Mechanical design, including Solidworks modeling and 3D printing</li>
                  <li><span className="text-purple-400 font-semibold">Phase 2:</span> Programming implementation using ROS, MAVROS, and Airsim for testing</li>
                </ul>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="aspect-video">
                    <Image
                      alt="LiDAR Localization 1"
                      className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
                      height={300}
                      src={drone_3d}
                      width={450}
                    />
                  </div>
                  <div className="aspect-video">
                    <Image
                      alt="LiDAR Localization 2"
                      className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
                      height={300}
                      src={airsim}
                      width={450}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-12 sm:space-y-16 mt-12">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
                Project Achievements
              </h2>
              <div className="space-y-4">
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  Successfully developed a quadcopter drone with advanced capabilities:
                </p>
                <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-300">
                  <li><span className="text-purple-400 font-semibold">Hardware Integration:</span> Pixhawk 4 Mini flight control, Jetson Xavier NX, optical flow sensor, LiDAR, and IMX219-120 Camera</li>
                  <li><span className="text-purple-400 font-semibold">Image Recognition:</span> Advanced segmentation techniques to reduce shadow interference</li>
                  <li><span className="text-purple-400 font-semibold">Flight Stability:</span> Enhanced indoor navigation using optical flow and LiDAR for GPS-denied environments</li>
                </ul>
                <div className="flex justify-center my-6">
                  <div className="w-2/3 sm:w-2/3 md:w-1/2">
                    <Image
                      alt="Real Drone Implementation"
                      className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-full h-auto"
                      src={real}
                      width={500}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Project Video */}
        <div className="space-y-12 sm:space-y-16 mt-12">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-blue-400 text-center">
                Project Demonstration
              </h2>
              <div className="relative w-full" style={{paddingBottom: '50%'}}>
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                  src="https://www.youtube.com/embed/SnAItE21r1Y?si=ugppkcLb9JNmK2lK"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
});

DroneProject.displayName = 'DroneProject';
export default DroneProject;