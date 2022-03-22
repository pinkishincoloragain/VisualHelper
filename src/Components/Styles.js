import { Typography, Box } from "@mui/material";

const Typography2 = (props) => {
  return (
    <Typography
      variant="h3"
      fontWeight={"100"}
      lineHeight="1.7"
      onClick={props.onClick}
      sx={{ color: !props.mode ? "#1f1f1f" : "#f2f2f2", ...props.sx }}
    >
      {props.name}
    </Typography>
  );
};

const TextBox = (props) => {
  return (
    <Box
      sx={{
        p: "1rem",
        width: "100%",
        height: "100%",
        backgroundColor: !props.darkMode ? "#f2f2f2" : "#1f1f1f",
        ...props.sx,
      }}
    >
      <Typography
        sx={{ px: "4vw" }}
        variant="h6"
        color={props.darkMode ? "#f2f2f2" : "#1f1f1f"}
      >
        {props.text}
      </Typography>
    </Box>
  );
};

export { Typography2, TextBox };
