import { Fragment } from "react";
import { Outlet } from "react-router-dom";

export default function DefaultLayouts() {
  return (
    <Fragment>
      <Outlet />
      <h1>Hello Word</h1>
    </Fragment>
  );
}
