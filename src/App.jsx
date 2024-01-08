import { useEffect, useState } from 'react'
import {Helmet} from "react-helmet";

import IDinput from './IDinput.jsx'
import Validator from './Validator.jsx';
import { styled } from "styled-components";

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(0);
  const [heb, setHeb] = useState(true);

  const langSet = () => {
    document.querySelector("#lang-selector").value === "hebrew" ?
    setHeb(true) : 
    setHeb(false)
  }

  useEffect(()=>{
    langSet();
  }, [])

  return (
    <>
    <Helmet>
        <title>{`${heb ? "אימות מספר זהות" : "Israeli ID Validator"}`}</title>
    </Helmet>
    <AppDiv $heb={heb}>
        <LangSelector id="lang-selector" name="lang-selector" onClick={langSet}>
            <option value="hebrew">עברית</option>
            <option value="english">English</option>
        </LangSelector>
      <Heading>{heb ? "אימות מספר זהות" : "Israeli ID Validator"}</Heading>
      <IDinput heb={heb} input={input} setInput={setInput}/>
      <Validator heb={heb} input={input} output={output} setOutput={setOutput}/>
      <Credit>{heb ? "נבנה על ידי אור גולשטיין:" : "Created by Or Golshtein"} <a href="https://github.com/orgolshtein" target="_blank">github.com/orgolshtein</a></Credit>
    </AppDiv>
    </>
  )
}

const AppDiv = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  direction: ${props => props.$heb? "rtl" : "ltr"};  
  display: flex;
  flex-direction: column;
  min-width: 320px;
  min-height: 100vh;
`;

const LangSelector = styled.select`
    position: absolute;
    top: 0;
    right: 20px;
    margin: 30px;
    height: 30px;
    border-radius: 3px;
`

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
