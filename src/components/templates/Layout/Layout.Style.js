const { colors } = require("@/styles/Color");
const { styled } = require("@mui/material");

export const Outer = styled("div")(({ theme }) => ({
  borderRadius: " 0 0 27px 27px",
  height: "100vh",
  backgroundColor: colors.lightGrey,
}));
