import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";

export default function Button2(props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Button
        onClick={props.onClick}
        href={props.href}
        sx={{
          width: "30vw",
          height: "10vh",
          backgroundColor: "aliceblue",
        }}
      >
        <Typography fontSize={"h2.fontSize"}>{props.name}</Typography>
      </Button>
      <Box
        sx={{
          width: "30vw",
          height: "2vh",
          backgroundColor: "#1f1f1f",
        }}
      ></Box>
    </Box>
  );
}
