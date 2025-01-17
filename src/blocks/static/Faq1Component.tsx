"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";
import React, { useState } from "react";

export default function Faq() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#241a17]"
    >
      <div className="text-white">
        <div className="rb-12 mb-12 text-left md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
        </div>
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-4"
        >
          <AccordionItem
            value="item-1"
            className="border-b border-t border-[#fcfbf966] px-5 md:px-6"
          >
            <AccordionTrigger className="text-xl font-semibold md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45">
              Question text goes here
              <Plus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border-b border-[#fcfbf966] px-5 md:px-6"
          >
            <AccordionTrigger className="text-xl font-semibold md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45">
              Question text goes here
              <Plus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border-b border-[#fcfbf966] px-5 md:px-6"
          >
            <AccordionTrigger className="text-xl font-semibold md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45">
              Question text goes here
              <Plus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="border-b border-[#fcfbf966] px-5 md:px-6"
          >
            <AccordionTrigger className="text-xl font-semibold md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45">
              Question text goes here
              <Plus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
