"use client";

import {
  Button,
  Facebook,
  Instagram,
  Linkedin,
  Logo,
} from "../../public/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose, IoSearch } from "react-icons/io5";
import clsx from "clsx";

type Props = {};

interface MenuItems {
  label: string;
  href: string;
}

const menuItems: MenuItems[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/aboutus" },
  { label: "OUR SERVICES", href: "services" },
  { label: "OUR EXPERIENCE", href: "viewmore" },
  { label: "RESOURCES", href: "career" },
];

export default function Navbar({}: Props) {
  const [sideMenu, setIsSideMenu] = useState<boolean>(false);

  return (
    <>
      <header>
        <div className="bg-customPink py-1 md:py-4 flex items-center justify-center">
          <h2 className="font-plusjakarta tracking-wide text-white font-normal text-xs md:font-montserratalt md:tracking-wider md:font-extrabold md:text-base md:text-[#FFFFFFBF]">
            TURNING UNCERTAINTY INTO YOUR ADVANTAGE
          </h2>
        </div>
      </header>
      <main className="lg:max-w-6xl mx-auto">
        <nav className="flex items-center justify-between mx-auto overflow-x-hidden">
          <section className="py-6 px-4">
            {/* LOGO */}
            <Link href={"/"}>
              <Image src={Logo} alt="Logo" />
            </Link>
          </section>

          <section className="hidden lg:flex items-center md:gap-3 lg:gap-6 font-montserratalt font-extrabold md:text-xs lg:text-base tracking-wider cursor-pointer text-[#292929BF">
            {menuItems.map((menu, index) => (
              <Link
                href={menu.href}
                key={index}
                className="group relative inline-block text-[#292929BF] transition-colors duration-300">
                {menu.label}{" "}
                <div className="absolute left-0 bottom-0 w-0 h-1 bg-customPink group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </section>

          <section className="hidden lg:flex justify-between md:gap-2 lg:gap-4 font-montserratalt cursor-pointer">
            <Image src={Button} alt="Contact" className="md:w-16 lg:w-24" />
            <Image src={Facebook} alt="Facebook" className="md:inline lg:w-5" />
            <Image
              src={Instagram}
              alt="Instagram"
              className="md:inline lg:w-5"
            />
            <Image src={Linkedin} alt="Linkedin" className="md:inline lg:w-5" />
          </section>

          {/* SideMenu Mobile */}
          <section className="py-6 px-4 flex items-center gap-3 lg:hidden cursor-pointer">
            {/* MOBILE MENU */}
            <IoSearch className="text-3xl" />
            <FiMenu onClick={() => setIsSideMenu(true)} className="text-3xl" />
          </section>

          <div
            className={clsx(
              "fixed h-full w-screen z-50 lg:hidden bg-black/50 backdrop-blur-sm duration-500 top-0 left-0 transform",
              sideMenu ? "translate-x-0" : "translate-x-full"
            )}>
            <section className="text-black bg-white w-4/5 flex flex-col absolute right-0 top-0 p-8 gap-8  h-screen">
              <IoClose
                onClick={() => setIsSideMenu(false)}
                className="text-3xl cursor-pointer mt-0 mb-4"
              />
              {menuItems.map((menu, index) => (
                <Link
                  href={menu.href}
                  onClick={() => setIsSideMenu(false)}
                  key={index}
                  className="font-montserrat font-bold text-textPrimary text-sm tracking-wider">
                  {menu.label}
                </Link>
              ))}

              <div className="mt-2">
                <Image src={Logo} alt="Logo" />
              </div>
            </section>
          </div>
        </nav>
      </main>
    </>
  );
}
