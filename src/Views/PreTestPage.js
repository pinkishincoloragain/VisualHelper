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
            pl: "5vw",
            pr: "5vw",
            pt: "10vh",
            width: "80vw",
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
            This test consists of three parts.
          </Typography>
          <Typography
            variant="h4"
            fontWeight={"100"}
            sx={{ color: !darkMode ? "#1f1f1f" : "#f2f2f2" }}
          >
            <br />
            <br />
            Color test : You will test color impairment.
            <br /> <br />
            Vision test
            <br /> <br />
            Web proficiency test
            <br />
            <br />
            This test will take approximately 5 minutes.
            To proceed, press button below.
            <br />
            <br />
          </Typography>

          <Button2 onClick={handleTest} href="test" name="test"></Button2>
        </Box>
      </Box>
    </Box>
  );
}
