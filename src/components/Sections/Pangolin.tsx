import Image from 'next/image';
import React, {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import curl_state from '../../images/portfolio/pangolin/curl_state.jpg';
import hardware_framework from '../../images/portfolio/pangolin/hardware_framework.jpg';
import mechanical from '../../images/portfolio/pangolin/mechanical.png';
import pangolinbot from '../../images/portfolio/pangolin/pangolinbot.jpg';
import software_framework from '../../images/portfolio/pangolin/software_framework.jpg';
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
// import pangolin01 from '../../images/portfolio/pangolin01.jpg';
import Section from '../Layout/Section';

const Pangolin: FC = memo(() => {
  return (
    <Section className="bg-neutral-800 text-white" sectionId={SectionId.None}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Bionic Robot - Pangolin</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6">
          This project integrates biomimetics, software architecture, 
          and control systems to teach students how to use the ROS2 robot operating system for modular system design. 
          It aims to advance hands-on learning and educational tools, 
          providing students with insights into quadruped robot applications while developing their expertise in robot design, 
          software, and control for broader applications.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6">
          The educational aspect guides students in understanding quadruped robots through practical operation of physical robots. 
          Students learn about software architecture and control systems, 
          combining theoretical knowledge with mechanical hardware design. 
          This approach deepens their understanding of robotics technology and its real-world applications.
          </p>
          <div className="flex justify-center">
          <Image
                alt="Drone"
                className="rounded-lg"
                src={pangolinbot}
                width={800}
              />
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-2xl font-semibold mb-4">Mechanical Design</h2>
              <p className="text-sm sm:text-sm md:text-base mb-3">
              We designed a two-stage quadruped robot base with a standardized chassis housing batteries and electronic control systems. 
              The base uses seven servo motors for leg movement (four), head rotation (two), and body actuation (one). 
              Its modular design allows users to easily change drive mechanisms without altering the chassis structure, 
              enabling quick adaptation to different robot types or mechanical animal movement patterns.
              </p>

              <div className="flex justify-center">
              <Image
                alt="Drone"
                className="rounded-lg"
                src={mechanical}
                width={400}
              />
              </div>

              <p className="text-sm sm:text-sm md:text-base mb-3">
              A forward underactuated leg mechanism was created using linkage combinations. 
              This design keeps legs vertical when standing, maximizing protection during movement. 
              It provides a cushioning effect when the pangolin robot rights itself after rolling over and uses a swinging motion for walking. We used 3D printing to develop an optimal foot structure for this walking style, 
              ensuring stable and efficient movement.
              </p>
              <p className="text-sm sm:text-sm md:text-base mb-3">
              The active shell structure is designed as a separate component, 
              allowing for easy replacement or upgrade without affecting the body mechanism's functionality. 
              This design enhances the robot's flexibility and customizability for various application scenarios.
              </p>
              <p className="text-sm sm:text-sm md:text-base mb-3">
              The tail device uses a wire-driven deformation mechanism, 
              enabling diverse tail movements like bending and swinging through precise control of wire tension. 
              This design enhances the robot's expressiveness and functionality, 
              improving its interaction capabilities and entertainment value.
              </p>
              <div className="flex justify-center">
              <Image
                alt="Drone"
                className="rounded-lg"
                src={curl_state}
                width={400}
              />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-2xl font-semibold mb-4">Electrical Hardware Architecture</h2>
              <p className="text-sm sm:text-sm md:text-base mb-3">
              The hardware architecture integrates signals from IMU and Joystick, routing this information to a Raspberry Pi. 
              This setup enables the activation and control of corresponding motor systems, 
              achieving various intended actions such as head rotation, leg movement, and body bending. 
              This architecture provides rich operational possibilities, 
              allowing the robot to flexibly respond to different scenarios and user commands.
              </p>
              <div className="flex justify-center">
              <Image
                alt="Drone"
                className="rounded-lg"
                src={hardware_framework}
                width={600}
              />
              </div>
            </div>
          </div>
        </div>


        <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-2xl font-semibold mb-4">Software Architecture</h2>
              <p className="text-sm sm:text-sm md:text-base mb-3">
              The software architecture utilizes ROS2 to modularize and separate various functional components, 
              allowing them to operate independently. Data transmission is achieved through DDS, 
              resulting in a highly scalable and easily maintainable architecture. 
              Future plans include adding camera and autonomous movement capabilities by simply developing new nodes without disrupting existing functionalities. 
              This modular design facilitates system expansion and upgrades while ensuring flexibility and stability.
              </p>

              <div className="flex justify-center">
              <Image
                alt="Drone"
                className="rounded-lg"
                src={software_framework}
                width={600}
              />
              </div>

              <p className="text-sm sm:text-sm md:text-base mb-3">
              For this four-degree-of-freedom pangolin robot, 
              we developed movement control methods focusing on forward/backward motion and left/right rotation. 
              Due to the limited leg degrees of freedom, 
              gait design methods for large quadruped robots were not applicable.
              </p>
              <p className="text-sm sm:text-sm md:text-base mb-3">
              We conducted systematic research to propose gait design solutions suitable for the pangolin robot, 
              ensuring stable and smooth movement during forward, backward, and rotational motions. 
              Inverse kinematics calculations determine the required angles for each motor, 
              ensuring precise control for the designed gait patterns.
              </p>
              <p className="text-sm sm:text-sm md:text-base mb-3">
              For the rolling and curling actions, we simulated a real pangolin's self-protection behavior. 
              Given the single degree of freedom in each leg, 
              we developed a control system to regulate motor movements for the rolling action. 
              This system adjusts the robot's center of gravity, 
              enabling it to roll in a specific direction when the legs begin to swing and the body becomes unstable.
              </p>
              <p className="text-sm sm:text-sm md:text-base mb-3">
              We also designed a self-righting function, 
              allowing the robot to automatically return to its normal posture after rolling. 
              This control system ensures the pangolin robot can quickly protect itself in dangerous situations, 
              enhancing its adaptability in various environments.
              </p>
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
              src="https://www.youtube.com/embed/PH4HYjgDcOI?si=nBn6wX9GIcoB70RN"
            ></iframe>
          </div>
        </div>

        {/* <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-2xl font-semibold mb-4">Motivation</h2>
              <p className="text-sm sm:text-sm md:text-base mb-3">
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

    
        <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-2xl font-semibold mb-4">ROS2 & Joystick Control</h2>
              <p className="text-sm sm:text-sm md:text-base mb-3">
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

        <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-2xl font-semibold mb-4">Mechnical Design & 3D Printer</h2>
              <p className="text-sm sm:text-sm md:text-base mb-3">
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

        <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-2xl font-semibold mb-4">SLAM</h2>
              <p className="text-sm sm:text-sm md:text-base mb-3">
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

        <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-2xl font-semibold mb-4">Navigation</h2>
              <p className="text-sm sm:text-sm md:text-base mb-3">
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

        <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-2xl font-semibold mb-4">AprilTag Control</h2>
              <p className="text-sm sm:text-sm md:text-base mb-3">
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

        <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-2xl font-semibold mb-4">Final</h2>
              <p className="text-sm sm:text-sm md:text-base mb-3">
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

        <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <p className="text-sm sm:text-sm md:text-base mb-3">
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