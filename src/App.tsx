import { useState } from "react";
import { Chart } from "./chart";
import { backgroundData, backgroundSeries, chartData, chartSeries } from "./chart/data";
import { Form } from "./form";

function App() {
  const [choosenBackgrounds, setChoosenBackgrounds] = useState<Array<keyof typeof backgroundSeries>>([]);
  const releveantBackgroundSeries = choosenBackgrounds.reduce((p, s) => 
    ({...p, [s]: backgroundSeries[s] })
  , {})

  return (
    <div className="container">
      <Form {...{choosenBackgrounds, setChoosenBackgrounds}}/>
      <Chart {...{chartData, chartSeries, backgroundData}} backgroundSeries={releveantBackgroundSeries}/>
    </div>
  );
}

export default App;
