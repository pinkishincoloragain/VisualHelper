import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { proficiencies } from "../Components/Test/TestStyles2";

const Item = (props) => {
  let temp = props.val0 === true ? 0 : 1;
  let width = 80 - (props.val1 / 3) * 8 - 40 * temp;
  return (
    <Box>
      {props.val0 === true ? "correct" : "wrong"}: {props.val1.toFixed(2)} sec
      <Box
        key={props.idx}
        sx={{
          width: `${width * 0.8}%`,
          minWidth: "0%",
          height: "10px",
          my: "1vh",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "red",
          borderRadius: "10px",
          mb: "20px",
        }}
      ></Box>
    </Box>
  );
};

export default function ResultPage(props) {
  useEffect(() => {
    // console.log(props.test);
  });
  return (
    <Box
      sx={{
        ml: "10vw",
        backgroundColor: "#f2f2f2",
        width: "80vw",
        height: "100vh",
      }}
    >
      <Typography variant="h2" sx={{ ml: "5vw", mb: "5vh" }}>
        Test result
      </Typography>
      <Box
        sx={{
          width: "80vw",
          ml: "5vw",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {props.test.slice(0, 12).map((_, idx) => (
          <Item
            index={idx}
            key={idx}
            val0={props.test[idx][0]}
            val1={props.test[idx][1] / 2.43}
          />
        ))}
        <Box
          sx={{
            width: "80vw",
            height: "20vh",
          }}
        >
          <Typography variant="h2">Web proficiency options</Typography>
          {props.test[12][0].map((_, idx) => (
            <div key={idx}>{proficiencies[idx]}</div>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
