/** @format */
import "./App.css";
import { Link,Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Book keeping App</h1>
      <nav>
        <Link to="/Invoices">Invoices</Link>
        <Link to="/Expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
