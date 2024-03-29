import { Chart } from "./chart";
import { backgroundData, backgroundSeries, chartData, chartSeries } from "./chart/data";

function App() {
  return (
    <div className="container">
      <Chart {...{chartData, chartSeries, backgroundSeries, backgroundData}} />
    </div>
  );
}

export default App;
