import Image from 'next/image';
import React, {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import apriltag_localize from '../../images/portfolio/spot/apriltag_localize.png';
import CSL_digital_twin_real from '../../images/portfolio/spot/CSL_digital_twin_real.png';
import CSL_digital_twin_sim from '../../images/portfolio/spot/CSL_digital_twin_sim2.png';
import map1 from '../../images/portfolio/spot/map1.png';
import map2 from '../../images/portfolio/spot/map2.png';
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
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Large-Scale Inspection System : Spot</h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6">
          This project focuses on implementing Boston Dynamics' Spot robot for automated inspection tasks in industrial environments. Under strict cybersecurity regulations, we have developed an advanced automated site inspection and remote monitoring system. This system aims to enhance automation levels and monitoring efficiency in industrial environments, bringing significant operational benefits and competitive advantages to enterprises.
          </p>
          <div className="flex justify-center ">
          <Image
                alt="Drone"
                className="rounded-lg w-full max-w-2xl h-auto"
                src={spot_stair}
                width={600}
              />
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
          <div className="p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">3D Lidar Localizaioon</h2>
              <p className="text-xs sm:text-sm md:text-base mb-3">
              Spot uses its onboard LiDAR sensor to scan the surrounding environment in real-time, generating precise three-dimensional point cloud data. The system compares these real-time collected 3D point cloud information with pre-established environmental maps. Through the 3D NDT (Normal Distributions Transform) algorithm, Spot can accurately calculate its position and orientation in space.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <Image
                alt="Drone"
                className="rounded-lg w-full md:w-1/2 h-auto"
                src={spot_lidar_localization}
                width={450}
              />
              <Image
                alt="Drone"
                className="rounded-lg w-full md:w-1/2 h-auto"
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
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">Switch Map System</h2>
              <p className="text-xs sm:text-sm md:text-base mb-3">
              To address the challenge of loading complete maps in large factory environments, we developed a map switching system that utilizes AprilTag markers as Spot's initial position reference points across different maps. The system automatically switches to corresponding area maps based on Spot's current location, while strategically placed AprilTag markers serve as reference points to ensure accurate positioning during map transitions. This solution not only reduces the system's computational load but also enhances navigation accuracy and reliability. By dividing large spaces into smaller area maps and integrating AprilTag positioning capabilities, we successfully achieved seamless navigation for Spot throughout extensive factory environments.
              </p>
              <div className="flex justify-center mb-4">
              <Image
                alt="Drone"
                className="rounded-lg"
                height={200}
                src={apriltag_localize}
                width={400}
              />
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <Image
                alt="Drone"
                className="rounded-lg w-full md:w-1/2 h-auto"
                src={map1}
                width={450}
              />
              <Image
                alt="Drone"
                className="rounded-lg w-full md:w-1/2 h-auto"
                src={map2}
                width={450}
              />
              </div>
              {/* <div className="flex justify-center">
                <Image
                alt="Drone"
                className="rounded-lg w-full max-w-4xl h-auto"
                src={switch_map_framework}
                width={900}
                />
              </div> */}
            </div>
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
          <div className="p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">System Framework</h2>
              {/* <p className="text-xs sm:text-sm md:text-base mb-3">
              Spot uses its onboard LiDAR sensor to scan the surrounding environment in real-time, generating precise three-dimensional point cloud data. The system compares these real-time collected 3D point cloud information with pre-established environmental maps. Through the 3D NDT (Normal Distributions Transform) algorithm, Spot can accurately calculate its position and orientation in space.
              </p> */}
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
          <div className="rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">Test Videos</h2>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <h3 className="text-base sm:text-lg font-semibold mb-2">Outdoor Test</h3>
                  <div className="relative w-full" style={{paddingBottom: '56.25%'}}>
                    <iframe
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/LI97OdDDBUY?si=qxKzRSyGzX2XXNTA&mute=1"
                    ></iframe>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-base sm:text-lg font-semibold mb-2">Indoor Test</h3>
                  <div className="relative w-full" style={{paddingBottom: '56.25%'}}>
                    <iframe
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/IM2RIEQZuBg?si=Bo6UEO0HiOZgwEAB"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">Outdoor Test Video</h2>
              <p className="text-xs sm:text-sm md:text-base mb-3">
              </p>
              <div className="relative w-full" style={{paddingBottom: '50%'}}>
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/LI97OdDDBUY?si=qxKzRSyGzX2XXNTA&mute=1"
                ></iframe>
              </div>  
            </div>
          </div>
        </div> */}

        {/* <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">Indoor Test Video</h2>
              <p className="text-xs sm:text-sm md:text-base mb-3">
              </p>
              <div className="relative w-full" style={{paddingBottom: '50%'}}>
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/IM2RIEQZuBg?si=Bo6UEO0HiOZgwEAB"
                ></iframe>
              </div>  
            </div>
          </div>
        </div> */}

        <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
          <div className="p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">City Science Lab Omniverse Digital Twin</h2>
              <p className="text-xs sm:text-sm md:text-base mb-3">
              
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <Image
                alt="Drone"
                className="rounded-lg w-full md:w-1/2 h-auto"
                src={CSL_digital_twin_real}
                width={450}
              />
              <Image
                alt="Drone"
                className="rounded-lg w-full md:w-1/2 h-auto"
                src={CSL_digital_twin_sim}
                width={450}
              />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">Omniverse Digital Twin Video</h2>
              <p className="text-xs sm:text-sm md:text-base mb-3">
              </p>
              <div className="relative w-full" style={{paddingBottom: '50%'}}>
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/frTH0QERYtQ?si=ro4zKaLa2XaklL_l"
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