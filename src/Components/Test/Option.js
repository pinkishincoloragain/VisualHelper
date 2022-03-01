import { Typography, Paper } from "@mui/material";
import { green, pink } from "@mui/material/colors";
import { useSelector } from "react-redux";
import Button2 from "../Button2";
import { Box } from "@mui/material";

export default function Option(props) {
  const darkMode = useSelector((state) => state.mode.value);

  return (
    <Box sx={{ ml: "20vw" }}>
      <Button2 anti={true} name={props.name} />
    </Box>
  );
}
