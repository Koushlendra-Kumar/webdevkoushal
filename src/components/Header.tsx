import React from 'react';

function Header() {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-white shadow-lg p-6">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
            <span className="font-black text-2xl tracking-tight">KK's</span>
        </div>
        <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-white hover:bg-black hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div className="w-full block lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 font-medium text-base text-black hover:text-cyan-400 mr-4">
                    Skills
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 font-medium text-base text-black hover:text-cyan-400 mr-4">
                    Projects
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 font-medium text-base text-black hover:text-cyan-400 mr-4">
                    Blog
                </a>
                <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 font-medium text-base text-black hover:text-cyan-400 mr-4">
                    Contact
                </a>
            </div>
            <div>
            <a href="#Newsletter" className="inline-block text-sm px-4 py-2 leading-none border rounded font-medium text-base text-black border-black hover:border-red-500 hover:text-white hover:bg-red-500 mt-4 lg:mt-0">Newletter</a>
            </div>
        </div>
        </nav>
    </div>
  );
}

export default Header;