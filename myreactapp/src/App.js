import "./App.css";
import Axios from 'axios';
import { useState } from "react";

// This will generate a finite CatFacts.
function App(){
  const [catFact, setCatFact] = useState("");

  Axios.get("https://catfact.ninja/fact").then((res) => {
    setCatFact(res.data.fact);
  });
  return (
    <div className="App">
      <button> Generate Cat Fact </button>
      <p>{catFact}</p>
    </div>
  );
}
export default App;