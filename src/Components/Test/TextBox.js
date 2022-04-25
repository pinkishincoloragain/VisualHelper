import { useState } from "react";
import { Typography, Box } from "@mui/material";
import Button2 from "../Button2";
import TimeBar from "./TimeBar";

export default function TextBox(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Box
        sx={{
          width: "70vw",
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
          {props.text}
        </Typography>
      </Box>

      <Button2
        sx={{
          color: props.darkMode ? "#f2f2f2" : "#1f1f1f",
          width: "20vw",
          ml: "53vw",
        }}
        name="Finish test"
        onClick={() => {
          setShow(false);
          props.handleClick();
        }}
      ></Button2>
    </>
  );
}
