"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

function Footer() {
  return (
    <footer className="lg:p-11 p-[5%] flex gap-4 md:gap-0 flex-col md:flex-row items-start justify-between bg-[#F0F0F0]">
      <div className="flex flex-col gap-6 w-full md:w-[20%]">
        <a href="" className="text-[30px] lg:text-[40px] font-normal">
          Memoreez.io
        </a>
        <p className="text-2xl font-normal">
          Create beautiful clients Galleries
        </p>
        <p className="text-base font-normal">
          © 2025 Memoreez, all rights reserved.
        </p>
      </div>

      <div className="flex flex-col gap-2 w-full md:w-[20%]">
        <a href="" className="text-2xl font-normal">
          Features
        </a>
        <a href="" className="text-2xl font-normal">
          Pricing
        </a>
        <a href="" className="text-2xl font-normal">
          FAQs
        </a>
        <a href="" className="text-2xl font-normal">
          About us
        </a>
        <a href="" className="text-2xl font-normal">
          Blog
        </a>
      </div>

      <div className="flex flex-col gap-6 w-full md:w-[20%]">
        <h2 className="text-2xl">Join us social networks:</h2>
        <div className="flex flex-row gap-3">
          <a href="" className="size-5">
            <img
              src="./tiktok.png"
              alt=""
              className="size-full object-cover object-center"
            />
          </a>
          <a href="" className="size-5">
            <img
              src="./instagram.jpg"
              alt=""
              className="size-full object-cover object-center"
            />
          </a>
          <a href="" className="size-5">
            <img
              src="./pinterest.png"
              alt=""
              className="size-full object-cover object-center"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
