import { Box, Button, Typography, Switch } from "@mui/material";
import { useState, useEffect } from "react";
import Button2 from "../Button2";
import { useSelector } from "react-redux";
import { Typography2 } from "../Styles";
import { Collapse, FormControl, FormControlLabel } from "@mui/material";

export default function Notice(props) {
  const [test, setTest] = useState(false);
  const darkMode = useSelector((state) => state.mode.value);

  useEffect(() => {
    props.setTimeInterval1(0);
    props.setTimeInterval2(0);
  });
  const handleTest = () => {
    document.body.requestFullscreen();
    console.log("fish");
    setTest(!test);
    console.log("test start");
    props.setTimeInterval1(1);
    props.setTimeInterval2(1);
    props.handleStep(null);
  };
  const [checked, setChecked] = useState(false);
  const handleChecked = () => {
    setChecked(!checked);
  };

  const brightness = !darkMode ? "brightness" : "brightness";

  return (
    <Box sx={{ height: "100vh" }}>
      <Box
        sx={{
          ml: "10vw",
          px: "1vw",
          pt: "4vh",
          width: "70vw",
          backgroundColor: darkMode ? "#1f1f1f" : "#f2f2f2",
        }}
      >
        <Typography
          sx={{ color: !darkMode ? "#1f1f1f" : "#f2f2f2", mb: "4vh" }}
          variant="h2"
          fontWeight={"100"}
        >
          This test consists of three parts.
        </Typography>
        <Typography2
          onClick={handleChecked}
          name={"1. Color test"}
          mode={darkMode}
          sx={{ ":hover": { cursor: "pointer", color: "blue" } }}
        ></Typography2>
        <Collapse in={checked}>Fish</Collapse>
        <Typography2 name={"2. Vision test"} mode={darkMode}></Typography2>
        <Typography2
          name={"3. Web proficiency test"}
          mode={darkMode}
        ></Typography2>

        <Typography
          variant="h4"
          fontWeight={"100"}
          lineHeight="1.7"
          sx={{ color: !darkMode ? "#1f1f1f" : "#f2f2f2" }}
        >
          <br />
          Please adjust your screen {brightness} to your preference.
          <br />
          This test will take approximately 3 minutes.
          <br /> To proceed, press the button below.
          <br />
          <br />
        </Typography>
        <Box sx={{ width: "15vw" }}>
          <Button2
            sx={{ width: "20vw" }}
            onClick={handleTest}
            name="test"
          ></Button2>
        </Box>
      </Box>
    </Box>
  );
}
