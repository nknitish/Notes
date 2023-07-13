import Button from "@/components/atom/Button";
import { Container } from "@/components/atom/Container";
import { TextArea } from "@/components/atom/TextArea";
import { path } from "@/components/utilities/constant";
import { add } from "@/redux/noteSlice";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ButtonContainer } from "./Add.style";

export default function Add() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  const { query } = router;

  useEffect(() => {
    //If Query is not empty // Means we are editing task
    if (Object.keys(query).length) {
      setIsEditMode(true);
      setDescription(query.description);
      setTitle(query.title);
    }
  }, [query]);

  const handleSubmit = () => {
    //Add Update record in list

    dispatch(
      add({
        id: isEditMode ? query?.id : Date.now().toString(),
        title,
        description,
      })
    );

    router.push(path.home);
  };
  return (
    <Container>
      <Typography className="font-inter" sx={{ mt: 3 }}>
        Task- Prepare A/B Test
      </Typography>

      <TextArea
        placeholder="Title"
        minRows={3}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextArea
        placeholder="Description"
        minRows={5}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <ButtonContainer>
        {/* User Should add title to save records */}
        <Button disabled={!title} onClick={handleSubmit}>
          Submit
        </Button>
      </ButtonContainer>
    </Container>
  );
}
