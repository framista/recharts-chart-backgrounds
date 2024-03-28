import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
  } from 'recharts';
import { ChartDataItem, ChartSeries } from './types';
import { formatTimestamp } from '../utils/date';

type Props<T> = {
    chartData: ChartDataItem<T>[];
    chartSeries: ChartSeries
}

export const Chart = <T,>({ chartData, chartSeries }: Props<T>)=>{
    return (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart width={500} height={400} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis   
              domain={["auto", "auto"]}
              type="number"
              dataKey="date" 
              tickFormatter={formatTimestamp}
              scale="time"
            />
            <YAxis />
           
            <Legend />
        
            {Object.values(chartSeries).map((s) => (
              <Line
                connectNulls
                dataKey={s.name}
                name={s.name}
                key={s.name}
                stroke={s.color}
                strokeWidth={3}
                type="monotone"
                dot={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      );
}