const ExpensesDate = (props) => {
  const month = props.date.toLocaleString("id-ID", { month: "long" });
  const day = props.date.toLocaleString("id-ID", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="flex flex-col w-20 h-20 border-solid border-2 text-white rounded-md items-center justify-center">
      <div className="text-sm font-bold">{month}</div>
      <div className="text-sm">{day}</div>
      <div className="text-2sm font-bold">{year}</div>
    </div>
  );
};

export default ExpensesDate;
