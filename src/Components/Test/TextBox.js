import { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import Button2 from "../Button2";
import TimeBar from "./TimeBar";

export default function TextBox(props) {
  useEffect(() => {
    // console.log(props.show);
  });
  return (
    <>
      <Box
        sx={{
          width: "80vw",
          minHeight: "21vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: !props.darkMode ? "#f2f2f2" : "#1f1f1f",
          border: !props.darkMode ? "solid red 1px" : "solid yellow 1px",
          ml: "7vw",
          ...props.sx,
        }}
      >
        {props.show ? (
          <Typography
            sx={{ px: "4vw", mx: "1rem", ...props.sxt }}
            variant="h6"
            color={props.darkMode ? "#f2f2f2" : "#1f1f1f"}
          >
            {props.text}
          </Typography>
        ) : (
          <Typography variant="h2">"finished!"</Typography>
        )}
      </Box>

      <Button2
        sx={{
          color: props.darkMode ? "#f2f2f2" : "#1f1f1f",
          width: "33vw",
          ml: "55vw",
          mb: "3vh",
          ...props.sxb,
        }}
        name="Finished reading"
        onClick={() => {
          props.handleClick();
        }}
      ></Button2>
    </>
  );
}
