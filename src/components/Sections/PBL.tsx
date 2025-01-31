import Image from 'next/image';
import React, {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import PBL_2 from '../../images/portfolio/pbl/PBL_2.jpg';
import PBL_3 from '../../images/portfolio/pbl/portfolio_PBL.png';
import pbl_flowchart from '../../images/portfolio/pbl/未命名绘图.drawio (1).png';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  return (
    <Section className="bg-neutral-800 text-white" sectionId={SectionId.None}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8 sm:py-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">PBL Competetion : Self-Driving Car</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6">
          Osaka Institute of Technology, New Taipei Municipal Zhonghe Senior High School, and National Taipei University of Technology.
          </p>
          <div className="flex justify-center">
            <div className="relative w-[600px] aspect-video">
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/FNIiC8IVrEo?si=8LEZFYAaZcEKnRsM"
              />
            </div>
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">Rule</h2>
              <p className="text-xs sm:text-sm md:text-base mb-3">
              The rule of this competition is that there is 4 obstacles area on the corner of the field. sand, grass, white rock, and water area respectively. There is a high heel area in the center of the field, so we must overcome these obstacles and catch the red ball as much as possible.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">Tools</h2>
              <p className="text-xs sm:text-sm md:text-base mb-3">
              We used a pixy camera connected to Arduino mega board. We didn’t have to do some image processing, because this camera could help us process the images and send some information to us. Like the width and height of the red ball. About the actuator, we have two 12V DC motors to drive the car and a 7V servo motor that let the catcher can lift and down. An ultrasonic sensor can detect the wall and tell the car to turn around to avoid the wall.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">Design</h2>
              <p className="text-xs sm:text-sm md:text-base mb-3">
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

        <div className="space-y-8 sm:space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">Program Flow</h2>
              <p className="text-xs sm:text-sm md:text-base mb-3">
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

        {/* <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Competetion Video</h2>
          <div className="relative w-full" style={{paddingBottom: '50%'}}>
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/_U_EzYThuuA?si=gq37ojSlHt5XSP0J&mute=1"
            ></iframe>
          </div>
        </div> */}
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;