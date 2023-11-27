import { useState } from 'react'

import IDinput from './IDinput.jsx'
import Validator from './Validator.jsx';
import { styled } from "styled-components";

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(0);

  return (
    <AppDiv>
      <h1>אימות מספר זהות</h1>
      <div>
        <IDinput input={input} setInput={setInput}/>
      </div>
      <div>
        <Validator input={input} output={output} setOutput={setOutput}/>
      </div>
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

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }
`
