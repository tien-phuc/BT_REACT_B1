import React from "react";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";
import "./style.css";

export const BaiTapThucHanhLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
