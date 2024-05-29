import Image from "next/image";
import React from "react";
import { Ellipse, MaskGroup2 } from "../../public/assets";

type Props = {};

export default function Career({}: Props) {
  return (
    <section className="py-6 mb-4 relative overflow-hidden">
      <div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-1 items-center">
        <div className="max-w-6xl mx-auto md:order-1 order-2 relative p-6">
          <div className="flex flex-col gap-4 mx-auto lg:w-3/5 w-5/6  text-center md:text-left">
            <span className="text-customPink font-oswald font-semibold text-sm md:text-xl">
              CAREERS
            </span>
            <h2 className="font-montserrat md:font-plusjakarta font-semibold  lg:font-extrabold text-2xl md:text-4xl md:leading-10">
              Careers at Olvera
            </h2>
            <p className="font-plusjakarta font-normal text-base md:text-lg">
              Navigate change, develop on-demand skills. Your turnaround journey
              starts with Olvera.
            </p>
            <button className="mt-2 mx-auto md:mx-0 text-black text-base font-semibold p-3 bg-[#FF74D0] w-40 h-12 rounded-3xl font-plusjakarta">
              Search Careers
            </button>
          </div>
          {/* ELLIPSE */}
          <div className="absolute -top-4 right-32 md:-top-20 md:right-24">
            <Image
              src={Ellipse}
              alt="Career_Image"
              width={300}
              className="rotate-180 md:rotate-0"
            />
          </div>
        </div>

        <div className="lg:w-2/5 w-full lg:order-2 order-1">
          <Image
            src={MaskGroup2}
            alt="Career_Image"
            layout="responsive"
            width={200}
            height={200}
            priority
          />
        </div>

        {/* ELLIPSE */}

        <div className="absolute -bottom-40 -left-24 hidden md:block">
          <Image src={Ellipse} alt="Career_Image" width={300} />
        </div>
      </div>
    </section>
  );
}
