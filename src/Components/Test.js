import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Typography, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { ColorTest } from "./Test/Content";

export default function Test(props) {
  const [step, setStep] = useState(0);
  const darkMode = useSelector((state) => state.mode.value);

  const handleStep = (answer) => {
    setStep(step + 1);
    props.setTime(10);
  };

  useEffect(() => {
    return () => {
      alert("leave?"); 
    };
  }, []);

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
      {step < 3 ? <ColorTest qNum={step} handleStep={handleStep} /> : null}
      {3 <= step && step < 6 ? (
        <ColorTest qNum={step} handleStep={handleStep} />
      ) : null}
      {6 <= step && step < 9 ? (
        <ColorTest qNum={step} handleStep={handleStep} />
      ) : null}
    </Box>
  );
}
