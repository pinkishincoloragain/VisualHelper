import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Flower from "../assets/Flower.webp";
import Button2 from "../Components/Button2";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";

export default function PreTestPage() {
  const [test, setTest] = useState(false);
  const darkMode = useSelector((state) => state.mode.value);

  const handleTest = () => {
    setTest(!test);
    console.log(test);
  };

  return (
    <Box>
      <Box sx={{ ml: "5vw", height: "90vh" }}>
        <Box
          sx={{
            pl: "2vw",
            pr: "2vw",
            width: "86vw",
            height: "90vh",
            backgroundColor: darkMode ? "#1f1f1f" : "#f2f2f2",
          }}
        >
          <Typography
            sx={{ color: !darkMode ? "#1f1f1f" : "#f2f2f2" }}
            variant="h3"
            fontWeight={"100"}
            letterSpacing="-1px"
          >
            This test is for the purpose of testing your preferences on web
            page.
          </Typography>

          <Typography
            variant="h4"
            fontWeight={"100"}
            sx={{ color: !darkMode ? "#1f1f1f" : "#f2f2f2" }}
          >
            <br /> This test consists of three parts.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp; 1. Color test
            <br />
            &nbsp;&nbsp;&nbsp; 2. Vision test
            <br />
            &nbsp;&nbsp;&nbsp; 3. Web proficiency test
          </Typography>
          <br />

          <br />
          <Typography
            variant="h3"
            fontWeight={"100"}
            sx={{ color: !darkMode ? "#1f1f1f" : "#f2f2f2" }}
          >
            To proceed, press this button.
          </Typography>
          <Button2 onClick={handleTest} href="test" name="test"></Button2>
        </Box>
      </Box>
    </Box>
  );
}
