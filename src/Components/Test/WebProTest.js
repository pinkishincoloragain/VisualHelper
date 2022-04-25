import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Button2 from "../Button2";
import { Typography2 } from "../Styles";
import { ResponsiveGrid } from "./TestStyles2";

export default function WebProTest(props) {
  const [test, setTest] = useState(false);

  const handleStartClick = () => {
    setTest(true);
  };
  const handleAnsClick = () => {
    setTest(false);
  };

  const tests = <ResponsiveGrid handleAnsClick={handleAnsClick} />;

  // const tests = [];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          ml: "10vw",
        }}
      >
        <Typography2
          mode={true}
          name={`Test ${
            props.qNum + 1
          }. Check operations which applies to your web proficiency.`}
        />
        <Box
          sx={{
            width: "80vw",
            height: "2px",
            my: "4vh",
            backgroundColor: "white",
          }}
        />

        {test ? null : (
          <Button2
            onClick={handleStartClick}
            sx={{ width: "20vw" }}
            name="start test"
          />
        )}
      </Box>
      {test ? tests : null}
      {test ? (
        <Button2
          onClick={props.handleStep}
          sx={{ ml: "10vw", width: "30vw" }}
          name="move to the result"
        />
      ) : null}
    </>
  );
}
