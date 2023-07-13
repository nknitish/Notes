import { TextareaAutosize } from "@mui/base";
import { styled } from "@mui/system";

export const TextArea = styled((props) => (
  <TextareaAutosize
    placeholder="Type anything…"
    minRows={3}
    maxRows={12}
    {...props}
  />
))({
  width: "100%",
  marginTop: "35px",
  padding: "10px",
  borderRadius: "9px",
  boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)",
});
