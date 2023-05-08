import React from "react";
import Popup from "reactjs-popup";
import Newsletter from "./Newsletter";

function Header() {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-white shadow-lg p-6">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <div className="grid grid-cols-2 grid-rows-2 gap-y-0.5 font-black tracking-tighter">
            <div className="flex justify-end items-end m-0 p-0 leading-3 text-[#f7df1e]">
              Web
            </div>
            <div className="flex justify-end items-start m-0 p-0 leading-3 text-[#3178C6]">
              Dev
            </div>
            <div className="col-start-2 col-end-3 row-start-1 row-end-3 m-0 p-0 flex justify-between items-center text-3xl font-light">
              Koushal
            </div>
          </div>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-white hover:bg-black hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 font-medium text-base text-black hover:text-cyan-400 mr-4"
            >
              Skills
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 font-medium text-base text-black hover:text-cyan-400 mr-4"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block mt-4 lg:inline-block lg:mt-0 font-medium text-base text-black hover:text-cyan-400 mr-4"
            >
              Contact
            </a>
          </div>
          <div>
            <Popup
              trigger={
                <button className="inline-block text-sm px-4 py-2 leading-none border rounded font-medium text-black border-black hover:border-red-500 hover:text-white hover:bg-red-500 mt-4 lg:mt-0">
                  Newletter
                </button>
              }
              position="right top"
            >
              <Newsletter />
            </Popup>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
