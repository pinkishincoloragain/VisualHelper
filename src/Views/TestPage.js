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
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: darkMode ? "#1f1f1f" : "#f2f2f2",
      }}
    >
      <Paper
        data-aos="fade-up"
        elevation={4}
        sx={{
          pt: "2vh",
          ml: "10vw",
          width: "80vw",
          height: "100%",
          // borderRadius: "20px",
          backgroundColor: darkMode ? "#1f1f1f" : "#f2f2f2",
        }}
      >
        <Test />
      </Paper>
    </Box>
  );
}
