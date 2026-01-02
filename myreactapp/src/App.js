import './App.css';
import { User } from './User';

function App() {
 const planets = [
  { planetName: "Earth", isRockPlanet: true },
  { planetName: "Mars", isRockPlanet: true },
  { planetName: "Venus", isRockPlanet: true },
  { planetName: "Jupiter", isRockPlanet: false },
  { planetName: "Neptune", isRockPlanet: false },
  { planetName: "Uranus", isRockPlanet: false },
 ];

 return (
  <div className="App">
    {planets.map(
      (planet, key) => !planet.isRockPlanet && <h1> {planet.planetName} </h1>
    )}
    </div>
  );
}

export default App;
