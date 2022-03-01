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

  return (
    <Box
      sx={{
        width: "70vw",
        height: "90%",
        display: "flex",
        flexDirection: "column",
        p: "2vh",
        backgroundColor: darkMode ? "#1f1f1f" : "#f2f2f2",
        borderRadius: "20px",
      }}
    >
      <VisionTest />
    </Box>
  );
}
