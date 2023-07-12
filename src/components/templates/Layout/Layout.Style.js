const { colors } = require("@/styles/Color");
const { styled } = require("@mui/material");

export const Outer = styled("div")({
  borderRadius: " 0 0 27px 27px",
  backgroundColor: colors.lightGrey,
  height: "100vh",
});
