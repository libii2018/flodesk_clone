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
      <div className="hidden md:grid md:grid-cols-5 mt-[60px] lg:max-w-[80vw] mx-auto">
        <div className="border-b-[1px] border-r-[1px] h-[280px] border-[#0000001a]"></div>
        <div className=" flex flex-col border-b-[1px] border-r-[1px] h-[280px] pb-[40px] border-[#0000001a]">
          <div className="w-full flex items-center justify-center h-10"></div>
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="text-base text-center font-bold mb-5">Free</h2>

            <div className="flex flex-col h-auto gap-[4px]">
              <div className="flex flex-row items-end gap-[5px] mb-[9px]">
                <div className="text-[#54524e]">US$</div>
                <div className="text-[55px] leading-[56px]">0</div>
                <div className="text-[#54524e]">/mo</div>
              </div>
              <div className="text-xs text-[#acacac] text-left mx-auto leading-[17px]"></div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col border-b-[1px] border-r-[1px] h-[280px] border-[#0000001a]">
          <div className="w-full flex items-center justify-center h-10"></div>
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="text-base text-center font-bold mb-5">Beginner</h2>

            <div className="flex flex-col h-auto gap-[4px]">
              <div className="flex flex-row items-end gap-[5px] mb-[9px]">
                <div className="text-[#54524e]">US$</div>
                <div className="text-[55px] leading-[56px]">7</div>
                <div className="text-[#54524e]">/mo</div>
              </div>
              <div className="text-xs text-[#acacac] text-left mx-auto leading-[17px]">
                Billed annually
                <br />
                or $25 monthly
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col border-b-[1px] h-[280px] border-[#0000001a]">
          <div className="w-full flex items-center justify-center h-10"></div>
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="text-base text-center font-bold mb-5">
              Professional
            </h2>

            <div className="flex flex-col h-auto gap-[4px]">
              <div className="flex flex-row items-end gap-[5px] mb-[9px]">
                <div className="text-[#54524e]">US$</div>
                <div className="text-[55px] leading-[56px]">21</div>
                <div className="text-[#54524e]">/mo</div>
              </div>
              <div className="text-xs text-[#acacac] text-left mx-auto leading-[17px]">
                Billed annually
                <br />
                or $8 monthly
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-[#f5f5f5] h-[280px]">
          <div className="bg-[#e2d4bb] w-full flex items-center justify-center h-10">
            <p className="text-[#222] text-[11px] tracking-[2px] text-center">
              BEST VALUE
            </p>
          </div>
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="text-base text-center font-bold mb-5">Advanced</h2>

            <div className="flex flex-col h-auto gap-[4px]">
              <div className="flex flex-row items-end gap-[5px] mb-[9px]">
                <div className="text-[#54524e]">US$</div>
                <div className="text-[55px] leading-[56px]">42</div>
                <div className="text-[#54524e]">/mo</div>
              </div>
              <div className="text-xs text-[#acacac] text-left mx-auto leading-[17px]">
                Billed annually
                <br />
                or $50 monthly
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <p className="text-base text-[#333] font-bold">Photo Storage</p>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <p className="text-base text-[#333] font-bold leading-[20px]">
              10GB
            </p>
            <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
              Approx. 3K photos
            </p>
          </div>
          <div className="h-4 w-6 text-[#333] relative right-[-30px]">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 1.99988C6.486 1.99988 2 6.48588 2 11.9999C2 17.5139 6.486 21.9999 12 21.9999C17.514 21.9999 22 17.5139 22 11.9999C22 6.48588 17.514 1.99988 12 1.99988ZM12 19.9999C7.589 19.9999 4 16.4109 4 11.9999C4 7.58888 7.589 3.99988 12 3.99988C16.411 3.99988 20 7.58888 20 11.9999C20 16.4109 16.411 19.9999 12 19.9999Z"
                fill="currentColor"
              ></path>
              <path
                d="M11 11.6001C11 11.2688 11.2686 11.0001 11.6 11.0001H12.4C12.7314 11.0001 13 11.2688 13 11.6001V16.4001C13 16.7315 12.7314 17.0001 12.4 17.0001H11.6C11.2686 17.0001 11 16.7315 11 16.4001V11.6001ZM11 7.60012C11 7.26875 11.2686 7.00012 11.6 7.00012H12.4C12.7314 7.00012 13 7.26875 13 7.60012V8.40012C13 8.73149 12.7314 9.00012 12.4 9.00012H11.6C11.2686 9.00012 11 8.73149 11 8.40012V7.60012Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <p className="text-base text-[#333] font-bold leading-[20px]">
              20GB
            </p>
            <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
              Approx. 6K photos
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <p className="text-base text-[#333] font-bold leading-[20px]">
              100GB
            </p>
            <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
              Approx. 30K photos
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-t-[1px] border-b-[1px] bg-[#f5f5f5] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <p className="text-base text-[#333] font-bold leading-[20px]">
              Unlimited
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-row items-center justify-center tracking-[.5px] bg-[#faf2f2] text-[#ba5a23] px-[6px] text-[9px] rounded-[100px] bold-medium mb-[6px]">
            New!
          </div>
          <p className="text-base text-[#333] font-bold leading-[20px]">
            Video Storage
          </p>
          <p className="text-[10px] lg:text-[11px] text-[#acacac] font-medium tracking-[.5px] leading-[14px] leading-[17px]">
            Up to 4K quality
          </p>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <p className="text-base text-[#333] font-bold leading-[20px]">
              10GB
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <p className="text-base text-[#333] font-bold leading-[20px]">
              5GB
            </p>
            <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
              Approx. 30 min
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <p className="text-base text-[#333] font-bold leading-[20px]">
              30GB
            </p>
            <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
              Approx. 3 hours
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-t-[1px] border-b-[1px] bg-[#f5f5f5] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <p className="text-base text-[#333] font-bold leading-[20px]">
              60GB
            </p>
            <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
              Approx. 6 hours
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <p className="text-base text-[#333] font-bold leading-[20px]">
            Client Galleries
          </p>
          <p className="text-[10px] lg:text-[11px] text-[#acacac] font-medium tracking-[.5px] leading-[14px] leading-[17px]">
            Storytelling grid, download permission, LR integration, clips &
            photos side-by-side (in beta)
          </p>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <p className="text-base text-[#333] font-bold leading-[20px]">
              Premium
            </p>
          </div>
          <div className="h-4 w-6 text-[#333] relative right-[-30px]">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 1.99988C6.486 1.99988 2 6.48588 2 11.9999C2 17.5139 6.486 21.9999 12 21.9999C17.514 21.9999 22 17.5139 22 11.9999C22 6.48588 17.514 1.99988 12 1.99988ZM12 19.9999C7.589 19.9999 4 16.4109 4 11.9999C4 7.58888 7.589 3.99988 12 3.99988C16.411 3.99988 20 7.58888 20 11.9999C20 16.4109 16.411 19.9999 12 19.9999Z"
                fill="currentColor"
              ></path>
              <path
                d="M11 11.6001C11 11.2688 11.2686 11.0001 11.6 11.0001H12.4C12.7314 11.0001 13 11.2688 13 11.6001V16.4001C13 16.7315 12.7314 17.0001 12.4 17.0001H11.6C11.2686 17.0001 11 16.7315 11 16.4001V11.6001ZM11 7.60012C11 7.26875 11.2686 7.00012 11.6 7.00012H12.4C12.7314 7.00012 13 7.26875 13 7.60012V8.40012C13 8.73149 12.7314 9.00012 12.4 9.00012H11.6C11.2686 9.00012 11 8.73149 11 8.40012V7.60012Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-t-[1px] border-b-[1px] bg-[#f5f5f5] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <p className="text-base text-[#333] font-bold leading-[20px]">
              Premium
            </p>
          </div>
          <div className="h-4 w-6 text-[#333] relative right-[-30px]">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 1.99988C6.486 1.99988 2 6.48588 2 11.9999C2 17.5139 6.486 21.9999 12 21.9999C17.514 21.9999 22 17.5139 22 11.9999C22 6.48588 17.514 1.99988 12 1.99988ZM12 19.9999C7.589 19.9999 4 16.4109 4 11.9999C4 7.58888 7.589 3.99988 12 3.99988C16.411 3.99988 20 7.58888 20 11.9999C20 16.4109 16.411 19.9999 12 19.9999Z"
                fill="currentColor"
              ></path>
              <path
                d="M11 11.6001C11 11.2688 11.2686 11.0001 11.6 11.0001H12.4C12.7314 11.0001 13 11.2688 13 11.6001V16.4001C13 16.7315 12.7314 17.0001 12.4 17.0001H11.6C11.2686 17.0001 11 16.7315 11 16.4001V11.6001ZM11 7.60012C11 7.26875 11.2686 7.00012 11.6 7.00012H12.4C12.7314 7.00012 13 7.26875 13 7.60012V8.40012C13 8.73149 12.7314 9.00012 12.4 9.00012H11.6C11.2686 9.00012 11 8.73149 11 8.40012V7.60012Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <p className="text-base text-[#333] font-bold leading-[20px]">
            Sales Automations
          </p>
          <p className="text-[10px] lg:text-[11px] text-[#acacac] font-medium tracking-[.5px] leading-[14px] leading-[17px]">
            Automated marketing campaigns, coupons & gift cards
          </p>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] bg-[#f5f5f5] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-start h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <p className="text-base text-[#333] font-bold leading-[20px] w-[70%]">
            Studio Management Integrations
          </p>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
          <div className="h-4 w-6 text-[#333] relative right-[-67px]">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 1.99988C6.486 1.99988 2 6.48588 2 11.9999C2 17.5139 6.486 21.9999 12 21.9999C17.514 21.9999 22 17.5139 22 11.9999C22 6.48588 17.514 1.99988 12 1.99988ZM12 19.9999C7.589 19.9999 4 16.4109 4 11.9999C4 7.58888 7.589 3.99988 12 3.99988C16.411 3.99988 20 7.58888 20 11.9999C20 16.4109 16.411 19.9999 12 19.9999Z"
                fill="currentColor"
              ></path>
              <path
                d="M11 11.6001C11 11.2688 11.2686 11.0001 11.6 11.0001H12.4C12.7314 11.0001 13 11.2688 13 11.6001V16.4001C13 16.7315 12.7314 17.0001 12.4 17.0001H11.6C11.2686 17.0001 11 16.7315 11 16.4001V11.6001ZM11 7.60012C11 7.26875 11.2686 7.00012 11.6 7.00012H12.4C12.7314 7.00012 13 7.26875 13 7.60012V8.40012C13 8.73149 12.7314 9.00012 12.4 9.00012H11.6C11.2686 9.00012 11 8.73149 11 8.40012V7.60012Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] bg-[#f5f5f5] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
          <div className="h-4 w-6 text-[#333] relative right-[-67px]">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 1.99988C6.486 1.99988 2 6.48588 2 11.9999C2 17.5139 6.486 21.9999 12 21.9999C17.514 21.9999 22 17.5139 22 11.9999C22 6.48588 17.514 1.99988 12 1.99988ZM12 19.9999C7.589 19.9999 4 16.4109 4 11.9999C4 7.58888 7.589 3.99988 12 3.99988C16.411 3.99988 20 7.58888 20 11.9999C20 16.4109 16.411 19.9999 12 19.9999Z"
                fill="currentColor"
              ></path>
              <path
                d="M11 11.6001C11 11.2688 11.2686 11.0001 11.6 11.0001H12.4C12.7314 11.0001 13 11.2688 13 11.6001V16.4001C13 16.7315 12.7314 17.0001 12.4 17.0001H11.6C11.2686 17.0001 11 16.7315 11 16.4001V11.6001ZM11 7.60012C11 7.26875 11.2686 7.00012 11.6 7.00012H12.4C12.7314 7.00012 13 7.26875 13 7.60012V8.40012C13 8.73149 12.7314 9.00012 12.4 9.00012H11.6C11.2686 9.00012 11 8.73149 11 8.40012V7.60012Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <p className="text-base text-[#333] font-bold leading-[20px] w-[70%]">
            Custom Branding
          </p>
          <p className="text-[10px] lg:text-[11px] text-[#acacac] font-medium tracking-[.5px] leading-[14px] lg:leading-[17px]">
            Your logo and watermarks
          </p>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66cb2fc860bf53fcde10d828_--.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] bg-[#f5f5f5] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-start h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <p className="text-base text-[#333] font-bold leading-[20px] w-[70%]">
            Chat Support for Visitors
          </p>
          <p className="text-[10px] lg:text-[11px] text-[#acacac] font-medium tracking-[.5px] leading-[14px] leading-[17px]">
            Including clients & guests.
          </p>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66cb2fc860bf53fcde10d828_--.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] bg-[#f5f5f5] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-start h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <p className="text-base text-[#333] font-bold leading-[20px] w-[70%]">
            Slideshows & Blogs
          </p>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66cb2fc860bf53fcde10d828_--.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66cb2fc860bf53fcde10d828_--.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] bg-[#f5f5f5] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-start h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <p className="text-base text-[#333] font-bold leading-[20px] w-[70%]">
            Vendor Network
          </p>
          <p className="text-[10px] lg:text-[11px] text-[#acacac] font-medium tracking-[.5px] leading-[14px] leading-[17px]">
            Contact collection, curated vendor galleries, vendor usage terms
          </p>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66cb2fc860bf53fcde10d828_--.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66cb2fc860bf53fcde10d828_--.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] bg-[#f5f5f5] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-start h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <p className="text-base text-[#333] font-bold leading-[20px] w-[70%]">
            Art Galleries & Store
          </p>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66cb2fc860bf53fcde10d828_--.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66cb2fc860bf53fcde10d828_--.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] bg-[#f5f5f5] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-start h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <p className="text-base text-[#333] font-bold leading-[20px] w-[70%]">
            Smart Image Search for Photographers
          </p>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66cb2fc860bf53fcde10d828_--.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66cb2fc860bf53fcde10d828_--.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] bg-[#f5f5f5] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-start h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <p className="text-base text-[#333] font-bold leading-[20px] w-[70%]">
            Smart Search for Clients
          </p>
          <p className="text-[10px] lg:text-[11px] text-[#acacac] font-medium tracking-[.5px] leading-[14px] leading-[17px]">
            People search, keyword search, selfie search
          </p>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66cb2fc860bf53fcde10d828_--.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66cb2fc860bf53fcde10d828_--.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66cb2fc860bf53fcde10d828_--.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] bg-[#f5f5f5] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-start h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <p className="text-base text-[#333] font-bold leading-[20px] w-[70%]">
            Multi-Brand
          </p>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66cb2fc860bf53fcde10d828_--.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66cb2fc860bf53fcde10d828_--.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[80px] border-b-[1px] border-r-[1px] border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66cb2fc860bf53fcde10d828_--.svg"
              className="w-[15px]"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center h-[80px] border-b-[1px] bg-[#f5f5f5] border-[#0000001a]">
          <p className="text-base text-[#333] font-bold leading-[20px] text-center">
            $6 / MO
          </p>
          <p className="text-xs text-[#acacac] font-medium tracking-[.5px] text-center leading-[17px]">
            for each additional brand
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full gap-4 md:hidden">
        <div className="flex flex-col border-[1px] w-full border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full mt-5 mb-10">
            <h2 className="text-base text-center font-bold mb-5">Free</h2>

            <div className="flex flex-col h-auto gap-2">
              <div className="flex flex-row items-end justify-center gap-[5px] mb-[9px]">
                <div className="text-[#54524e]">US$</div>
                <div className="text-[55px] leading-[56px]">0</div>
                <div className="text-[#54524e]">/mo</div>
              </div>
              <a
                href="#"
                className="h-10 uppercase flex items-center justify-center tracking-[1.5px] text-xs px-5 text-black border-[1px] border-black"
              >
                Start Free
              </a>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 mb-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    10GB Photo Storage
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Approx. 3K photos
                  </p>
                </div>
                <div className="h-4 w-6 text-[#333] flex flex-col items-center justify-center relative right-[-30px]">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 1.99988C6.486 1.99988 2 6.48588 2 11.9999C2 17.5139 6.486 21.9999 12 21.9999C17.514 21.9999 22 17.5139 22 11.9999C22 6.48588 17.514 1.99988 12 1.99988ZM12 19.9999C7.589 19.9999 4 16.4109 4 11.9999C4 7.58888 7.589 3.99988 12 3.99988C16.411 3.99988 20 7.58888 20 11.9999C20 16.4109 16.411 19.9999 12 19.9999Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M11 11.6001C11 11.2688 11.2686 11.0001 11.6 11.0001H12.4C12.7314 11.0001 13 11.2688 13 11.6001V16.4001C13 16.7315 12.7314 17.0001 12.4 17.0001H11.6C11.2686 17.0001 11 16.7315 11 16.4001V11.6001ZM11 7.60012C11 7.26875 11.2686 7.00012 11.6 7.00012H12.4C12.7314 7.00012 13 7.26875 13 7.60012V8.40012C13 8.73149 12.7314 9.00012 12.4 9.00012H11.6C11.2686 9.00012 11 8.73149 11 8.40012V7.60012Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <div className="flex flex-row items-start justify-center tracking-[.5px] bg-[#faf2f2] text-[#ba5a23] px-[6px] text-[9px] rounded-[100px] bold-medium mb-[6px]">
                    New!
                  </div>
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    1GB Video Storage
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Up to 4K quality
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Client Galleries
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Storytelling grid, download permission, LR integration,
                    clips & photos side-by-side (in beta)
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Client Galleries
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Storytelling grid, download permission, LR integration,
                    clips & photos side-by-side (in beta)
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Print Store
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    30+ Global labs, online payments, automatic fulfillment,
                    album builder
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Sales Automations
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Automated marketing campaigns, coupons & gift cards
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center pb-16">
              <div className="flex flex-row mx-auto w-[70%] my-4 gap-3">
                <div className="flex flex-col items-center gap-4 justify-between">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                  <div className="h-4 w-6 text-[#333] flex flex-col items-center justify-center">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 1.99988C6.486 1.99988 2 6.48588 2 11.9999C2 17.5139 6.486 21.9999 12 21.9999C17.514 21.9999 22 17.5139 22 11.9999C22 6.48588 17.514 1.99988 12 1.99988ZM12 19.9999C7.589 19.9999 4 16.4109 4 11.9999C4 7.58888 7.589 3.99988 12 3.99988C16.411 3.99988 20 7.58888 20 11.9999C20 16.4109 16.411 19.9999 12 19.9999Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M11 11.6001C11 11.2688 11.2686 11.0001 11.6 11.0001H12.4C12.7314 11.0001 13 11.2688 13 11.6001V16.4001C13 16.7315 12.7314 17.0001 12.4 17.0001H11.6C11.2686 17.0001 11 16.7315 11 16.4001V11.6001ZM11 7.60012C11 7.26875 11.2686 7.00012 11.6 7.00012H12.4C12.7314 7.00012 13 7.26875 13 7.60012V8.40012C13 8.73149 12.7314 9.00012 12.4 9.00012H11.6C11.2686 9.00012 11 8.73149 11 8.40012V7.60012Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-4 h-full">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Studio Management Integrations
                  </p>
                  <p className="text-sm text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Visit Pic-Time.com on a desktop to review all Free plan
                    features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col border-[1px] w-full border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full mt-5 mb-10">
            <h2 className="text-base text-center font-bold mb-5">Beginner</h2>

            <div className="flex flex-col h-auto gap-6">
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row items-end justify-center gap-[5px] mb-[9px]">
                  <div className="text-[#54524e]">US$</div>
                  <div className="text-[55px] leading-[56px]">7</div>
                  <div className="text-[#54524e]">/mo</div>
                </div>
                <p className="text-center text-[#acacac] text-xs">
                  Billed annually or $8 monthly
                </p>
              </div>
              <a
                href="#"
                className="h-10 uppercase flex items-center justify-center tracking-[1.5px] text-xs px-5 text-black border-[1px] border-black"
              >
                Start Free
              </a>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 mb-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    20GB Photo Storage
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Approx. 6K photos
                  </p>
                </div>
                <div className="h-4 w-6 text-[#333] flex flex-col items-center justify-center relative right-[-30px]">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 1.99988C6.486 1.99988 2 6.48588 2 11.9999C2 17.5139 6.486 21.9999 12 21.9999C17.514 21.9999 22 17.5139 22 11.9999C22 6.48588 17.514 1.99988 12 1.99988ZM12 19.9999C7.589 19.9999 4 16.4109 4 11.9999C4 7.58888 7.589 3.99988 12 3.99988C16.411 3.99988 20 7.58888 20 11.9999C20 16.4109 16.411 19.9999 12 19.9999Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M11 11.6001C11 11.2688 11.2686 11.0001 11.6 11.0001H12.4C12.7314 11.0001 13 11.2688 13 11.6001V16.4001C13 16.7315 12.7314 17.0001 12.4 17.0001H11.6C11.2686 17.0001 11 16.7315 11 16.4001V11.6001ZM11 7.60012C11 7.26875 11.2686 7.00012 11.6 7.00012H12.4C12.7314 7.00012 13 7.26875 13 7.60012V8.40012C13 8.73149 12.7314 9.00012 12.4 9.00012H11.6C11.2686 9.00012 11 8.73149 11 8.40012V7.60012Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <div className="flex flex-row items-start justify-center tracking-[.5px] bg-[#faf2f2] text-[#ba5a23] px-[6px] text-[9px] rounded-[100px] bold-medium mb-[6px]">
                    New!
                  </div>
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    5GB Video Storage
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Up to 4K quality, Approx. 30 min
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Client Galleries
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Storytelling grid, download permission, LR integration,
                    clips & photos side-by-side (in beta)
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Print Store
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    30+ Global labs, online payments, automatic fulfillment,
                    album builder
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Sales Automations
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Automated marketing campaigns, coupons & gift cards
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Sales Automations
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Automated marketing campaigns, coupons & gift cards
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Studio Management Integrations
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Custom Branding
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Your logo and watermarks
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center pb-16">
              <div className="flex flex-row mx-auto w-[70%] my-4 gap-3">
                <div className="flex flex-col items-center gap-4 justify-between">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                  <div className="h-4 w-6 text-[#333] flex flex-col items-center justify-center">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 1.99988C6.486 1.99988 2 6.48588 2 11.9999C2 17.5139 6.486 21.9999 12 21.9999C17.514 21.9999 22 17.5139 22 11.9999C22 6.48588 17.514 1.99988 12 1.99988ZM12 19.9999C7.589 19.9999 4 16.4109 4 11.9999C4 7.58888 7.589 3.99988 12 3.99988C16.411 3.99988 20 7.58888 20 11.9999C20 16.4109 16.411 19.9999 12 19.9999Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M11 11.6001C11 11.2688 11.2686 11.0001 11.6 11.0001H12.4C12.7314 11.0001 13 11.2688 13 11.6001V16.4001C13 16.7315 12.7314 17.0001 12.4 17.0001H11.6C11.2686 17.0001 11 16.7315 11 16.4001V11.6001ZM11 7.60012C11 7.26875 11.2686 7.00012 11.6 7.00012H12.4C12.7314 7.00012 13 7.26875 13 7.60012V8.40012C13 8.73149 12.7314 9.00012 12.4 9.00012H11.6C11.2686 9.00012 11 8.73149 11 8.40012V7.60012Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-4 h-full">
                  <div className="flex flex-col">
                    <p className="text-base text-[#333] font-bold leading-[20px]">
                      Chat Support for Visitors
                    </p>
                    <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                      Chat Support for Clients & Guests
                    </p>
                  </div>
                  <p className="text-sm text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Visit Pic-Time.com on a desktop to review all Free plan
                    features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col border-[1px] w-full border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full mt-5 mb-10">
            <h2 className="text-base text-center font-bold mb-5">
              Professional
            </h2>

            <div className="flex flex-col h-auto gap-6">
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row items-end justify-center gap-[5px] mb-[9px]">
                  <div className="text-[#54524e]">US$</div>
                  <div className="text-[55px] leading-[56px]">21</div>
                  <div className="text-[#54524e]">/mo</div>
                </div>
                <p className="text-center text-[#acacac] text-xs">
                  Billed annually or $25 monthly
                </p>
              </div>
              <a
                href="#"
                className="h-10 uppercase flex items-center justify-center tracking-[1.5px] text-xs px-5 text-black border-[1px] border-black"
              >
                Start Free
              </a>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 mb-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    20GB Photo Storage
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Approx. 6K photos
                  </p>
                </div>
                <div className="h-4 w-6 text-[#333] flex flex-col items-center justify-center relative right-[-30px]">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 1.99988C6.486 1.99988 2 6.48588 2 11.9999C2 17.5139 6.486 21.9999 12 21.9999C17.514 21.9999 22 17.5139 22 11.9999C22 6.48588 17.514 1.99988 12 1.99988ZM12 19.9999C7.589 19.9999 4 16.4109 4 11.9999C4 7.58888 7.589 3.99988 12 3.99988C16.411 3.99988 20 7.58888 20 11.9999C20 16.4109 16.411 19.9999 12 19.9999Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M11 11.6001C11 11.2688 11.2686 11.0001 11.6 11.0001H12.4C12.7314 11.0001 13 11.2688 13 11.6001V16.4001C13 16.7315 12.7314 17.0001 12.4 17.0001H11.6C11.2686 17.0001 11 16.7315 11 16.4001V11.6001ZM11 7.60012C11 7.26875 11.2686 7.00012 11.6 7.00012H12.4C12.7314 7.00012 13 7.26875 13 7.60012V8.40012C13 8.73149 12.7314 9.00012 12.4 9.00012H11.6C11.2686 9.00012 11 8.73149 11 8.40012V7.60012Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <div className="flex flex-row items-start justify-center tracking-[.5px] bg-[#faf2f2] text-[#ba5a23] px-[6px] text-[9px] rounded-[100px] bold-medium mb-[6px]">
                    New!
                  </div>
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    5GB Video Storage
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Up to 4K quality, Approx. 30 min
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Client Galleries
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Storytelling grid, download permission, LR integration,
                    clips & photos side-by-side (in beta)
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Print Store
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    30+ Global labs, online payments, automatic fulfillment,
                    album builder
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Sales Automations
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Automated marketing campaigns, coupons & gift cards
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Sales Automations
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Automated marketing campaigns, coupons & gift cards
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Studio Management Integrations
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Custom Branding
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Your logo and watermarks
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center pb-16">
              <div className="flex flex-row mx-auto w-[70%] my-4 gap-3">
                <div className="flex flex-col items-center gap-4 justify-between">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                  <div className="h-4 w-6 text-[#333] flex flex-col items-center justify-center">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 1.99988C6.486 1.99988 2 6.48588 2 11.9999C2 17.5139 6.486 21.9999 12 21.9999C17.514 21.9999 22 17.5139 22 11.9999C22 6.48588 17.514 1.99988 12 1.99988ZM12 19.9999C7.589 19.9999 4 16.4109 4 11.9999C4 7.58888 7.589 3.99988 12 3.99988C16.411 3.99988 20 7.58888 20 11.9999C20 16.4109 16.411 19.9999 12 19.9999Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M11 11.6001C11 11.2688 11.2686 11.0001 11.6 11.0001H12.4C12.7314 11.0001 13 11.2688 13 11.6001V16.4001C13 16.7315 12.7314 17.0001 12.4 17.0001H11.6C11.2686 17.0001 11 16.7315 11 16.4001V11.6001ZM11 7.60012C11 7.26875 11.2686 7.00012 11.6 7.00012H12.4C12.7314 7.00012 13 7.26875 13 7.60012V8.40012C13 8.73149 12.7314 9.00012 12.4 9.00012H11.6C11.2686 9.00012 11 8.73149 11 8.40012V7.60012Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-4 h-full">
                  <div className="flex flex-col">
                    <p className="text-base text-[#333] font-bold leading-[20px]">
                      Chat Support for Visitors
                    </p>
                    <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                      Chat Support for Clients & Guests
                    </p>
                  </div>
                  <p className="text-sm text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Visit Pic-Time.com on a desktop to review all Free plan
                    features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col border-[1px] w-full border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full mt-5 mb-10">
            <h2 className="text-base text-center font-bold mb-5">
              Professional
            </h2>

            <div className="flex flex-col h-auto gap-2">
              <div className="flex flex-row items-end justify-center gap-[5px] mb-[9px]">
                <div className="text-[#54524e]">US$</div>
                <div className="text-[55px] leading-[56px]">42</div>
                <div className="text-[#54524e]">/mo</div>
              </div>
              <a
                href="#"
                className="h-10 uppercase flex items-center justify-center tracking-[1.5px] text-xs px-5 text-black border-[1px] border-black"
              >
                Start Free
              </a>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 mb-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    20GB Photo Storage
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Approx. 6K photos
                  </p>
                </div>
                <div className="h-4 w-6 text-[#333] flex flex-col items-center justify-center relative right-[-30px]">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 1.99988C6.486 1.99988 2 6.48588 2 11.9999C2 17.5139 6.486 21.9999 12 21.9999C17.514 21.9999 22 17.5139 22 11.9999C22 6.48588 17.514 1.99988 12 1.99988ZM12 19.9999C7.589 19.9999 4 16.4109 4 11.9999C4 7.58888 7.589 3.99988 12 3.99988C16.411 3.99988 20 7.58888 20 11.9999C20 16.4109 16.411 19.9999 12 19.9999Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M11 11.6001C11 11.2688 11.2686 11.0001 11.6 11.0001H12.4C12.7314 11.0001 13 11.2688 13 11.6001V16.4001C13 16.7315 12.7314 17.0001 12.4 17.0001H11.6C11.2686 17.0001 11 16.7315 11 16.4001V11.6001ZM11 7.60012C11 7.26875 11.2686 7.00012 11.6 7.00012H12.4C12.7314 7.00012 13 7.26875 13 7.60012V8.40012C13 8.73149 12.7314 9.00012 12.4 9.00012H11.6C11.2686 9.00012 11 8.73149 11 8.40012V7.60012Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <div className="flex flex-row items-start justify-center tracking-[.5px] bg-[#faf2f2] text-[#ba5a23] px-[6px] text-[9px] rounded-[100px] bold-medium mb-[6px]">
                    New!
                  </div>
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    5GB Video Storage
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Up to 4K quality, Approx. 30 min
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Client Galleries
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Storytelling grid, download permission, LR integration,
                    clips & photos side-by-side (in beta)
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Print Store
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    30+ Global labs, online payments, automatic fulfillment,
                    album builder
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Sales Automations
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Automated marketing campaigns, coupons & gift cards
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Sales Automations
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Automated marketing campaigns, coupons & gift cards
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Studio Management Integrations
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Custom Branding
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Your logo and watermarks
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center pb-16">
              <div className="flex flex-row mx-auto w-[70%] my-4 gap-3">
                <div className="flex flex-col items-center gap-4 justify-between">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                  <div className="h-4 w-6 text-[#333] flex flex-col items-center justify-center">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 1.99988C6.486 1.99988 2 6.48588 2 11.9999C2 17.5139 6.486 21.9999 12 21.9999C17.514 21.9999 22 17.5139 22 11.9999C22 6.48588 17.514 1.99988 12 1.99988ZM12 19.9999C7.589 19.9999 4 16.4109 4 11.9999C4 7.58888 7.589 3.99988 12 3.99988C16.411 3.99988 20 7.58888 20 11.9999C20 16.4109 16.411 19.9999 12 19.9999Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M11 11.6001C11 11.2688 11.2686 11.0001 11.6 11.0001H12.4C12.7314 11.0001 13 11.2688 13 11.6001V16.4001C13 16.7315 12.7314 17.0001 12.4 17.0001H11.6C11.2686 17.0001 11 16.7315 11 16.4001V11.6001ZM11 7.60012C11 7.26875 11.2686 7.00012 11.6 7.00012H12.4C12.7314 7.00012 13 7.26875 13 7.60012V8.40012C13 8.73149 12.7314 9.00012 12.4 9.00012H11.6C11.2686 9.00012 11 8.73149 11 8.40012V7.60012Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-4 h-full">
                  <div className="flex flex-col">
                    <p className="text-base text-[#333] font-bold leading-[20px]">
                      Chat Support for Visitors
                    </p>
                    <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                      Chat Support for Clients & Guests
                    </p>
                  </div>
                  <p className="text-sm text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Visit Pic-Time.com on a desktop to review all Free plan
                    features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col border-[1px] w-full border-[#0000001a]">
          <div className="flex flex-col justify-center items-center h-full mt-5 mb-10">
            <h2 className="text-base text-center font-bold mb-5">
              Professional
            </h2>

            <div className="flex flex-col h-auto gap-6">
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row items-end justify-center gap-[5px] mb-[9px]">
                  <div className="text-[#54524e]">US$</div>
                  <div className="text-[55px] leading-[56px]">21</div>
                  <div className="text-[#54524e]">/mo</div>
                </div>
                <p className="text-center text-[#acacac] text-xs">
                  Billed annually or $25 monthly
                </p>
              </div>
              <a
                href="#"
                className="h-10 uppercase flex items-center justify-center tracking-[1.5px] text-xs px-5 text-black border-[1px] border-black"
              >
                Start Free
              </a>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 mb-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    20GB Photo Storage
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Approx. 6K photos
                  </p>
                </div>
                <div className="h-4 w-6 text-[#333] flex flex-col items-center justify-center relative right-[-30px]">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 1.99988C6.486 1.99988 2 6.48588 2 11.9999C2 17.5139 6.486 21.9999 12 21.9999C17.514 21.9999 22 17.5139 22 11.9999C22 6.48588 17.514 1.99988 12 1.99988ZM12 19.9999C7.589 19.9999 4 16.4109 4 11.9999C4 7.58888 7.589 3.99988 12 3.99988C16.411 3.99988 20 7.58888 20 11.9999C20 16.4109 16.411 19.9999 12 19.9999Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M11 11.6001C11 11.2688 11.2686 11.0001 11.6 11.0001H12.4C12.7314 11.0001 13 11.2688 13 11.6001V16.4001C13 16.7315 12.7314 17.0001 12.4 17.0001H11.6C11.2686 17.0001 11 16.7315 11 16.4001V11.6001ZM11 7.60012C11 7.26875 11.2686 7.00012 11.6 7.00012H12.4C12.7314 7.00012 13 7.26875 13 7.60012V8.40012C13 8.73149 12.7314 9.00012 12.4 9.00012H11.6C11.2686 9.00012 11 8.73149 11 8.40012V7.60012Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <div className="flex flex-row items-start justify-center tracking-[.5px] bg-[#faf2f2] text-[#ba5a23] px-[6px] text-[9px] rounded-[100px] bold-medium mb-[6px]">
                    New!
                  </div>
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    5GB Video Storage
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Up to 4K quality, Approx. 30 min
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Client Galleries
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Storytelling grid, download permission, LR integration,
                    clips & photos side-by-side (in beta)
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Print Store
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    30+ Global labs, online payments, automatic fulfillment,
                    album builder
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Sales Automations
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Automated marketing campaigns, coupons & gift cards
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Sales Automations
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Automated marketing campaigns, coupons & gift cards
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Studio Management Integrations
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Custom Branding
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Your logo and watermarks
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center pb-16">
              <div className="flex flex-row mx-auto w-[70%] my-4 gap-3">
                <div className="flex flex-col items-center gap-4 justify-between">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                  <div className="h-4 w-6 text-[#333] flex flex-col items-center justify-center">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 1.99988C6.486 1.99988 2 6.48588 2 11.9999C2 17.5139 6.486 21.9999 12 21.9999C17.514 21.9999 22 17.5139 22 11.9999C22 6.48588 17.514 1.99988 12 1.99988ZM12 19.9999C7.589 19.9999 4 16.4109 4 11.9999C4 7.58888 7.589 3.99988 12 3.99988C16.411 3.99988 20 7.58888 20 11.9999C20 16.4109 16.411 19.9999 12 19.9999Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M11 11.6001C11 11.2688 11.2686 11.0001 11.6 11.0001H12.4C12.7314 11.0001 13 11.2688 13 11.6001V16.4001C13 16.7315 12.7314 17.0001 12.4 17.0001H11.6C11.2686 17.0001 11 16.7315 11 16.4001V11.6001ZM11 7.60012C11 7.26875 11.2686 7.00012 11.6 7.00012H12.4C12.7314 7.00012 13 7.26875 13 7.60012V8.40012C13 8.73149 12.7314 9.00012 12.4 9.00012H11.6C11.2686 9.00012 11 8.73149 11 8.40012V7.60012Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-4 h-full">
                  <div className="flex flex-col">
                    <p className="text-base text-[#333] font-bold leading-[20px]">
                      Chat Support for Visitors
                    </p>
                    <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                      Chat Support for Clients & Guests
                    </p>
                  </div>
                  <p className="text-sm text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Visit Pic-Time.com on a desktop to review all Free plan
                    features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col border-[1px] w-full border-[#0000001a] bg-[#f5f5f5]">
          <div className="bg-[#e2d4bb] w-full flex items-center justify-center h-[50px]">
            <p className="text-[#222] text-[11px] tracking-[2px] text-center">
              BEST VALUE
            </p>
          </div>
          <div className="flex flex-col justify-center items-center h-full mt-5 mb-10">
            <h2 className="text-base text-center font-bold mb-5">Advanced</h2>

            <div className="flex flex-col h-auto gap-2">
              <div className="flex flex-row items-end justify-center gap-[5px] mb-[9px]">
                <div className="text-[#54524e]">US$</div>
                <div className="text-[55px] leading-[56px]">42</div>
                <div className="text-[#54524e]">/mo</div>
              </div>
              <a
                href="#"
                className="h-10 uppercase flex items-center justify-center tracking-[1.5px] text-xs px-5 text-black border-[1px] border-black"
              >
                Start Free
              </a>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 mb-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    20GB Photo Storage
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Approx. 6K photos
                  </p>
                </div>
                <div className="h-4 w-6 text-[#333] flex flex-col items-center justify-center relative right-[-30px]">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 1.99988C6.486 1.99988 2 6.48588 2 11.9999C2 17.5139 6.486 21.9999 12 21.9999C17.514 21.9999 22 17.5139 22 11.9999C22 6.48588 17.514 1.99988 12 1.99988ZM12 19.9999C7.589 19.9999 4 16.4109 4 11.9999C4 7.58888 7.589 3.99988 12 3.99988C16.411 3.99988 20 7.58888 20 11.9999C20 16.4109 16.411 19.9999 12 19.9999Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M11 11.6001C11 11.2688 11.2686 11.0001 11.6 11.0001H12.4C12.7314 11.0001 13 11.2688 13 11.6001V16.4001C13 16.7315 12.7314 17.0001 12.4 17.0001H11.6C11.2686 17.0001 11 16.7315 11 16.4001V11.6001ZM11 7.60012C11 7.26875 11.2686 7.00012 11.6 7.00012H12.4C12.7314 7.00012 13 7.26875 13 7.60012V8.40012C13 8.73149 12.7314 9.00012 12.4 9.00012H11.6C11.2686 9.00012 11 8.73149 11 8.40012V7.60012Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <div className="flex flex-row items-start justify-center tracking-[.5px] bg-[#faf2f2] text-[#ba5a23] px-[6px] text-[9px] rounded-[100px] bold-medium mb-[6px]">
                    New!
                  </div>
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    5GB Video Storage
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Up to 4K quality, Approx. 30 min
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Client Galleries
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Storytelling grid, download permission, LR integration,
                    clips & photos side-by-side (in beta)
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Print Store
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    30+ Global labs, online payments, automatic fulfillment,
                    album builder
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Sales Automations
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Automated marketing campaigns, coupons & gift cards
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Sales Automations
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Automated marketing campaigns, coupons & gift cards
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Studio Management Integrations
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-[#0000001a]">
              <div className="flex flex-row mx-auto w-[70%] gap-3 my-4">
                <div className="flex flex-row items-start">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-start h-full gap-1">
                  <p className="text-base text-[#333] font-bold leading-[20px]">
                    Custom Branding
                  </p>
                  <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Your logo and watermarks
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center pb-16">
              <div className="flex flex-row mx-auto w-[70%] my-4 gap-3">
                <div className="flex flex-col items-center gap-4 justify-between">
                  <img
                    src="https://cdn.prod.website-files.com/62cfe0906783f478c401f1aa/66c730cae516bb55ac8d8bb0_v.svg"
                    className="w-[15px]"
                    alt=""
                  />
                  <div className="h-4 w-6 text-[#333] flex flex-col items-center justify-center">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 1.99988C6.486 1.99988 2 6.48588 2 11.9999C2 17.5139 6.486 21.9999 12 21.9999C17.514 21.9999 22 17.5139 22 11.9999C22 6.48588 17.514 1.99988 12 1.99988ZM12 19.9999C7.589 19.9999 4 16.4109 4 11.9999C4 7.58888 7.589 3.99988 12 3.99988C16.411 3.99988 20 7.58888 20 11.9999C20 16.4109 16.411 19.9999 12 19.9999Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M11 11.6001C11 11.2688 11.2686 11.0001 11.6 11.0001H12.4C12.7314 11.0001 13 11.2688 13 11.6001V16.4001C13 16.7315 12.7314 17.0001 12.4 17.0001H11.6C11.2686 17.0001 11 16.7315 11 16.4001V11.6001ZM11 7.60012C11 7.26875 11.2686 7.00012 11.6 7.00012H12.4C12.7314 7.00012 13 7.26875 13 7.60012V8.40012C13 8.73149 12.7314 9.00012 12.4 9.00012H11.6C11.2686 9.00012 11 8.73149 11 8.40012V7.60012Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-4 h-full">
                  <div className="flex flex-col">
                    <p className="text-base text-[#333] font-bold leading-[20px]">
                      Chat Support for Visitors
                    </p>
                    <p className="text-xs text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                      Chat Support for Clients & Guests
                    </p>
                  </div>
                  <p className="text-sm text-[#acacac] font-medium tracking-[.5px] leading-[17px]">
                    Visit Pic-Time.com on a desktop to review all Free plan
                    features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
