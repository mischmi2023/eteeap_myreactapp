import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(0);
  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      console.log(res.data);
      setPredictedAge(res.data.age);
    });
  };

  return (
    <div className="App">
      <input 
        placeholder="Ex. Mike"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick ={fetchData}> Predict Age </button>
      <h3> Predict Age: {predictedAge} </h3>
    </div>
  );
}
export default App;