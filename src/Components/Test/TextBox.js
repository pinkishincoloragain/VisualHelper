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
          p: "1rem",
          width: "70vw",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: !props.darkMode ? "#f2f2f2" : "#1f1f1f",
          border: !props.darkMode ? "solid red 1px" : "solid yellow 1px",
          ...props.sx,
          margin: "4vh",
        }}
        onClick={() => {
          setShow(true);
          props.handleClick();
        }}
      >
        {show ? (
          <Typography
            sx={{ px: "4vw" }}
            variant="h6"
            color={props.darkMode ? "#f2f2f2" : "#1f1f1f"}
          >
            {props.text}
          </Typography>
        ) : (
          <Typography
            sx={{ px: "4vw" }}
            variant="h5"
            color={props.darkMode ? "#f2f2f2" : "#1f1f1f"}
          >
            Start test
          </Typography>
        )}
      </Box>
      {show ? (
        <Button2
          sx={{
            color: props.darkMode ? "#f2f2f2" : "#1f1f1f",
          }}
          name="Finish test"
          onClick={() => {
            setShow(false);
            props.handleClick();
          }}
        ></Button2>
      ) : null}
    </>
  );
}
