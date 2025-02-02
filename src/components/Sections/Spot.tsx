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

const SpotProject: FC = memo(() => {
  return (
    <Section className="bg-neutral-900 text-white" sectionId={SectionId.None}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 sm:py-16 lg:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Large-Scale Inspection System: Spot
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 text-center max-w-2xl mx-auto">
            Advanced deployment of Boston Dynamics' Spot robot for automated industrial inspection tasks, featuring enhanced security measures and comprehensive monitoring capabilities for improved operational efficiency.
          </p>
          <div className="flex justify-center">
            <Image
              alt="Spot Robot"
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              src={spot_stair}
              width={600}
            />
          </div>
        </div>

        {/* LiDAR Localization Section */}
        <div className="space-y-12 sm:space-y-16">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
                3D LiDAR Localization
              </h2>
              <div className="space-y-4">
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                Spot uses its onboard LiDAR sensor to scan the surrounding environment in real-time, generating precise three-dimensional point cloud data. The system compares these real-time collected 3D point cloud information with pre-established environmental maps. Through the 3D NDT (Normal Distributions Transform) algorithm, Spot can accurately calculate its position and orientation in space.
                </p>
                {/* <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-300">
                  <li><span className="text-purple-400 font-semibold">Real-time Scanning:</span> Onboard LiDAR sensor generates precise 3D point cloud data</li>
                  <li><span className="text-purple-400 font-semibold">Map Comparison:</span> Real-time point cloud data compared with pre-established maps</li>
                  <li><span className="text-purple-400 font-semibold">Position Calculation:</span> 3D NDT algorithm for accurate spatial positioning</li>
                </ul> */}
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  
                  <Image
                    alt="LiDAR Localization 1"
                    className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                    src={spot_lidar_localization}
                    width={450}
                  />
                  <Image
                    alt="LiDAR Localization 2"
                    className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                    src={spot_lidar_localization2}
                    width={450}
                  />
                </div> */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="aspect-video">
                    <Image
                      alt="LiDAR Localization 1"
                      className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
                      src={spot_lidar_localization}
                      width={450}
                      height={300}
                    />
                  </div>
                  <div className="aspect-video">
                    <Image
                      alt="LiDAR Localization 2"
                      className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
                      src={spot_lidar_localization2}
                      width={450}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Switching System Section */}
        <div className="space-y-12 sm:space-y-16 mt-12">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
                Map Switching System
              </h2>
              <div className="space-y-4">
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                To address the challenge of loading complete maps in large factory environments, we developed a map switching system that utilizes AprilTag markers as Spot's initial position reference points across different maps. The system automatically switches to corresponding area maps based on Spot's current location, while strategically placed AprilTag markers serve as reference points to ensure accurate positioning during map transitions. This solution not only reduces the system's computational load but also enhances navigation accuracy and reliability. By dividing large spaces into smaller area maps and integrating AprilTag positioning capabilities, we successfully achieved seamless navigation for Spot throughout extensive factory environments.
                </p>
                {/* <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-300">
                  <li><span className="text-purple-400 font-semibold">AprilTag Integration:</span> Strategic marker placement for position reference</li>
                  <li><span className="text-purple-400 font-semibold">Dynamic Mapping:</span> Automatic switching between area maps based on location</li>
                  <li><span className="text-purple-400 font-semibold">Optimized Performance:</span> Reduced computational load while maintaining accuracy</li>
                </ul> */}
                <div className="flex justify-center my-6">
                  <div className="w-1/2 sm:w-1/3 md:w-1/2">
                    <Image
                      alt="AprilTag Localization"
                      className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-full h-auto"
                      src={apriltag_localize}
                      width={400}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <Image
                    alt="Map Area 1"
                    className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                    src={map1}
                    width={450}
                  />
                  <Image
                    alt="Map Area 2"
                    className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                    src={map2}
                    width={450}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Framework Section */}
        <div className="space-y-12 sm:space-y-16 mt-12">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
                System Framework
              </h2>
              <div className="flex justify-center">
                <Image
                  alt="System Framework"
                  className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                  src={switch_map_framework}
                  width={900}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Test Videos Section */}
        <div className="space-y-12 sm:space-y-16 mt-12">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-blue-400 text-center">
                System Testing
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-purple-400">Outdoor Testing</h3>
                  <div className="relative w-full aspect-video">
                    <iframe
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                      src="https://www.youtube.com/embed/LI97OdDDBUY?si=qxKzRSyGzX2XXNTA&mute=1"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-purple-400">Indoor Testing</h3>
                  <div className="relative w-full aspect-video">
                    <iframe
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                      src="https://www.youtube.com/embed/IM2RIEQZuBg?si=Bo6UEO0HiOZgwEAB"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Twin Section */}
        <div className="space-y-12 sm:space-y-16 mt-12">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
                City Science Lab Omniverse Digital Twin
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="aspect-video">
                    <Image
                      alt="LiDAR Localization 1"
                      className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
                      src={CSL_digital_twin_real}
                      width={450}
                      height={300}
                    />
                  </div>
                  <div className="aspect-video">
                    <Image
                      alt="LiDAR Localization 2"
                      className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
                      src={CSL_digital_twin_sim}
                      width={450}
                      height={300}
                    />
                  </div>
                </div>
                <div className="relative w-full aspect-video">
                  <iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                    src="https://www.youtube.com/embed/frTH0QERYtQ?si=ro4zKaLa2XaklL_l"
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

SpotProject.displayName = 'SpotProject';
export default SpotProject;