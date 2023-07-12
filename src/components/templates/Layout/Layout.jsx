import React from "react";
import NavBar from "@/components/molecules/Navbar";

//Styled Components
import { Outer } from "./Layout.Style";

export default function Layout({ children }) {
  return (
    <Outer>
      <NavBar />
      <main>{children}</main>
    </Outer>
  );
}
