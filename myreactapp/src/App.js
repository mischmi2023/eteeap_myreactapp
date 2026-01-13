import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import { Navbar } from "./Navbar";

function App() {
  return (
    <div className="App">
      <Router> 
        <div>
          <Link to="/"> Home </Link>
          <Link to="/Menu"> Menu </Link>
          <Link to="/Contact"> Contact </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="Menu" element={<Menu />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<h1>Page not Found!</h1>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;