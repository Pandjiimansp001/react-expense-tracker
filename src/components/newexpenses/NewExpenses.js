import { useState } from "react";
import ExpensesForm from "./ExpensesForm";

const NewExpenses = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpensesDataHandler = (enteredExpensesData) => {
    const expensesData = {
      ...enteredExpensesData,
      id: Math.random().toString(),
    };

    props.onAddExpenses(expensesData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-900 p-4 my-8 mx-auto w-96 max-w-full rounded-2xl text-center shadow-sm">
      {!isEditing && (
        <button className="cursor-pointer py-4 px-8 border-cyan-900 bg-cyan-900 text-white rounded-xl hover:bg-cyan-700 hover:border-cyan-700 active:bg-cyan-700 active:border-cyan-700" onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && <ExpensesForm onSaveExpensesData={saveExpensesDataHandler} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewExpenses;
