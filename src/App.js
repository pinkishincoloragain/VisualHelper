import React from "react";
import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import LandingPage from "./Views/LandingPage";
import Notice from "./Components/Test/Notice";
import TestPage from "./Views/TestPage";
import AboutPage from "./Views/AboutPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.scss";

// For animation
function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  const darkMode = useSelector((state) => state.mode.value);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: !darkMode ? "#1f1f1f" : "#f2f2f2",
        width: "100%",
        height: "100%",
      }}
      className="App"
    >
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/notice" element={<NoticePage />} /> */}
          <Route exact path="/test" element={<TestPage />} />
          <Route index path="/about" element={<AboutPage />} />
          <Route index path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
