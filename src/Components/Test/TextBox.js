import { useState } from "react";
import { Typography, Box } from "@mui/material";
import Button2 from "../Button2";
import TimeBar from "./TimeBar";

export default function TextBox(props) {
  const [show, setShow] = useState(false);
  const [btnShow, setBtnShow] = useState(false);
  return (
    <>
      <Box
        sx={{
          p: "1rem",
          width: "70vw",
          height: "15vh",
          backgroundColor: !props.darkMode ? "#f2f2f2" : "#1f1f1f",
          border: !props.darkMode ? "solid red 1px" : "solid yellow 1px",
          ...props.sx,
        }}
        onClick={() => setShow(true)}
      >
        {show ? (
          <Typography
            sx={{ px: "4vw" }}
            variant="h6"
            color={props.darkMode ? "#f2f2f2" : "#1f1f1f"}
          >
            {props.text}
          </Typography>
        ) : null}
      </Box>
      {show ? (
        <Button2
          sx={{
            color: props.darkMode ? "#f2f2f2" : "#1f1f1f",
          }}
          name="Finish test"
          onClick={() => setBtnShow(false)}
        ></Button2>
      ) : (
        <Button2 onClick={() => setShow(true)} name="Start test"></Button2>
      )}
    </>
  );
}
