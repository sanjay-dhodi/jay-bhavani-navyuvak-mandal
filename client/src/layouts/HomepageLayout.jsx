import React from "react";
import { Outlet } from "react-router";
import MandalName from "../components/Navbar";
import Navbar from "../components/Navbar";

export default function HomepageLayout() {
  return (
    <>
      <main className=" bg-base-200 min-h-screen pb-5 flex flex-col gap-[50px] items-center justify-center">
        <Navbar />

        <Outlet />
      </main>
    </>
  );
}
