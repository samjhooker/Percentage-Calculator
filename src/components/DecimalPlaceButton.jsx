import { IconButton } from "./IconButton"
import React, { useContext, useState } from 'react';
import { GlobalContext } from "../App";

export const DecimalPlaceButton = () => {
    const {globalState, setGlobalState} = useContext(GlobalContext)

    const setSignificantFigures = (sigFigs) => {
        setGlobalState(
            {...globalState, significantFigures: sigFigs}
        )
    }

    return (
    <div className="dp-button">
        <IconButton iconName="do_not_disturb_on"  onClick={() => globalState.significantFigures > 1 && setSignificantFigures(globalState.significantFigures - 1)}/>
        <span>
            {globalState.significantFigures} significant figures
        </span>
        <IconButton iconName="add_circle" onClick={() => setSignificantFigures(globalState.significantFigures + 1)}/>
    </div>
    )
}