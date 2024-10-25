import Image from 'next/image';
import React, {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import supercontroll_2 from '../../images/portfolio/supercontroller/supercontroll_2.png';
import supercontroll_framework from '../../images/portfolio/supercontroller/supercontroll_framework.png';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  return (
    <Section className="bg-neutral-800 text-white" sectionId={SectionId.None}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <h1 className="text-4xl font-bold mb-4">Super Controller</h1>
          <p className="text-xl text-gray-300 mb-8">
          The project aims to develop a control interface for ROS2-based devices, 
          enhancing interaction efficiency in multi-robot collaboration scenarios. 
          This interface will enable users to remotely control robots in the future. 
          </p>
          <div className="flex justify-center">
          <Image
                alt="Drone"
                className="rounded-lg"
                src={supercontroll_2}
                width={600}
              />
          </div>
        </div>

        <div className="space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">The project encompasses the following key components:</h2>
              <p className="mb-4">
              1. Remote Control Software: A web-based application designed for ROS2, prioritizing convenience. 
              This software will allow users to access data from ROS2 devices and send control commands remotely using any computer or mobile device.
              </p>
              <p className="mb-4">
              2. Control Commands: The remote control software will empower managers to direct robot movements. For instance, 
              they can modify robot routes or instruct robots to navigate to specific locations.
              </p>
              <p className="mb-4">
              3. Real-time Data: Sensor data from ROS2 devices will be transmitted to the remote control software in real-time. 
          This information will be visually presented, allowing managers to intuitively understand the status of various devices and robots, 
          facilitating timely responses when necessary.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className=" rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">System Architecture:</h2>
              <div className="flex justify-center">
              <Image
                    alt="Drone"
                    className="rounded-lg"
                    src={supercontroll_framework}
                    width={800}
                  />
              </div>
                <p className="mb-4">
                The multi-robot communication system consists of front-end and back-end components, 
                with data transferred between them via Socket connections. The front-end is a Unity-developed application for smartphones and tablets. 
                This app uses the device's front camera to read AprilTags attached to robots. 
                Users can select these tags to bind the control interface to the corresponding robot.
                </p>
                <p className="mb-4">
                Control commands from the front-end are sent through Socket communication to a Socket server on a central Raspberry Pi. 
                This server receives and organizes all control signals before forwarding them to a Zenoh Router. 
                The Zenoh Router connects all robots, enabling inter-robot communication.
                </p>
                <p className="mb-4">
                As the laboratory robots are developed using ROS2 middleware, 
                and both ROS2 and Zenoh are DDS systems, we can easily utilize Zenoh's Bridge DDS feature. 
                This allows us to convert ROS messages into Zenoh format and transmit them to target robots.
                </p>
                <p className="mb-4">
                This unified communication protocol and platform facilitates convenient and efficient control of various robots, 
                paving the way for more intelligent applications in multi-robot environments.
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
              src="https://www.youtube.com/embed/iEp8NJe1Z8A?si=giUsoE4eCEe8Wd-R"
            ></iframe>
          </div>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;