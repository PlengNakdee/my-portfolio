import { Popover } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  return (
    <div
      className={`fixed z-20 fixed w-full font-mono flex justify-between ${
        scroll ? "bg-black" : "bg-none"
      }`}
    >
      <div className="ml-4 mt-4 sm:ml-10 lg:ml-20">
        <a href="/">
          <p className="text-3xl">Pleng Nakdee</p>
        </a>
      </div>
      <div className="flex">
        <div className="relative md:hidden mr-4 mt-4">
          <Popover>
            <Popover.Button>
              <MenuIcon className="text-white h-8" />
            </Popover.Button>

            <Popover.Panel className="z-10">
              <div className="grid">
                <a href="/" className="text-blue-300">
                  about
                </a>
                <a href="/resume" className="text-purple-300">
                  resume
                </a>
                <a href="/portfolio" className="text-red-300">
                  portfolio
                </a>
                <a href="/contact" className="text-green-300">
                  contact
                </a>
              </div>
            </Popover.Panel>
          </Popover>
        </div>
        <div
          className="hidden md:flex space-x-2 mr-4 mt-6 sm:mr-10 lg:mr-20
        sm:space-x-4 lg:space-x-6"
        >
          <a href="/" className="text-blue-300">
            about
          </a>
          <span>|</span>
          <a href="/resume" className="text-purple-300">
            resume
          </a>
          <span>|</span>
          <a href="/portfolio" className="text-red-300">
            portfolio
          </a>
          <span>|</span>
          <a href="/contact" className="text-green-300">
            contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
