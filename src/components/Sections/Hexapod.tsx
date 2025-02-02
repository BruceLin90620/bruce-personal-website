import Image from 'next/image';
import React, {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import apriltag_following from '../../images/portfolio/hexapod/apriltag_following.png';
import apriltag_following2 from '../../images/portfolio/hexapod/apriltag_following2.png';
import final_1 from '../../images/portfolio/hexapod/final_1.png';
import final_2 from '../../images/portfolio/hexapod/final_2.png';
import final_3 from '../../images/portfolio/hexapod/final_3.png';
import final_flow from '../../images/portfolio/hexapod/final_flow.png';
import joymoveimage from '../../images/portfolio/hexapod/jostick_move.png';
import joyimage from '../../images/portfolio/hexapod/move.png';
import nav2_rvizimage from '../../images/portfolio/hexapod/nav2_rviz.png';
import rviz2_mapimage from '../../images/portfolio/hexapod/rviz2_map.png';
import tf_treeimage from '../../images/portfolio/hexapod/tf_tree.png';
import Section from '../Layout/Section';

const Hexapod: FC = memo(() => {
  return (
    <Section className="bg-neutral-900 text-white" sectionId={SectionId.None}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 sm:py-16 lg:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            CSL UROP Project: Hexapod Robot
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 text-center max-w-2xl mx-auto">
            A comprehensive ROS2-based hexapod robot implementation featuring LiDAR-based mapping, AprilTag tracking capabilities, and manual control interface. The system integrates autonomous navigation with visual marker following and remote operation functionality.
          </p>
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl aspect-video">
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                src="https://www.youtube.com/embed/5kGbZkwkKU0?si=W-_teUgqTQTAJ9DH"
              />
            </div>
          </div>
        </div>

        {/* Motivation Section */}
        <div className="space-y-12 sm:space-y-16">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
                Project Background
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300">
                This project was conducted as part of the Undergraduate Research Opportunity Program (UROP) at City Science Lab @ Taipei Tech, in collaboration with MIT Media Lab. While I had prior robotics experience, this marked my first venture into legged robotics and ROS2 integration. The project provided an excellent opportunity to develop a deeper understanding of Simultaneous Localization and Mapping (SLAM) and autonomous navigation systems.
              </p>
            </div>
          </div>
        </div>

        {/* ROS2 Implementation Section */}
        <div className="space-y-12 sm:space-y-16 mt-12">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
                ROS2 Implementation & Control Interface
              </h2>
              <div className="space-y-4">
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  The initial phase involved developing Python-based control systems for the hexapod's movement, including linear and angular motion control along with stance management. I subsequently implemented a ROS2 node architecture to handle cmd_vel and joy topic subscriptions, enabling robot control through ROS2's Data Distribution Service (DDS).
                </p>
                <div className="flex justify-center my-6">
                  <Image
                    alt="Control Interface"
                    className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                    height={250}
                    src={joyimage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SLAM Integration Section */}
        <div className="space-y-12 sm:space-y-16 mt-12">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
                SLAM Integration
              </h2>
              <div className="space-y-4">
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  The SLAM implementation presented unique challenges, as many conventional algorithms rely on sensor fusion between IMU and camera data for optimal odometry estimation. Through extensive testing of various solutions including Lio-SAM, Gmapping, and Cartographer, I selected Cartographer as the most suitable option due to its robust performance without odometry requirements.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <Image
                    alt="Joystick Movement"
                    className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                    src={joymoveimage}
                    width={450}
                  />
                  <Image
                    alt="RVIZ2 Map"
                    className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                    src={rviz2_mapimage}
                    width={450}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation System Section */}
        <div className="space-y-12 sm:space-y-16 mt-12">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
                Navigation System
              </h2>
              <div className="space-y-4">
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  The navigation implementation required establishing a comprehensive tf tree for ROS2's Navigation2 framework. Key components include:
                </p>
                <div className="flex justify-center my-6">
                  <div className="sm:w-1/3 md:w-1/2">
                    <Image
                      alt="AprilTag Localization"
                      className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-full h-auto"
                      src={nav2_rvizimage}
                      width={400}
                    />
                  </div>
                </div>
                <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-300">
                  <li><span className="text-purple-400 font-semibold">AMCL:</span> Adaptive Monte Carlo Localization for map-to-odometry transformations</li>
                  <li><span className="text-purple-400 font-semibold">Laser Scan Matcher:</span> LiDAR-based odometry calculation</li>
                  <li><span className="text-purple-400 font-semibold">Static Transform Publisher:</span> Defining spatial relationships between frames</li>
                </ul>
                <div className="flex justify-center my-6">
                  <div className="w-1/2 sm:w-1/3 md:w-1/3">
                    <Image
                      alt="AprilTag Localization"
                      className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-full h-auto"
                      src={tf_treeimage}
                      width={300}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AprilTag Section */}
        <div className="space-y-12 sm:space-y-16 mt-12">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
                AprilTag Integration
              </h2>
              <div className="space-y-4">
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  To enhance the robot's capabilities, I implemented AprilTag-based localization and tracking. The system maintains a specified relative position to detected AprilTags, enabling dynamic target following behavior.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="aspect-video">
                    <Image
                      alt="AprilTag Following 1"
                      className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
                      height={300}
                      src={apriltag_following}
                      width={400}
                    />
                  </div>
                  <div className="aspect-video">
                    <Image
                      alt="AprilTag Following 2"
                      className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
                      height={300}
                      src={apriltag_following2}
                      width={400}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Integration Section */}
        <div className="space-y-12 sm:space-y-16 mt-12">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
                System Integration
              </h2>
              <div className="space-y-4">
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  The final implementation incorporated all developed functionalities through a priority-based control system using the twist_mux node to manage multiple cmd_vel sources:
                </p>
                <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-300">
                  <li><span className="text-purple-400 font-semibold">Priority 1:</span> Joystick control (highest priority)</li>
                  <li><span className="text-purple-400 font-semibold">Priority 2:</span> AprilTag following behavior</li>
                  <li><span className="text-purple-400 font-semibold">Priority 3:</span> Autonomous navigation</li>
                </ul>
                <div className="my-6">
                  <Image
                    alt="System Flow"
                    className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 mx-auto"
                    height={200}
                    src={final_flow}
                    width={600}
                  />
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  The robot's operational state is indicated through LED feedback:
                </p>
                <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-300">
                  <li><span className="text-purple-400 font-semibold">Green:</span> Standard operation mode</li>
                  <li><span className="text-purple-400 font-semibold">Blue:</span> Active navigation state</li>
                  <li><span className="text-purple-400 font-semibold">Green:</span> Navigation completion</li>
                </ul>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="aspect-square">
                    <Image
                      alt="Final Implementation 1"
                      className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
                      height={200}
                      src={final_1}
                      width={200}
                    />
                  </div>
                  <div className="aspect-square">
                    <Image
                      alt="Final Implementation 2"
                      className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
                      height={200}
                      src={final_2}
                      width={200}
                    />
                  </div>
                  <div className="aspect-square">
                    <Image
                      alt="Final Implementation 3"
                      className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
                      height={200}
                      src={final_3}
                      width={200}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
});

Hexapod.displayName = 'Hexapod';
export default Hexapod;