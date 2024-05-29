import React from "react";
import { MaskGroup3 } from "../../public/assets";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function VideoPage({}: Props) {
  return (
    <section className="relative">
      <div>
        <Image src={MaskGroup3} alt="" className="md:w-full md:h-full h-60" />
      </div>
      <div className="absolute inset-y-1/3 inset-x-2/4 md:-translate-x-10 md:-translate-y-8 -translate-x-8  -translate-y-2  grid items-center">
        <Link
          href={"/"}
          className="md:w-24 md:h-24 w-12 h-12 bg-white rounded-full grid place-items-center hover:bg-[#FF74D0] transition">
          <span className="sr-only">Watch the video</span>
          <svg
            className="ml-1 md:w-8 w-3"
            viewBox="0 0 16 18"
            fill="black"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 1.01267e-06 17.4678 1.07997e-06 15.9282L1.68565e-06 2.0718C1.75295e-06 0.532196 1.66667 -0.430054 3 0.339746L15 7.26795Z"
              fill="black"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
