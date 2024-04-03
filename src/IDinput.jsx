import styled from "styled-components";

export default function IDinput({ heb, input, setInput }){
    const update_input = (event) => {
        setInput(event.target.value);
      };
    
      return (
        <div>
            <Input
              type="text"
              value={input}
              placeholder={heb? "הקלד/י מספר" : "Type digits"}
              maxLength={9}
              onChange={update_input}
            />
        </div>
      );
};

const Input = styled.input`
  background-color: #6799b1;
  color: #ffffff;

  &::placeholder{
    color: #d7d7d7
  }
`
