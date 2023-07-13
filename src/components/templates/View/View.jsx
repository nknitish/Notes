import { Typography } from "@mui/material";
import { ButtonContainer } from "./View.style";

//Icon
import Bin from "@/Assets/Images/bin.png";
import Edit from "@/Assets/Images/edit.png";
import Arrow from "@/Assets/Images/left-arrow.png";

//components
import { Container } from "@/components/atom/Container";
import { IconButton } from "@/components/atom/IconButton";

//Path
import { path } from "@/components/utilities/constant";

//redux
import { deleteItem } from "@/redux/noteSlice";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export default function View() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { query: data } = router;

  const handleEdit = () => {
    router.push({
      pathname: path.add,
      query: data,
    });
  };

  const handleDelete = () => {
    dispatch(deleteItem(data?.id));
    router.push(path.home);
  };

  return (
    <Container>
      <Typography variant="h6" sx={{ mt: 3 }} className="font-inter">
        {`Title - ${data?.title}`}
      </Typography>
      <Typography sx={{ mt: 3 }} className="font-inter">
        {`Description - ${data?.description}`}
      </Typography>

      <ButtonContainer>
        <IconButton
          onClick={() => router.push(path.home)}
          text={"Back"}
          src={Arrow}
          backgroundColor={"#000"}
          alt="back"
        />
        <IconButton
          onClick={handleEdit}
          text={"Edit"}
          src={Edit}
          backgroundColor={"#005981"}
          alt="Edit"
        />
        <IconButton
          onClick={handleDelete}
          text={"Delete"}
          src={Bin}
          backgroundColor={"#D4A656"}
          alt="bin"
        />
      </ButtonContainer>
    </Container>
  );
}
