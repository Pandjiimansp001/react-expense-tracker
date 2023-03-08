import ExpensesItem from "./ExpensesItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="text-white text-center">Expense not found!</h2>;
  }

  return (
    <ul className="list-none p-0">
      {props.items.map((item) => (
        <ExpensesItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
      ))}
    </ul>
  );
};

export default ExpensesList;
