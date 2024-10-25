import Image from 'next/image';
import React, {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import curl_state from '../../images/portfolio/pangolin/curl_state.jpg';
// import hardware_framework from '../../images/portfolio/pangolin/hardware_framework.jpg';
import mechanical from '../../images/portfolio/pangolin/mechanical.png';
// import main from '../../images/portfolio/triceratops/main.png';
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
import move from '../../images/portfolio/triceratops/move.png';
import apriltag_localization_test from '../../images/portfolio/triceratops/apriltag_localization_test.gif';
import isaac_ros_vslam from '../../images/portfolio/triceratops/isaac_ros_vslam.gif';
import Section from '../Layout/Section';

const Pangolin: FC = memo(() => {
  return (
    <Section className="bg-neutral-800 text-white" sectionId={SectionId.None}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <h1 className="text-4xl font-bold mb-4">Bionic Robot - Triceratops</h1>
          <p className="text-xl text-gray-300 mb-8">
          To enable autonomous and safe indoor mobility for the robot, we enhanced its environmental awareness by implementing a Realsense D435 depth camera. Through the integration of Nvidia Isaac ROS VSLAM and AprilTag SLAM technologies, the robot gained the ability to create real-time environmental maps and accurately determine its position. Finally, by incorporating the Nav2 navigation system, we achieved the robot's capability to independently plan routes, avoid obstacles, and successfully reach target destinations.
          </p>
          <div className="flex justify-center">
          <Image
                alt="Drone"
                className="rounded-lg"
                src={move}
                width={600}
              />
          </div>
        </div>

        <div className="space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Isaac ROS VSLAM</h2>
              <p className="mb-4">
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


        <div className="space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">AprilTag localization system & Nav2</h2>
              <p className="mb-4">
              The AprilTag localization system determines a robot's position through a series of coordinate transformations. 
              When the system detects an AprilTag, it utilizes two key transformations: 
              the <strong>base_to_tag</strong> transform obtained from camera detection that represents the relationship between the robot's base and the tag, 
              and the <strong>map_to_tag</strong> transform loaded from configuration files that defines the tag's known position in the map. 
              By inverting the <strong>base_to_tag</strong> transform and multiplying it with the map_to_tag transform, 
              the system uses the AprilTag as a reference point to effectively bridge the robot's local coordinate system with the global map coordinate system, 
              thereby calculating the robot's precise position within the map frame.
              </p>
              <p className="mb-4">
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
          <h2 className="text-2xl font-semibold mb-4 text-center">Final Project Video</h2>
          <div className="relative w-full" style={{paddingBottom: '50%'}}>
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/IC6jLG2WF_c?si=2A8UCLnNUXzSvug5"
            ></iframe>
          </div>
        </div>

        {/* <div className="space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Motivation</h2>
              <p className="mb-4">
                This is my UROP(Undergrade Reasearch Opportunity Program) project at City Science Lab @ Taipei Tech / a coorperation with MIT Media Lab.
                I really like any kind of robots, but it is my first time to have the project with legged robot and integrate ROS2 on this hexapod robot. I want to know the fundamental for the SLAM and Navigation ,therefore, I join the CSL UROP project.
              </p>
            </div>
          </div>
        </div>

        Developed a biomimetic pangolin quadruped robot in collaboration with a designer. 
    Responsible for electrical and control systems using Nvidia Orin Nano and Dynamixel servos. 
    Integrated Realsense D435 camera with Nvidia Isaac ROS VSLAM and AprilTag SLAM for precise indoor localization. 
    Implemented autonomous navigation using Nav2 system.

    
        <div className="space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">ROS2 & Joystick Control</h2>
              <p className="mb-4">
              First, I used python to control this robot and made it can move e.g. linear and angular move control and stnace control. Then I create a node for subscribe the cmd_vel and joy, so that I can get the joy data and twist msg through ROS2 DDS to control this robot.
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
              <h2 className="text-2xl font-semibold mb-4">Mechnical Design & 3D Printer</h2>
              <p className="mb-4">
              Then I had to add a Lidar to do the SLAM thing, so I used the 3D printer the print a LiDAR base.
              </p>
              <div className="flex justify-center">
              <Image
                  alt="Drone"
                  className="rounded-lg"
                  height={200}
                  src={lidarimage}
                  width={400}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">SLAM</h2>
              <p className="mb-4">
              I face some problem when I search how to do the SLAM because most of the algorithms for SLAM need IMU or Camera to fusion the odometry to make the map better. So I learn how to revise the parameter to choose whehter I need the IMU or Camera.

I try a lot of algorithms ex: Lio-SAM, Gmapping, Cartographer. I choose the Cartographer to be my result, because I don't have odometry. So Cartographer is the better choose. I used the joystick to control the hexapod robot moving around my Lab and using Cartographer to SLAM building the map for my Lab.
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
              <h2 className="text-2xl font-semibold mb-4">Navigation</h2>
              <p className="mb-4">
              Then I try to do the navigation, if I wanted to use ROS2 support navigation package(Navigation2), I need to create the tf tree. The map to odom I used the AMCL, and I use laser_scan_matcher this algorithm to use Lidar calculate the odometry of the robot. And then I used a static_transform_publisher to define the relation between base_link and laser.

Fortunately, I could launch the Nav2 package and made this robot go to any destination in the map.
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
              <h2 className="text-2xl font-semibold mb-4">AprilTag Control</h2>
              <p className="mb-4">
              Then, I try to think how should I do after navigation, my director recommand me can try AprilTag things. So I try to let the robot can localize through AprilTag, and conbine the control command to make the robot move to a fixed distance relative to AprilTag. So I can move the AprilTag and the robot can following the AprilTag.

AprilTag Developed at the University of Michigan, AprilTag is like a 2D barcode or a simplified QR Code. It contains a numeric ID code and can be used for location and orientation.
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
              <h2 className="text-2xl font-semibold mb-4">Final</h2>
              <p className="mb-4">
              Finally, I conbine the every function I create above. And use twist_mux node to manage any kind of cmd_vel topic, give each one a priority. Fisrt is the joystick, I need to make sure I can control the robot any time I wnat. Second is the AprilTag. Third is the Navigation.
              </p>
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
              So I can control the robot through joystick fisrt, and then change to the navigation mode its LED light would change to blue when it is navgating. Then it will change back to green when it is in the destination. Then the robot will change to AprilTag mode the search the AprilTag and then following the Tag.
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
        </div> */}
      </div>
    </Section>
  );
});

Pangolin.displayName = 'About';
export default Pangolin;