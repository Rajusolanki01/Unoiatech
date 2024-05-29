import Image from "next/image";
import React from "react";
import {
  Facebook,
  footerLogo1,
  footerLogo2,
  footerMobile1,
  footerMobile2,
  footerMobile3,
  footerMobile4,
  Instagram,
  Linkedin,
  Twitter,
} from "../../public/assets";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-customDark md:bg-black py-5 footer">
      <section className="max-w-6xl mx-auto">
        {/* FOR LARGE SCREEN */}
        <div className="flex flex-col items-center gap-8 mt-12 md:gap-10 md:mt-36 p-4">
          <span className=" text-white font-montserrat font-semibold leading-7 text-md text-center  md:leading-8 md:text-4xl lg:text-6xl lg:leading-customHeight">
            We are open and accepting to all. Come work with us
          </span>
          <div className="text-gray-200 font-plusjakarta text-xs font-normal p-4 text-center -mt-8 -mb-6 md:w-2/5  md:mt-4 md:p-0 md:text-md md:font-medium md:mb-0">
            <p>
              Experts teach you everything from the comfort of your own home.
              Improve your career today by enrolling in excellent courses at
              affordable prices.
            </p>
          </div>
          <div>
            <button className="px-6 py-3 text-center text-black text-sm tracking-normal  font-semibold bg-[#FF74D0] rounded-3xl font-plusjakarta  md:bg-customPink md:text-base md:px-10 md:py-3">
              Get Started
            </button>
          </div>
        </div>
        <div className="mt-9 flex flex-col md:flex-row gap-10 mb-14">
          <div className="flex flex-col gap-6 m-auto md:w-5/6">
            <div>
              <Image
                src={footerLogo1}
                alt="Brand-logo"
                className="hidden md:block"
              />
            </div>
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="mb-8">
                <Image
                  src={footerLogo2}
                  alt="Brand-logo"
                  className="hidden md:block"
                />
                <p className="font-plusjakarta font-normal text-normal text-gray-200 mt-4 text-center">
                  Turning Uncertainty Into Your Advantage
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-10 md:justify-between w-full md:w-80 h-auto md:h-44">
                <div className="flex flex-col gap-4 md:text-left text-center">
                  <span className="font-plusjakarta font-normal md:font-bold text-white md:text-base text-[27px]">
                    Resources
                  </span>
                  <ul className="flex flex-col gap-3 font-plusjakarta font-normal text-[23px] md:text-sm text-gray-200">
                    <li>Home</li>
                    <li>Articles</li>
                    <li>Videos &amp; Guides</li>
                    <li>About Us</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4 md:text-left text-center">
                  <span className="font-plusjakarta font-normal md:font-bold text-white text-[27px] md:text-base">
                    Careers
                  </span>
                  <ul className="flex flex-col gap-3 font-plusjakarta font-normal text-[23px] md:text-sm text-gray-200">
                    <li>Olevera academy</li>
                    <li>Privacy Policy</li>
                    <li>Cookies</li>
                  </ul>
                </div>
              </div>
              <div className="mt-14 text-white flex flex-col text-center m-auto gap-3 w-3/5 font-montserrat text-xs md:m-0 md:w-64 md:mt-0 md:text-left ">
                <span>
                  Liability Limited By A Scheme Approved Under Professional
                  Services Scheme
                </span>
                <div className="flex flex-col gap-3 text-gray-300">
                  <p>Phone: (64) 09 973 4905</p>
                  <p>Email: ezibuyenquiries@olveraadvisors.com</p>
                  <p>Website: olvera.co.nz/ezibuy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR SMALLER SCREEN */}

      <section className="max-w-6xl mx-auto">
        <div className="block md:hidden mt-12 mb-24 p-4">
          <div className="flex flex-wrap justify-between gap-7 w-[89%] m-auto mr-1.8">
            <Image src={footerMobile1} alt="Logo" priority />
            <Image src={footerMobile2} alt="Logo" priority />
            <Image src={footerMobile3} alt="Logo" priority />
            <Image src={footerMobile4} alt="Logo" priority />
          </div>
        </div>
      </section>

      {/* COPY RIGHT SECTION */}
      <section className="border-t-2 border-gray-400">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <div className="mt-2 flex flex-col md:flex-row justify-between p-4 gap-6 md:mt-5 md:w-5/6 w-full">
            <span className="font-plusjakarta font-normal text-xs md:text-sm text-gray-200 text-center md:text-left ">
              ©2023 olevra advisors. All rights reserved
            </span>
            <div className="flex gap-6 m-auto  md:m-0 ">
              <Image src={Facebook} alt="Facebook" className="invert" />
              <Image src={Instagram} alt="Instagram" className="invert" />
              <Image src={Twitter} alt="Twitter" />
              <Image src={Linkedin} alt="Linkedin" className="invert" />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
