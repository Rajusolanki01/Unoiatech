import ServiceItem from "@/components/ServiceItem";
import Image from "next/image";
import React from "react";
import { Ellipse, Path } from "../../public/assets";
import ServiceList from "@/components/ServiceList";

type Props = {};

const serviceItems = [
  { number: "150+", text: "Projects" },
  { number: "80+", text: "Clients" },
  { number: "200+", text: "Professionals" },
  { number: "97%", text: "Client" },
];

const servicesList = [
  { name: "Sustainability" },
  { name: "Small Business" },
  { name: "Forensic Services" },
  { name: "Risk Management" },
  { name: "CFO Advisory" },
];

export default function Services({}: Props) {
  return (
    <div className="relative overflow-hidden">
      <section className="max-w-6xl mx-auto p-4 mb-8">
        {/* ServiceItems Component */}
        <div className="max-w-6xl mx-auto">
          <ServiceItem items={serviceItems} />
        </div>
        <div className="max-w-6xl mx-auto p-8 flex flex-wrap md:gap-28">
          <div className="w-full md:w-3/6 flex flex-col h-80 gap-6">
            <div className="text-center md:text-left relative">
              <span className="hidden md:block uppercase text-xl text-customPink font-oswald font-semibold mb-3">
                services
              </span>
              <h1 className="font-montserratalt text-2xl leading-9 md:text-5xl font-extrabold mb-1 md:font-plusjakarta md:leading-customHeights">
                Our Services That Can Help Your Business
              </h1>
              <Image
                src={Ellipse}
                alt="Ellipse"
                width={250}
                height={250}
                className="absolute -top-14 md:-right-20 md:rotate-0  rotate-180"
              />
            </div>
            <div className="text-center  md:text-left font-archivo font-normal text-sm  leading-6 text-grayLight">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt.
              </p>
            </div>
          </div>
          {/* SERVICE LIST  */}
          <div className="w-full md:w-2/6">
            <ServiceList list={servicesList} />
          </div>
        </div>
      </section>
      <div className="absolute -bottom-24 -left-28 hidden md:block">
        <Image
          src={Ellipse}
          alt="Ellipse"
          width={300}
          height={300}
          className="rotate-45"
        />
      </div>
    </div>
  );
}
