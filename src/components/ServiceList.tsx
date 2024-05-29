import Image from "next/image";
import React from "react";
import { Path } from "../../public/assets";

type ServiceListProps = {
  name: string;
};

type IServiceListProps = {
  list: ServiceListProps[];
};

export default function ServiceList({ list }: IServiceListProps) {
  return (
    <div >
      <ul className="space-y-4">
        {list.map((service, index) => (
          <li key={index} className="flex flex-col cursor-pointer p-2">
            <div className="flex flex-col">
              <span className="font-montserrat font-semibold text-base text-customPink">
                {" "}
                0{index + 1}.
              </span>
            </div>
            <div className="flex items-center justify-between  border-b-2 border-gray-200 group relative">
              <span className="font-montserratalt font-extrabold text-lg">
                {service.name}
              </span>
              <Image src={Path} alt="path-arrow" className="w-10" />
              <div className="absolute left-0 bottom-0 w-0 h-[3px] bg-customPink group-hover:w-full transition-all duration-500"></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
