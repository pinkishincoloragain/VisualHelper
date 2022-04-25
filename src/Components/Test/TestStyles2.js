import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, ToggleButton, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import Button2 from "../Button2";

const colors = ["#e6194b", "#3cb44b", "#ffe119"];

export const proficiencies = [
  "I use mouse",
  "I use keyboard",
  "I use Screenreader",
  "I prefer dark mode",
  "I prefer high contrast mode",
  "I prefer a larger font",
];

const Item = (props) => {
  const [selected, setSelected] = useState(false);
  return (
    <ToggleButton
      value="check"
      selected={!selected}
      onChange={() => {
        props.handleClick(props.index);
        setSelected(!selected);
      }}
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
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
        variant="h6"
        sx={{
          color: !selected ? "white" : "black",
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
  const [selections, setSelections] = useState([]);
  const handleSubmit = () => {
    props.handleSubmit(selections);
  };

  const handleClick = (idx) => {
    console.log(idx);
    console.log(selections);
    if (!selections.includes(idx)) {
      setSelections([...selections, idx]);
    } else {
      setSelections(selections.filter((i) => i !== idx));
    }
  };

  useEffect(() => {
    // console.log("selections", selections);
  }, [selections]);

  return (
    <>
      <Box sx={{ mt: "15vh", ml: "10vw", width: "80vw", flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {proficiencies.map((_, idx) => (
            <Grid item xs={2} sm={4} md={4} key={idx}>
              <Item index={idx} handleClick={handleClick}>
                {proficiencies[idx]}
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
      {props.test ? (
        <Button2
          onClick={handleSubmit}
          sx={{ mt: "15vh", ml: "60vw", width: "30vw" }}
          name="move to the result"
        />
      ) : null}
    </>
  );
}
