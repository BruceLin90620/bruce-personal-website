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
import rviz2_mapimage from '../../images/portfolio/hexapod/rviz2_map.png';
import tf_treeimage from '../../images/portfolio/hexapod/tf_tree.png';
import Hexapod_1 from '../../images/portfolio/Hexapod_1.jpg';
import Section from '../Layout/Section';

const Hexapod: FC = memo(() => {
  return (
    <Section className="bg-neutral-800 text-white" sectionId={SectionId.None}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <h1 className="text-4xl font-bold mb-4">Hexapod Robot Project</h1>
          <p className="text-xl text-gray-300 mb-8">
          A comprehensive ROS2-based hexapod robot implementation featuring LiDAR-based mapping, AprilTag tracking capabilities, and manual control interface. The system integrates autonomous navigation with visual marker following and remote operation functionality, including features such as self-charging capabilities.
          </p>
          <div className="flex justify-center">
          <Image
                alt="Drone"
                className="rounded-lg"
                src={Hexapod_1}
                width={600}
              />
          </div>
        </div>

        <div className="space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Motivation</h2>
              <p className="mb-4">
              This project was conducted as part of the Undergraduate Research Opportunity Program (UROP) at City Science Lab @ Taipei Tech, in collaboration with MIT Media Lab. While I had prior robotics experience, this marked my first venture into legged robotics and ROS2 integration. The project provided an excellent opportunity to develop a deeper understanding of Simultaneous Localization and Mapping (SLAM) and autonomous navigation systems.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">ROS2 Implementation & Control Interface</h2>
              <p className="mb-4">
              The initial phase involved developing Python-based control systems for the hexapod's movement, including linear and angular motion control along with stance management. I subsequently implemented a ROS2 node architecture to handle cmd_vel and joy topic subscriptions, enabling robot control through ROS2's Data Distribution Service (DDS).
              </p>
              <div className="flex justify-center">
              <Image
                alt="Drone"
                className="rounded-lg"
                height={200}
                src={joyimage}
                width={400}
              />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">SLAM Integration</h2>
              <p className="mb-4">
              The SLAM implementation presented unique challenges, as many conventional algorithms rely on sensor fusion between IMU and camera data for optimal odometry estimation. Through extensive testing of various solutions including Lio-SAM, Gmapping, and Cartographer, I selected Cartographer as the most suitable option due to its robust performance without odometry requirements. The system was successfully tested by mapping our laboratory environment using joystick-controlled navigation.
              </p>
              <div className="flex justify-center space-x-4">
              <Image
                alt="Drone"
                className="rounded-lg"
                height={200}
                src={joymoveimage}
                width={400}
              />
              <Image
                alt="Drone"
                className="rounded-lg"
                height={200}
                src={rviz2_mapimage}
                width={400}
              />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Navigation System</h2>
              <p className="mb-4">
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

        <div className="space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">AprilTag Integration</h2>
              <p className="mb-4">
              To enhance the robot's capabilities, I implemented AprilTag-based localization and tracking. AprilTag, developed at the University of Michigan, functions as a simplified 2D barcode system that provides both identification and pose estimation. The system was configured to maintain a specified relative position to detected AprilTags, enabling dynamic target following behavior.
              </p>
              <div className="flex justify-center space-x-4">
              <Image
                alt="Drone"
                className="rounded-lg"
                height={200}
                src={apriltag_following}
                width={400}
              />
              <Image
                alt="Drone"
                className="rounded-lg"
                height={200}
                src={apriltag_following2}
                width={400}
              />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">System Integration</h2>
              <p className="mb-4">
              The final implementation incorporated all developed functionalities through a priority-based control system using the twist_mux node to manage multiple cmd_vel sources:
              </p>
              <ul className='space-y-2 ml-4' list-style-type="lower-roman">
                <li list-style-type="lower-roman">Priority 1: Joystick control (highest priority) - ensuring operator override capability</li>
                <li list-style-type="lower-roman">Priority 2: AprilTag following behavior</li>
                <li list-style-type="lower-roman">Priority 3: Autonomous navigation</li>
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

        <div className="space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-6">
              <p className="mb-4">
              The robot's operational state is indicated through LED feedback:
              </p>
              <ul className='space-y-2 ml-4' list-style-type="lower-roman">
                <li list-style-type="lower-roman" >Green: Standard operation mode</li>
                <li list-style-type="lower-roman">Blue: Active navigation state</li>
                <li list-style-type="lower-roman ">Green (return): Navigation completion</li>
              </ul>
              <p className="mb-4 space-y-4">
              This allows seamless transitions between manual control, navigation tasks, and AprilTag following behaviors while maintaining system stability and user control.
              </p>
              <div className="flex justify-center space-x-6">
              <Image
                alt="Drone"
                className="rounded-lg"
                height={200}
                src={final_1}
                width={200}
              />
              <Image
                alt="Drone"
                className="rounded-lg"
                height={200}
                src={final_2}
                width={200}
              />
              <Image
                alt="Drone"
                className="rounded-lg"
                height={200}
                src={final_3}
                width={200}
              />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Final Project Video</h2>
          <div className="relative w-full" style={{paddingBottom: '50%'}}>
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/V_spW_6svvg?si=hhJh3jpCkiOVblzl"
            ></iframe>
          </div>
        </div>
      </div>
    </Section>
  );
});

Hexapod.displayName = 'Hexapod';
export default Hexapod;