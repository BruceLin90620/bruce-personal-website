import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {portfolioItems,  SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {image} = portfolioItems[1];
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!image})}>
        <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!image})}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-white">Summary</h2>
            <p className="prose prose-sm text-gray-300 sm:prose-base">A ROS2 project for a hexapod robot uses a LiDAR to map and navigate the environment, 
              and an AprilTag to follow. For control, a joystick is used to control the robot's movement and actions. 
              This project enables the robot to autonomously navigate and perform tasks, such as automatic charging.</p>
              <Image alt="about-me-image" className="h-full w-full object-cover" src={image} />
          </div>
        </div>
      </div>
      <div className={classNames('grid grid-cols-5 gap-y-4', {'md:grid-cols-3': !!image})}>
        <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!image})}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-white">Motivation</h2>
            <p className="prose prose-sm text-gray-300 sm:prose-base">This is my UROP(Undergrade Reasearch Opportunity Program) project at City Science Lab @ Taipei Tech / a coorperation with MIT Media Lab.
              I really like any kind of robots, but it is my first time to have the project with legged robot and integrate ROS2 on this hexapod robot. I want to know the fundamental for the SLAM and Navigation ,therefore, I join the CSL UROP project.</p>
          </div>
        </div>
      </div>
      <div className={classNames('grid grid-cols-5 gap-y-4', {'md:grid-cols-3': !!image})}>
        <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!image})}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-white">ROS2 & Joystick Control</h2>
            <p className="prose prose-sm text-gray-300 sm:prose-base">First, I used python to control this robot and made it can move e.g. linear and angular move control and stnace control. Then I create a node for subscribe the cmd_vel and joy, so that I can get the joy data and twist msg through ROS2 DDS to control this robot.</p>
          </div>
        </div>
      </div>
      <div className={classNames('grid grid-cols-5 gap-y-4', {'md:grid-cols-3': !!image})}>
        <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!image})}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-white">Mechnical Design & 3D Printer</h2>
            <p className="prose prose-sm text-gray-300 sm:prose-base">Then I had to add a Lidar to do the SLAM thing, so I used the 3D printer the print a LiDAR base.</p>
          </div>
        </div>
      </div>
      <div className={classNames('grid grid-cols-5 gap-y-4', {'md:grid-cols-3': !!image})}>
        <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!image})}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-white">SLAM</h2>
            <p className="prose prose-sm text-gray-300 sm:prose-base">I face some problem when I search how to do the SLAM because most of the algorithms for SLAM need IMU or Camera to fusion the odometry to make the map better. So I learn how to revise the parameter to choose whehter I need the IMU or Camera.
I try a lot of algorithms ex: Lio-SAM, Gmapping, Cartographer. I choose the Cartographer to be my result, because I don't have odometry. So Cartographer is the better choose. I used the joystick to control the hexapod robot moving around my Lab and using Cartographer to SLAM building the map for my Lab.</p>
          </div>
        </div>
      </div>
      <div className={classNames('grid grid-cols-5 gap-y-4', {'md:grid-cols-3': !!image})}>
        <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!image})}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-white">Navigation</h2>
            <p className="prose prose-sm text-gray-300 sm:prose-base">Then I try to do the navigation, if I wanted to use ROS2 support navigation package(Navigation2), I need to create the tf tree. The map to odom I used the AMCL, and I use laser_scan_matcher this algorithm to use Lidar calculate the odometry of the robot. And then I used a static_transform_publisher to define the relation between base_link and laser.

Fortunately, I could launch the Nav2 package and made this robot go to any destination in the map.</p>
          </div>
        </div>
      </div>
      <div className={classNames('grid grid-cols-5 gap-y-4', {'md:grid-cols-3': !!image})}>
        <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!image})}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-white">AprilTag Control</h2>
            <p className="prose prose-sm text-gray-300 sm:prose-base">Then, I try to think how should I do after navigation, my director recommand me can try AprilTag things. So I try to let the robot can localize through AprilTag, and conbine the control command to make the robot move to a fixed distance relative to AprilTag. So I can move the AprilTag and the robot can following the AprilTag.
AprilTag Developed at the University of Michigan, AprilTag is like a 2D barcode or a simplified QR Code. It contains a numeric ID code and can be used for location and orientation.</p>
          </div>
        </div>
      </div>
      <div className={classNames('grid grid-cols-5 gap-y-4', {'md:grid-cols-3': !!image})}>
        <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!image})}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-white">Final</h2>
            <p className="prose prose-sm text-gray-300 sm:prose-base">Finally, I conbine the every function I create above. And use twist_mux node to manage any kind of cmd_vel topic, give each one a priority. Fisrt is the joystick, I need to make sure I can control the robot any time I wnat. Second is the AprilTag. Third is the Navigation.</p>
          </div>
        </div>
      </div>
      <div className={classNames('grid grid-cols-5 gap-y-4', {'md:grid-cols-3': !!image})}>
        <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!image})}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-white">Final Project Video</h2>
            <p className="prose prose-sm text-gray-300 sm:prose-base">Finally, I conbine the every function I create above. And use twist_mux node to manage any kind of cmd_vel topic, give each one a priority. Fisrt is the joystick, I need to make sure I can control the robot any time I wnat. Second is the AprilTag. Third is the Navigation.</p>
          </div>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
