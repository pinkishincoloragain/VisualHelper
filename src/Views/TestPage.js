import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import Test from "../Components/Test/Test";
import { useSelector, useDispatch } from "react-redux";

export default function TestPage(props) {
  const darkMode = useSelector((state) => state.mode.value);

  return (
    <Box
      sx={{
        width: "max(100%,100vw)",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: darkMode ? "#1f1f1f" : "#f2f2f2",
      }}
    >
      <Test />
    </Box>
  );
}
