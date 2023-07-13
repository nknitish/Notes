import { Avatar, Typography, styled } from "@mui/material";
import Image from "next/image";

const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
});

export const IconButton = ({
  text,
  backgroundColor,
  src,
  alt = "image",
  ...props
}) => {
  return (
    <Container {...props}>
      <Avatar sx={{ backgroundColor: backgroundColor }}>
        <Image src={src} alt={alt} />
      </Avatar>
      <Typography className="font-inter" sx={{ ml: 1 }}>
        {text}
      </Typography>
    </Container>
  );
};
