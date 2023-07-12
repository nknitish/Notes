import TaskCard from "@/components/molecules/TaskCard/TaskCard";
import React from "react";
import { Box } from "./Home.style";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Typography sx={{ mt: 3 }}>Today's Task</Typography>
      {Array(5)
        .fill()
        .map((e) => (
          <TaskCard />
        ))}
    </Box>
  );
}
