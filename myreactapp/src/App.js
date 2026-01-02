import './App.css';

function App() {
  const names = ["Madz", "Rap", "Sean", "Edel", "Pol", "Jeus", "Joms"]



  return <div className="App">
   {names.map((name, key) => { 
    return <h1> {name} </h1>
   })}
    </div>;
}
export default App;
