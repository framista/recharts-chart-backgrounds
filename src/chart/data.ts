import { endOfDay } from "date-fns";
import { createNElementsArray } from "../utils/array";
import { BackgroundDataItem, ChartDataItem } from "./types";

let initialDay = 1;
const year = 2024;
const month = 2;
const daysAmount = 10;

const getRandom = () => Math.random() > 0.75 ? null : Math.random();

export const chartSeries = {
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
} as const;

export const chartData: ChartDataItem<typeof chartSeries>[] = createNElementsArray(daysAmount).map(_ => ({ 
    date: new Date(year, month, initialDay++).getTime(),
    series1: getRandom(),
    series2: getRandom(),
    series3: getRandom()
 }));

 export const backgroundSeries = {
    background1: {
        b1_1: { color: 'yellow', id: 'b1_1', name: 'auto'}, 
        b1_2: { color: 'navy', id: 'b1_2', name: 'manual'},
        b1_3: { color: 'blue', id: 'b1_3 ', name: 'stop '}
    },
    background2: {
        b2_1: { color: 'red', id: 'b2_1', name: 'auto'}, 
        b2_2: { color: 'purple', id: 'b2_2', name: 'manula'},
        b2_3: { color: 'green', id: 'b2_3', name: 'semi-auto'}
    },
    background3: {
        b3_1: { color: '#00ffcc', id: 'b3_1', name: 'auto'}, 
        b3_2: { color: '#0066ff', id: 'b3_2', name: 'manula'},
        b3_3: { color: '#ff0066', id: 'b3_3', name: 'semi-auto'}
    },
 } as const;

 export const backgroundData: BackgroundDataItem<typeof backgroundSeries> = {
    background1: [
        { start: new Date(year, month, 1).getTime(), end: endOfDay(new Date(year, month, 3)).getTime(), rankId: 'b1_2' },
        { start: new Date(year, month, 4).getTime(), end: endOfDay(new Date(year, month, 7)).getTime(), rankId: 'b1_1' },
        { start: new Date(year, month, 8).getTime(), end: endOfDay(new Date(year, month, 9)).getTime(), rankId: 'b1_3' },
    ],
    background2: [
        { start: new Date(year, month, 1).getTime(), end: endOfDay(new Date(year, month, 2)).getTime(), rankId: 'b2_1' },
        { start: new Date(year, month, 3).getTime(), end: endOfDay(new Date(year, month, 5)).getTime(), rankId: 'b2_2' },
        { start: new Date(year, month, 6).getTime(), end: endOfDay(new Date(year, month, 8)).getTime(), rankId: 'b2_3' },
        { start: new Date(year, month, 9).getTime(), end: endOfDay(new Date(year, month, 9)).getTime(), rankId: 'b2_1' },
    ],
    background3: [
        { start: new Date(year, month, 1).getTime(), end: endOfDay(new Date(year, month, 6)).getTime(), rankId: 'b3_1' },
        { start: new Date(year, month, 7).getTime(), end: endOfDay(new Date(year, month, 9)).getTime(), rankId: 'b3_2' },
    ],
 }