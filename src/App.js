import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import React from "react";
import Home from "./Component/Home";
import CustomerFeedback from "./Component/CustomerFeedback";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Feedback" element={<CustomerFeedback />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
