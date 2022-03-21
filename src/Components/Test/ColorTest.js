import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Button2 from "../Button2";
import Plate6 from "../../assets/test/Plate6.gif";
import Plate7 from "../../assets/test/Plate7.gif";
import Plate8 from "../../assets/test/Plate8.gif";
import { useSelector } from "react-redux";

const q1 = {
  name: "q1",
  options: [
    { name: "15" },
    { name: "13" },
    { name: "12" },
    { name: "I don't know" },
  ],
  image: Plate6,
};
const q2 = {
  name: "q2",
  options: [
    { name: "74" },
    { name: "71" },
    { name: "72" },
    { name: "I don't know" },
  ],
  image: Plate7,
};
const q3 = {
  name: "q3",
  options: [
    { name: "6" },
    { name: "5" },
    { name: "3" },
    { name: "I don't know" },
  ],
  image: Plate8,
};

const questions = [q1, q2, q3];

const ColorTest = (props) => {
  const darkMode = useSelector((state) => state.mode.value);

  const handleAnsClick = (name) => {
    props.handleStep(name);
  };

  return (
    <>
      <Typography
        sx={{
          color: !darkMode ? "#1f1f1f" : "#f2f2f2",
          ml: "5vh",
          mb: "2vh",
        }}
        variant="h3"
      >
        What is this number?
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-betweens",
        }}
      >
        <img
          style={{ margin: "6vh", marginRight: "min(8vh,30px)", width: "50vh" }}
          src={questions[props.qNum].image}
        ></img>
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            pt: "10vh",
            pb: "10vh",
          }}
        >
          {questions[props.qNum].options.map((option) => {
            return (
              <Box
                sx={{
                  height: "100%",
                  ml: "20vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                key={option.name + "box"}
              >
                <Button2
                  anti={true}
                  name={option.name}
                  onClick={() => handleAnsClick(option.name)}
                  key={option.name + "button"}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

const ReadingTest = (props) => {
  const darkMode = useSelector((state) => state.mode.value);

  return (
    <>
      <Typography
        sx={{
          color: !darkMode ? "#1f1f1f" : "#f2f2f2",
          ml: "5vh",
          mb: "2vh",
        }}
        variant="h3"
      >
        {props.qNum + 1}. What is this number?
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-betweens",
        }}
      >
        <img
          style={{ margin: "6vh", marginRight: "min(8vh,30px)", width: "40vh" }}
          src={questions[props.qNum].image}
        ></img>
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            pt: "6vh",
            pb: "10vh",
          }}
        >
          {questions[props.qNum].options.map((option) => {
            return (
              <div
                sx={{
                  height: "100%",
                  ml: "15vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                key={option.name}
              >
                <Button2
                  anti={true}
                  name={option.name}
                  onClick={() => props.handleStep(option.name)}
                  key={option.name + "button"}
                />
              </div>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export { ReadingTest as ReadingTest, ColorTest as ColorTest };
