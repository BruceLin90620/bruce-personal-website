import Image from 'next/image';
import React, {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import apriltag_localization_test from '../../images/portfolio/triceratops/apriltag_localization_test.gif';
import isaac_ros_vslam from '../../images/portfolio/triceratops/isaac_ros_vslam.gif';
import Section from '../Layout/Section';

const Triceratops: FC = memo(() => {
  return (
    <Section className="bg-neutral-900 text-white" sectionId={SectionId.None}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 sm:py-16 lg:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Bio-Inspired Robot: Triceratops (VSLAM)
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 text-center max-w-2xl mx-auto">
            To enable autonomous and safe indoor mobility for the robot, we enhanced its environmental awareness by implementing a Realsense D435 depth camera. Through the integration of Nvidia Isaac ROS VSLAM and AprilTag SLAM technologies, the robot gained the ability to create real-time environmental maps and accurately determine its position.
          </p>
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl aspect-video">
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                src="https://www.youtube.com/embed/dL-FF7bwwxU?si=c8tTuZ_QIrHJG_Ez"
              />
            </div>
          </div>
        </div>

        {/* Isaac ROS VSLAM Section */}
        <div className="space-y-12 sm:space-y-16">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
                Isaac ROS VSLAM
              </h2>
              <div className="space-y-4">
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  The Triceratops robot employs an Intel RealSense D435 depth camera with Isaac ROS Visual SLAM for real-time localization. This stereo vision system, combined with the robot's IMU sensor, enables precise Visual-Inertial Odometry through GPU-accelerated feature matching. The solution provides reliable odometry and simultaneous mapping, ideal for GPS-limited indoor environments.
                </p>
                <div className="flex justify-center my-6">
                  <Image
                    alt="Isaac ROS VSLAM"
                    className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                    src={isaac_ros_vslam}
                    width={600}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AprilTag & Nav2 Section */}
        <div className="space-y-12 sm:space-y-16 mt-12">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
                AprilTag Localization System & Nav2
              </h2>
              <div className="space-y-4">
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  The AprilTag localization system determines a robot's position through a series of coordinate transformations. 
                  When the system detects an AprilTag, it utilizes two key transformations: 
                  the <span className="text-purple-400 font-semibold">base_to_tag</span> transform obtained from camera detection that represents the relationship between the robot's base and the tag, 
                  and the <span className="text-purple-400 font-semibold">map_to_tag</span> transform loaded from configuration files that defines the tag's known position in the map.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  The Triceratops robot integrates ROS 2's Nav2 navigation framework, utilizing a DWB (Dynamic Window Based) local planner for real-time obstacle avoidance and global path planning to calculate optimal routes.
                </p>
                <div className="flex justify-center my-6">
                  <Image
                    alt="AprilTag Localization Test"
                    className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                    src={apriltag_localization_test}
                    width={600}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Videos Section */}
        <div className="space-y-12 sm:space-y-16 mt-12">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-blue-400 text-center">
                Demo Videos
              </h2>
              <div className="space-y-12">
                {/* Movement Video */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 text-purple-400 text-center">
                    Triceratops Moving Video
                  </h3>
                  <div className="relative w-full" style={{paddingBottom: '50%'}}>
                    <iframe
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                      src="https://www.youtube.com/embed/M36GWAr3caM?si=r3bjtizAE_vnXU75&mute=1"
                    />
                  </div>
                </div>
                
                {/* Navigation Video */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 text-purple-400 text-center">
                    Visual Navigation Demo Video
                  </h3>
                  <div className="relative w-full" style={{paddingBottom: '50%'}}>
                    <iframe
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                      src="https://www.youtube.com/embed/IC6jLG2WF_c?si=9k66eLOwUuANwsE8"
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

Triceratops.displayName = 'Triceratops';
export default Triceratops;