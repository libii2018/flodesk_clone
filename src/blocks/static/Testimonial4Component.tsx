"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Star } from 'lucide-react';

function CustomerTestimonials() {
  return (
  <div className="px-[5%] py-16 lg:max-h-full max-w-8xl mx-auto">
    <div className="flex flex-row gap-x-12 lg:items-center">
      <div className="w-1/3">
        <img src="" style={{
  borderRadius: "var(--image-radius)"
}} className="w-full h-full object-cover h-[30rem] max-h-[30rem]" />
      </div>
      <div className="w-2/3 flex flex-col">
        <div className="max-w-[35rem]">
          <div className="flex justify-start mb-4">
            <Star key="" className="w-6 h-6 fill-current" />
          </div>
          <p style={{
  fontFamily: "var(--page-font)"
}} className="text-base text-xl font-semibold leading-9 py-2">
            "
            "
          </p>
          <div className="flex gap-x-2 items-start mt-8">
            <div className="text-left border-r-2 pr-4 mr-4">
              <p className="font-semibold" />
              <p>
                ,
              </p>
            </div>
            <img src="" style={{
  borderRadius: "var(--image-radius)"
}} className="w-8 h-8 object-cover  max-h-[30rem]" />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default CustomerTestimonials;
