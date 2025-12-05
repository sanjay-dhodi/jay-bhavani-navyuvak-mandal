import React from "react";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="navbar bg-white flex justify-center sticky z-50 top-0 ">
      <div>
        <Link to="/">
          <h1 className="btn btn-ghost text-2xl text-purple-600 py[40px] sm:py-7 sm:text-4xl">
            Jay Bhavani Navyuvak Mandal
          </h1>
        </Link>
      </div>
    </div>
  );
}
