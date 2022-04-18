/** @format */
import React from "react";
import { useParams } from "react-router-dom";
import { getInvoice } from "../data";

function Invoice() {
  let params = useParams();
  let invoice = getInvoice(parseInt(params.id, 10));

  return (
    <div>
      <p> Invoice Id : {invoice.id}</p>
      <p> Invoice Name: {invoice.name}</p>
      <p> Invoice Amount: {invoice.amount}</p>
      <p> Invoice Due: {invoice.due}</p>
    </div>
  );
}

export default Invoice;
