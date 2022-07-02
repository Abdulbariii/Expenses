import "./Expenses.css";
import DateExpenses from "./DateExpenses";
import Card from "./UI/Card";
import React, { useState } from "react";

function ExpensesItem(props) {
  return (
    <li>
      <Card className={"expenses-item"}>
        <DateExpenses date={props.date} />
        <div className={"expenses-name__card"}>
          <h2 className={"expenses-name"}>{props.title}</h2>
        </div>
        <div className={"expenses-price"}>${props.amount}</div>
      </Card>
    </li>
  );
}

export default ExpensesItem;
