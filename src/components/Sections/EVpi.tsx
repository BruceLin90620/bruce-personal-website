import Image from 'next/image';
import React, {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import computer from '../../images/portfolio/evpi/computer.jpg';
import demo_german from '../../images/portfolio/evpi/demo_german.jpg';
import demo_hitcon from '../../images/portfolio/evpi/demo_hitcon.jpg';
import motorcontrol_hhevos from '../../images/portfolio/evpi/motorcontrol_hhevos.jpg';
import pcb from '../../images/portfolio/evpi/pcb.jpg';
import evpi01 from '../../images/portfolio/evpi_1.jpg';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  return (
    <Section className="bg-neutral-800 text-white" sectionId={SectionId.None}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <h1 className="text-4xl font-bold mb-4">Ummanned Vehicle - EVπ</h1>
          <p className="text-xl text-gray-300 mb-8">
          Collaborated with Foxconn on integrating HHEV.OS into EVπ control system, 
    ensuring compatibility with ROS2 navigation and localization while enhancing security. 
    Responsible for circuit board design and fabrication, including schematic design, PCB layout, and physical production.
          </p>
          <div className="flex justify-center">
          <Image
                alt="Drone"
                className="rounded-lg"
                src={evpi01}
                width={600}
              />
          </div>
        </div>

        <div className="space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">HHEV.OS</h2>
              <p className="mb-4">
              HHEV.OS is a middleware designed specifically for automobiles. Its main feature is balancing the performance of various automotive components, achieving real-time communication and stability. This platform provides service containers and functions such as execution, startup, configuration, scheduling, monitoring, and communication management to support the computational needs of different modules like BCM, IVI, ADAS, and VCU.
              </p>
              <p className="mb-4">
              In automotive software architecture, there is a gradual shift from traditional point-to-point communication towards a service-oriented architecture (SOA). HHEV.OS is an implementation based on the vehicle software SOA architecture, building a foundation of coarse-grained, loosely coupled service systems, laying the groundwork for Software-Defined Cars.
              </p>
              <p className="mb-4">
              HHEV.OS is implemented based on DDS, using the same communication protocol as the original ROS2-based system architecture of EVpi, thus ensuring high compatibility between the two. In the early stages of research, we redefined the ROS2-based EVpi software architecture according to HHEV.OS's SOA design, and reimplemented system modules such as motor control, UWB, and Zed2 based on HHEV.OS's API. Subsequently, these functions were deployed to Raspberry Pi for stability testing. Currently, EVpi's software system can operate normally while running both ROS2 and HHEV.OS simultaneously.
              </p>
              <div className="flex justify-center">
              <Image
                alt="Drone"
                className="rounded-lg"
                src={motorcontrol_hhevos}
                width={1000}
              />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Hardware circuit board production</h2>
              <p className="mb-4">
               Participated in redesigning the circuit system architecture of EVpi, a layered power supply system with a 36V battery as the main power source, to meet the different voltage requirements of various modules. Responsible for producing the required circuit boards in the project, from initial schematic design (including voltage divider circuits, buck modules, fuse design, and CAN bus communication modules) to PCB layout planning, and finally completing the physical circuit board production.
              </p>
              <div className="flex justify-center space-x-4">
              <Image
                alt="Drone"
                className="rounded-lg"
                src={computer}
                width={200}
              />
              <Image
                alt="Drone"
                className="rounded-lg"
                src={pcb}
                width={400}
              />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Event Photos</h2>
              <p className="mb-4">
              </p>
              <div className="flex justify-center space-x-4">
              <Image
                alt="Drone"
                className="rounded-lg"
                src={demo_hitcon}
                width={200}
              />
              <Image
                alt="Drone"
                className="rounded-lg"
                src={demo_german}
                width={400}
              />
              </div>
            </div>
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

About.displayName = 'About';
export default About;