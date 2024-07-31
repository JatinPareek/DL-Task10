import React from "react";
import HeroSection from "./components/HeroSection";
import FooterFull from "./components/footerfull";
import Explore from "./components/Explore";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <FooterFull />
              </>
            }
          />
          <Route
            path="/explore"
            element={
              <>
                <Explore />
                <FooterFull />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
