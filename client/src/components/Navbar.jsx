import React from "react";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="navbar bg-white flex justify-center">
      <div>
        <Link to="/">
          <h1 className="btn btn-ghost text-3xl text-purple-600">
            Jay Bhavani Navyuvak Mandal
          </h1>
        </Link>
      </div>
    </div>
  );
}
