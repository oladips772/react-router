/** @format */
import React from "react";
import { Link } from "react-router-dom";

function Expenses() {
  return (
    <div>
      <h1>Expenses</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Invoices">Invoices</Link>
      </nav>
    </div>
  );
}

export default Expenses;
