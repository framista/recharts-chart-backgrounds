export type ChartDataItem<T> = {
    date: number;
} & {  [K in keyof T]: number | null}

export type ChartSeries = Record<string, {
    name: string,
    color: string    
}>