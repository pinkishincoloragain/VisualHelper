import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import Logo from "../assets/Landing.png";
import UnstyledButtonCustom from "../Components/Button2";
import Button2 from "../Components/Button2";

export default function LandingPage() {
  return (
    <Box sx={{ ml: "10vw", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "50%",
          mt: "20vh",
        }}
      >
        <img data-aos="fade-up" src={Logo} width="100% " />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Button2 name="test" href="pretest"></Button2>
          <Button2 name="About"></Button2>
          <Button2 name="Contact"></Button2>
        </Box>
      </Box>
    </Box>
  );
}
