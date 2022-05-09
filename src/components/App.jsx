import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <nav
            style={{
              borderBottom: 'solid 1px',
              paddingBottom: '1rem',
            }}
          >
            <ul id="navigation">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
