import { Box, Button, Typography, Switch } from "@mui/material";
import { useState, useEffect } from "react";
import Flower from "../assets/Flower.webp";
import Button2 from "../Components/Button2";
import { useSelector } from "react-redux";
import { Typography2 } from "../Components/Styles";
import { Collapse, FormControl, FormControlLabel } from "@mui/material";

export default function NoticePage() {
  const [test, setTest] = useState(false);
  const darkMode = useSelector((state) => state.mode.value);

  const handleTest = () => {
    setTest(!test);
    console.log(test);
  };
  const [checked, setChecked] = useState(false);
  const handleChecked = () => {
    setChecked(!checked);
  };

  const brightness = !darkMode ? "brightness" : "brightness";

  return (
    <Box>
      <Box sx={{ height: "100vh" }}>
        <Box
          sx={{
            pl: "10vw",
            pr: "10vw",
            pt: "4vh",
            width: "80vw",
            height: "96vh",
            backgroundColor: darkMode ? "#1f1f1f" : "#f2f2f2",
          }}
        >
          <Typography
            sx={{ color: !darkMode ? "#1f1f1f" : "#f2f2f2", mb: "4vh" }}
            variant="h1"
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
            This test will take approximately 3 minutes. To proceed, press the
            button below.
            <br />
            <br />
          </Typography>

          <Button2 onClick={handleTest} href="test" name="test"></Button2>
        </Box>
      </Box>
    </Box>
  );
}
