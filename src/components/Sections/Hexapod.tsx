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
// import lidarimage from '../../images/portfolio/hexapod/lidar_base.jpg';
import joyimage from '../../images/portfolio/hexapod/move.png';
import nav2_rvizimage from '../../images/portfolio/hexapod/nav2_rviz.png';
// import Hexapod_1 from '../../images/portfolio/hexapod/portfolio_hexapod.jpg';
import rviz2_mapimage from '../../images/portfolio/hexapod/rviz2_map.png';
import tf_treeimage from '../../images/portfolio/hexapod/tf_tree.png';
import Section from '../Layout/Section';

const Hexapod: FC = memo(() => {
  return (
    <Section className="bg-neutral-800 text-white" sectionId={SectionId.None}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">CSL UROP Project : Hexapod Robot (Personal Project)</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6">
          A comprehensive ROS2-based hexapod robot implementation featuring LiDAR-based mapping, AprilTag tracking capabilities, and manual control interface. The system integrates autonomous navigation with visual marker following and remote operation functionality, including features such as self-charging capabilities.
          </p>
          <div className="flex justify-center">
            <div className="relative w-[600px] aspect-video">
              <iframe
                src="https://www.youtube.com/embed/5kGbZkwkKU0?si=W-_teUgqTQTAJ9DH"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <div className="rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">Motivation</h2>
              <p className="text-xs sm:text-xs md:text-base mb-3">
                This project was conducted as part of the Undergraduate Research Opportunity Program (UROP) at City Science Lab @ Taipei Tech, in collaboration with MIT Media Lab. While I had prior robotics experience, this marked my first venture into legged robotics and ROS2 integration. The project provided an excellent opportunity to develop a deeper understanding of Simultaneous Localization and Mapping (SLAM) and autonomous navigation systems.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">ROS2 Implementation & Control Interface</h2>
              <p className="text-xs sm:text-sm md:text-base mb-3">
              The initial phase involved developing Python-based control systems for the hexapod's movement, including linear and angular motion control along with stance management. I subsequently implemented a ROS2 node architecture to handle cmd_vel and joy topic subscriptions, enabling robot control through ROS2's Data Distribution Service (DDS).
              </p>
              <div className="flex justify-center">
              <Image
                alt="Drone"
                className="rounded-lg"
                height={250}
                src={joyimage}
              />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 ">SLAM Integration</h2>
              <p className="text-xs sm:text-sm md:text-base mb-3 ">
              The SLAM implementation presented unique challenges, as many conventional algorithms rely on sensor fusion between IMU and camera data for optimal odometry estimation. Through extensive testing of various solutions including Lio-SAM, Gmapping, and Cartographer, I selected Cartographer as the most suitable option due to its robust performance without odometry requirements. The system was successfully tested by mapping our laboratory environment using joystick-controlled navigation.
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div className="relative aspect-[5/3]">
                  <Image
                    alt="Drone"
                    className="rounded-lg object-cover w-full h-full"
                    height={200}
                    src={joymoveimage}
                    width={400}
                  />
                </div>
                <div className="relative aspect-[5/3]">
                  <Image
                    alt="Drone"
                    className="rounded-lg object-cover w-full h-full"
                    height={200}
                    src={rviz2_mapimage}
                    width={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">Navigation System</h2>
              <p className="text-xs sm:text-sm md:text-base mb-3">
              The navigation implementation required establishing a comprehensive tf tree for ROS2's Navigation2 framework. I utilized AMCL (Adaptive Monte Carlo Localization) for map-to-odometry transformations and implemented laser_scan_matcher for LiDAR-based odometry calculation. The spatial relationship between the base_link and laser frames was defined using static_transform_publisher. This configuration enabled successful deployment of the Nav2 package, allowing for autonomous navigation to designated waypoints within the mapped environment.
              </p>
              <div className="flex justify-center mb-4">
              <Image
                alt="Drone"
                className="rounded-lg"
                height={200}
                src={nav2_rvizimage}
                width={400}
              />
              </div>
              <div className="flex justify-center">
              <Image
                alt="Drone"
                className="rounded-lg"
                height={200}
                src={tf_treeimage}
                width={600}
              />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">AprilTag Integration</h2>
              <p className="text-xs sm:text-sm md:text-base mb-3">
              To enhance the robot's capabilities, I implemented AprilTag-based localization and tracking. AprilTag, developed at the University of Michigan, functions as a simplified 2D barcode system that provides both identification and pose estimation. The system was configured to maintain a specified relative position to detected AprilTags, enabling dynamic target following behavior.
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div className="relative aspect-[5/3]">
                  <Image
                    alt="Drone"
                    className="rounded-lg object-cover w-full h-full"
                    height={200}
                    src={apriltag_following}
                    width={400}
                  />
                </div> 
                <div className="relative aspect-[5/3]">
                  <Image
                    alt="Drone"
                    className="rounded-lg object-cover w-full h-full"
                    height={200}
                    src={apriltag_following2}
                    width={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <div className="rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">System Integration</h2>
              <p className="text-xs sm:text-sm md:text-base mb-3">
                The final implementation incorporated all developed functionalities through a priority-based control system using the twist_mux node to manage multiple cmd_vel sources:
              </p>
              <ul className="space-y-1 ml-4 text-xs sm:text-sm md:text-base">
                <li>Priority 1: Joystick control (highest priority) - ensuring operator override capability</li>
                <li>Priority 2: AprilTag following behavior</li>
                <li>Priority 3: Autonomous navigation</li>
              </ul>
              <div className="flex justify-center">
              <Image
                alt="Drone"
                className="rounded-lg"
                height={200}
                src={final_flow}
                width={600}
              />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <p className="text-sm sm:text-sm md:text-base mb-3">
              The robot's operational state is indicated through LED feedback:
              </p>
              <ul className='space-y-1 ml-4 text-sm sm:text-sm md:text-base' list-style-type="lower-roman">
                <li list-style-type="lower-roman" >Green: Standard operation mode</li>
                <li list-style-type="lower-roman">Blue: Active navigation state</li>
                <li list-style-type="lower-roman ">Green (return): Navigation completion</li>
              </ul>
              <p className="text-xs sm:text-sm md:text-base mb-3 space-y-4">
              This allows seamless transitions between manual control, navigation tasks, and AprilTag following behaviors while maintaining system stability and user control.
              </p>
              <div className="grid grid-cols-3 gap-2">
                <div className="aspect-square">
                  <Image
                    alt="Drone"
                    className="rounded-lg object-cover w-full h-full"
                    height={200}
                    src={final_1}
                    width={200}
                  />
                </div>
                <div className="aspect-square">
                  <Image
                    alt="Drone"
                    className="rounded-lg object-cover w-full h-full"
                    height={200}
                    src={final_2}
                    width={200}
                  />
                </div>
                <div className="aspect-square">
                  <Image
                    alt="Drone"
                    className="rounded-lg object-cover w-full h-full"
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
    </Section>
  );
});

Hexapod.displayName = 'Hexapod';
export default Hexapod;