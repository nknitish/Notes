import React from "react";
import { LogoContainer, MyComponent, ProfileContainer } from "./NavBar.style";
import Image from "next/image";

//Images
import Logo from "@/Assets/Images/Logo.svg";
import Add from "@/Assets/Images/add.png";
import { Avatar, Typography } from "@mui/material";

export default function NavBar() {
  return (
    <MyComponent>
      <LogoContainer>
        <Image src={Logo} alt="Logo" />
      </LogoContainer>

      <ProfileContainer>
        <Image src={Add} alt="Add" sx={{ mr: 100 }} />
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Typography variant="p">Nitish</Typography>
      </ProfileContainer>
    </MyComponent>
  );
}
