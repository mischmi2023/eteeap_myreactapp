import "./App.css";
import { Text } from "./Text.js";
import { useState, useEffect } from "react";

function App() {
  const [showText, setShowText] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
       Show/Hide Text 
      </button>

      {showText && <Text />}
    </div>
  );
}
export default App;