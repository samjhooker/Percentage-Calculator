import React from 'react';
import { Equasion } from "./Equasion"

export const GridCell = ({equasion, isSelected, onClick}) => {

    return (
    <div className={`grid-cell`} onClick={() => onClick(equasion.equasionName)}>
        <div className={`grid-cell-contents ${isSelected ? 'active' : ''}`}>
            <Equasion 
                equasionName={equasion.equasionName}
                isVisible={isSelected} 
                beforeInput1Text={equasion.beforeInput1Text} 
                beforeInput2Text={equasion.beforeInput2Text} 
                afterInput2Text={equasion.afterInput2Text} 
                calulation={equasion.calulation} 
            />
        </div>
    </div>
    )
}