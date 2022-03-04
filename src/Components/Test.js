import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import Option from "./Test/Option";
import Button2 from "./Button2";
import { VisionTest } from "./Test/Content";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Test() {
  const [step, setStep] = useState(0);
  const darkMode = useSelector((state) => state.mode.value);

  const handleStep = (answer) => {
    
    setStep(step + 1);
  };

  return (
    <Box
      sx={{
        py: "2vh",
        px: "1vw",
        width: "78vw",
        height: "57vh",
        borderRadius: "20px",
        backgroundColor: darkMode ? "#1f1f1f" : "#f2f2f2",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <VisionTest />
    </Box>
  );
}
