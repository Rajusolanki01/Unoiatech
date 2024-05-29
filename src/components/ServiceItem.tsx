import React from "react";

type ServiceItemProps = {
  number: string;
  text: string;
};

type IServiceItemProps = {
  items: ServiceItemProps[];
};

export default function ServiceItem({ items }: IServiceItemProps) {
  return (
    <div className="p-8 grid grid-cols-2 gap-10 md:grid-cols-4 text-left">
      {items.map((item, index) => (
        <div key={index} className="mx-auto">
          <p className="font-montserratalt font-extrabold text-5xl text-customPink mb-2 md:mb-5">
            {item.number}
          </p>
          <p className="font-montserrat text-sm font-semibold">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
