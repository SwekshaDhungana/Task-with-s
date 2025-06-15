import React from "react";
import Sales from "../pages/Sales/Sales";
import { Outlet } from "react-router-dom";

function SalesLayout() {
  return (
    <>
      <Sales />
      <Outlet />
    </>
  );
}

export default SalesLayout;
