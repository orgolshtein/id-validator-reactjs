import { useEffect, useRef, useState } from "react"
import { Helmet } from "react-helmet";
import { styled, keyframes } from "styled-components";

import IDinput from "./IDinput.jsx"
import Validator from "./Validator.jsx";
import reactLogo from "../images/react-logo.png";

const App = () => {
  const [mainTexts, setMainTexts] = useState({
    title: "אימות מספר זהות",
    footer: "נבנה על ידי אור גולשטיין:"
  })
  const [input, setInput] = useState("");
  const [heb, setHeb] = useState(true);
  const langSelect = useRef(null);

  const langSet = () => {
    if (langSelect.current.value === "hebrew") {
      setHeb(true);
      setMainTexts({
        title: "אימות מספר זהות",
        footer: "נבנה על ידי אור גולשטיין:"
      })
    } else {
      setHeb(false)
      setMainTexts({
        title: "Israeli ID Validator",
        footer: "Created by Or Golshtein:"
      })
    }
  };

  const riseAndShine = async () => {
    const urls = ["https://histl.onrender.com", "https://redrossent.onrender.com"];
    urls.forEach(async (url, i)=>{
        console.log(`Called server ${i+1}`)
        await fetch(url);
    })
  };

  useEffect(()=>{
    langSet();
    riseAndShine();
  }, [])

  return (
    <>
    <Helmet>
        <title>{`${mainTexts.title} | React`}</title>
    </Helmet>
    <AppDiv $heb={heb}>
      <LangSelector ref={langSelect} id="lang-selector" name="lang-selector" onChange={langSet}>
          <option value="hebrew">עברית</option>
          <option value="english">English</option>
      </LangSelector>
      <Heading>{mainTexts.title}</Heading>
      <IDinput heb={heb} input={input} setInput={setInput}/>
      <Validator heb={heb} input={input}/>
      <Credit>
        <p>{mainTexts.footer} <a 
          href="https://github.com/orgolshtein" 
          target="_blank">github.com/orgolshtein
        </a></p>
        <p><img src={reactLogo} alt="logo" /></p>
      </Credit>
    </AppDiv>
    </>
  )
};

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

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
    background-color: #6799b1;
    color: #ffffff;
`

const Heading = styled.h1`
  font-size: 3.2em;
  line-height: 1.1;
  text-shadow: #000000 1px 0 3px;
`;

const Credit = styled.div`
  font-size: 90%;
  text-shadow: #000000 1px 0 3px;
    
    a {
      color: #ffffff;
    } 
    
    img {
      width: 40px;
      animation: ${spin} 5s linear infinite;
    }
`;

export default App;
