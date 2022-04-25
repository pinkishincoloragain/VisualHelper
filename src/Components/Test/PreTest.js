import { Box, Typography } from "@mui/material";
import Button2 from "../Button2";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function PreTest(props) {
  const darkMode = useSelector((state) => state.mode.value);

  useEffect(() => {
    // props.setTimeInterval1(0);
    // props.setTimeInterval2(0);
    // console.log("pretest- useEffect");
  });

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        ml: "10vw",
        color: darkMode ? "#f2f2f2" : "#1f1f1f",
      }}
    >
      <Typography variant="h2">Reading Test</Typography>
      <br />
      <br />
      <Typography variant="h5" lineHeight={2}>
        Next step is reading test.
        <br /> You will read a short paragraph and click the button as soon as
        finished reading.
        <br /> Timer will begin as soon as you click on the button.
        <br />
        <br />
        <br />
      </Typography>
      <Box sx={{ width: "25vw" }}>
        <Button2 name={"start test"} onClick={props.handleStep}></Button2>
      </Box>
    </Box>
  );
}
