import Button2 from "./Button2";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function BackButton(props) {
  const darkMode = useSelector((state) => state.mode.value);
  const handleClick = () => {
    window.history.back();
  };
  return (
    <Box
      sx={{
        width: "5vw",
        height: "5vh",
      }}
    >
      <Button2
        onClick={handleClick}
        name={"back"}
        sx={{
          height: "10vh",
          backgroundColor: darkMode ? "#1f1f1f" : "#f2f2f2",
        }}
      />
    </Box>
  );
}
