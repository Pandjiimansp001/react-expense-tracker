const ExpensesFilter = (props) => {
  const dropDownHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="text-white py-0 px-4">
      <div className="flex w-full items-center justify-between my-4 mx-0">
        <label className="font-bold mb-2" htmlFor="filter-year">
          Filter by year
        </label>
        <select className="text-gray-800 py-2 px-12 font-bold rounded-md" value={props.selected} onChange={dropDownHandler}>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
