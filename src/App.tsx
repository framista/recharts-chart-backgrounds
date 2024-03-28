import { Chart } from "./chart";
import { chartData, chartSeries } from "./chart/data";

function App() {
  return (
    <div className="container">
      <Chart chartData={chartData} chartSeries={chartSeries} />
    </div>
  );
}

export default App;
