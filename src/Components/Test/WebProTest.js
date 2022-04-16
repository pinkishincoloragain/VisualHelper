import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Button2 from "../Button2";
import { Typography2 } from "../Styles";
import { ResponsiveGrid } from "./TestStyles";

export default function WebProTest(props) {
  const [test, setTest] = useState(false);

  const handleStartClick = () => {
    setTest(true);
  };
  const handleAnsClick = () => {
    setTest(false);
  };

  const test1 = <ResponsiveGrid handleAnsClick={handleAnsClick} />;

  const tests = [test1];

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
          name={`Test ${props.qNum}. Find link to "contact number"`}
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
      {test ? tests[props.qNum] : null}
    </>
  );
}
