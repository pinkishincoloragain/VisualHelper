import { useSelector } from "react-redux";

import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";

export default function Button2(props) {
  const darkMode = useSelector((state) => state.mode.value);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", animationDuration: "2s" }}
    >
      <Button
        onClick={props.onClick}
        href={props.href}
        sx={{
          width: "30vw",
          height: "8vh",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          color={darkMode ? "#f2f2f2" : "#1f1f1f"}
          fontSize={"h3.fontSize"}
        >
          {props.name}
        </Typography>
      </Button>
      {/* Will be changed to shrinking bar */}

      <Box
        sx={{
          width: "30vw",
          height: "0.5vh",
          backgroundColor: darkMode ? "#f2f2f2" : "#1f1f1f",
        }}
      ></Box>
    </Box>
  );
}
