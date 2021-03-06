import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Button2 from "../Button2";
import { Typography2 } from "../Styles";
import { ResponsiveGrid } from "./TestStyles2";
import { useSelector } from "react-redux";

export default function WebProTest(props) {
  const darkMode = useSelector((state) => state.mode.value);
  const [test, setTest] = useState(false);

  const handleStartClick = () => {
    setTest(true);
  };

  const handleSubmit = (res) => {
    props.handleStep(res);
  };

  const tests = <ResponsiveGrid test={test} handleSubmit={handleSubmit} />;

  // const tests = [];

  return (
    <Box sx={{ height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          ml: "10vw",
        }}
      >
        <Typography2
          mode={darkMode}
          name={`Select multiple options which describes you the most.`}
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
    </Box>
  );
}
