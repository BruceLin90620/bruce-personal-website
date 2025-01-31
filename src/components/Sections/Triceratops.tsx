import Image from 'next/image';
import React, {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import apriltag_localization_test from '../../images/portfolio/triceratops/apriltag_localization_test.gif';
import isaac_ros_vslam from '../../images/portfolio/triceratops/isaac_ros_vslam.gif';
// import move from '../../images/portfolio/triceratops/triceratops_picture.png';
import Section from '../Layout/Section';

const Pangolin: FC = memo(() => {
  return (
    <Section className="bg-neutral-800 text-white" sectionId={SectionId.None}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Bio-Inspired Robot : Triceratops (VSLAM)</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6">
          To enable autonomous and safe indoor mobility for the robot, we enhanced its environmental awareness by implementing a Realsense D435 depth camera. Through the integration of Nvidia Isaac ROS VSLAM and AprilTag SLAM technologies, the robot gained the ability to create real-time environmental maps and accurately determine its position. Finally, by incorporating the Nav2 navigation system, we achieved the robot's capability to independently plan routes, avoid obstacles, and successfully reach target destinations.
          </p>
          <div className="flex justify-center">
            <div className="relative w-[600px] aspect-video">
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/dL-FF7bwwxU?si=c8tTuZ_QIrHJG_Ez"
              />
            </div>
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">Isaac ROS VSLAM</h2>
              <p className="text-xs sm:text-sm md:text-base mb-3">
              The Triceratops robot employs an Intel RealSense D435 depth camera with Isaac ROS Visual SLAM for real-time localization. This stereo vision system, combined with the robot's IMU sensor, enables precise Visual-Inertial Odometry through GPU-accelerated feature matching. The solution provides reliable odometry and simultaneous mapping, ideal for GPS-limited indoor environments.
              </p>
              <div className="flex justify-center">
              <Image
                alt="Drone"
                className="rounded-lg"
                src={isaac_ros_vslam}
                width={600}
              />
              </div>
            </div>
          </div>
        </div>


        <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">AprilTag localization system & Nav2</h2>
              <p className="text-xs sm:text-sm md:text-base mb-3">
              The AprilTag localization system determines a robot's position through a series of coordinate transformations. 
              When the system detects an AprilTag, it utilizes two key transformations: 
              the <strong>base_to_tag</strong> transform obtained from camera detection that represents the relationship between the robot's base and the tag, 
              and the <strong>map_to_tag</strong> transform loaded from configuration files that defines the tag's known position in the map. 
              By inverting the <strong>base_to_tag</strong> transform and multiplying it with the map_to_tag transform, 
              the system uses the AprilTag as a reference point to effectively bridge the robot's local coordinate system with the global map coordinate system, 
              thereby calculating the robot's precise position within the map frame.
              </p>
              <p className="text-xs sm:text-sm md:text-base mb-3">
              The Triceratops robot integrates ROS 2's Nav2 navigation framework, utilizing a DWB (Dynamic Window Based) local planner for real-time obstacle avoidance and global path planning to calculate optimal routes.
              </p>

              <div className="flex justify-center">
              <Image
                alt="Drone"
                className="rounded-lg"
                src={apriltag_localization_test}
                width={600}
              />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Triceratops Moving Video</h2>
          <div className="relative w-full" style={{paddingBottom: '50%'}}>
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/M36GWAr3caM?si=r3bjtizAE_vnXU75&mute=1"
            ></iframe>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Visual Navigation Demo Video</h2>
          <div className="relative w-full" style={{paddingBottom: '50%'}}>
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/IC6jLG2WF_c?si=9k66eLOwUuANwsE8"
            ></iframe>
          </div>
        </div>
      </div>
    </Section>
  );
});

Pangolin.displayName = 'About';
export default Pangolin;