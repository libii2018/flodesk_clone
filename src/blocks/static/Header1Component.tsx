"use client";
import React from "react";
import { Text } from "@/components/ui/base/text";
import { Button } from "@/components/ui/button";

function Component() {
  return (
    <div className="px-[2%] pt-4 pb-32 lg:max-w-fit">
      <div className="flex flex-col gap-y-12 lg:flex lg:flex-row lg:gap-x-40 lg:items-center h-full w-full">
        <div className="flex flex-col lg:p-14">
          <div className="flex flex-col items-center lg:items-start justify-center">
            <div className="flex flex-col text-center lg:text-start w-full mt-28 mb-3">
              <Text
                as="hero"
                className="block mb-1 text-[30px] sm:text-[50px] lg:text-7xl text-lowercase text-[#241a17] font-normal first-letter-uppercase py-0"
              >
                Welcome to Memoreez
              </Text>
            </div>
            <Text
              as="hero"
              className="block mb-1 text-[23.5px] sm:text-[25px] lg:text-4xl text-center lg:text-left lg:ml-14 py-2 text-[#241a17] leading-7 max-w-96 lg:max-w-[570px]"
            >
              Capture, Share, Inspire
            </Text>
            <Text
              as="h4"
              className="block mb-1 text-[21.5px] sm:text-[24px] lg:text-3xl text-center lg:text-left lg:ml-14 py-2 text-[#241a17] leading-7 max-w-96 lg:max-w-[570px]"
            >
              Empowering photographers with seamless photo galleries and
              automated print orders.
            </Text>
            <div className="mt-8 lg:ml-14">
              <div className="w-full flex items-center ">
                <div className="lg:max-w-[30rem] flex flex-col items-center  gap-1">
                  <Button
                    variant="secondary"
                    size="default"
                    className="whitespace-nowrap lg:text-xl text-sm lg:px-14 lg:h-20 px-9 h-12 lg:rounded-[80.5px] rounded-[50.5px] cursor-pointer relative font-bold border-[0.125em] flex items-center justify-center w-full border-solid border-[#fcfbf9] text-white bg-[#241a17] m-0 hover:rounded-none hover:bg-[#241a17] duration-500"
                  >
                    Get Started
                  </Button>
                  {/* <Text className="text-[#241a17] font-medium" as="p">
                    Get Started
                  </Text> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            src="/6.webp"
            alt=""
            className="w-full h-full object-cover aspect-square"
          />
        </div>
      </div>
    </div>
  );
}

export default Component;
