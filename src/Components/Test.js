import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Typography, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { ColorTest, ReadingTest } from "./Test/Content";

export default function Test() {
  const darkMode = useSelector((state) => state.mode.value);
  const [time, setTime] = useState(0);
  const [step, setStep] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      handleTime();
    }, 100);
    return () => clearInterval(interval);
  }, [time, step]);

  const handleStep = (answer) => {
    setStep(step + 1);
    setTime(0);
  };

  const handleTime = () => {
    setTime(time + 1);
    if (time >= 300) {
      setStep(step + 1);
      setTime(0);
    }
    console.log(time);
  };

  return (
    <>
      <Paper
        elevation={10}
        sx={{
          mt: "2vh",
          width: "80vw",
          height: "8vh",
          // borderRadius: "20px",
          display: "flex",
          flexDirection: "row",
          backgroundColor: !darkMode ? "#1f1f1f" : "#f2f2f2",
        }}
      >
        <Box
          sx={{
            width: (time * 0.8) / 3 + "vw",
            height: "8vh",
            backgroundColor: !darkMode ? "#f2f2f2" : "#1f1f1f",
          }}
        >
          <Typography
            pl={8}
            color={!darkMode ? "#1f1f1f" : "#f2f2f2"}
            fontSize={"h3.fontSize"}
          >
            {Math.floor(time / 10)}
          </Typography>
        </Box>
      </Paper>

      <Box
        sx={{
          py: "2vh",
          px: "1vw",
          width: "78vw",
          height: "100%",
          // borderRadius: "20px",
          backgroundColor: darkMode ? "#1f1f1f" : "#FFFFFF",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {step < 3 ? <ColorTest qNum={step} handleStep={handleStep} /> : null}
        {3 <= step && step < 6 ? (
          <ReadingTest qNum={step} handleStep={handleStep} />
        ) : null}
        {6 <= step && step < 9 ? (
          <ColorTest qNum={step} handleStep={handleStep} />
        ) : null}
      </Box>
    </>
  );
}
