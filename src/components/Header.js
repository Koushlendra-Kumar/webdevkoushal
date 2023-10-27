import { useState } from "react";
//import Newsletter from "./Newsletter";

function Header() {
  const [menu, setMenu] = useState(false);
  function toggle() {
    setMenu(!menu)
  }
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-white shadow-lg p-6">
        <div className="font-cherry text-5xl text-blue-500">
          WDK
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-white hover:bg-blue-500 hover:border-white" onClick={toggle}>
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
        <div className={`w-full ${menu ? 'block': 'hidden'}  lg:flex lg:items-center lg:w-auto`}>
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
            {/* <Popup
              trigger={
                <button className="inline-block text-sm px-4 py-2 leading-none border rounded font-medium text-black border-black hover:border-red-500 hover:text-white hover:bg-red-500 mt-4 lg:mt-0">
                  Newletter
                </button>
              }
              position="right top"
            >
              <Newsletter />
            </Popup> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
