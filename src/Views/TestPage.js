import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import Test from "../Components/Test";
import { useSelector, useDispatch } from "react-redux";

export default function TestPage(props) {
  const darkMode = useSelector((state) => state.mode.value);

  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        backgroundColor: darkMode ? "#1f1f1f" : "#f2f2f2",
      }}
    >
      <Paper
        data-aos="fade-up"
        elevation={10}
        sx={{
          // pt: "2vh",
          mt: "2vh",
          mb: "18vh",
          width: "80vw",
          height: "70vh",
          // borderRadius: "20px",
          backgroundColor: darkMode ? "#1f1f1f" : "#f2f2f2",
        }}
      >
        <Test />
      </Paper>
    </Box>
  );
}
