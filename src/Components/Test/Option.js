import { Typography, Paper } from "@mui/material";
import { green, pink } from "@mui/material/colors";
import { useSelector } from "react-redux";
import Button2 from "../Button2";

export default function Option(props) {
  const darkMode = useSelector((state) => state.mode.value);

  return (
    <>
      <Button2 name={props.name} anti={true} />
    </>
  );
}
