import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { proficiencies } from "../Components/Test/TestStyles2";
import { db } from "./firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const tests = ["red-weak", "green-red-weak", "blue-yellow"];

const Item = (props) => {
  let temp = props.val0 === true ? 0 : 1;
  let width = 80 - (props.val1 / 3) * 8 - 40 * temp;
  return (
    <Box>
      <b>{props.index < 6 ? `Color test ${props.index + 1}: ` : null}</b>
      <b>{props.index >= 6 ? `Reading test ${props.index - 5}: ` : null}</b>
      {props.val1.toFixed(2)} sec
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          key={props.idx}
          sx={{
            width: `${width * 0.6}%`,
            minWidth: "0%",
            height: "8px",
            my: "1vh",
            display: "flex",
            flexDirection: "row",
            backgroundColor: props.val0 ? "#3cb043" : "#ff0000",
            borderRadius: "10px",
            mb: "20px",
          }}
        />
      </Box>
    </Box>
  );
};

export default function ResultPage(props) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "tasks"), {
        title: title,
        description: description,
        completed: false,
        created: Timestamp.now(),
      });
      onClose();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Box
      sx={{
        ml: "10vw",
        backgroundColor: "#f2f2f2",
        width: "80vw",
        height: "200vh",
      }}
    >
      <Box
        sx={{
          width: "80vw",
          ml: "5vw",
          height: "60vh",
          display: "flex",
          flexDirection: "column",
          flex: "1",
        }}
      >
        <Typography variant="h2" sx={{ mt: "5vh", mb: "5vh" }}>
          Test result
        </Typography>
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
            <Typography variant="h5" key={idx}>
              - {proficiencies[idx]}
            </Typography>
          ))}
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
}
