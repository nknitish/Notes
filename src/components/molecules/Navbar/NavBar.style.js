import { colors } from "@/styles/Color";
import { styled } from "@mui/system";

export const MyComponent = styled("div")({
  backgroundColor: colors.blue,
  height: "20vh",
  display: "flex",
  alignItems: "center",
  padding: "0 40px",
  borderRadius: "27px 27px 0 0",
});

export const LogoContainer = styled("div")({
  flex: "1",
});

export const ProfileContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  img: {
    marginRight: "35px",
  },
  "& .MuiTypography-root ": {
    marginLeft: "3px",
    fontSize: "16px",
    color: "white",
  },
});
