import React from "react";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="navbar  bg-yellow-300 border-b-4 border-yellow-400 flex justify-center sticky z-50 top-0 ">
      <div>
        <Link to="/">
          <h1 className="btn btn-ghost text-2xl text-orange-700 py[40px] sm:py-7 sm:text-4xl">
            Jay Bhavani Navyuvak Mandal
          </h1>
        </Link>
      </div>
    </div>
  );
}
