import React, {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  return (
    <Section className="bg-neutral-800 text-white" sectionId={SectionId.None}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header/Personal Info */}
        <div className="py-8 sm:py-12 border-b border-neutral-600">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">LIN JUNG PENG</h1>
          <div className="text-center space-y-2 text-gray-300">
            <p className="text-sm sm:text-base">11F., No. 15, Zhenxing W. St., Wufeng Dist., Taichung City 413009, Taiwan</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
              <a className="text-orange-500 hover:text-orange-400" href="mailto:brucelin90620@gmail.com">brucelin90620@gmail.com</a>
              <a className="text-orange-500 hover:text-orange-400" href="https://www.brucelinweb.com">Personal Website</a>
              <span>+886 979828620</span>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="py-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-orange-500">WORK EXPERIENCE</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold">City Science Lab @ Taipei Tech, a cooperation with MIT Media Lab</h3>
              <p className="text-gray-300 italic mb-4">Researcher (Full-time) – Robotics Team</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-orange-500">NVIDIA Isaac Sim City Science Lab Digital Twin</h4>
                  <p className="text-gray-300 text-sm mb-2">Dec. 2024 - Present</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Integrated multi-task scheduling system with Boston Dynamics Spot simulation in the City Science Lab digital twin environment.</li>
                    <li>Implemented robot control in Isaac Sim by combining ROS2 Navigation Stack (Nav2) for path planning with reinforcement learning for motion control.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-orange-500">Boston Dynamics Spot</h4>
                  <p className="text-gray-300 text-sm mb-2">Jun. 2024 - Present</p>
                  <p className="text-gray-300 font-medium mb-2">TSMC Industry-Academia Research Project:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Utilized Spot's SDK and 3D-LiDAR localization based on ROS2 to enable precise remote control</li>
                    <li>Developed a map switching system and utilized AprilTag as Spot's initial position in maps</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="py-8 border-t border-neutral-600">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-orange-500">EDUCATION</h2>
          <div>
            <h3 className="text-xl font-semibold">National Taipei University of Technology (Taipei Tech)</h3>
            <p className="text-gray-300">Bachelor of Science, Mechanical Engineering</p>
            <p className="text-gray-300 mb-4">Sep. 2019 - Jun. 2023</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
              <div>
                <p>Cum. GPA: 3.63/4.0</p>
                <p>Last 60 GPA: 4.0/4.0</p>
              </div>
              <div>
                <p>Class Rank: 2/51</p>
                <p>Total Credits: 163</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="py-8 border-t border-neutral-600">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-orange-500">PROFESSIONAL SKILLS</h2>
          <div className="space-y-4 text-gray-300">
            <p><strong className="text-white">Software:</strong> C/C++, Python, Matlab, ROS2, git, Zenoh, HHEV.OS</p>
            <p><strong className="text-white">Hardware:</strong> PCB Design, KiCad, Solidworks</p>
          </div>
        </div>

        {/* Research Projects */}
        <div className="py-8 border-t border-neutral-600">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-orange-500">UNDERGRADUATE RESEARCH</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Development of LiDAR-Based SLAM and Navigation System for Hexapod Robots</h3>
              <p className="text-gray-300 text-sm mb-2">Feb. 2023 - Jun. 2023</p>
              <p className="text-gray-300 italic mb-2">MIT-Taipei Tech Collaboration City Science Lab UROP</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Implemented movement control for a hexapod robot using ROS2</li>
                <li>Utilized Cartographer for SLAM algorithm to create 2D maps</li>
                <li>Applied image processing techniques for camera-based AprilTag detection</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Competitions */}
        <div className="py-8 border-t border-neutral-600">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-orange-500">COMPETITIONS AND ACHIEVEMENTS</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">2022 TSPE Research Project and Paper Competition</h3>
              <p className="text-gray-300 text-sm">Feb. 2022 - Nov. 2022</p>
              <p className="text-gray-300">Advanced to Semi-final; authored the sections on flight control system and planning algorithms.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;