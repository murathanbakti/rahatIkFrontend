import React from "react";
import {Routes, Route } from "react-router-dom";
import Table from "./components/Table/Table";
import Authentication from "./components/Authentication/authController";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Authentication />} />
            <Route path="/table" element={<Table />} />
        </Routes>
    );
}

export default App;
