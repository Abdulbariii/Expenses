import React from "react";

import ExpenseForm from "./FormExpenses";
import "./NewExpenses.css";

const NewExpense = (props) => {
  const saveData = (ourData) => {
    const data = {
      id: Math.floor(Math.random() * 100) + 7,
      ...ourData,
    };
    props.onAddData(data);
    console.log(data);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={saveData} />
    </div>
  );
};

export default NewExpense;
