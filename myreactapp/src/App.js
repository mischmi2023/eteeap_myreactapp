import './App.css';

function App() {
  
  const age = 15;

  if (age >= 18) {
    return <h1> Over Age </h1>;
  }
  else {
    return <div className="App">
      <h1> Under Age </h1>
      </div>
  }
}
export default App;
