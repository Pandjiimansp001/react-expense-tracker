import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpenses from "./components/newexpenses/NewExpenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Smartphone",
    amount: 750,
    date: new Date(2022, 0, 12),
  },
  {
    id: "e2",
    title: "Car",
    amount: 8500,
    date: new Date(2023, 1, 1),
  },
  {
    id: "e3",
    title: "Motorcycle",
    amount: 3250,
    date: new Date(2024, 2, 2),
  },
  {
    id: "e4",
    title: "TV",
    amount: 400,
    date: new Date(2025, 3, 3),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpensesHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <NewExpenses onAddExpenses={addExpensesHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
