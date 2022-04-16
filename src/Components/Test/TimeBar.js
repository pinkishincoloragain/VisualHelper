import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { keyframes } from "@emotion/react";

// const timeBar = keyframes`
// from {
//   width: 0%;
//   }
//   to {
//     width: 100%;
//     }
//     `;
// const timeBar2 = keyframes`
//     from {
//       width: 0%;
//       }
//       to {
//         width: 100%;
//         }
//         `;

export default function TimeBar(props) {
  const darkMode = useSelector((state) => state.mode.value);
  const timeBarRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth((props.time / 300) * 100);
  });
  // const [start, setStart] = useState(true);

  // useEffect(() => {
  //   if (props.start !== null) {
  //     setStart(props.start);
  //   }
  // });

  // console.log("Timebar - props.interval", props.interval);
  // console.log("Timebar - props.time", props.time);

  return (
    <Box
      sx={{
        width: 100 > width ? width + "%" : "100%",
        height: "6vh",
        alignItems: "center",
        backgroundColor: !darkMode ? "#f2f2f2" : "#1f1f1f",
        transitionDuration: "0.2s",
        zIndex: "3",
        ...props.sx,
      }}
      ref={timeBarRef}
    ></Box>
  );
}
