import './App.css';

function App() {
  return (
    <div className="App">
      <User name ="Bal" age={25} email="bal@tup.edu.ph" />
      <User name ="Gas" age={18} email="gas@tup.edu.ph" />
      <User name ="Mel" age={69} email="mel@tup.edu.ph" />
    </div>
  );
}

  const User = (props) => {
    return (
    <div>
      <h1> {props.name} </h1>
      <h2> {props.age} </h2>
      <h2> {props.email} </h2>
    </div>

);

}
   

export default App;
