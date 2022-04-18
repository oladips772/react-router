/** @format */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoices from "./Routes/Invoices";
import Expenses from "./Routes/Expenses";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Invoices" element={<Invoices />} />
      <Route path="/Expenses" element={<Expenses />} />
    </Routes>
  </BrowserRouter>
);
