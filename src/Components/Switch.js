import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../reducers/modeSlice";

const GreenSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: pink[600],
    "&:hover": {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: pink[600],
  },
}));

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function ColorSwitches() {
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(changeMode());
  };

  const darkMode = useSelector((state) => state.mode.value);

  return <GreenSwitch onClick={handleChange} {...label} defaultChecked />;
}
