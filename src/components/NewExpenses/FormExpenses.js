import React, { useState } from "react";
import "./FormExpenses.css";

const FormExpenses = (props) => {
  const [dateValue, setDateValue] = useState("");
  const dateChangeHandler = (event) => {
    setDateValue(event.target.value);
  };

  const [amountValue, setAmountValue] = useState("");
  const amountChangeHandler = (event) => {
    setAmountValue(event.target.value);
  };

  const [titletValue, setTitleValue] = useState("");
  const titleChangeHandler = (event) => {
    setTitleValue(event.target.value);
  };

  const sumbitHandler = (event) => {
    event.preventDefault();

    const expensesDate = {
      title: titletValue,
      amount: amountValue,
      date: dateValue,
    };
    props.onSaveData(expensesDate);

    setAmountValue("");
    setDateValue("");
    setTitleValue("");
  };
  return (
    <form onSubmit={sumbitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={titletValue}
            onChange={titleChangeHandler}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={amountValue}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input value={dateValue} type="date" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default FormExpenses;
