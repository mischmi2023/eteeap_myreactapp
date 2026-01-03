import './App.css';
import { useState } from "react"; //to create a state

function App() {
 //let numbr = 0;
 const [numbr, setNumbr] = useState(1); // creating an initial state for numbr 0.
 const increaseNumbr = () => {
  // age = age + 1;
  // console.log(age);
  setNumbr(numbr + 1); //react will rerender the whole UI to increase the number.
 };
 return (
  <div className="App">
    {numbr}
    <button onClick={increaseNumbr}> Increase Number </button>
  </div>
 );
}
export default App;
