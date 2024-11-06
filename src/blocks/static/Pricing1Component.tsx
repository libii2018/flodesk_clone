"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/base/button";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <div className="max-w-8xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-2">
        Affordable Pricing for Every Photographer
      </h2>
      <p className="text-xl text-center mb-8">
        Choose the plan that best fits your needs and scale your business with
        ease.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 md:px-80">
        <div className="py-6 flex flex-col text-center">
          <h3 className="text-2xl font-bold mb-8">Starter</h3>
          <div className="mb-12">
            <div className="text-4xl font-bold mb-6">Free</div>
            <p className="w-44 mx-auto">Perfect for hobbyists starting out.</p>
          </div>

          <a
            href="#"
            className="whitespace-nowrap mb-14 mx-auto w-56 items-center text-white bg-black hover:bg-primary-800 font-medium rounded-[.5rem] text-sm px-5 py-2.5 text-center"
          >
            Get started
          </a>
          <ul className="space-y-2 mx-auto w-56">
            <li className="flex items-center text-start">
              <h3 className="font-semibold mb-8">Access to Client Galleries</h3>
            </li>
            <li className="flex items-center text-start">
              <span>Automated Print Orders</span>
            </li>
            <li className="flex items-center text-start">
              <span>Email Support</span>
            </li>
          </ul>
        </div>
        <div className="py-6 flex flex-col text-center">
          <h3 className="text-2xl font-bold mb-8">Professional</h3>
          <div className="mb-12">
            <div className="text-4xl font-bold mb-6">
              $ 49
              <span className="text-lg font-normal text-gray-500">/ mo</span>
            </div>
            <p className="w-44 mx-auto">Ideal for established photographers.</p>
          </div>

          <a
            href="#"
            className="whitespace-nowrap mb-14 mx-auto w-56 items-center text-white bg-black hover:bg-primary-800 font-medium rounded-[.5rem] text-sm px-5 py-2.5 text-center"
          >
            Get started
          </a>
          <ul className="space-y-2 mx-auto w-56">
            <li className="flex items-center text-start">
              <h3 className="font-semibold mb-8">
                Advanced Booking & Invoicing Tools
              </h3>
            </li>
            <li className="flex items-center text-start">
              <span>Priority Support</span>
            </li>
            <li className="flex items-center text-start">
              <span>Customization Options</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
