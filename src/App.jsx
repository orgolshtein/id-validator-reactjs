import { useState } from 'react'
import IDinput from './IDinput.jsx'
import Validator from './Validator.jsx';
import { styled } from "styled-components";
import './App.css'

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(0);

  return (
    <div>
      <h1>אימות מספר זהות</h1>
      <div>
        <IDinput input={input} setInput={setInput}/>
      </div>
      <div>
        <Validator input={input} output={output} setOutput={setOutput}/>
      </div>
    </div>
  )
}

const AppDiv = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  direction: rtl;  
`
