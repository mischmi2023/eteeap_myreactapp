import logo from './logo.svg';
import './App.css';

function App() {
  const name = <h1> Mike </h1>
  const age = <h2> 41 </h2>
  const email = <h2> migz.dv8@gmail.com </h2>
  return (
    <div className="App">
     {name}
     {age}
     {email}
    </div>
  );
}

export default App;
