import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="flex justify-around h-40 p-4 rounded-xl bg-gray-300 text-center">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />
      ))}
    </div>
  );
};

export default Chart;
