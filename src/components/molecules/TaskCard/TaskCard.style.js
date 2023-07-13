import { styled } from "@mui/system";
import { Card as MuiCard } from "@mui/material";

export const Card = styled(MuiCard)({
  marginTop: "25px",
  height: "54px",
  display: "flex",
  alignItems: "center",
  borderRadius: "9px",
  background: "white",
  boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)",
  padding: "0 5%",
});

export const Left = styled("div")({
  display: "flex",
  flex: "1",
  img: {
    marginRight: "3px",
  },
});

export const Right = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  button: {
    marginRight: "10px",
  },

  "& .MuiAvatar-root": {
    marginLeft: "20px",
    cursor: "pointer",
  },

  [theme.breakpoints.down("sm")]: {
    "& .MuiAvatar-root": {
      marginLeft: "0px",
    },
  },
}));
