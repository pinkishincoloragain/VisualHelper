import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Button2 from "../Button2";
import { Typography2 } from "../Styles";

export default function WebProTest(props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleAnsClick = () => {
    
  };

  const temp = (
    <div>
      <Typography2 name="this is test" />
    </div>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
      }}
    >
      <Typography2 mode={true} name={``} />
      <Typography2
        mode={true}
        name={`Test ${props.qNum}. Find link to "contact number"`}
      />
      <Button2
        onClick={handleAnsClick}
        sx={{ width: "50vw" }}
        name="start test"
      />
    </Box>
  );
}
