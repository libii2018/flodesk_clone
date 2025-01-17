"use client";
import React from "react";
import { Text } from "@/components/ui/base/text";
import { Button } from "@/components/ui/button";

function FeatureBlock() {
  return (
    <section className="lg:px-40 lg:py-16 md:px-20 md:py-8 px-4 py-2 lg:h-fit">
      <div className="flex flex-col gap-y-9 md:flex-row md:justify-between">
        <div className="block md:w-1/2 w-full">
          <img
            src="/8.webp"
            alt="image feature"
            className="w-full h-96 aspect-square object-cover max-w-md m-auto"
          />
        </div>
        <div className="flex md:flex-col flex-row md:items-center md:justify-center md:w-1/2 w-full md:h-fit m-auto">
          <div className="max-w-md mx-auto">
            <h1 className="text-sm font-semibold uppercase tracking-wider  mb-2">
              Booking & Invoicing
            </h1>
            <h2 className="lg:text-3xl md:text-2xl text-lg font-semibold mb-3">
              Future Booking & Invoicing Tool
            </h2>
            <p className="text-base font-normal mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae sunt pariatur mollitia rem quae, eum voluptatibus, eaque
              est error eius modi aut distinctio debitis id culpa nemo inventore
              obcaecati? Repellendus!
            </p>
            <a
              href="#"
              className="whitespace-nowrap inline-flex items-center text-white bg-black hover:bg-primary-800 font-medium rounded-[.5rem] text-sm px-5 py-2.5 text-center"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureBlock;
