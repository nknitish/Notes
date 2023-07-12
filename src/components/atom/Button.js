import { Button as MuiButton } from "@mui/material";
import styled from "@emotion/styled";
import { colors } from "@/styles/Color";

const Button = styled((props) => (
  <MuiButton
    style={{ backgroundColor: colors.blue }}
    variant="contained"
    {...props}
  />
))({
  color: "white",
  borderRadius: "27px",
  height: "20px",
  textTransform: "capitalize",
});
export default Button;
