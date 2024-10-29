"use client";
import React from 'react';
import { Text } from '@/components/ui/base/text';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function HeaderBlock() {
  return (
  <div className="px-[5%] py-16 lg:max-h-full mx-auto">
    <div className="flex flex-col gap-y-12 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center">
      <div className="flex flex-col">
        <div>
          <Text className="text-sm font-semibold uppercase tracking-wider  mb-2">
            Photography Business
          </Text>
          <Text as="hero" className="mb-4 text-lowercase text-[5rem] first-letter-uppercase">
            Deliver galleries your clients will love
          </Text>
          <Text as="h4" className=" text-3xl py-2">
            Simple and intuitive galleries design that brings your business to life.
          </Text>
          <div className="mt-8">
            <div className="w-full flex items-center">
              <div className="lg:max-w-[30rem]">
                <Button key={0} variant="primary" size="large" style={{
  borderRadius: "var(--button-radius)"
}} className="whitespace-nowrap">
                  Get Started
                </Button>
                <Button key={1} variant="link" size="medium" style={{
  borderRadius: "var(--button-radius)"
}} className="whitespace-nowrap">
                  Learn More
                </Button>
                <div className=" text-xs" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="/5.webp" alt="" style={{
            borderRadius: "var(--image-radius)"
          }} className="w-full h-ful object-cover max-h-[80vh]" />
      </div>
    </div>
  </div>
  );
}

export default HeaderBlock;
