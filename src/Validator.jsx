import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

const Validator = ({ heb, input }) => {
    const [validatorTexts, setValidatorTexts] = useState({
        ready1: "הקלד/י עד 8 ספרות כדי לקבל את ספרת הביקורת",
        ready2: "או הקלד/י 9 ספרות כדי לאמת את מספר הזהות המלא"
    });
    const [output, setOutput] = useState(0);
    const controlArray = useRef([1,2,1,2,1,2,1,2,1]);
    let counter = useRef(0);
    let sum = useRef(0);

    useEffect(()=>{
        input.padStart(8, "0").split("").map(Number).forEach((digit, i)=>{
            (digit * controlArray.current[i]) > 9 ?
            sum = {
                current: sum["current"] + (digit * controlArray.current[i])
                .toString().split("").map(Number).reduce((a, b) => a + b)
            }
            : sum = {
                current: sum["current"] + (digit * controlArray.current[i])
            };
        })
        for (counter["current"] = 0; counter["current"] < 10; counter["current"]++){
            if ((counter["current"] + sum["current"]) % 10 === 0){
                break;
            }
        }
        setOutput(counter["current"]);
        heb ?
        setValidatorTexts({
            onlyDigits: "יש להקליד מספרים בלבד",
            invalid: `מספר הזהות ${input.padStart(9, "0")} לא תקין`,
            valid: `מספר הזהות ${input.padStart(9, "0")} תקין`,
            ready1: "הקלד/י עד 8 ספרות כדי לקבל את ספרת הביקורת",
            ready2: "או הקלד/י 9 ספרות כדי לאמת את מספר הזהות המלא",
            controlDigit: `ספרת הביקורת עבור ${input.padStart(8, "0")} היא`,
        }) :
        setValidatorTexts({
            onlyDigits: "Only digits please",
            invalid: `ID ${input.padStart(9, "0")} is invalid`,
            valid: `ID ${input.padStart(9, "0")} is valid`,
            ready1: "Type up to 8 digits to receive the control digit",
            ready2: "or type 9 digits to validate the full ID",
            controlDigit: `The control digit for ${input.padStart(8, "0")} is`,
        })
   },[input, heb])

    return (
        <ValidatorDiv>
        {
            isNaN(Number(input))=== true ?
            <H3 $textcolor={error}>{validatorTexts.onlyDigits}</H3>
            : input.length === 9 && (output + sum["current"]) % 10 === 0 ?
            <H2 $textcolor={valid}>{validatorTexts.valid}</H2>
            : input.length === 9 && (output + sum["current"]) % 10 !== 0 ?
            <H2 $textcolor={error}>{validatorTexts.invalid}</H2>
            : input.length === 0 ?
            <H3 $textcolor={mainColor}>
                {validatorTexts.ready1}
                <br />
                {validatorTexts.ready2}
            </H3>
            : 
            <>
                <H3 $textcolor={mainColor}>{validatorTexts.controlDigit}</H3>
                <H2 $textcolor={valid}>{output}</H2>
            </>
        }
        </ValidatorDiv>
    );
};

const ValidatorDiv = styled.div`
    min-height: 150px;  
    text-shadow: #000000 1px 0 3px;
`;

const H2 = styled.h2`
    color: ${(props) => props.$textcolor};
`;

const H3 = styled.h3`
    color: ${(props) => props.$textcolor};
`;

const error = "#ff7272";
const valid = "#50d46c";
const mainColor = "#ffffff";

export default Validator;
