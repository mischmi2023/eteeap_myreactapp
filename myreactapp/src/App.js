import './App.css';
import { useState } from "react"; //to create a state

function App() {
  const [textColor, setTextColor] = useState(true);

  return (
    <div className="App">
      <button
        onClick={() => {
          setTextColor("Green");
        }}
      >
        Change color
      </button>
      <h1 style={{ color: textColor }}> Hello World </h1>
    </div>
 );
}
export default App;
