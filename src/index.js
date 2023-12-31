import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/footer.js';
import { Button } from "@mui/material";
import '@coreui/coreui/dist/css/coreui.min.css';
import Navbar from './components/navbar.js';
import HeroImage from './components/hero.js';
import Projects from './components/projects.js'
import Fade from 'react-reveal/Fade';
import ContactForm from './components/contactme.js';

const App = () => {
  return (
    <main className="text-gray-400 bg-gray-900 body-font" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header>
        {/* <Navbar /> */}
      </header>
      <main style={{ flex: 1 }}>
        <HeroImage />
        <Fade bottom big>
        </Fade>
        <Projects />
        <ContactForm/>
      </main>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
