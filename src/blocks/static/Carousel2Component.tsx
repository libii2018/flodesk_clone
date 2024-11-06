import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Text } from "@/components/ui/base/text";

const datas = [
  {
    src: "/8.webp",
    alt: "image carousel",
  },
  {
    src: "/1.webp",
    alt: "image carousel",
  },
  {
    src: "/2.webp",
    alt: "image carousel",
  },
  {
    src: "/3.webp",
    alt: "image carousel",
  },
  {
    src: "/4.webp",
    alt: "image carousel",
  },
  {
    src: "/5.webp",
    alt: "image carousel",
  },
];

export default function CarouselBlock() {
  return (
    <section className="flex flex-col items-center justify-center p-8">
      <div className="p-10 text-center">
        <h2 className="text-6xl">See it in action</h2>
      </div>
      <div className="grid md:grid-cols-4 items-center justify-center grid-rows-1 lg:p-8 py-4 md:gap-x-10 gap-y-5">
        <img
          src="/1.webp"
          alt=""
          className="w-full max-h-96 object-cover aspect-square"
        />
        <img
          src="/6.webp"
          alt=""
          className="w-full max-h-96 object-cover aspect-square"
        />
        <img
          src="/3.webp"
          alt=""
          className="w-full max-h-96 object-cover aspect-square"
        />
        <img
          src="/4.webp"
          alt=""
          className="w-full max-h-96 object-cover aspect-square"
        />
      </div>
      <div className="flex flex-col items-center justify-normal p-10">
        <a
          href="#"
          className="whitespace-nowrap inline-flex items-center text-white bg-black hover:bg-primary-800 font-medium rounded-[.5rem] text-sm px-5 py-2.5 text-center"
        >
          Try it for free
        </a>
      </div>
    </section>
  );
}
