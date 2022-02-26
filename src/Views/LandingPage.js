import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import Logo from "../assets/Landing.png";
import UnstyledButtonCustom from "../Components/Button";
import Button2 from "../Components/Button";

export default function LandingPage() {
  return (

      <Box sx={{ display: "flex", flexDirection: "column" }}>
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
            <Button2 name="next"></Button2>
            <Button2 name="hi"></Button2>
            <Button2 name="hii"></Button2>
          </Box>
        </Box>
      </Box>
  );
}
