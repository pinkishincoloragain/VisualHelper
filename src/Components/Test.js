import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Typography, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { ColorTest } from "./Test/Content";

export default function Test(props) {
  const darkMode = useSelector((state) => state.mode.value);

  return (
    <Box
      sx={{
        py: "2vh",
        px: "1vw",
        width: "78vw",
        height: "100%",
        // borderRadius: "20px",
        backgroundColor: darkMode ? "#1f1f1f" : "#FFFFFF",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {props.step < 3 ? (
        <ColorTest qNum={props.step} handleStep={props.handleStep} />
      ) : null}
      {3 <= props.step && props.step < 6 ? (
        <ColorTest qNum={props.step} handleStep={props.handleStep} />
      ) : null}
      {6 <= props.step && props.step < 9 ? (
        <ColorTest qNum={props.step} handleStep={props.handleStep} />
      ) : null}
    </Box>
  );
}
