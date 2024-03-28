import { createNElementsArray } from "../utils/array";
import { ChartDataItem, ChartSeries } from "./types";

let initialDate = 1;
const daysAmount = 10;

const getRandom = () => Math.random() > 0.75 ? null : Math.random();

export const chartSeries: ChartSeries = {
    series1: {
        name: 'series1',
        color: 'orange'
    },
    series2: {
        name: 'series2',
        color: 'red'
    },
    series3: {
        name: 'series3',
        color: 'pink'
    },
};

export const chartData: ChartDataItem<ChartSeries>[] = createNElementsArray(daysAmount).map(_ => ({ 
    date: new Date(2024, 2, initialDate++).getTime(),
    series1: getRandom(),
    series2: getRandom(),
    series3: getRandom()
 }));