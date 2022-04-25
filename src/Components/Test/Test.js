import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import WebProTest from "./WebProTest";
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
import React from "react";

export default function Test() {
  const darkMode = useSelector((state) => state.mode.value);
  const [time, setTime] = useState(0);
  const [time2, setTime2] = useState(0);
  const [step, setStep] = useState(-1);
  const [test, setTest] = useState([]);
  const [timeInterval1, setTimeInterval1] = useState(1);
  const [timeInterval2, setTimeInterval2] = useState(1);

  // const [rerender, setRerender] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleTime();
      // console.log(timeInterval1);
    }, 100);

    // console.log(time);
    return () => clearInterval(interval);
  }, [time, time2, step]);

  useEffect(() => {
    console.log(test);
    console.log(step);
  }, [test]);

  useEffect(() => {
    if (step === 11 || step === -1) {
      setTimeInterval1(0);
      setTimeInterval2(0);
    }
  }, [step]);

  const handleStep = (answer) => {
    if (answer !== null) {
      setTest([...test, [answer, time]]);
    }
    setStep(step + 1);
    setTime(0);
    setTime2(0);
    // console.log(step);
  };

  const handleStepBy2 = (answer) => {
    setTest([...test, [answer, time], [answer, time2 - time]]);
    setStep(step + 1);
    setTime(0);
    setTime2(0);
  };

  const handleTime = () => {
    // console.log(time);
    if (time >= 264.7 || time2 >= 264.7) {
      setStep(step + 1);
      setTime(0);
      setTime2(0);
    } else {
      setTime(time + timeInterval1);
      setTime2(time2 + timeInterval2);
    }
  };

  return (
    <>
      {step === -1 ? (
        <Notice
          handleStep={handleStep}
          setTimeInterval1={setTimeInterval1}
          setTimeInterval2={setTimeInterval2}
        />
      ) : (
        <>
          {step === 11 ? null : (
            <Paper
              elevation={10}
              sx={{
                ml: "10vw",
                mt: "2vh",
                width: "80vw",
                height: "6vh",
                // borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                backgroundColor: !darkMode ? "#1f1f1f" : "#f2f2f2",
              }}
            >
              {step < 6 ? (
                <TimeBar interval={timeInterval1} time={time} step={step} />
              ) : null}
              {6 < step && step <= 9 ? (
                <>
                  <TimeBar time={time} step={step} interval={timeInterval1} />
                  <TimeBar
                    time={time2}
                    step={step}
                    interval={timeInterval2}
                    sx={{ backgroundColor: "red" }}
                  />
                </>
              ) : null}
            </Paper>
          )}

          <Box
            sx={{
              mt: "5vh",
              width: "78vw",
              backgroundColor: darkMode ? "#1f1f1f" : "#f2f2f2",
              display: "flex",
              flexDirection: "column",
              // height: "100%",
            }}
          >
            {0 <= step && step < 6 ? (
              <ColorTest qNum={step} handleStep={handleStep} />
            ) : //
            null}
            {step === 6 ? (
              <PreTest
                setTimeInterval1={setTimeInterval1}
                setTimeInterval2={setTimeInterval2}
                handleStep={handleStep}
              />
            ) : null}
            {6 < step && step <= 9 ? (
              <ReadingTest
                setTimeInterval1={setTimeInterval1}
                setTimeInterval2={setTimeInterval2}
                qNum={step - 7}
                handleStepBy2={handleStepBy2}
              />
            ) : null}
            {step === 10 ? (
              <WebProTest handleStep={handleStep} setTest={setTest} />
            ) : null}
            {step === 11 ? <ResultPage test={test} /> : null}
          </Box>
        </>
      )}
    </>
  );
}
