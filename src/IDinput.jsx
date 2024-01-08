export default function IDinput({ heb, input, setInput }){
    const update_input = (event) => {
        setInput(event.target.value);
      };
    
      return (
        <div>
            <input
              type="text"
              value={input}
              placeholder={heb? "הקלד/י מספר" : "Type digits"}
              maxLength={9}
              onChange={update_input}
            />
        </div>
      );
}
