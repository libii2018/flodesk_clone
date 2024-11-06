"use client";
import React from "react";
import { Text } from "@/components/ui/base/text";
import { Button } from "@/components/ui/button";

function Component() {
  return (
    <div className="relative px-[5%] py-16 min-h-[30rem] bg-orange-700 flex items-center overflow-hidden">
      <div
        style={{
          backgroundImage: "url(2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.0)",
        }}
        role="img"
        aria-label="Elevate Your Photography"
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 w-full max-w-8xl mx-auto text-white">
        <div className="flex flex-col gap-y-12 lg:gap-x-12 lg:items-center">
          <div className="flex flex-col">
            <div>
              <Text className="text-sm text-white font-semibold uppercase tracking-wider  mb-2">
                Offer
              </Text>
              <Text
                as="h1"
                className="mb-4 text-lowercase first-letter-uppercase"
              >
                Join Memoreez Today and Elevate Your Photography!
              </Text>
              <Text as="h4" className="text-base text-white py-2">
                Start your free trial and discover the endless possibilities
                Memoreez offers to transform and streamline your photography
                business. Dive into features like seamless galleries and print
                orders.
              </Text>
              <div className="mt-8">
                <div className="w-full flex items-center">
                  <div className="lg:max-w-[30rem]">
                    <Button
                      key={0}
                      variant="primary"
                      size="large"
                      style={{
                        borderRadius: "var(--button-radius)",
                      }}
                      className="whitespace-nowrap h-10 mx-2 px-4 py-2"
                    >
                      Sign Up Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </div>
    </div>
  );
}

export default Component;
