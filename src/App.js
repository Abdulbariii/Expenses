import Expenses from "./components/Expenses";
import "./App.css";
import NewExpenses from "./components/NewExpenses/NewExpense";
import { useState } from "react";
const expenses_dummy = [
  { title: "Car instructor", amount: 229, date: new Date(2022, 1, 4), id: 1 },
  { title: "Motor ", amount: 529, date: new Date(2021, 10, 12), id: 2 },
  { title: "Car Math", amount: 279, date: new Date(2021, 2, 8), id: 3 },
  { title: "Car Race", amount: 449, date: new Date(2019, 1, 3), id: 4 },
  { title: "Car Blnd", amount: 679, date: new Date(2019, 8, 9), id: 5 },
];
const App = () => {
  const [expensesValue, setExpensesValue] = useState(expenses_dummy);
  const saveExpenseData = (dataApp) => {
    setExpensesValue((prev) => {
      return [dataApp, ...prev];
    });
  };

  return (
    <div>
      <NewExpenses onAddData={saveExpenseData} />
      <Expenses item={expensesValue} />
    </div>
  );
};

export default App;
