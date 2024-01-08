import { useEffect } from "react";
import { styled } from "styled-components";

export default function Validator({heb, input, output, setOutput}){
    let sum = 0;
    let counter = 0;
    const zeroPad = (str, places) => str.padStart(places, '0');

    useEffect(()=>{
    let inputArray = zeroPad(input,8).split("").map(Number);
    let controlArray = [1,2,1,2,1,2,1,2,1];
    for (let i=0; i<inputArray.length; i++){
        if ((inputArray[i]*controlArray[i])>9){
            sum += (inputArray[i]*controlArray[i]).toString().split("").map(Number).reduce((a, b) => a + b);
        }else{
            sum += (inputArray[i]*controlArray[i]);
        }
    }
    for (counter=0; counter<10; counter++){
        if ((counter+sum) % 10 === 0){
            break;
        }
    }
    setOutput(counter);
   },[input])

    return (
        <>
        {
            heb ? (
                <ValidatorDiv>
                    {isNaN(Number(input))=== true ?
                    (<H3 $textcolor={red}>יש להקליד מספרים בלבד</H3>)
                    : input.length === 9 && (output+sum) % 10 === 0 ?
                    (<H2 $textcolor={green}>מספר הזהות {zeroPad(input,9)} תקין</H2>)
                    : input.length === 9 && (output+sum) % 10 !== 0 ?
                    (<H2 $textcolor={red}>מספר הזהות {zeroPad(input,9)} לא תקין</H2>)
                    : input.length === 0 ?
                    (<H3 $textcolor={yellow}>הקלד/י עד 8 ספרות כדי לקבל את ספרת הביקורת<br />או הקלד/י 9 ספרות כדי לאמת את מספר הזהות המלא</H3>)
                    : (
                    <>
                    <H3 $textcolor={yellow}>ספרת הביקורת עבור {zeroPad(input,8)} היא</H3>
                    <H2 $textcolor={blue}>{output}</H2>
                    </>
                    )}
                </ValidatorDiv>
            ) : (
                <ValidatorDiv>
                    {isNaN(Number(input))=== true ?
                    (<H3 $textcolor={red}>Only digits please</H3>)
                    : input.length === 9 && (output+sum) % 10 === 0 ?
                    (<H2 $textcolor={green}>ID {zeroPad(input,9)} is valid</H2>)
                    : input.length === 9 && (output+sum) % 10 !== 0 ?
                    (<H2 $textcolor={red}>ID {zeroPad(input,9)} is invalid</H2>)
                    : input.length === 0 ?
                    (<H3 $textcolor={yellow}>Type up to 8 digits to receive the control digit<br />or type 9 digits to validate the full ID</H3>)
                    : (
                    <>
                    <H3 $textcolor={yellow}>The control digit for {zeroPad(input,8)} is</H3>
                    <H2 $textcolor={blue}>{output}</H2>
                    </>
                    )}
                </ValidatorDiv>
            )
        }
        </>
    );
};

const ValidatorDiv = styled.div`
  min-height: 150px;  
`;

const H2 = styled.h2`
    color: ${(props) => props.$textcolor};
`;

const H3 = styled.h3`
    color: ${(props) => props.$textcolor};
`;

const blue = "Blue";
const red = "Red";
const green = "Green";
const yellow = "Yellow";
