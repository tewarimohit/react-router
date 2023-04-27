import React from "react";
import MainNav from "../components/MainNav";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <MainNav />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
