import classNames from "classnames";
import Image from "next/image";
import {FC, memo} from "react";

import {heroData, SectionId} from "../../data/data";
import Section from "../Layout/Section";
import Socials from "../Socials";
import TypeWriter from "../TypeWriter";

const Hero: FC = memo(() => {
  const {imageSrc, name, description, actions} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center">
        <Image
          alt={`${name}-image`}
          className="absolute z-0 h-full w-full object-cover"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        <div className="z-10 max-w-screen-lg px-3 sm:px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-3 sm:gap-y-6 rounded-xl bg-gray-800/40 p-4 sm:p-6 text-center shadow-lg backdrop-blur-sm">
            <h1 className="py-2 sm:py-4 text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-neutral-200 ">
              <TypeWriter />
            </h1>
            {description}
            <div className="flex gap-x-4 text-neutral-100">
                <Socials />
              </div>
              <div className="flex w-full justify-center gap-x-3 sm:gap-x-4">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    "flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-neutral-300 outline-none ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base",
                    primary
                      ? // ? "border-orange-500 ring-orange-500"
                        ""
                      : "border-white ring-white"
                  )}
                  href={href}
                  key={text}
                >
                  {text}
                  {Icon && (
                    <Icon className="h-5 w-5 text-neutral-300 sm:h-6 sm:w-6" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          {/* <a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}
          >
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a> */}
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = "Hero";

export default Hero;
