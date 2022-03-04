import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Button2 from "../Button2";
import Plate6 from "../../assets/test/Plate6.gif";
import { useSelector } from "react-redux";

const VisionTest = (qNum, handleStep) => {
  const darkMode = useSelector((state) => state.mode.value);

  return (
    <>
      <Typography
        sx={{
          color: !darkMode ? "#1f1f1f" : "#f2f2f2",
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
        <img style={{ margin: "5vh", width: "40vh" }} src={Plate6}></img>
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            pt: "3vh",
            pb: "10vh",
          }}
        >
          <Box
            sx={{
              height: "100%",
              ml: "15vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Button2 anti={true} name="option1" />
            <Button2 anti={true} name="option2" />
            <Button2 anti={true} name="option3" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export { VisionTest as VisionTest };
