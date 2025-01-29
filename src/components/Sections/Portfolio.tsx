import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import {
  FC,
  memo,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import {isMobile} from "../../config";
import {portfolioItems, SectionId} from "../../data/data";
import {PortfolioItem} from "../../data/dataDef";
import useDetectOutsideClick from "../../hooks/useDetectOutsideClick";
import Section from "../Layout/Section";

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-900" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="text-xl font-bold text-white">Portfolio</h2>
        {/* <div className="grid-col-2 md:grid-col-3 lg:grid-col-4 grid w-full"> */}
        <div className="grid w-full grid-cols-2 gap-4 sm:gap-8 lg:gap-20">
          {portfolioItems.map((item, index) => {
            const {title, image, description, tech, link} = item;
            return (
              <div
                className="duration-y mt-8 transform transition hover:scale-105"
                key={`${title}-${index}`}
              >
                <div
                  className={classNames(
                    "relative aspect-[16/9] w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl"
                  )}
                >
                  <Image
                    alt={title}
                    className=""
                    fill
                    placeholder="blur"
                    src={image}
                  />
                  <ItemOverlay item={item} />
                </div>
                <div className="p-2 sm:p-4">
                  <div className="my-1 sm:my-2 text-sm sm:text-base md:text-lg font-medium text-neutral-300">
                    <strong>{title}</strong>
                    {/* {title} */}
                  </div>
                  <div className="my-1 sm:my-2 h-20 sm:h-32 text-xs sm:text-sm overflow-y-auto text-neutral-300">
                    {description}
                  </div>
                  <div className="my-2 sm:my-4 flex flex-row text-xs sm:text-sm text-neutral-300">
                    Tech: {tech ? tech : ""}
                  </div>
                  <div className="my-1 sm:my-2 justify-start text-xs text-neutral-300">
                    <span className="mr-2">{link && `Link:`}</span>
                    {link &&
                      link.map((item, index) => (
                        <Link
                          className="mr-2 font-medium text-sky-500 underline hover:no-underline dark:text-sky-400"
                          href={item.href}
                          key={`${item}-${index}`}
                        >
                          {item.text}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});


Portfolio.displayName = "Portfolio";
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {url}}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Avoid hydration styling errors by setting mobile in useEffect
    if (isMobile) {
      setMobile(true);
    }
  }, []);
  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <a
      className={classNames(
        'absolute inset-0 h-full w-full transition-all duration-300',
        {'opacity-0 hover:opacity-80': !mobile},
        showOverlay ? 'opacity-80' : 'opacity-0',
      )}
      href={url}
      onClick={handleItemClick}
      ref={linkRef}
      target="_blank">
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
          {/* <h2 className="text-center font-bold text-white opacity-100"> More Details</h2> */}
          {/* <p className="text-xs text-white opacity-100 sm:text-sm">{description}</p> */}
        </div>
        <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-black sm:bottom-2 sm:right-2" />
      </div>
    </a>
  );
});
