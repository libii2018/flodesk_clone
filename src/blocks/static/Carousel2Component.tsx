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
    <div className="flex flex-col items-center justify-center">
      <Text
        as="h1"
        className="text-[#241a17] lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-medium text-center"
      >
        <span className="block">The world’s</span>
        <span className="block">most intuitive</span>
        <span className="block">email marketing platform</span>
      </Text>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full h-full"
      >
        <CarouselContent className="flex items-center justify-center">
          {datas.map((data, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <img src={data.src} alt={data.alt} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
