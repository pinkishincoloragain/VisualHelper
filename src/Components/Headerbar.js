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
        width: "87vw",
        height: "10vh",
        display: "flex",
        position: "sticky",
        top: 0,
        ml: "5vw",
        pl: "3vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Link underline="hover" href="/">
        <Typography
          variant="h2"
          sx={{
            ml: "2vw",
            color: darkMode ? "#f2f2f2" : "#1f1f1f",
          }}
        >
          VisualHelper
        </Typography>
      </Link>
      <Box
        sx={{
          ml: "10vw",
          mr: "2vw",
          mt: "2vh",
        }}
      >
        <ColorSwitches />
      </Box>
    </Box>
  );
}
