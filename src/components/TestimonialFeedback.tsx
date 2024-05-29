import Image from "next/image";
import React from "react";

type Testimonial = {
  id: number;
  name: string;
  comment: string;
  image: string;
  date: string;
};

type ITestimonialProps = {
  data: Testimonial[];
};

export default function TestimonialFeedback({ data }: ITestimonialProps) {
  return (
    <section className="flex p-1 gap-6 overflow-hidden">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="max-w-6xl lg:w-full lg:h-full h-auto group cursor-pointer bg-customPink md:bg-customGray rounded-md  p-8 hover:bg-customPink transition-all duration-300 transform hover:scale-105">
            <div className="text-sm flex flex-col gap-8 md:gap-4">
              <p className="font-archiv text-left text-white md:text-textLightGray group-hover:text-white transition-colors duration-300 quote">
                {item.comment}
              </p>
              <div className="flex gap-3 items-center">
                <div className="bg-white lg:bg-customPink group-hover:bg-white transition-colors duration-300 p-1 rounded-full">
                  <Image
                    src={item.image}
                    alt="feedback"
                    width={50}
                    height={50}
                    className="w-8"
                  />
                </div>
                <div className="flex flex-col gap-0">
                  <span className="font-poppins text-normal font-bold text-white md:text-textSecondary group-hover:text-white transition-colors duration-300">
                    {item.name}
                  </span>
                  <span className="block font-poppins text-xs text-white md:text-gray-500 group-hover:text-white transition-colors duration-300">
                    {item.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
