import { useCallback } from "react";
import { backgroundSeries } from "../chart/data"
import "./styles.css";

type Props = {
    choosenBackgrounds: Array<keyof typeof backgroundSeries>
    setChoosenBackgrounds: (p: Array<keyof typeof backgroundSeries>) => void;
}

export const Form = ({ choosenBackgrounds, setChoosenBackgrounds }: Props) => {

    const onClick = useCallback((series: keyof typeof backgroundSeries) => {
        const data = choosenBackgrounds.includes(series) ? 
            choosenBackgrounds.filter(s => s !== series) :
            [...choosenBackgrounds, series]
        setChoosenBackgrounds(data)
    }, [choosenBackgrounds])

    return (
        <div className="form">
            <p>Choose backgrounds:</p>
            {Object.keys(backgroundSeries).map((series) => (
                <div key={series} className="form-row">
                    <input 
                        type="checkbox" 
                        onChange={() => onClick(series as keyof typeof backgroundSeries)}  
                        checked={choosenBackgrounds.includes(series as keyof typeof backgroundSeries)}
                    />
                    <p>{series}</p>
                </div>
            ))}
        </div>
    )
}