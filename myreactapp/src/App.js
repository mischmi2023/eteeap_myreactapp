import './App.css';

function App() {
 const users = [
  { name: "Bal", age: 21 },
  { name: "Gas", age: 25 },
  { name: "Mel", age: 29 },
 ];

 return (
  <div className="App">
    {users.map((user, key) => {
      return (
        <div>
          {user.name} {user.age}
          </div>
      );
    })}
    </div>
 );
}
export default App;
