import { Container } from "@/components/atom/Container";
import TaskCard from "@/components/molecules/TaskCard/TaskCard";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function Home() {
  const notes = useSelector((state) => state.allNotes);
  return (
    <Container>
      <Typography className="font-inter" sx={{ mt: 3 }}>
        Today's Task
      </Typography>
      {notes?.map((note) => (
        <TaskCard key={note.id} data={note} />
      ))}
    </Container>
  );
}
