import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './index.scss';
import FcultureHost from "./Pages/FcultureHost";
import Fculture from "./Pages/Fculture";
import Home from "./Pages/Home";

const rootElement = document.getElementById("root");
render(
    <Router>
        <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/games/fculture/host" element={<FcultureHost /> } />
            <Route path="/games/fculture" element={<Fculture /> } />
        </Routes>
    </Router>,
    rootElement
);