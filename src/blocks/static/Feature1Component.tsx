"use client";
import React from "react";
import { Text } from "@/components/ui/base/text";
import { Button } from "@/components/ui/button";

function FeatureBlock() {
  return (
    <section className="px-[3%] py-16 lg:h-fit">
      <div className="flex flex-col gap-y-9 md:flex md:gap-x-32 md:flex-row md:items-center">
        <div className="block">
          <img
            src="/8.webp"
            alt="image feature"
            className="lg:w-[810px] lg:h-[850px] w-[250px] h-[300px] object-cover"
          />
        </div>
        <div className="flex flex-col lg:pl-14">
          <div>
            
            <Text className="text-lg font-semibold uppercase tracking-wider  mb-1">
              Booking & Invoicing
            </Text>
            <Text
              as="h1"
              className="mb-1 lg:text-4xl md:text-2xl text-lg font-semibold"
            >
              Future Booking & Invoicing Tool
            </Text>
            <Text
              as="h4"
              className="lg:text-4xl md:text-2xl text-xl py-2 leading-5 max-w-lg lg:max-w-7xl"
            >
              Anticipate the upcoming Booking & Invoicing features that will
              remarkably streamline your business workflow. Manage your schedule
              effortlessly and handle finances all from one platform with
              Memoreez.
            </Text>
            <div className="mt-8">
              <div className="w-full flex items-center">
                <div className="lg:max-w-[30rem]">
                  <div>
                    <Button
                      variant="secondary"
                      size="default"
                      className="whitespace-nowrap lg:text-xl text-sm lg:px-14 lg:h-20 px-9 h-12 lg:rounded-[80.5px] rounded-[50.5px] cursor-pointer relative font-bold border-[0.125em] flex items-center justify-center w-full border-solid border-[#fcfbf9] text-white bg-[#241a17] m-0 hover:rounded-none hover:bg-[#241a17] duration-500"
                    >
                      Get started
                    </Button>
                  </div>
                  <div className="text-xs" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureBlock;
