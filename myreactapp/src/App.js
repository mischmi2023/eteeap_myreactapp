import "./App.css";
import { Person } from "./components/Person";

function App() {
    return (
        <div className="App">
            <Person
                name="Mike"
                email="mis.chmi2023@gmail.com"
                age={41}
                isMarried={false}
                friends={["Karen", "Mabel", "Jerome", "Bianca", "Resty", "Meda"]}
            />
        </div>
    );
}
export default App;