import React from 'react'
import { Link } from "react-router-dom";


function Invoices() {
  return (
    <div>
      <h1>Invoices</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Expenses">Expenses</Link>
      </nav>
    </div>
  );
}

export default Invoices