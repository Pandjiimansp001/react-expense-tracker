import { useState } from "react";

const ExpensesForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expensesData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpensesData(expensesData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-wrap gap-4 mb-4 text-left">
        <div>
          <label className="text-white font-bold mb-2 block" htmlFor="title">
            Title
          </label>
          <input className="p-2 rounded-lg border-gray-400 w-80 max-w-full" type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div>
          <label className="text-white font-bold mb-2 block" htmlFor="amount">
            Amount
          </label>
          <input className="p-2 rounded-lg border-gray-400 w-80 max-w-full" type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div>
          <label className="text-white font-bold mb-2 block" htmlFor="date">
            Date
          </label>
          <input className="p-2 rounded-lg border-gray-400 w-80 max-w-full" type="date" min="2022-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="text-right text-white">
        <button className="border-solid border-2 hover:bg-cyan-700 border-white p-2 rounded-md mr-4" type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className="bg-cyan-900 hover:bg-cyan-700 p-2 rounded-md" type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpensesForm;
