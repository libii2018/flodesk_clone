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
  {
    title:
      "In a few months of using Flodesk, Anna and Jesus grew their list by too two",
    price: "$80,000",
  },
  {
    title:
      "In a few months of using Flodesk, Anna and Jesus grew their list by too three",
    price: "1519.29%",
  },
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
    <section className="flex flex-col items-center pb-14 pt-56 px-12 bg-[#241a17] relative w-full">
      <Carousel
        opts={options}
        plugins={plugins}
        setApi={setApi}
        className="w-full flex flex-col items-center lg:max-w-[1504px] max-w-sm overflow-hidden h-full gap-4"
      >
        <CarouselContent className="w-full lg:mb-2 mb-8 text-white h-[278px] md:h-[378px] lg:h-[478px]">
          {datas.map((data, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col items-center">
                <h2 className="text-3xl lg:text-4xl max-w-3xl lg:max-w-4xl mb-8 font-normal text-center">
                  {data.title}
                </h2>
                <h1 className="text-8xl lg:text-[140px]">{data.price}</h1>
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
