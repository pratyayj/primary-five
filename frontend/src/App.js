import './App.css';
import Canvas from './Canvas';
import Home from './Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/canvas/piet-x-riley">Piet x Riley</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/canvas/piet-x-riley" element={<Canvas/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
