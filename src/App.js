import React, { useEffect, useState } from "react";
import "./App.css";
import Auth from "./Components/Auth/Auth";
import Manatee from "./Components/Manatee/Manatee";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Narwhale from "./Components/Narwhale/Narwhale";
import Whale from "./Components/Whale/Whale";

const App = () => {
  return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/manatee">Manatee</Link>
            </li>
            <li>
              <Link to="/narwhale">Narwhale</Link>
            </li>
            <li>
              <Link to="/whale">Whale</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/manatee" element={<Manatee />} />

          <Route path="/narwhale" element={<Narwhale />} />

          <Route path="/whale" element={<Whale />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
