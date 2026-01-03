import './App.css';
import { useState } from "react"; //to create a state

function App() {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
};
return (
  <div className="App">
    <div className = "inpt">
     <input type="text" onChange={handleInputChange} />
    </div>
    <div className = "mirror">
     {inputValue}
  </div>

  </div>
 );
}
export default App;
