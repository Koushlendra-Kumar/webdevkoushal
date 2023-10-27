import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="text-center lg:text-center p-6 bg-black text-white">
      <span className="block sm:inline-block">&copy; {year} - Koushlendra Kumar</span>
    </div>
  );
}

export default Footer;
