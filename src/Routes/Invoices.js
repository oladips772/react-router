/** @format */
import React from "react";
import { NavLink, Link, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../data";

function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <h1>Invoices</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Expenses">Expenses</Link>
      </nav>

      <input
        type="search"
        value={searchParams.get("filter") || ""}
        onChange={(e) => {
          let filter = e.target.value;
          if (filter) {
            setSearchParams({ filter });
          } else {
            setSearchParams({});
          }
        }}
      />

      <div className="navigation">
        {invoices.map((invoice) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "blue" : "",
              };
            }}
            key={invoice.id}
            to={`/Invoices/${invoice.id}`}
          >
            <h2>{invoice.name}</h2>
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default Invoices;
