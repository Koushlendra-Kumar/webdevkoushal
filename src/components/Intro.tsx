import React from "react";
import mongodbLogo from "../images/mongodb.png";
import javascriptLogo from "../images/javascript.png";
import reactLogo from "../images/react.png";
import nodejsLogo from "../images/node-js.png";
import expressLogo from "../images/express.png";

function Intro() {
  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center mb-12">
        Hi, I'm Koushal,
        <br className="hidden sm:inline" />a web developer
      </h1>
      <div className="flex flex-wrap justify-center mb-8">
        <img
          src={mongodbLogo}
          alt="MongoDB Logo"
          className="w-20 sm:w-24 md:w-28 mx-6 my-4"
        />
        <img
          src={expressLogo}
          alt="Express Logo"
          className="w-20 sm:w-24 md:w-28 mx-6 my-4"
        />
        <img
          src={javascriptLogo}
          alt="JavaScript Logo"
          className="w-20 sm:w-24 md:w-28 mx-6 my-4"
        />
        <img
          src={reactLogo}
          alt="React Logo"
          className="w-20 sm:w-24 md:w-28 mx-6 my-4"
        />
        <img
          src={nodejsLogo}
          alt="Node.js Logo"
          className="w-20 sm:w-24 md:w-28 mx-6 my-4"
        />
      </div>
    </div>
  );
}

export default Intro;
