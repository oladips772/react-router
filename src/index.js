/** @format */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoices from "./Routes/Invoices";
import Expenses from "./Routes/Expenses";
import Invoice from "./Routes/Invoice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Invoices" element={<Invoices />}>
        <Route path=":id" element={<Invoice />} />
        <Route
          index
          element={
            <main style={{ padding: "1rem" }}>
              <p>Select an invoice in the navigation above</p>
            </main>
          }
        />
      </Route>
      <Route path="/Expenses" element={<Expenses />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);
