import { Box, Typography } from "@mui/material";
import Button2 from "../Button2";

export default function PreTest(props) {
  return (
    <Box>
      <Typography variant="h1">PreColorTest</Typography>
      <Button2 onClick={props.handleStep}>Start test</Button2>
    </Box>
  );
}
