import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    ReferenceArea,
    Tooltip,
  } from 'recharts';
import { BackgroundDataItem, BackgroundSeries, ChartDataItem, ChartSeries, Range } from './types';
import { formatTimestamp } from '../utils/date';

type Props<T, U> = {
    chartData: ChartDataItem<T>[];
    chartSeries: ChartSeries;
    backgroundSeries: BackgroundSeries;
    backgroundData: BackgroundDataItem<U>;
}

export const Chart = <T, U>({ chartData, chartSeries, backgroundSeries, backgroundData }: Props<T, U>)=>{
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

            <Tooltip />

            {Object.entries(backgroundSeries).map(([serieName, ranksObj], seriesIndex) => (
                <React.Fragment key={serieName}>
                    <ReferenceArea  
                        isFront={false}
                        key={serieName} 
                        shape={( props) => {
                          const { x: xTranslation, height, width, y : yTranslation } = props;
                          const floorsAmount = Object.keys(backgroundSeries).length;
                          const x0 = chartData[0].date;
                          const xLast = chartData[chartData.length - 1].date;
                          const scale = width / (xLast - x0);
                          let xTrans = xTranslation;
                          return (
                            <g>
                              {
                              //@ts-ignore
                              (backgroundData[serieName] as Range[]).map((range, index) => {
                                const currentWidth = (range.end - range.start) * scale;
                                xTrans = xTrans + currentWidth;
                                return (
                                  <rect
                                    key={index}
                                    x={xTrans - currentWidth}
                                    y={yTranslation + height * (1 - (seriesIndex + 1) / floorsAmount )}
                                    height={height / floorsAmount}
                                    width={currentWidth}
                                    fill={ranksObj[range.rankId].color}
                                    fillOpacity={0.15}
                                  />
                              )})}
                            </g>
                          );
                        }}
                    />
                </React.Fragment> 
            ))}
          </LineChart>
        </ResponsiveContainer>
      );
}