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
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          width: "90vw",
          height: "90vh",
          backgroundColor: darkMode ? "#1f1f1f" : "#f2f2f2",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            margin: "auto",
          }}
        >
          <img
            style={{
              width: "min(50vw,50vh)",
              height: "min(50vw,50vh)",
              // marginLeft: "",
            }}
            data-aos="fade-up"
            src={Flower}
            width="40% "
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              ml: "20vw",
              pt: "6vh",
              pb: "10vh",
            }}
          >
            <Button2 name="test" href="pretest"></Button2>
            <Button2 name="About" href="about"></Button2>
            <Button2 name="Contact"></Button2>
            <Button2 name="Light" onClick={handleChange}></Button2>
          </Box>
        </Box>
      </Box>
    </>
  );
}
