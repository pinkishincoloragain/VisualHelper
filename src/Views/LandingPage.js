import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import Flower from "../assets/Flower.webp";
import UnstyledButtonCustom from "../Components/Button2";
import Button2 from "../Components/Button2";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../reducers/modeSlice";
import HeaderBar from "../Components/Headerbar";

export default function LandingPage() {
  const darkMode = useSelector((state) => state.mode.value);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(changeMode());
  };

  return (
    <>
      <HeaderBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "auto",
          width: "90vw",
          height: "100%",
          backgroundColor: darkMode ? "#1f1f1f" : "#f2f2f2",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "auto",
            // height: "100vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              ml: "2vw",
              pt: "6vh",
              pb: "10vh",
            }}
          >
            <Button2 name="test" href="test"></Button2>
            <Button2 name="About" href="about"></Button2>
            <Button2 name="Contact"></Button2>
            <Button2 name="Light" onClick={handleChange}></Button2>
          </Box>
          {/* <img
            style={{
              width: "min(50vw,50vh)",
              // marginLeft: "",
            }}
            src={Flower}
          /> */}
        </Box>
      </Box>
    </>
  );
}
