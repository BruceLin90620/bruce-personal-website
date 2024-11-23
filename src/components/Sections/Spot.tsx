import Image from 'next/image';
import React, {FC, memo} from 'react';

import {SectionId} from '../../data/data';
// import apriltag_following from '../../images/portfolio/hexapod/apriltag_following.png';
// import apriltag_following2 from '../../images/portfolio/hexapod/apriltag_following2.png';
// import final_1 from '../../images/portfolio/hexapod/final_1.png';
// import final_2 from '../../images/portfolio/hexapod/final_2.png';
// import final_3 from '../../images/portfolio/hexapod/final_3.png';
// import final_flow from '../../images/portfolio/hexapod/final_flow.png';
// import joymoveimage from '../../images/portfolio/hexapod/jostick_move.png';
// import lidarimage from '../../images/portfolio/hexapod/lidar_base.jpg';
// import joyimage from '../../images/portfolio/hexapod/move.png';
// import nav2_rvizimage from '../../images/portfolio/hexapod/nav2_rviz.png';
// import rviz2_mapimage from '../../images/portfolio/hexapod/rviz2_map.png';
// import tf_treeimage from '../../images/portfolio/hexapod/tf_tree.png';
// import spot from '../../images/portfolio/spot.jpg';
import spot_lidar_localization from '../../images/portfolio/spot/spot_lidar_localization.png';
import spot_lidar_localization2 from '../../images/portfolio/spot/spot_lidar_localization2.png';
import spot_stair from '../../images/portfolio/spot/spot_stair.jpg';
import switch_map_framework from '../../images/portfolio/spot/switch_map_framework.png';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  return (
    <Section className="bg-neutral-800 text-white" sectionId={SectionId.None}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Boston Dynamics Spot</h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6">
          This project focuses on implementing Boston Dynamics' Spot robot for automated inspection tasks in industrial environments. Under strict cybersecurity regulations, we have developed an advanced automated site inspection and remote monitoring system. This system aims to enhance automation levels and monitoring efficiency in industrial environments, bringing significant operational benefits and competitive advantages to enterprises.
          </p>
          <div className="flex justify-center">
          <Image
                alt="Drone"
                className="rounded-lg w-full max-w-2xl h-auto"
                // height={200}
                src={spot_stair}
                width={600}
              />
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
          <div className="p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">lidar localizaioon</h2>
              <p className="text-xs sm:text-sm md:text-base mb-3">
              Spot uses its onboard LiDAR sensor to scan the surrounding environment in real-time, generating precise three-dimensional point cloud data. The system compares these real-time collected 3D point cloud information with pre-established environmental maps. Through the 3D NDT (Normal Distributions Transform) algorithm, Spot can accurately calculate its position and orientation in space.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <Image
                alt="Drone"
                className="rounded-lg w-full md:w-1/2 h-auto"
                // height={350}
                src={spot_lidar_localization}
                width={450}
              />
              <Image
                alt="Drone"
                className="rounded-lg w-full md:w-1/2 h-auto"
                // height={350}
                src={spot_lidar_localization2}
                width={450}
              />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">switch map system</h2>
              <p className="text-xs sm:text-sm md:text-base mb-3">
              To address the challenge of loading complete maps in large factory environments, we developed a map switching system that utilizes AprilTag markers as Spot's initial position reference points across different maps. The system automatically switches to corresponding area maps based on Spot's current location, while strategically placed AprilTag markers serve as reference points to ensure accurate positioning during map transitions. This solution not only reduces the system's computational load but also enhances navigation accuracy and reliability. By dividing large spaces into smaller area maps and integrating AprilTag positioning capabilities, we successfully achieved seamless navigation for Spot throughout extensive factory environments.
              </p>
              <div className="flex justify-center">
                <Image
                alt="Drone"
                className="rounded-lg w-full max-w-4xl h-auto"
                src={switch_map_framework}
                width={900}
                />
          </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">Video</h2>
              <p className="text-xs sm:text-sm md:text-base mb-3">
              </p>
              <div className="relative w-full" style={{paddingBottom: '50%'}}>
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/ZL_bb400D3o?si=lHmiUasgPyHoBmuP"
                ></iframe>
              </div>  
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;