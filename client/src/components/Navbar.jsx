import React from "react";
import { Link } from "react-router";
import { Image } from "@imagekit/react";

export default function Navbar() {
  return (
    <div className="navbar h-25 sm:h-20  bg-white border-b-4 border-orange-400 flex justify-center sticky z-50 top-0 ">
      <Image
        urlEndpoint={import.meta.env.VITE_IMAGEKIT_ENDPOINT}
        src="jay bhavani/jay-bhavani-logo.png"
        alt="Jay Bhavani logo"
        className="sm:relative sm:top-6 h-23 w-23 sm:h-30  sm:w-30 md:h-35 md:w-35 "
      />
    </div>
  );
}
