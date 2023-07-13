import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/system";
import { colors } from "@/styles/Color";

const Button = styled((props) => (
  <MuiButton
    style={{
      backgroundColor: props?.disabled ? colors.lightGrey : colors.blue,
    }}
    variant="contained"
    {...props}
  />
))(({ theme }) => ({
  color: "white",
  borderRadius: "27px",
  height: "25px",
  textTransform: "capitalize",
  backgroundColor: colors.blue,

  [theme.breakpoints.down("md")]: {
    height: "20px",
  },
}));
export default Button;
