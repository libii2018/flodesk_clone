"use client";
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/base/button';
import { Switch } from '@/components/ui/switch';

function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  return (
  <div className="max-w-8xl mx-auto px-4 py-16">
    <h2 className="text-4xl font-bold text-center mb-2">
      Affordable Pricing for Every Photographer
    </h2>
    <p className="text-xl text-center mb-8">
      Choose the plan that best fits your needs and scale your business with ease.
    </p>
    <div className="flex items-center justify-center mb-8">
      <span className="">
        Monthly
      </span>
      <Switch checked="" onCheckedChange={undefined} />
      <span className="">
        Yearly
      </span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div key={0} className="border rounded-lg p-6 flex flex-col">
        <h3 className="text-2xl font-bold mb-2">
          Starter
        </h3>
        <p className="mb-4">
          Perfect for hobbyists starting out.
        </p>
        <div className="text-4xl font-bold mb-4">
          $
          19
          <span className="text-lg font-normal text-gray-500">
            /
            mo
          </span>
        </div>
        <Button className="mb-6">
          Get started
        </Button>
        <ul className="space-y-2 mt-auto">
          <li key="" className="flex items-center">
            <Check className="w-5 h-5 mr-2" />
            <span>
              Access to Client Galleries
            </span>
          </li>
          <li key="" className="flex items-center">
            <Check className="w-5 h-5 mr-2" />
            <span>
              Automated Print Orders
            </span>
          </li>
          <li key="" className="flex items-center">
            <Check className="w-5 h-5 mr-2" />
            <span>
              Email Support
            </span>
          </li>
        </ul>
      </div>
      <div key={1} className="border rounded-lg p-6 flex flex-col">
        <h3 className="text-2xl font-bold mb-2">
          Professional
        </h3>
        <p className="mb-4">
          Ideal for established photographers.
        </p>
        <div className="text-4xl font-bold mb-4">
          $
          49
          <span className="text-lg font-normal text-gray-500">
            /
            mo
          </span>
        </div>
        <Button className="mb-6">
          Get started
        </Button>
        <ul className="space-y-2 mt-auto">
          <li key="" className="flex items-center">
            <Check className="w-5 h-5 mr-2" />
            <span>
              Advanced Booking & Invoicing Tools
            </span>
          </li>
          <li key="" className="flex items-center">
            <Check className="w-5 h-5 mr-2" />
            <span>
              Priority Support
            </span>
          </li>
          <li key="" className="flex items-center">
            <Check className="w-5 h-5 mr-2" />
            <span>
              Customization Options
            </span>
          </li>
        </ul>
      </div>
      <div key={2} className="border rounded-lg p-6 flex flex-col">
        <h3 className="text-2xl font-bold mb-2">
          Enterprise
        </h3>
        <p className="mb-4">
          For large studios and agencies.
        </p>
        <div className="text-4xl font-bold mb-4">
          $
          99
          <span className="text-lg font-normal text-gray-500">
            /
            mo
          </span>
        </div>
        <Button className="mb-6">
          Get started
        </Button>
        <ul className="space-y-2 mt-auto">
          <li key="" className="flex items-center">
            <Check className="w-5 h-5 mr-2" />
            <span>
              All Features Included
            </span>
          </li>
          <li key="" className="flex items-center">
            <Check className="w-5 h-5 mr-2" />
            <span>
              Dedicated Account Manager
            </span>
          </li>
          <li key="" className="flex items-center">
            <Check className="w-5 h-5 mr-2" />
            <span>
              Custom Integrations
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
}

export default Pricing;
