import { Box } from "@mui/system";

export default function TestPage() {
  return (
    <Box sx={{ ml: "10vw", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          mt: "2vh",
          width: "80vw",
          height: "8vh",
          backgroundColor: "#1f1f1f",
        }}
      ></Box>
      <Box
        sx={{
          mt: "10vh",
          width: "80vw",
          height: "70vh",
          borderRadius: "10px",
          boxShadow: "1px 1px 10px #1f1f1f",
        }}
      ></Box>
    </Box>
  );
}
