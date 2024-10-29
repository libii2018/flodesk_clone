"use client";
import React from "react";
import Navbar1Component from "../blocks/static/Navbar1Component";
import Header1Component from "../blocks/static/Header1Component";
import Feature1Component from "../blocks/static/Feature1Component";
import Feature2Component from "../blocks/static/Feature2Component";
import Feature3Component from "../blocks/static/Feature3Component";
import Feature4Component from "../blocks/static/Feature4Component";
import Carousel1Component from "../blocks/static/Carousel1Component";
import Carousel2Component from "../blocks/static/Carousel2Component";
import Cta1Component from "../blocks/static/Cta1Component";
import Testimonial1Component from "../blocks/static/Testimonial1Component";
import Footer1Component from "../blocks/static/Footer1Component";
import { Text } from "@/components/ui/base/text";

const Home = () => (
  <div className="mx-auto">
    <Navbar1Component />
    <Header1Component />
    <Text
      as="h1"
      className="text-[#241a17] lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-medium text-center"
    >
      <span className="block">The world’s</span>
      <span className="block">most intuitive</span>
      <span className="block">email marketing platform</span>
    </Text>
    <Feature1Component />
    <Feature2Component />
    <Feature3Component />
    <Feature4Component />
    <Carousel1Component />
    {/* <Carousel2Component /> */}
    <Footer1Component />
  </div>
);

export default Home;
