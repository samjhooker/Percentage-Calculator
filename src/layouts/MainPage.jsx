import { Title } from "../components/Title"
import { DecimalPlaceButton } from "../components/DecimalPlaceButton"
import { xIsYPercentOfWhat, xIsWhatPercentOfY, percetageIncreaseFromXtoY, xPercentOfY } from "../services/CalculationService"
import { GridCell } from "./GridCell"
import React, { useState, useEffect, useContext } from 'react';
import { useQuery } from "../hooks/useQuery";
import { GlobalContext } from "../App";

export const MainPage = () => {
    const [currentEquasion, setCurrentEquasion] = useState('');
    const {globalState, setGlobalState} = useContext(GlobalContext)

    let query = useQuery();
    
    const equasionClicked = (equasionName) => {
        setCurrentEquasion(equasionName)
    }
    
    useEffect(() => {   
        if(query.has('eq') && query.has('val1') && query.has('val2') && query.has('sf')){
            setCurrentEquasion(query.get('eq'));
            setGlobalState({
                ...globalState, 
                value1: query.get('val1'),
                value2: query.get('val2'),
                significantFigures: parseInt(query.get('sf')) ?? 4
            });

        } 
    }, []);

    const equasions = [
        { equasionName: 'EqWhatIsXofY', 
            beforeInput1Text: "What is ", 
            beforeInput2Text: "% of ", 
            afterInput2Text: "?", 
            calulation: xPercentOfY
        },
        { equasionName: 'EqWhatIsIncreaseXtoY', 
            beforeInput1Text: "What is % increase/decrease from ", 
            beforeInput2Text: " to ", 
            afterInput2Text: "?", 
            calulation: percetageIncreaseFromXtoY
        },
        { equasionName: 'EqXisYOfWhat', 
            beforeInput1Text: "", 
            beforeInput2Text: " is what % of ", 
            afterInput2Text: "?", 
            calulation: xIsWhatPercentOfY
        },
        { equasionName: 'EqXisWhatOfY', 
            beforeInput1Text: "", 
            beforeInput2Text: " is ", 
            afterInput2Text: "% of what?", 
            calulation: xIsYPercentOfWhat
        },
    ];

    return (
        <div className="main-page">
            <Title>Centi</Title>
            <p style={{ maxWidth: 850 }}>
                The percentage calculator for professionals.
                Garenteed to calculate your burning percentage
                equasions somewhat accurately using mostly correct math.
            </p>
            <DecimalPlaceButton />
            <div className="equasion-grid">

                {equasions.map(equasion => (
                    <GridCell
                        key={equasion.equasionName}
                        equasion={equasion}
                        isSelected={!!(currentEquasion === equasion.equasionName)}
                        onClick={equasionClicked} 
                    />
                ))}

            </div>
        </div>
    )
}