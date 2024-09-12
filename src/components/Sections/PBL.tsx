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
import PBL_2 from '../../images/portfolio/pbl/PBL_2.jpg';
import pbl_flowchart from '../../images/portfolio/pbl/未命名绘图.drawio (1).png';
import PBL_3 from '../../images/portfolio/PBL_3.png';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  return (
    <Section className="bg-neutral-800 text-white" sectionId={SectionId.None}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <h1 className="text-4xl font-bold mb-4">PBL Competetion - Self Moving Car</h1>
          <p className="text-xl text-gray-300 mb-8">
          Osaka Institute of Technology, New Taipei Municipal Zhonghe Senior High School, and National Taipei University of Technology.
          </p>
          <div className="flex justify-center">
              <Image
                alt="Drone"
                className="rounded-lg"
                height={400}
                src={PBL_2}
                width={600}
              />
              </div>
        </div>

        <div className="space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Rule</h2>
              <p className="mb-4">
              The rule of this competition is that there is 4 obstacles area on the corner of the field. sand, grass, white rock, and water area respectively. There is a high heel area in the center of the field, so we must overcome these obstacles and catch the red ball as much as possible.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Tools</h2>
              <p className="mb-4">
              We used a pixy camera connected to Arduino mega board. We didn’t have to do some image processing, because this camera could help us process the images and send some information to us. Like the width and height of the red ball. About the actuator, we have two 12V DC motors to drive the car and a 7V servo motor that let the catcher can lift and down. An ultrasonic sensor can detect the wall and tell the car to turn around to avoid the wall.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Design</h2>
              <p className="mb-4">
              We designed a catcher with some ropes just like the table tennis collector, and then this catcher will put the red ball into the container behind the robot.
              </p>
              <div className="flex justify-center">
              <Image
                alt="Drone"
                className="rounded-lg"
                height={400}
                src={PBL_3}
                width={600}
              />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Program Flow</h2>
              <p className="mb-4">
              We have three steps. First, we used the ultrasonic sensor to check the wall distance. When the car hit the wall, it will turn around. Second, when the camera sees the red ball, it will check whether the ball is in the center of the camera. If not, just turn right or turn left. And then if the Y-axis coordination of the red ball is more than 180, that means, the red ball is right in front of you. Just put down the catcher and get the red ball.
              </p>
              <div className="flex justify-center">
              <Image
                alt="Drone"
                className="rounded-lg"
                height={200}
                src={pbl_flowchart}
                width={300}
              />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Competetion Video</h2>
          <div className="relative w-full" style={{paddingBottom: '50%'}}>
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/_U_EzYThuuA?si=gq37ojSlHt5XSP0J"
            ></iframe>
          </div>
        </div>

        {/* <div className="space-y-12">
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