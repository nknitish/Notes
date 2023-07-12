import { Avatar, Typography } from "@mui/material";
import Image from "next/image";
import { Card, Left, Right } from "./TaskCard.style";

//Images
import Ellipse from "@/Assets/Images/Ellipse.svg";
import Button from "@/components/atom/Button";

//Icon
import Bin from "@/Assets/Images/bin.png";

export default function TaskCard() {
  return (
    <Card>
      <Left>
        <Image src={Ellipse} alt="Ellipse" />
        <Typography>text="SDFSdf"</Typography>
      </Left>

      <Right>
        <Button>Edit </Button>
        <Button>View </Button>
        <Avatar sx={{ backgroundColor: "#D4A656" }}>
          <Image src={Bin} alt="bin" />
        </Avatar>
      </Right>
    </Card>
  );
}
