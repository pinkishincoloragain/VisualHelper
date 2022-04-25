import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, ToggleButton, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";

const colors = [
  "#e6194b",
  "#3cb44b",
  "#ffe119",
  "#4363d8",
  "#f58231",
  "#911eb4",
  "#46f0f0",
  "#f032e6",
  "#bcf60c",
  "#fabebe",
  "#008080",
  "#e6beff",
  "#9a6324",
  "#fffac8",
  "#800000",
  "#aaffc3",
  "#808000",
  "#ffd8b1",
  "#000075",
  "#808080",
  "#ffffff",
  "#000000",
];

const proficiencies = [
  "Only using the mouse",
  "only using keyboard",
  "Screenreader",
  "high contrast",
  "Key press",
  "navigate using keyboard",
];

const Item = (props) => {
  const [selected, setSelected] = useState(false);
  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        props.onClick();
        setSelected(!selected);
      }}
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: selected ? colors[2] : "white",
        "&:selected": {
          backgroundColor: colors[2],
        },
        ":checked": {
          backgroundColor: colors[2],
        },
        "&:hover": {
          color: colors[2],
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: selected ? "white" : "black",
          "&:hover": {
            color: "inherit",
          },
        }}
      >
        {proficiencies[props.index]}
      </Typography>
    </ToggleButton>
  );
};

export function ResponsiveGrid(props) {
  const [success, setSuccess] = useState({});
  useEffect(() => {});

  const handleClick = (idx) => {
    console.log(idx);
    setSuccess({ ...success, idx });
  };

  useEffect(() => {
    console.log("success", success);
  }, [success]);

  return (
    <>
      <Box
        sx={{
          ml: "10vw ",
          height: "10vh",
        }}
      ></Box>
      <Box sx={{ ml: "10vw", width: "80vw", flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, idx) => (
            <Grid item xs={2} sm={4} md={4} key={idx}>
              <Item index={idx} onClick={() => handleClick(idx)}>
                {idx + 1}.{proficiencies[idx]}
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          ml: "10vw",
          mt: "10vh",
          height: "10vh",
        }}
      ></Box>
    </>
  );
}
