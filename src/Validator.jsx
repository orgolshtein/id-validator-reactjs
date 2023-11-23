import { useEffect } from "react";
import { styled } from "styled-components";

export default function Validator({input, output, setOutput}){
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
        <div>
            {isNaN(Number(input))=== true ?
            (<H3 textcolor={red}>יש להקליד מספרים בלבד</H3>)
            : input.length === 9 && (output+sum) % 10 === 0 ?
            (<H2 textcolor={green}>מספר הזהות {zeroPad(input,9)} תקין</H2>)
            : input.length === 9 && (output+sum) % 10 !== 0 ?
            (<H2 textcolor={red}>מספר הזהות {zeroPad(input,9)} לא תקין</H2>)
            : input.length === 0 ?
            (<H3 textcolor={yellow}>הקלד ספרות כדי לקבל את ספרת הביקורת</H3>)
            : (
            <>
            <H3 textcolor={yellow}>ספרת הביקורת עבור {zeroPad(input,8)} היא</H3>
            <H2 textcolor={blue}>{output}</H2>
            </>
            )}
        </div>
    );
};

const blue = "Blue";
const red = "Red";
const green = "Green";
const yellow = "Yellow";

const H2 = styled.h2`
    color: ${(props) => props.textcolor};
`;

const H3 = styled.h3`
    color: ${(props) => props.textcolor};
`;

