import { Fragment } from "react";
import GlobalStyle from "./styles/global";
import { Route, Routes } from "react-router-dom";
import DefaultLayouts from "./layout/defaultLayout";

export default function MainRoutes() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<DefaultLayouts />}></Route>
      </Routes>

      <GlobalStyle />
    </Fragment>
  );
}
