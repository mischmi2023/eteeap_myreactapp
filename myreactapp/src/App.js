import logo from './logo.svg';
import './App.css';

function App() {
  const name = <h1> Mike </h1>
  const age = <h2> 41 </h2>
  const email = <h2> migz.dv8@gmail.com </h2>
  const user = (div>
     {name}
     {age}
     {email}
    </div>
  );
  return (
    <div className="App">
      {user}
      {user}
      {user}  
    </div>

    
  );
}

export default App;
