import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Typography, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { ReadingTest } from "./ReadingTest";
import { ColorTest } from "./ColorTest";
import NoticePage from "../../Views/NoticePage";
import PreTest from "./PreTest";

export default function Test() {
  const darkMode = useSelector((state) => state.mode.value);
  const [time, setTime] = useState(0);
  const [step, setStep] = useState(0);
  const [test, setTest] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      handleTime();
    }, 10);
    return () => clearInterval(interval);
  }, [time, step]);

  const handleStep = (answer) => {
    setStep(step + 1);
    setTime(0);
    console.log(test);
  };

  const handleTime = () => {
    setTime(time + 0.1);
    if (time >= 300) {
      setStep(step + 1);
      setTime(0);
    }
    // console.log(time);
  };

  return (
    <>
      <Paper
        elevation={10}
        sx={{
          mt: "2vh",
          width: "80vw",
          height: "6vh",
          // borderRadius: "20px",
          display: "flex",
          flexDirection: "row",
          backgroundColor: !darkMode ? "#1f1f1f" : "#f2f2f2",
        }}
      >
        <Box
          sx={{
            width: (time * 0.8) / 3 + "vw",
            height: "6vh",
            alignItems: "center",
            // justifyContent: "center",
            backgroundColor: !darkMode ? "#f2f2f2" : "#1f1f1f",
          }}
        >
          <Typography
            pl={8}
            color={!darkMode ? "#1f1f1f" : "#f2f2f2"}
            fontSize={"h4.fontSize"}
          >
            {/* {Math.floor(time / 10)} */}
          </Typography>
        </Box>
      </Paper>

      <Box
        sx={{
          pt: "5vh",
          px: "1vw",
          width: "78vw",
          // height: "100%",
          // borderRadius: "20px",
          backgroundColor: darkMode ? "#1f1f1f" : "#f2f2f2",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {step < 3 ? <ColorTest qNum={step} handleStep={handleStep} /> : null}
        {step === 3 ? <PreTest handleStep={handleStep} /> : null}
        {4 <= step && step < 7 ? (
          <ReadingTest qNum={step - 4} handleStep={handleStep} />
        ) : null}
        {step === 7 ? <NoticePage /> : null}
        {8 <= step && step < 11 ? (
          <ColorTest qNum={step - 8} handleStep={handleStep} />
        ) : null}
      </Box>
    </>
  );
}
