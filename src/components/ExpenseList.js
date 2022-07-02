import React from "react";
import ExpensesItem from "./ExpensesItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="No-content">No content found</h2>;
  }

  return props.item.map((expenses) => (
    <ul className="list">
      <ExpensesItem
        key={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      ></ExpensesItem>
    </ul>
  ));
};

export default ExpenseList;
