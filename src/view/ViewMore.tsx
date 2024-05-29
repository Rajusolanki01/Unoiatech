import React from "react";
import {
  Circle,
  PathWhite,
  RectangleMask,
  Section4,
  Section4Small,
} from "../../public/assets";
import Image from "next/image";

type Props = {};

export default function ViewMore({}: Props) {
  return (
    <>
      <section
        className="md:bg-cover bg-no-repeat bg-center h-screen -z-50 hidden lg:block"
        style={{
          backgroundImage: `url(${Section4.src})`,
        }}>
        <div className="flex max-w-6xl mx-auto h-screen items-center justify-between">
          <div className="text-white flex flex-col justify-between w-2/4 h-2/5">
            <h3 className="font-plusjakarta font-normal text-3xl">
              Olvera Guides
            </h3>
            <p className="font-archivo text-base font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="text-white flex items-center gap-4 w-72 h-20">
            <h3 className="text-xl font-normal font-montserrat">View More</h3>
            <div className="relative">
              <Image
                src={PathWhite}
                alt="Arrow_Image"
                width={10}
                className="w-10 h-10 absolute top-5 left-5"
              />
              <Image
                src={Circle}
                alt="Circle_Image"
                width={10}
                className="w-20 h-20 rotate-45"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOR SMALLER SCREEN */}

      <section
        className="bg-cover bg-center -z-50 h-[60vh] lg:hidden"
        style={{
          backgroundImage: `url(${Section4Small.src})`,
        }}>
        <div
          className="bg-cover bg-center h-[60vh] flex flex-col"
          style={{
            backgroundImage: `url(${RectangleMask.src})`,
          }}>
          <div className="max-w-6xl my-auto flex flex-col gap-8 items-center justify-center text-center h-full">
            <div className="flex flex-col gap-1">
              <span className="text-sm md:text-lg font-semibold font-oswald text-customPink">
                Olvera Guides
              </span>
              <span className="text-2xl font-montserrat text-white md:text-3xl">
                Careers at Olvera
              </span>
            </div>
            <div className="flex flex-col gap-6 text-center w-4/5 md:w-3/5 text-white">
              <span className="text-3xl font-plusjakarta font-extrabold md:text-4xl">
                Ollie Restructuring Guide
              </span>
              <span className="text-base font-normal font-archivo">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </div>
            <div className="text-white flex items-center gap-10">
              <h3 className="font-montserrat font-normal text-xl md:text-2xl">
                View More
              </h3>
              <div className="relative">
                <Image
                  src={PathWhite}
                  alt="Arrow_Image"
                  width={10}
                  className="w-10 h-10 absolute top-5 left-6"
                />
                <Image
                  src={Circle}
                  alt="Circle_Image"
                  width={10}
                  className="w-20 h-20 rotate-45"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
