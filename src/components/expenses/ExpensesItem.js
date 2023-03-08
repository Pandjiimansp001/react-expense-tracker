import ExpensesDate from "./ExpensesDate";

const ExpensesItem = (props) => {
  return (
    <li>
      <div className="flex justify-between items-center p-2 my-4 mx-0 bg-gray-700 rounded-xl">
        <ExpensesDate date={props.date} />
        <div className="flex gap-4 items-center justify-start flex-1">
          <h2 className="text-white text-lg flex-1 my-0 mx-4">{props.title}</h2>
          <div className="text-lg font-bold text-white bg-cyan-900 border-white px-4 py-2 rounded-xl">${props.amount}</div>
        </div>
      </div>
    </li>
  );
};

export default ExpensesItem;
