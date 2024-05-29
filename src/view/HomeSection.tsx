import React from "react";
import { MaskGroup, MaskGroupSmall } from "../../public/assets";
import Image from "next/image";

type Props = {};

export default function HomeSection({}: Props) {
  return (
    <>
      <section
        className="lg:mb-2 bg-cover bg-center"
        style={{
          backgroundImage: `url(${MaskGroup.src})`,
        }}>
        {/* FOR LARGE SCREEN */}
        <div className="max-w-6xl mx-auto h-screen hidden lg:flex flex-col items-start justify-center">
          <h1 className="text-white font-montserrat text-4xl md:text-7xl leading-tight lg:leading-customHeight mb-4 lg:mb-7 font-semibold w-3/5">
            Start your story with Olvera
          </h1>
          <button className="bg-customPinkLight font-plusjakarta text-sm lg:text-base font-semibold leading-6 rounded-full text-center py-3 px-6 lg:px-8">
            Contact us
          </button>
        </div>

        {/* FOR SMALL SCREEN */}
        <div className="lg:hidden block">
          <Image
            src={MaskGroupSmall}
            alt="MaskImage"
            layout="responsive"
            width={1000}
            height={1000}
          />
        </div>
      </section>
    </>
  );
}
