import React from "react";
import MandalName from "../components/MandalName";
import MenuCard from "../components/homepage/MenuCard";
import AdminPage from "./AdminPage";
import Table from "../components/homepage/Table";

export default function Homepage() {
  return (
    <>
      <main className=" bg-base-200 min-h-screen flex flex-col gap-[50px] items-center justify-center">
        <MandalName />
        <AdminPage />
        {/* <Table /> */}
      </main>
    </>
  );
}
