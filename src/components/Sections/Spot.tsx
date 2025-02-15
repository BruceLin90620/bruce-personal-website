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
          This work presents an advanced inspection system utilizing <span className="text-purple-400 font-semibold">Boston Dynamics' Spot</span> for autonomous industrial monitoring 
          in collaboration with <span className="text-purple-400 font-semibold">TSMC</span>. The system integrates <span className="text-purple-400 font-semibold">Routing System</span>, <span className="text-purple-400 font-semibold">Multi-Map navigation</span>, 
          and  <span className="text-purple-400 font-semibold">digital twin simulation through NVIDIA Isaac Sim</span> to enhance operational efficiency in large-scale environments. 
          By combining these technologies, we establish a scalable, memory-efficient, and highly reliable framework for autonomous industrial inspection.
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

        {/* System Framework Section */}
        <div className="space-y-12 sm:space-y-16 ">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
                System Framework
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300">
              The inspection process begins with user-defined task assignments, which are processed by an intelligent routing system that determines optimal navigation paths. The routing system employs:
              </p>
              <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-300 mt-2">
                  <li><span className="text-purple-400 font-semibold">Traveling Salesman Problem (TSP)</span> for single-robot optimization</li>
                  <li><span className="text-purple-400 font-semibold">Multi-Agent Path Finding (MAPF)</span> for coordinated multi-robot navigation</li>
                </ul>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-2">
              Once optimal routes are established, the navigation commands are relayed to the <span className="text-purple-400 font-semibold">multi-map navigation system</span>, which facilitates seamless movement across different factory sections.
              </p>
              <div className="flex justify-center mt-6">
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

        {/* Map Switching System Section */}
        <div className="space-y-12 sm:space-y-16 mt-12">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
                Map Switching System
              </h2>
              <div className="space-y-4">
              <p className="text-sm sm:text-base md:text-lg text-gray-300">
              Large factory environments pose challenges in handling comprehensive maps. To address this, we developed a map-switching system utilizing AprilTag markers as positional reference points. This system:
              </p>
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
              <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-300 mt-2">
                <li><span className="text-purple-400 font-semibold">Optimizes memory usage</span> by eliminating the need to load an entire large-scale map</li>
                <li><span className="text-purple-400 font-semibold">Enhances scalability</span>, enabling efficient expansion of mapped areas</li>
                <li><span className="text-purple-400 font-semibold">Ensures precise localization</span>, with AprilTags setting Spot’s initial pose after each transition</li>
              </ul>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-2">
              By partitioning large spaces into manageable sub-maps and leveraging AprilTag-assisted positioning, we enable reliable and efficient navigation throughout extensive factory environments.
              </p>
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
              </div>
            </div>
          </div>
        </div>

        {/* LiDAR Localization Section */}
        <div className="space-y-12 sm:space-y-16 mt-12">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
                3D LiDAR Localization
              </h2>
              <div className="space-y-4">
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                Spot employs an onboard 3D LiDAR sensor to continuously scan its surroundings, generating high-resolution point cloud data. This real-time data is cross-referenced with pre-established environmental maps using the <span className="text-purple-400 font-semibold">3D Normal Distributions Transform (NDT)</span> algorithm
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="aspect-video">
                    <Image
                      alt="LiDAR Localization 1"
                      className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
                      height={300}
                      src={spot_lidar_localization}
                      width={450}
                    />
                  </div>
                  <div className="aspect-video">
                    <Image
                      alt="LiDAR Localization 2"
                      className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
                      height={300}
                      src={spot_lidar_localization2}
                      width={450}
                    />
                  </div>
                </div>
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
              <p className="text-sm sm:text-base md:text-lg text-gray-300">
              Beyond physical navigation, Spot has been integrated into a digital twin environment via <span className="text-purple-400 font-semibold">NVIDIA Isaac Sim</span>. This enables:
              </p>
              <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-300 mt-2">
                <li><span className="text-purple-400 font-semibold">Virtual simulation of navigation scenarios</span> to optimize movement strategies before deployment</li>
                <li><span className="text-purple-400 font-semibold">Real-time visualization</span> of waypoints and routing paths</li>
                <li><span className="text-purple-400 font-semibold">Enhanced predictive analysis</span>, improving operational reliability</li>
              </ul>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="aspect-video">
                    <Image
                      alt="LiDAR Localization 1"
                      className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
                      height={300}
                      src={CSL_digital_twin_real}
                      width={450}
                    />
                  </div>
                  <div className="aspect-video">
                    <Image
                      alt="LiDAR Localization 2"
                      className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
                      height={300}
                      src={CSL_digital_twin_sim}
                      width={450}
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