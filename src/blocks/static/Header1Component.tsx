"use client";
import React from "react";
import { Text } from "@/components/ui/base/text";
import { Button } from "@/components/ui/button";

function Component() {
  return (
    <div className="flex flex-col">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1
          
          className="mb-4 text-4xl font-semibold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-4xl"
        >
          The all-in-one platform for photographers
        </h1>
        <p
          
          className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48"
        >
          All you need to run your photography business in one place
        </p>
        <a
          href="#"
          className="whitespace-nowrap inline-flex items-center text-white bg-black hover:bg-primary-800 font-medium rounded-[.5rem] text-sm px-5 py-2.5 text-center"
        >
          START FOR FREE
        </a>
      </div>
      <div className="flex flex-col justify-end items-end">
        <img
          src="/9.webp"
          alt=""
          className="mx-auto sm:w-[1300px] sm:px-5 md:h-auto"
        />
      </div>
    </div>
  );
}

export default Component;
