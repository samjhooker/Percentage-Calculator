import { IconButton } from "./IconButton"
import React, {useContext, useState, useEffect} from 'react'
import { GlobalContext } from "../App"

export const ShareButton = ({equasionName, val1, val2}) => {
    const {globalState, setGlobalState} = useContext(GlobalContext)
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        setIsCopied(false);
    }, [val1, val2, globalState])

    const buttonClicked = () =>{
        let url = `${window.location.hostname}?eq=${equasionName}&val1=${val1}&val2=${val2}&sf=${globalState.significantFigures}`;
        navigator.clipboard.writeText(url);
        setIsCopied(true);
    }

    return (
    <div style={{color:'var(--font-color-inverted)'}}  >
        {!isCopied && <IconButton iconName="share" onClick={buttonClicked} />}
        {isCopied && 'Link copied to clipboard'}
    </div>
    )
}