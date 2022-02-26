import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Flower from "../assets/Flower.webp";
import Button2 from "../Components/Button2";

export default function PreTestPage() {
  const [test, setTest] = useState(false);

  const handleTest = () => {
    setTest(!test);
    console.log(test);
  };
  return (
    <Box>
      <Box m="4vh">
        <Box>
          <Typography variant="h3" fontWeight={"100"} letterSpacing="-1px">
            This test is for the purpose of testing your preferences on web
            page.
          </Typography>

          <Typography variant="h4" fontWeight={"100"}>
            <br /> This test consists of three parts.
          </Typography>
          <br />
          <br />
          <Typography variant="h4" fontWeight={"100"}>
            &nbsp;&nbsp;&nbsp; 1. Color test
          </Typography>
          <br />
          <Typography variant="h4" fontWeight={"100"}>
            &nbsp;&nbsp;&nbsp; 2. Vision test
          </Typography>
          <br />
          <Typography variant="h4" fontWeight={"100"}>
            &nbsp;&nbsp;&nbsp; 3. Web proficiency test
          </Typography>
          <br />

          <br />
          <Typography variant="h3" fontWeight={"100"}>
            To proceed, press this button.
          </Typography>
          <Button2 onClick={handleTest} href="test" name="test"></Button2>
        </Box>
      </Box>
    </Box>
  );
}
