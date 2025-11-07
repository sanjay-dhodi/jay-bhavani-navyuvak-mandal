import React from "react";
import MandalName from "../components/MandalName";
import { Outlet } from "react-router";

export default function AdminLayout() {
  return (
    <>
      <main className=" bg-base-200 min-h-screen pb-5 flex flex-col gap-[50px] items-center justify-center">
        <MandalName />
        <Outlet />
      </main>
    </>
  );
}
