"use client";

import { useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { RxChevronDown, RxChevronRight } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  return (
    <header className="block top-0 sticky z-50">
      <nav
        className={clsx(
          "relative flex flex-col lg:flex-row lg:h-24 h-16 w-full items-center justify-between lg:px-12",
          {
            "bg-[#241a17]": isMobileMenuOpen === true,
            "bg-white": isMobileMenuOpen === false,
          }
        )}
      >
        <div className="flex flex-row items-center justify-between w-full lg:p-0 p-6 z-20">
          <a
            href="#"
            className={clsx(
              "flex h-8 relative text-white text-3xl text-left font-medium",
              {
                "text-white": isMobileMenuOpen === true,
                "text-[#241a17]": isMobileMenuOpen === false,
              }
            )}
          >
            <span>
              <span>f</span>
              <span>l</span>
              <span>o</span>
              <span>d</span>
              <span>e</span>
              <span>s</span>
              <span>k</span>
            </span>
          </a>
          <div
            onClick={() => isMobile && setIsMobileMenuOpen((prev) => !prev)}
            className="flex flex-col items-center cursor-pointer lg:hidden"
          >
            <div
              className={clsx("my-[1.5px] h-1 w-8", {
                "bg-white": isMobileMenuOpen === true,
                "bg-black": isMobileMenuOpen === false,
              })}
            ></div>
            <div
              className={clsx("my-[1.5px] h-1 w-8", {
                "bg-white": isMobileMenuOpen === true,
                "bg-black": isMobileMenuOpen === false,
              })}
            ></div>
            <div
              className={clsx("my-[1.5px] h-1 w-8", {
                "bg-white": isMobileMenuOpen === true,
                "bg-black": isMobileMenuOpen === false,
              })}
            ></div>
          </div>
        </div>
        <div
          className={clsx(
            "block p-6 top-[63px] left-0 right-0 bottom-0 fixed z-[2px] bg-[#241a17]",
            {
              visible: isMobileMenuOpen === true,
              hidden: isMobileMenuOpen === false,
            }
          )}
        >
          <div className="flex flex-col items-start justify-center gap-x-6 h-full">
            <div className="flex flex-col items-start justify-center w-full h-full">
              <nav className="block items-start text-white text-3xl font-medium w-full">
                <div className="block py-3">
                  <a
                    href="#"
                    className="whitespace-nowrap text-md lg:px-4 lg:py-2 lg:text-base"
                  >
                    Features
                  </a>
                </div>
                <div className="block py-3">
                  <a
                    href="#"
                    className="whitespace-nowrap text-md lg:px-4 lg:py-2 lg:text-base"
                  >
                    Pricing
                  </a>
                </div>
                <div className="block py-3">
                  <a
                    href="#"
                    className="whitespace-nowrap text-md lg:px-4 lg:py-2 lg:text-base"
                  >
                    About us
                  </a>
                </div>
                <div className="block py-3">
                  <a
                    href="#"
                    className="whitespace-nowrap text-md lg:px-4 lg:py-2 lg:text-base"
                  >
                    FAQ
                  </a>
                </div>
              </nav>
            </div>
            <div className="w-full">
              <div className="block pt-4 w-full">
                <a
                  href="#"
                  className="whitespace-nowrap px-5 py-0 h-10 rounded-[20.25px] cursor-pointer relative font-medium border-[0.125em] flex items-center justify-center w-full border-solid border-[#fcfbf9] bg-white text-[#241a17]"
                >
                  <span>Sign Up</span>
                </a>
              </div>
              <div className="block pt-4 w-full">
                <a
                  href="#"
                  className="whitespace-nowrap px-5 py-0 h-10 rounded-[20.25px] cursor-pointer relative font-medium border-[0.125em] flex items-center justify-center w-full border-solid border-[#fcfbf9] bg-[#241a17] text-[#fcfbf9]"
                >
                  <span>Login</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex flex-row items-center justify-between gap-x-10 hidden">
          <div className="flex flex-row items-center justify-center gap-x-8">
            <div className="whitespace-nowrap cursor-pointer text-[#241a17] font-medium">
              <a href="#" className="text-md">
                Features
              </a>
            </div>
            <div className="whitespace-nowrap cursor-pointer text-[#241a17] font-medium">
              <a href="#" className="text-md">
                Pricing
              </a>
            </div>
            <div className="whitespace-nowrap cursor-pointer text-[#241a17] font-medium">
              <a href="#" className="text-md">
                About us
              </a>
            </div>
            <div className="whitespace-nowrap cursor-pointer text-[#241a17] font-medium">
              <a href="#" className="text-md">
                FAQ
              </a>
            </div>
          </div>
          <div className="flex flex-row gap-x-6">
            <div className="block w-full">
              <a
                href="#"
                className="whitespace-nowrap px-5 py-0 h-11 rounded-[20.25px] cursor-pointer relative font-medium border-[0.125em] flex items-center justify-center w-full border-solid border-[#fcfbf9] text-white bg-[#241a17] hover:rounded-none duration-500"
              >
                <span>Sign Up</span>
              </a>
            </div>
            <div className="block w-full">
              <a
                href="#"
                className="whitespace-nowrap px-5 py-0 h-11 rounded-[20.25px] cursor-pointer relative font-medium border-[0.125em] flex items-center justify-center w-full border-solid border-[#241a17] text-[#241a17] bg-white hover:rounded-none duration-500"
              >
                <span>Login</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
