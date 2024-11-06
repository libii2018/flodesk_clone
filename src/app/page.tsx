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
import Footer1Component from "../blocks/static/Footer1Component";
import Pricing1Component from "../blocks/static/Pricing1Component";
import Faq1Component from "../blocks/static/Faq1Component";

const Home = () => (
  <div className="mx-auto">
    <Navbar1Component />
    <Header1Component />

    <Carousel2Component />
    <div className="p-10 text-center">
      <h2 className="text-6xl">Features</h2>
    </div>
    <Feature1Component />
    <Feature2Component />
    <Feature3Component />
    <Feature4Component />
    <Carousel1Component />
    <Pricing1Component />
    <Faq1Component />
    <Footer1Component />
  </div>
);

export default Home;
