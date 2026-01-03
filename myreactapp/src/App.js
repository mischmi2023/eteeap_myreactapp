import './App.css';
import { useState } from "react"; //to create a state

function App() {
const [count, setCount] = useState(0);

const increase = () => {
  setCount(count + 1);
}

const decrease = () => {
  setCount(count - 1);
}

const setToZero = () => {
  setCount(0);
}

return (
  <div className="App">
    <button className="glass-button" onClick={increase}> Increase </button>
    <button className="glass-button" onClick={decrease}> Decrease </button>
    <button className="glass-button" onClick={setToZero}> Set to Zero </button>
    <h1> {count} </h1>
  </div>
 );
}
export default App;
