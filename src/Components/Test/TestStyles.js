import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
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

const Item = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.button,
  padding: theme.spacing(2),
  textAlign: "center",
  width: "100%",
  //   "&:hover": {
  //     backgroundColor: colors[Math.floor(Math.random() * colors.length)],
  //   },
  color: theme.palette.text.secondary,
}));

export function ResponsiveGrid(props) {
  const [open, setOpen] = useState(false);
  const handleClick = (idx) => {
    console.log(idx);
    if (idx === 8) {
      //   setShow(false);
      props.handleAnsClick();
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setOpen(false);
    }, 3000);
  }, [open]);
  return (
    <Box>
      <Typography
        sx={{
          ml: "10vw",
          mb: "2vh",
          color: "white",
        }}
        variant="h4"
      >
        Flower shop data
      </Typography>
      <Box
        sx={{
          ml: "10vw ",
          height: "10vh",
        }}
      >
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                {/* <CloseIcon fontSize="inherit" /> */}
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Close me!
          </Alert>
        </Collapse>
      </Box>
      <Box sx={{ ml: "10vw", width: "80vw", flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(12)).map((_, idx) => (
            <Grid item xs={2} sm={4} md={4} key={idx}>
              <Item onClick={() => handleClick(idx)}>{idx}</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
