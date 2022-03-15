import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import Test from "../Components/Test";
import { useSelector, useDispatch } from "react-redux";

export default function TestPage(props) {
  const darkMode = useSelector((state) => state.mode.value);
  const [time, setTime] = useState(0);
  const [step, setStep] = useState(0);
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

  //   For counting down
  useEffect(() => {
    const interval = setInterval(() => {
      handleTime();
    }, 100);
    return () => clearInterval(interval);
  }, [time, step]);

  return (
    <Box
      sx={{
        ml: "5vw",
        pl: "5vw",
        width: "85vw",
        display: "flex",
        flexDirection: "column",
        backgroundColor: darkMode ? "#1f1f1f" : "#f2f2f2",
      }}
    >
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

      <Paper
        data-aos="fade-up"
        elevation={10}
        sx={{
          // pt: "2vh",
          mt: "2vh",
          mb: "18vh",
          width: "80vw",
          height: "70vh",
          // borderRadius: "20px",
          backgroundColor: darkMode ? "#1f1f1f" : "#f2f2f2",
        }}
      >
        <Test step={step} setTime={setTime} handleStep={handleStep} />
      </Paper>
    </Box>
  );
}
