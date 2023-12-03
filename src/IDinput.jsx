export default function IDinput({ input, setInput }){
    const update_input = (event) => {
        setInput(event.target.value);
      };
    
      return (
        <div>
            <input
              type="text"
              value={input}
              placeholder="הקלד/י מספר"
              maxLength={9}
              onChange={update_input}
            />
        </div>
      );
}
