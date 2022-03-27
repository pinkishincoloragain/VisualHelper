import { Box, List, ListItem, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import LinkButton from "../Components/LinkButton";

export default function AboutPage() {
  const darkMode = useSelector((state) => state.mode.value);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100%",
        backgroundColor: !darkMode ? "#1f1f1f" : "#f2f2f2",
      }}
    >
      <Box
        sx={{
          ml: "5vw",
          mr: "5vw",
          p: "5vh",
          backgroundColor: darkMode ? "#1f1f1f" : "#f2f2f2",
        }}
      >
        <LinkButton
          name="Go back"
          sx={{ width: "20vw", mb: "5vh" }}
          href={"/"}
        />

        <Box
          sx={{
            px: "5vw",
            color: !darkMode ? "#1f1f1f" : "#f2f2f2",
          }}
        >
          <Typography variant="h1">Visualhelper</Typography>
          <br />
          <List>
            <div data-aos="fade-up">
              <ListItem>
                <Typography variant="h4">1.What is the Visualhelper</Typography>
              </ListItem>
            </div>
            <ListItem>
              <Typography variant="h4">1.What is the Visualhelper</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h4">1.What is the Visualhelper</Typography>
            </ListItem>
          </List>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Box>
      </Box>
    </Box>
  );
}
