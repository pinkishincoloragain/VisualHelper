import { Typography, Box } from "@mui/material";

export default function NextButton(props) {
  return (
    <Box>
      <Typography
        variant="h3"
        fontWeight={"100"}
        lineHeight="1.7"
        onClick={props.onClick}
        sx={{ color: !props.mode ? "#1f1f1f" : "#f2f2f2", ...props.sx }}
      ></Typography>
    </Box>
  );
}
