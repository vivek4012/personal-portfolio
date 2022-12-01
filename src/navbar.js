import './App.css';
import { Navbar, Nav,  Container } from 'react-bootstrap'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "./components/styles.css"
import { About } from './components/About';
import Skills from './components/Skills';
import Project from './components/project';
import  Education  from './components/education';
import Home from "./components/Home"
import Contact from "./components/contact"

import "./components/styles.css"

function App() {
  
  return (
    <BrowserRouter>
      <div className='zindex'>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect={true}>
          <Container fluid>
            <Navbar.Brand style={{marginLeft:"1.1rem", marginBottom:"8px"}}>Vivek</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className=' navbar-collapse' >
              <Nav variant="pills" defaultActiveKey="link-6" >
                <Nav.Item>
                  <Nav.Link eventKey="link-6" as={Link} to="/" className="navbar__link">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1" as={Link} to="/about" className="navbar__link">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2" as={Link} to="/skills" className="navbar__link"> Skills</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-3" as={Link} to="/Project" className="navbar__link" > Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-4" as={Link} to="/education" className="navbar__link"> Timeline</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-5" as={Link} to="/contact" className="navbar__link">Contact</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
