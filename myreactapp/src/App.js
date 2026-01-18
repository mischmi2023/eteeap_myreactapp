import "./App.css";
import { Person } from "./components/Person";

function App() {
  return (
    <div className="App"> 
      <Person
        name={9}
        email="mis.chmi2023@gmail.com"
        age={41}
        isMarried={true}
        friends={["Karen", "Mabel", "Jerome", "Bianca", "Resty", "Meda"]}
      /> 
    </div>
  );
}
export default App;