import "./DateExpenses.css";

function DateExpenses(props) {
  const month = new Date(props.date).toLocaleString("en-US", { month: "long" });
  const day = new Date(props.date).toLocaleString("en-US", { day: "2-digit" });
  const year = new Date(props.date).getFullYear();

  return (
    <div className={"expenses-date"}>
      <div className="expenses-date__month">{month}</div>
      <div className="expenses-date__day">{day}</div>
      <div className="expenses-date__year">{year}</div>
    </div>
  );
}
export default DateExpenses;
