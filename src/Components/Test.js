import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import Option from "./Test/Option";
import Button2 from "./Button2";
import { Q1 } from "./Test/Content";

export default function Test() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        p: "2vh",
        // backgroundColor: "#1f1f1f",
      }}
    >
      <Box
        sx={{
          flex: "2",
        }}
      >
        <Q1 />
      </Box>
      <Box
        sx={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          pt: "5vh",
          pb: "10vh",
        }}
      >
        <Button2 anti={true} name="option!" />
        <Button2 anti={true} name="option!" />
        <Button2 anti={true} name="option!" />
      </Box>
    </Box>
  );
}
