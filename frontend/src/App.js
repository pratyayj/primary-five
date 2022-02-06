import './App.css';
import Canvas from './Canvas';
import InConstruction from './InConstruction';
import Home from './Home';
import TechStack from './TechStack';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="lll">
          <Container>
            <Navbar.Brand href="/">primary five</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/canvas/piet-x-riley">canvas</Nav.Link>
                <Nav.Link href="/stage">stage</Nav.Link>
                <Nav.Link href="/playground">playground</Nav.Link>
              </Nav>
              <Nav className="justify-content-end">
              <Nav.Link href="/tech-stack">tech stack</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/canvas/piet-x-riley" element={<Canvas />} />
          <Route path="/" element={<Home />} />
          <Route path="/playground" element={<InConstruction />} />
          <Route path="/stage" element={<InConstruction />} />
          <Route path="/tech-stack" element={<TechStack />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
