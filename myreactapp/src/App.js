import './App.css';
import { Planets } from './Planets';

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
    <div> {planets.map((planet, key) => {
      return <Planets planetName={planet.planetName} isRockPlanet={planet.isRockPlanet} />
    })}
  </div>
  <div>
    {planets.map((planet, key) => {
      return !planet.isRockPlanet && <h1> {planet.planetName} </h1>
    })}
  </div>
  </div>
 );
}
export default App;
