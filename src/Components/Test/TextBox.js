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
          width: "70vw",
          minHeight: "21vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: !props.darkMode ? "#f2f2f2" : "#1f1f1f",
          border: !props.darkMode ? "solid red 1px" : "solid yellow 1px",
          ...props.sx,
          margin: "4vh",
        }}
      >
        <Typography
          sx={{ px: "4vw", margin: "1rem" }}
          variant="h6"
          color={props.darkMode ? "#f2f2f2" : "#1f1f1f"}
        >
          {props.show ? props.text : null}
        </Typography>
      </Box>

      <Button2
        sx={{
          color: props.darkMode ? "#f2f2f2" : "#1f1f1f",
          width: "25vw",
          ml: "48vw",
        }}
        name="Finished reading"
        onClick={() => {
          props.handleClick();
        }}
      ></Button2>
    </>
  );
}
