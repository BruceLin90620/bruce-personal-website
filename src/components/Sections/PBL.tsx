import Image from 'next/image';
import React, {FC, memo} from 'react';

import {SectionId} from '../../data/data';

import PBL_3 from '../../images/portfolio/pbl/portfolio_PBL.png';
// import pbl_flowchart from '../../images/portfolio/pbl/未命名绘图.drawio (1).png';
import Section from '../Layout/Section';

const PBLCompetition: FC = memo(() => {
  return (
    <Section className="bg-neutral-900 text-white" sectionId={SectionId.None}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-12 sm:py-16 lg:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            PBL Competition: Self-Driving Car
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 text-center max-w-2xl mx-auto">
            A collaborative project between Osaka Institute of Technology, New Taipei Municipal Zhonghe Senior High School, and National Taipei University of Technology.
          </p>
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl aspect-video">
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                src="https://www.youtube.com/embed/FNIiC8IVrEo?si=8LEZFYAaZcEKnRsM"
              />
            </div>
          </div>
        </div>

        {/* Competition Rules Section */}
        <div className="space-y-12 sm:space-y-16">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
                Competition Rules
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300">
                The competition field features four obstacle areas at each corner: sand, grass, white rock, and water area respectively. There is a high heel area in the center of the field. Competitors must navigate these obstacles while collecting as many red balls as possible.
              </p>
            </div>
          </div>
        </div>

        {/* Tools & Technology Section */}
        <div className="space-y-12 sm:space-y-16 mt-12">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
                Tools & Technology
              </h2>
              <div className="space-y-4">
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  Our system utilizes:
                </p>
                <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-300">
                  <li><span className="text-purple-400 font-semibold">Vision System:</span> Pixy camera connected to Arduino Mega board for automatic image processing and ball detection</li>
                  <li><span className="text-purple-400 font-semibold">Motors:</span> Two 12V DC motors for driving and a 7V servo motor for the ball catcher mechanism</li>
                  <li><span className="text-purple-400 font-semibold">Sensors:</span> Ultrasonic sensor for wall detection and obstacle avoidance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Design Section */}
        <div className="space-y-12 sm:space-y-16 mt-12">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
                Robot Design
              </h2>
              <div className="space-y-4">
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  We designed a specialized ball collection system inspired by table tennis ball collectors. The mechanism features a rope-based catcher that efficiently transfers collected red balls to a storage container at the rear of the robot.
                </p>
                <div className="flex justify-center my-6">
                  <div className="w-2/3 sm:w-2/3 md:w-1/2">
                  <Image
                    alt="Robot Design"
                    className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                    src={PBL_3}
                    width={600}
                    height={400}
                  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Program Flow Section */}
        <div className="space-y-12 sm:space-y-16 mt-12">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-blue-400">
                Program Flow
              </h2>
              <div className="space-y-4">
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  Our program operates in three main steps:
                </p>
                <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-300">
                  <li><span className="text-purple-400 font-semibold">1. Wall Detection:</span> Ultrasonic sensor monitors wall distance and triggers turning when necessary</li>
                  <li><span className="text-purple-400 font-semibold">2. Ball Tracking:</span> Camera centers on detected red balls through directional adjustments</li>
                  <li><span className="text-purple-400 font-semibold">3. Ball Collection:</span> When a ball is properly aligned (Y-axis &gt; 180), the catcher mechanism activates</li>
                </ul>
                {/* <div className="flex justify-center my-6">
                  <div className="w-1/2 sm:w-1/3 md:w-1/3">
                    <Image
                      alt="Program Flowchart"
                      className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-full h-auto"
                      src={pbl_flowchart}
                      width={300}
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
});

PBLCompetition.displayName = 'PBLCompetition';
export default PBLCompetition;