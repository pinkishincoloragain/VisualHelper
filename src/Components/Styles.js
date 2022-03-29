import { useState } from "react";

import { Typography } from "@mui/material";

const Typography2 = (props) => {
  return (
    <Typography
      variant="h4"
      fontWeight={"100"}
      lineHeight="1.7"
      onClick={props.onClick}
      sx={{ color: !props.mode ? "#1f1f1f" : "#f2f2f2", ...props.sx }}
    >
      {props.name}
    </Typography>
  );
};

export { Typography2 };
