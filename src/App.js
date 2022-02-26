import React from "react";
import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Landing from "./assets/Landing.png";
import { Container } from "@mui/material";
import LandingPage from "./Views/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div
      sx={{ ml: "10vw", display: "flex", flexDirection: "column" }}
      className="App"
    >
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<LandingPage />} />
          <Route index path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
