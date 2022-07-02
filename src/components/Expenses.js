import ExpensesItem from "./ExpensesItem";
import Card from "./UI/Card";
import "./Expenses.css";
import "./ExpensesCon.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import { useState } from "react";
import ChartBar from "./chart/ChartBar";
function Expenses(props) {
  const [yearValue, setYearValue] = useState("2021");
  const onFilterHandler = (date) => {
    setYearValue(date);
  };

  const filteredExpenses = props.item.filter((expenses) => {
    return new Date(expenses.date).getFullYear().toString() === yearValue;
  });

  console.log(yearValue);
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={yearValue}
        onGetDate={onFilterHandler}
      ></ExpenseFilter>
      <ChartBar></ChartBar>

      <ExpenseList item={filteredExpenses}></ExpenseList>
    </Card>
  );
}

export default Expenses;
