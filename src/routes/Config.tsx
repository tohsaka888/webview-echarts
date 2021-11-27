import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import WebviewEcharts from "../components/WebviewEcharts";

export default function Config() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<WebviewEcharts />} />
      </Routes>
    </Router>
  );
}
