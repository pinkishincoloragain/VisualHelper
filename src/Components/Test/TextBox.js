import { useState } from "react";
import { Typography, Box } from "@mui/material";
import Button2 from "../Button2";

export default function TextBox(props) {
  const [show, setShow] = useState(false);
  return (
    <>
      <Box
        sx={{
          p: "1rem",
          width: "80%",
          height: "100%",
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
        ></Button2>
      ) : (
        <Button2 onClick={() => setShow(true)} name="Start test"></Button2>
      )}
    </>
  );
}
