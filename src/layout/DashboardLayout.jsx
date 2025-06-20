import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
