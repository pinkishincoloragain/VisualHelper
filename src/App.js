import React from "react";
import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import LandingPage from "./Views/LandingPage";
import PreTestPage from "./Views/PreTestPage";
import TestPage from "./Views/TestPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div sx={{ display: "flex", flexDirection: "column" }} className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<LandingPage />} />
          <Route exact path="/pretest" element={<PreTestPage />} />
          <Route exact path="/test" element={<TestPage />} />
          <Route index path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
