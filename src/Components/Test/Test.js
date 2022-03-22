import { useState, useEffect } from "react";
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

function TimeBar(props) {
  const darkMode = useSelector((state) => state.mode.value);

  const timeBar = keyframes`
  0% {
    width: 0%;
    }
    100% {
      width: 100%;
      }
      `;

  return (
    <Box
      sx={{
        width: "0vw",
        height: "6vh",
        alignItems: "center",
        // justifyContent: "center",
        backgroundColor: !darkMode ? "#f2f2f2" : "#1f1f1f",
        animation: `${timeBar} 30s linear infinite`,
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
  );
}

export default function Test() {
  const darkMode = useSelector((state) => state.mode.value);
  const [time, setTime] = useState(0);
  const [step, setStep] = useState(-1);
  const [test, setTest] = useState([]);

  const Timebar = useMemo(() => {});

  useEffect(() => {
    const interval = setInterval(() => {
      handleTime();
    }, 100);
    return () => clearInterval(interval);
  }, [time, step]);

  const handleStep = (answer) => {
    setTest([...test, [answer, time]]);
    setStep(step + 1);
    setTime(0);
  };

  const handleTime = () => {
    // console.log(time);
    setTime(time + 1);
    if (time >= 300) {
      setStep(step + 1);
      setTime(0);
    }
    // console.log(time);
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
              flexDirection: "row",
              backgroundColor: !darkMode ? "#1f1f1f" : "#f2f2f2",
            }}
          >
            <TimeBar />
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
            }}
          >
            {0 <= step && step < 3 ? (
              <ColorTest qNum={step} handleStep={handleStep} />
            ) : null}
            {/* {step < 3 ? <PreTest handleStep={handleStep} /> : null} */}
            {step === 3 ? <PreTest handleStep={handleStep} /> : null}
            {4 <= step && step < 10 ? (
              <ReadingTest qNum={step - 4} handleStep={handleStep} />
            ) : null}
            {step === 10 ? <PreTest /> : null}
            {11 <= step && step < 14 ? (
              <ColorTest qNum={step - 11} handleStep={handleStep} />
            ) : null}
            {step === 14 ? <ResultPage /> : null}
          </Box>
        </>
      )}
    </>
  );
}
