import './App.css';
import { useState } from "react"; //to create a state

function App() {
  const [textColor, setTextColor] = useState(true);

  return (
    <div className="App">
      <button
        className="glass-button"
        onClick={() => {
          setTextColor(textColor === "white" ? "cyan" : "white");
        }}
      >
        Change color
      </button>
      <h1 style={{ color: textColor }}> Hello World </h1>
    </div>
 );
}
export default App;
