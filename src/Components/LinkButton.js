import Button2 from "./Button2";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function LinkButton(props) {
  const darkMode = useSelector((state) => state.mode.value);
  const handleClick = () => {
    window.history.back();
  };
  return (
    <Box
      sx={{
        // width: "6vw",
        height: "5vh",
        ...props.sx
      }}
    >
      <Button2
        onClick={handleClick}
        name={props.name}
        href={props.href}
        sx={{
          // height: "10vh",
          backgroundColor: darkMode ? "#1f1f1f" : "#f2f2f2",
        }}
      />
    </Box>
  );
}
