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
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="mx-auto lg:max-w-3xl">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.,
          </p>
        </div>
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-4"
        >
          <AccordionItem
            value="item-1"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45">
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
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45">
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
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45">
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
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45">
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
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          </p>
          <div className="flex flex-col items-center justify-normal p-10">
            <a
              href="#"
              className="whitespace-nowrap inline-flex items-center text-white bg-black hover:bg-primary-800 font-medium rounded-[.5rem] text-sm px-5 py-2.5 text-center"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
