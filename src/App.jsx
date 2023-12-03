import { useState } from 'react'

import IDinput from './IDinput.jsx'
import Validator from './Validator.jsx';
import { styled } from "styled-components";

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(0);

  return (
    <AppDiv>
      <Heading>אימות מספר זהות</Heading>
      <IDinput input={input} setInput={setInput}/>
      <Validator input={input} output={output} setOutput={setOutput}/>
      <Credit>נבנה על ידי אור גולשטיין: <a href="https://github.com/orgolshtein" target="_blank">github.com/orgolshtein</a></Credit>
    </AppDiv>
  )
}

const AppDiv = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  direction: rtl;  
  display: flex;
  flex-direction: column;
  min-width: 320px;
  min-height: 100vh;
`;

const Heading = styled.h1`
  font-size: 3.2em;
  line-height: 1.1;
`;

const Credit = styled.div`
  font-size: 90%;
    a{
      color: #ffffff;
    }  
`;
