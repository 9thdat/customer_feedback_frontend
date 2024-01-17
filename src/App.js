import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import React from "react";
import Home from "./Component/Home";
import CustomerFeedback from "./Component/CustomerFeedback";
import ListFeedback from "./Component/ListFeedback";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Feedback" element={<CustomerFeedback />} />
                <Route path="/ListFeedback" element={<ListFeedback/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
