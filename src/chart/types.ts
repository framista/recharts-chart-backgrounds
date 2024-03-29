export type ChartDataItem<T> = {
    date: number;
} & {  [K in keyof T]: number | null}

export type ChartSeries = Record<string, {
    name: string,
    color: string    
}>

export type Rank = {
    id: string,
    color: string,
    name: string,
}

export type BackgroundSeries = Record<string, Record<string, Rank>>

export type Range = {
    start: number,
    end: number, 
    rankId: Rank['id']
}

export type BackgroundDataItem<T> = {
    [K in keyof T]: Range[]
}