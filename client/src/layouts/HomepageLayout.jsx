import React from "react";
import { Outlet } from "react-router";
import MandalName from "../components/Navbar";
import Navbar from "../components/Navbar";

export default function HomepageLayout() {
  return (
    <>
      <main className=" bg-base-200 min-h-screen pb-5 flex flex-col gap-[50px] items-center justify-center">
        <Navbar />
        <div className="join mb-5">
          <div className="btn join-item bg-black text-white"> Note </div>
          <p className="join-item bg-amber-200 flex items-center justify-center px-2 ">
            working on ui design
          </p>
        </div>
        <Outlet />
      </main>
    </>
  );
}
