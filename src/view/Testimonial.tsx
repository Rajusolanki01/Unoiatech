"use client";

import TestimonialFeedback from "@/components/TestimonialFeedback";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { LeftArrow, RightArrow } from "../../public/assets";

type Props = {};

const testimonial = [
  {
    id: 1,
    name: "Aaron Boby",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    image: "/assets/IconDark.svg",
    date: "May 28, 2024",
  },
  {
    id: 2,
    name: "Jane Doe",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    image: "/assets/IconDark.svg",
    date: "April 10, 2024",
  },
  {
    id: 3,
    name: "John Smith",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    image: "/assets/IconDark.svg",
    date: "March 15, 2024",
  },
  {
    id: 4,
    name: "Emily Davis",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    image: "/assets/IconDark.svg",
    date: "February 28, 2024",
  },
  {
    id: 5,
    name: "Michael Brown",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    image: "/assets/IconDark.svg",
    date: "January 20, 2024",
  },
  {
    id: 6,
    name: "Jessica Lee",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    image: "/assets/IconDark.svg",
    date: "December 18, 2023",
  },
  {
    id: 7,
    name: "Daniel Harris",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    image: "/assets/IconDark.svg",
    date: "November 14, 2023",
  },
  {
    id: 8,
    name: "Sophia Wilson",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    image: "/assets/IconDark.svg",
    date: "October 5, 2023",
  },
  {
    id: 9,
    name: "David Martinez",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    image: "/assets/IconDark.svg",
    date: "September 12, 2023",
  },
  {
    id: 10,
    name: "Linda Clark",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    image: "/assets/IconDark.svg",
    date: "August 3, 2023",
  },
];

export default function Testimonial({}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth <= 768) {
        setItemsPerPage(2);
      } else if (window.innerWidth <= 960) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - itemsPerPage));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, testimonial.length - itemsPerPage)
    );
  };

  return (
    <section className="py-10 mb-4 flex items-center">
      <div className=" md:max-w-6xl mx-auto flex flex-col gap-6">
        <div className="text-center p-4 w-3/4 mx-auto">
          <h2 className="font-plusjakarta font-bold text-2xl lg:text-4xl">
            What our clients say about us
          </h2>
        </div>
        <div className="max-w-6xl flex items-center gap-3">
          <div onClick={handlePrev}>
            <Image
              src={LeftArrow}
              alt="Arrow-Left"
              width={100}
              height={100}
            />
          </div>
          <TestimonialFeedback
            data={testimonial.slice(currentIndex, currentIndex + itemsPerPage)}
          />
          <div onClick={handleNext}>
            <Image
              src={RightArrow}
              alt="Arrow-Right"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
