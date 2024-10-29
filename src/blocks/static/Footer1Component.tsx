"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

function Footer() {
  return (
    <footer className="lg:p-11 p-[5%]">
      <div className="flex lg:flex-row justify-between mb-14">
        <div className="flex flex-col lg:w-1/3">
          <a
            href="#"
            className="block font-medium lg:text-xl text-base text-[#241a17]"
          >
            Flodesk University
          </a>
          <a
            href="#"
            className="block font-medium lg:text-xl text-base text-[#241a17]"
          >
            Login
          </a>
          <a
            href="#"
            className="block font-medium lg:text-xl text-base text-[#241a17]"
          >
            Help center
          </a>
          <a
            href="#"
            className="block font-medium lg:text-xl text-base text-[#241a17]"
          >
            Blog
          </a>
          <a
            href="#"
            className="block font-medium lg:text-xl text-base text-[#241a17]"
          >
            Updates
          </a>
          <a
            href="#"
            className="block font-medium lg:text-xl text-base text-[#241a17]"
          >
            Careers
          </a>
          <a
            href="#"
            className="block font-medium lg:text-xl text-base text-[#241a17]"
          >
            Our brand
          </a>
        </div>
        <div className="flex flex-col">
          <a
            href="#"
            className="block font-medium lg:text-xl text-base text-[#241a17]"
          >
            Facebook
          </a>
          <a
            href="#"
            className="block font-medium lg:text-xl text-base text-[#241a17]"
          >
            Twitter
          </a>
          <a
            href="#"
            className="block font-medium lg:text-xl text-base text-[#241a17]"
          >
            Instagram
          </a>
          <a
            href="#"
            className="block font-medium lg:text-xl text-base text-[#241a17]"
          >
            Pinterest
          </a>
        </div>
      </div>

      <div className="flex lg:flex-row-reverse flex-col justify-between mb-12 lg:h-fit">
        <div className="flex flex-col gap-y-5 lg:mb-0 mb-12 lg:max-w-lg">
          <span className="block text-base text-left text-black/55">
            Copyright © 2024 Flodesk Inc. By using this site or any part of
            Flodesk, you’re agreeing to our <a href="#">Terms of Service</a> and
            Privacy Policy.
          </span>
          <span className="block text-base text-left text-black/55">
            Flodesk was built with small business owners in mind. So was our
            unlimited plan. Are you a startup, mid-size or enterprise business?{" "}
            <a href="#">
              Get in touch with us here for custom plansGet in touch with us
              here for custom plans
            </a>
          </span>
        </div>

        <div className="flex h-8 relative text-3xl text-left font-medium text-[#241a17] mt-auto">
          <span>f</span>
          <span>l</span>
          <span>o</span>
          <span>d</span>
          <span>e</span>
          <span>s</span>
          <span>k</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
