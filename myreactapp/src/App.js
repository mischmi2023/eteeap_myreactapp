import "./App.css";
import { useToggle } from "./useToggle";

function App() {
  const { state, toggle } = useToggle(); // another example of returning an object
  return (
    <div className="App">
      <button onClick={toggle}>{state ? "Hide" : "Show"}</button>
      {state && <h1> Hidden Text </h1>}
    </div>
  );
}
export default App;