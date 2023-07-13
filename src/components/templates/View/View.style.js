import { styled } from "@mui/system";

export const ButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "10%",
  marginTop: "80px",

  [theme.breakpoints.down("sm")]: {
    gap: "10%",
  },
}));
