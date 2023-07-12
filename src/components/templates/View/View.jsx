import React from "react";
import { Box, ButtonContainer } from "./View.style";
import { Avatar, Typography } from "@mui/material";
import { TextArea } from "@/components/atom/TextArea";
import Button from "@/components/atom/Button";

//Icon
import Bin from "@/Assets/Images/bin.png";
import Arrow from "@/Assets/Images/left-arrow.png";
import Edit from "@/Assets/Images/edit.png";
import Image from "next/image";
import { IconButton } from "@/components/atom/IconButton";

export default function View() {
  return (
    <Box>
      <Typography variant="h5" sx={{ mt: 3 }}>
        Title - Hello world
      </Typography>
      <Typography sx={{ mt: 3 }}>
        Description: Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>

      <ButtonContainer>
        <IconButton
          onClick={() => alert("Hi")}
          text={"Back"}
          src={Arrow}
          backgroundColor={"#000"}
          alt="back"
        />
        <IconButton
          onClick={() => alert("Hi")}
          text={"Edit"}
          src={Edit}
          backgroundColor={"#005981"}
          alt="Edit"
        />
        <IconButton
          onClick={() => alert("Hi")}
          text={"Delete"}
          src={Bin}
          backgroundColor={"#D4A656"}
          alt="bin"
        />
      </ButtonContainer>
    </Box>
  );
}
