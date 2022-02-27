import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Test from "../Components/Test";
import { useSelector, useDispatch } from "react-redux";

export default function TestPage() {
  const darkMode = useSelector((state) => state.mode.value);
  const [time, setTime] = useState(10);

  const handleTime = () => {
    setTime(time - 1);
    if (time === 0) {
      setTime(0);
    }
    console.log(time);
  };

  //   For counting down
  useEffect(() => {
    const interval = setInterval(() => {
      handleTime();
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

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
          borderRadius: "20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: !darkMode ? "#1f1f1f" : "#f2f2f2",
        }}
      >
        {/* Will be changed to shrinking bar */}
        <Typography
          color={darkMode ? "#1f1f1f" : "#f2f2f2"}
          fontSize={"h3.fontSize"}
        >
          {time}
        </Typography>
      </Paper>

      <Paper
        data-aos="fade-up"
        elevation={10}
        sx={{
          mt: "10vh",
          mb: "10vh",
          width: "80vw",
          height: "60vh",
          borderRadius: "20px",
          backgroundColor: !darkMode ? "#1f1f1f" : "#f2f2f2",
        }}
      >
        <Test />
      </Paper>
    </Box>
  );
}
