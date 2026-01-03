import './App.css';
import { useState } from "react"; //to create a state

function App() {
  const [showText, setShowText] = useState(true);

  return (
    <div className="App">
      <button 
        onClick={() => {
          // alert("Hey");
          setShowText(!showText)
        }}
      >
        {" "}
        Show/Hide{" "}
      </button>
      {showText === true && <h1> Hello World </h1>}
    </div>
 );
}
export default App;
