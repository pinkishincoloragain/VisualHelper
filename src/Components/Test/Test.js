import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Typography, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { ReadingTest } from "./ReadingTest";
import { ColorTest } from "./ColorTest";
import Notice from "./Notice";
import PreTest from "./PreTest";
import ResultPage from "../../Views/ResultPage";
import { useMemo } from "react";
import styled, { keyframes } from "@emotion/react";
import TimeBar from "./TimeBar";

export default function Test() {
  const darkMode = useSelector((state) => state.mode.value);
  const [time, setTime] = useState(0);
  const [time2, setTime2] = useState(0);
  const [step, setStep] = useState(-1);
  const [test, setTest] = useState([]);

  // const [rerender, setRerender] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleTime();
    }, 100);
    // console.log(time);
    return () => clearInterval(interval);
  }, [time, step]);

  const handleStep = (answer) => {
    setTest([...test, [answer, time]]);
    setStep(step + 1);
    setTime(0);
    console.log(step);
  };

  const handleTime = () => {
    // console.log(time);
    setTime(time + 1);
    if (time >= 300) {
      setStep(step + 1);
      setTime(0);
    }
    console.log(time);
  };

  return (
    <>
      {step === -1 ? (
        <Notice handleStep={handleStep} />
      ) : (
        <>
          <Paper
            elevation={10}
            sx={{
              mt: "2vh",
              width: "80vw",
              height: "6vh",
              // borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              backgroundColor: !darkMode ? "#1f1f1f" : "#f2f2f2",
            }}
          >
            {step < 6 ? <TimeBar time={time} step={step} /> : null}
            {/* <TimeBar step={step} /> */}
            {6 < step && step <= 12 ? (
              <>
                <TimeBar time={time} step={step} />
                <TimeBar
                  time={time}
                  step={step}
                  sx={{ backgroundColor: "red" }}
                />
              </>
            ) : null}
          </Paper>

          <Box
            sx={{
              mt: "5vh",
              mx: "1vw",
              width: "78vw",
              // height: "100%",
              // borderRadius: "20px",
              backgroundColor: darkMode ? "#1f1f1f" : "#f2f2f2",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            {0 <= step && step < 6 ? (
              <ColorTest qNum={step} handleStep={handleStep} />
            ) : null}
            {/* {step < 3 ? <PreTest handleStep={handleStep} /> : null} */}
            {step === 6 ? <PreTest handleStep={handleStep} /> : null}
            {6 < step && step <= 12 ? (
              <ReadingTest qNum={step - 7} handleStep={handleStep} />
            ) : null}
            {step === 13 ? <PreTest /> : null}
            {13 < step && step <= 17 ? (
              <ColorTest qNum={step - 13} handleStep={handleStep} />
            ) : null}
            {step === 18 ? <ResultPage /> : null}
          </Box>
        </>
      )}
    </>
  );
}
