import React from "react";

import { Outlet, Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import Navbar from "../components/Navbar";

export default function AdminLayout() {
  const { logout } = useContext(AuthContext);

  function handleLogout() {
    logout();
  }

  return (
    <>
      <main className=" bg-base-200 min-h-screen pb-5 flex flex-col gap-[50px] items-center justify-center">
        <Navbar />
        <div>
          <Link to="createmember">
            <button className="btn btn-warning">ADD NEW MEMBER</button>
          </Link>

          <button className="btn btn-secondary ml-3" onClick={handleLogout}>
            logout
          </button>
        </div>

        <div className="join mb-5">
          <div className="btn join-item bg-black text-white"> Note </div>
          <p className="join-item bg-amber-200 flex items-center justify-center px-2 ">
            working on ui design & fixing issue
          </p>
        </div>
        <Outlet />
      </main>
    </>
  );
}
