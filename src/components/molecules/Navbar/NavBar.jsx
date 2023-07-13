import React, { useEffect, useState } from "react";
import { LogoContainer, MyComponent, ProfileContainer } from "./NavBar.style";
import Image from "next/image";

//Images
import Logo from "@/Assets/Images/Logo.svg";
import Add from "@/Assets/Images/add.png";
import { Avatar, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { path } from "@/components/utilities/constant";

export default function NavBar() {
  const router = useRouter();

  const [user, setUser] = useState({
    name: "",
    image: "",
  });

  const handleAddClick = () => {
    router.push(path.add);
  };
  const handleLogoClick = () => {
    router.push(path.home);
  };

  const fetchUserDetails = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        if (data?.results?.length) {
          let record = data?.results?.[0];
          setUser({
            name: record?.name.first,
            image: record?.picture?.thumbnail,
          });
        }
      });
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <MyComponent>
      <LogoContainer>
        <Image src={Logo} alt="Logo" onClick={handleLogoClick} />
      </LogoContainer>

      <ProfileContainer>
        <Image src={Add} onClick={handleAddClick} alt="add" />
        <Avatar alt={user?.name} src={user?.image} className="avatar" />
        <Typography variant="p" className="font-inter">
          {user?.name}
        </Typography>
      </ProfileContainer>
    </MyComponent>
  );
}
