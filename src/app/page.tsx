import About from "@/view/About";
import Career from "@/view/Career";
import HomeSection from "@/view/HomeSection";
import Services from "@/view/Services";
import Testimonial from "@/view/Testimonial";
import VideoPage from "@/view/VideoPage";
import ViewMore from "@/view/ViewMore";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      {" "}
      <HomeSection />
      <About />
      <Services />
      <ViewMore />
      <Career />
      <VideoPage />
      <Testimonial />
    </>
  );
}
