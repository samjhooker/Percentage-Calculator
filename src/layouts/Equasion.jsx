import { QuestionText } from "../components/QuestionText"
import { AnswerText } from "../components/AnswerText"
import { Input } from "../components/Input"
import { ShareButton } from "../components/ShareButton"
import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from "../App";

export const Equasion = ({ equasionName, isVisible, beforeInput1Text, beforeInput2Text, afterInput2Text, calulation }) => {
    const [input1, setInput1] = useState();
    const [input2, setInput2] = useState();
    const [output, setOutput] = useState();
    const {globalState, setGlobalState} = useContext(GlobalContext)

    useEffect(() => {
        if (globalState.value1 && globalState.value2) {
            setInput1(globalState.value1);
            setInput2(globalState.value2);
        }
    }, [globalState])
   
    useEffect(() => {
        if(input1 && input2) setOutput(calulation(input1, input2, globalState.significantFigures));
    }, [input1, input2, calulation, globalState]);
    

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <div style={{ flexGrow: 1, display: "flex" }}>
                <QuestionText>
                    {beforeInput1Text} 
                    <Input type="number" value={input1} onChange={e => setInput1(e.target.value)}></Input> 
                    {beforeInput2Text}
                    <Input type="number" value={input2} onChange={e => setInput2(e.target.value)}></Input>
                    {afterInput2Text}
                </QuestionText>
            </div>

            {isVisible &&
                <div style={{ flexGrow: 1 }}>
                    { (input1 && input2) 
                        // ? <AnswerText>{Math.abs(output)}% {output > 0 ? 'Increase' : 'Decrease'}</AnswerText> 
                        ? <AnswerText>{output}</AnswerText> 
                        : <AnswerText>-</AnswerText>
                    }
                </div>
            }

            {isVisible &&
                <div style={{ flexGrow: 0 }}>
                    <ShareButton equasionName={equasionName} val1={input1} val2={input2}></ShareButton>
                </div>
            }
        </div>
    )
}
