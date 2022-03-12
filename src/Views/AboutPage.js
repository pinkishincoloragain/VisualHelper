import { Box, List, ListItem, Typography } from "@mui/material";
import { useSelector } from "react-redux";

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
        <Box color={!darkMode ? "#1f1f1f" : "#f2f2f2"}>
          <Typography variant="h1">Visualhelper</Typography>
          <div data-aos="fade-up">fish</div>
          <br />
          <List>
            <ListItem>
              <Typography variant="h4">1.What is the Visualhelper</Typography>
            </ListItem>
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
