import { colors } from "@/styles/Color";
import { styled } from "@mui/system";

export const MyComponent = styled("div")({
  backgroundColor: colors.blue,
  height: "20vh",
  display: "flex",
  alignItems: "center",
  padding: "0 10%",
  borderRadius: "27px 27px 0 0",
});

export const LogoContainer = styled("div")({
  flex: "1",
  img: {
    cursor: "pointer",
  },
});

export const ProfileContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  img: {
    cursor: "pointer",
  },

  ".avatar": {
    marginLeft: "20px",
    marginRight: "2px",
  },

  "& .MuiTypography-root ": {
    marginLeft: "3px",
    fontSize: "16px",
    color: "white",
  },

  [theme.breakpoints.up("lg")]: {
    ".avatar": {
      marginLeft: "60px",
      marginRight: "5px",
    },
  },
}));
