"use client";

import { Text } from "@/components/ui/base/text";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import clsx from "clsx";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

const options = {
  loop: true,
};

const plugins = [
  Autoplay({
    delay: 5000,
  }),
];

const datas = [
  {
    title:
      "In a few months of using Flodesk, Anna and Jesus grew their list by",
    price: "$60,000",
  },
  { title: "yooooo", price: "$60,000" },
  { title: "yooooo", price: "$60,000" },
];

export default function CarouselBlock() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="flex flex-col items-center py-28 bg-[#241a17] relative w-full lg:h-[90vh]">
      <Carousel
        opts={options}
        plugins={plugins}
        setApi={setApi}
        className="w-full flex flex-col items-center lg:max-w-5xl max-w-sm overflow-hidden h-full"
      >
        <CarouselContent className="h-full w-full lg:mb-12 mb-8 text-white">
          {datas.map((data, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col items-center">
                <h2
                  className="lg:max-text-5xl max-w-sm lg:max-w-4xl mb-8 font-normal text-center"
                >
                  {data.title}
                </h2>
                <h1  className="lg:text-9xl">
                  {data.price}
                </h1>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex w-full mt-auto justify-center">
          {[...new Array(datas.length)].map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={clsx("mx-[3px] inline-block size-2 rounded-full", {
                "bg-black": current === index + 1,
                "bg-[#ddd]": current !== index + 1,
              })}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}
