"use client";
import React from 'react';
import { Star } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function CustomerTestimonials() {
  return (
  <div className="max-w-8xl mx-auto px-4 py-16 md:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center mb-4">
      What Our Users Say
    </h2>
    <p className="text-xl text-center text-gray-600 mb-12">
      Memoreez has transformed the way photographers manage their business. Hear from some of our satisfied users.
    </p>
    <Tabs defaultValue="" className="max-w-4xl mx-auto border border-gray-200">
      <TabsContent key="" value="">
        <div className="rounded-lg p-8 mb-8">
          <div className="flex justify-center mb-4">
            <Star key="" className="w-6 h-6 text-yellow-400 fill-current" />
          </div>
          <blockquote className="text-xl text-center mb-8">
            "
            Memoreez made managing client galleries so effortless! I've seen a boost in print sales too.
            "
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-200 rounded-full mb-4" />
            <div className="text-center">
              <p className="font-semibold" />
              <p className="text-gray-600">
                Professional Photographer
                ,
              </p>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent key="" value="">
        <div className="rounded-lg p-8 mb-8">
          <div className="flex justify-center mb-4">
            <Star key="" className="w-6 h-6 text-yellow-400 fill-current" />
          </div>
          <blockquote className="text-xl text-center mb-8">
            "
            The automated print orders are fantastic! It saves me so much time while keeping my clients happy.
            "
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-200 rounded-full mb-4" />
            <div className="text-center">
              <p className="font-semibold" />
              <p className="text-gray-600">
                Freelance Photographer
                ,
              </p>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsList className="flex justify-center border-b border-gray-200">
        <TabsTrigger key="" value="" className="flex-1 py-4 px-6 focus:outline-none data-[state=active]:border-2 data-[state=active]:border-black">
          <img src="" alt="" className="mx-auto h-10" />
        </TabsTrigger>
        <TabsTrigger key="" value="" className="flex-1 py-4 px-6 focus:outline-none data-[state=active]:border-2 data-[state=active]:border-black">
          <img src="" alt="" className="mx-auto h-10" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  </div>
  );
}

export default CustomerTestimonials;
