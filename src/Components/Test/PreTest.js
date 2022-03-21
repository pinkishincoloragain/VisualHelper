import { Box, Typography } from "@mui/material";
import Button2 from "../Button2";
import { useSelector } from "react-redux";

export default function PreTest(props) {
  const darkMode = useSelector((state) => state.mode.value);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        color: darkMode ? "#f2f2f2" : "#1f1f1f",
      }}
    >
      <Typography variant="h1">Reading Test</Typography>
      <br />
      <br />
      <Typography variant="h4">
        Next step is reading test.
        <br /> You will read a short paragraph and click the button as soon as
        finished reading.
        <br />
        <br />
        <br />
      </Typography>

      <Button2 name={"start test"} onClick={props.handleStep}></Button2>
    </Box>
  );
}
