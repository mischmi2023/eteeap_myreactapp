import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null); // replaced 0 by null
  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      console.log(res.data);
      setPredictedAge(res.data); // remove .age toget all data objects
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
      <button onClick={fetchData}> Predict Age </button>
      <h3> Name: {predictedAge?.name} </h3>
      <h3> Predicted Age: {predictedAge?.age} </h3>
      <h3> Count: {predictedAge?.count} </h3>
    </div>
  );
}
export default App;