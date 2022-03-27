import { useSelector } from "react-redux";

import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { useEffect } from "react";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";

export default function Button2(props) {
  const darkMode = useSelector((state) => state.mode.value);
  let mode = darkMode;
  useEffect(() => {
    mode = !darkMode;
  }, [darkMode]);

  return (
    <Button
      onClick={props.onClick}
      href={props.href}
      sx={{
        width: "100%",
        height: "8vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        "&:hover": {
          color: "red",
        },
        "&:focus": {
          color: "red",
        },
        ...props.sx,
      }}
    >
      <Box
        sx={{
          width: "5vw",
          display: "flex",
          margin: "auto",
          flex: "2",
        }}
      >
        <PlayArrowRounded fontSize={"large"} />
      </Box>
      <Box sx={{ margin: "auto" }}>
        <Typography
          variant="h3"
          color={mode ? "#f2f2f2" : "#1f1f1f"}
          fontSize={"h3.fontSize"}
        >
          {props.name}
        </Typography>
      </Box>
    </Button>
  );
}
