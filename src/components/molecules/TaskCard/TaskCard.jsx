import { Avatar, Typography } from "@mui/material";
import Image from "next/image";
import { Card, Left, Right } from "./TaskCard.style";

//Images
import Ellipse from "@/Assets/Images/Ellipse.svg";
import Button from "@/components/atom/Button";

//Icon
import Bin from "@/Assets/Images/bin.png";
import { useRouter } from "next/router";
import { path } from "@/components/utilities/constant";
import { useDispatch } from "react-redux";
import { deleteItem } from "@/redux/noteSlice";

export default function TaskCard({ data }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleEdit = () => {
    router.push({
      pathname: path.add,
      query: data,
    });
  };
  const handleView = () => {
    router.push({
      pathname: path.view,
      query: data,
    });
  };

  const handleDelete = () => {
    dispatch(deleteItem(data?.id));
  };

  return (
    <Card>
      <Left>
        <Image src={Ellipse} alt="Ellipse" />
        <Typography className="font-inter">{data?.title}</Typography>
      </Left>

      <Right>
        <Button onClick={handleEdit}>Edit </Button>
        <Button onClick={handleView}>View </Button>
        <Avatar sx={{ backgroundColor: "#D4A656" }} onClick={handleDelete}>
          <Image src={Bin} alt="bin" />
        </Avatar>
      </Right>
    </Card>
  );
}
