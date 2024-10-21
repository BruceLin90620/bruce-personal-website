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
// import tf_treeimage from '../../images/portfolio/hexapod/tf_tree.png';
import spot from '../../images/portfolio/spot.jpg';
import spot_lidar_localization from '../../images/portfolio/spot/spot_lidar_localization.png';
import spot_lidar_localization2 from '../../images/portfolio/spot/spot_lidar_localization2.png';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  return (
    <Section className="bg-neutral-800 text-white" sectionId={SectionId.None}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <h1 className="text-4xl font-bold mb-4">Boston Dynamics Spot</h1>
          <p className="text-xl text-gray-300 mb-8">
          在工廠中的巡檢
          </p>
          {/* <p className="text-xl text-gray-300 mb-8">
          Developed an automated inspection system using Boston Dynamics' Spot robot for industrial environments. 
    Implemented remote control and autonomous navigation using Graph Nav API. 
    Utilized Lidar for PCD map generation and precise localization via ROS2. Provided a visualization interface for remote monitoring.
          </p> */}
          <div className="flex justify-center">
          <Image
                alt="Drone"
                className="rounded-lg"
                height={200}
                src={spot}
                width={400}
              />
          </div>
        </div>

        <div className="space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">lidar localizaioon</h2>
              <p className="mb-4">
              需要將大地圖切成好幾塊
              </p>
              <div className="flex justify-center space-x-4">
              <Image
                alt="Drone"
                className="rounded-lg"
                // height={350}
                src={spot_lidar_localization}
                width={450}
              />
              <Image
                alt="Drone"
                className="rounded-lg"
                // height={350}
                src={spot_lidar_localization2}
                width={450}
              />
              </div>
              {/* <p className="mb-4">
              The project's primary objective was to adapt Boston Dynamics' Spot robot for automated inspection tasks in industrial settings. At its core, the system aimed to develop an advanced area patrol and remote monitoring system while strictly adhering to TSMC's network security protocols.
              </p>
              <p className="mb-4">
              Leveraging Spot's Graph Nav API, we developed precise remote control capabilities, enabling the robot to navigate autonomously to any specified location within designated areas. The integration of a PTZ camera allowed for high-quality image capture based on remote commands, with real-time transmission to the IT department for AI image analysis.
              </p>
              <p className="mb-4">
              Utilizing the Lidar mounted on Spot, we collected environmental point cloud data to generate accurate maps in PCD (Point Cloud Data) format. We implemented the Lidar localization system from the ROS2 (Robot Operating System 2) framework to achieve precise positioning of the robot in complex environments.
              </p> */}
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">frame work</h2>
              <p className="mb-4">
              需要將大地圖切成好幾塊
              </p>
              {/* <p className="mb-4">
              The project's primary objective was to adapt Boston Dynamics' Spot robot for automated inspection tasks in industrial settings. At its core, the system aimed to develop an advanced area patrol and remote monitoring system while strictly adhering to TSMC's network security protocols.
              </p>
              <p className="mb-4">
              Leveraging Spot's Graph Nav API, we developed precise remote control capabilities, enabling the robot to navigate autonomously to any specified location within designated areas. The integration of a PTZ camera allowed for high-quality image capture based on remote commands, with real-time transmission to the IT department for AI image analysis.
              </p>
              <p className="mb-4">
              Utilizing the Lidar mounted on Spot, we collected environmental point cloud data to generate accurate maps in PCD (Point Cloud Data) format. We implemented the Lidar localization system from the ROS2 (Robot Operating System 2) framework to achieve precise positioning of the robot in complex environments.
              </p> */}
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Factory Inspection</h2>
              <p className="mb-4">
              小範圍巡檢與時時定位監控
              </p>
              {/* <p className="mb-4">
              The project's primary objective was to adapt Boston Dynamics' Spot robot for automated inspection tasks in industrial settings. At its core, the system aimed to develop an advanced area patrol and remote monitoring system while strictly adhering to TSMC's network security protocols.
              </p>
              <p className="mb-4">
              Leveraging Spot's Graph Nav API, we developed precise remote control capabilities, enabling the robot to navigate autonomously to any specified location within designated areas. The integration of a PTZ camera allowed for high-quality image capture based on remote commands, with real-time transmission to the IT department for AI image analysis.
              </p>
              <p className="mb-4">
              Utilizing the Lidar mounted on Spot, we collected environmental point cloud data to generate accurate maps in PCD (Point Cloud Data) format. We implemented the Lidar localization system from the ROS2 (Robot Operating System 2) framework to achieve precise positioning of the robot in complex environments.
              </p> */}
              <div className="relative w-full" style={{paddingBottom: '50%'}}>
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/bti88o-4x0s?si=_yUovIaktIwj5hxg"
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