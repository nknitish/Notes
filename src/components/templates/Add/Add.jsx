import React from "react";
import { Box, ButtonContainer } from "./Add.style";
import { Typography } from "@mui/material";
import { TextArea } from "@/components/atom/TextArea";
import Button from "@/components/atom/Button";

export default function Add() {
  return (
    <Box>
      <Typography sx={{ mt: 3 }}>Task- Prepare A/B Test</Typography>

      <TextArea placeholder="Title" minRows={3} />
      <TextArea placeholder="Description" minRows={5} />

      <ButtonContainer>
        <Button>Submit</Button>
      </ButtonContainer>
    </Box>
  );
}
