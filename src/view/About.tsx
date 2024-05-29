import Image from "next/image";
import React from "react";
import {
  HomeLogo1,
  HomeLogo2,
  HomeLogo3,
  HomeLogo4,
  Reactangle,
} from "../../public/assets";

type Props = {};

export default function About({}: Props) {
  const homeLogoImages = [HomeLogo3, HomeLogo4, HomeLogo1, HomeLogo2];

  return (
    <section className="bg-customPink -z-50">
      <div className="flex flex-col max-w-6xl mx-auto relative  overflow-hidden">
        <div className="p-10 mt-10 flex flex-col justify-between gap-10 text-center md:text-left">
          <h2 className="text-white font-plusjakarta text-2xl font-normal">
            About Olvera
          </h2>
          <div className="flex flex-col gap-6 justify-end -mb-10 w-full md:flex-row md:gap-0">
            <h1 className="block md:hidden text-white font-plusjakarta font-extrabold text-3xl">
              Change is the one true constant in business
            </h1>
            <p className="text-white font-archivo text-sm md:text-lg font-normal md:w-2/5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="p-4 mt-6 grid grid-cols-2 lg:grid-cols-4 md:gap-4 gap-2">
          {homeLogoImages.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={logo}
                alt={`Home Logo ${index + 1}`}
                className="h-20 md:h-28 md:w-56"
              />
            </div>
          ))}
        </div>
        <div className="absolute -z-50">
          <Image src={Reactangle} alt="Reactangle" className="h-[546px]" />
        </div>
      </div>
    </section>
  );
}
