import { Link, Typography } from "@mui/material";
import Box from "@mui/system/Box";
import { useSelector, useDispatch } from "react-redux";
import ColorSwitches from "./Switch";

export default function HeaderBar() {
  const darkMode = useSelector((state) => state.mode.value);

  return (
    <Box
      sx={{
        backgroundColor: darkMode ? "#1f1f1f" : "#f2f2f2",
        width: "90vw",
        height: "10vh",
        display: "flex",
        position: "sticky",
        top: 0,
        ml: "5vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          ml: "2vw",
          color: darkMode ? "#f2f2f2" : "#1f1f1f",
        }}
      >
        <Link href="/">VisualHelper</Link>
      </Typography>
      <Box
        sx={{
          ml: "10vw",
          mr: "1vw",
          mt: "2vh",
        }}
      >
        <ColorSwitches />
      </Box>
    </Box>
  );
}
