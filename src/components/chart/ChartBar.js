const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="flex flex-col items-center h-full">
      <div className="flex flex-col justify-end h-full w-full border-gray-700 rounded-xl bg-gray-400 overflow-hidden">
        <div className="bg-cyan-400 w-full transition-all ease-out delay-300" style={{ height: barFillHeight }}></div>
      </div>
      <div className="font-bold text-xs text-center">{props.label}</div>
    </div>
  );
};

export default ChartBar;
