import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@mui/material';
import ButtonAppBar from './ButtonAppBar';
import AutoGrid from './AutoGrid';
import Navbar from './Navbar';
import Work from "./Work.js"
import FadeExample from './Fade';
import { Grid } from '@mui/material';
import Item from './Item';
import JobsGrid from './JobsGrid';


function App() {
  const element = "h1"; // Element type can be dynamically changed
  const text = "This text will fade in from the left.";

  return (
    <Router>
      <Box sx={{ padding: '20px 0' }}>
        {/* Add padding around the entire content */}
        <ButtonAppBar />
        <Navbar />
        <Box sx={{ paddingTop: '20px' }}> {/* Add padding-top */}
          <div id="home-section">
            <AutoGrid>
              <FadeExample element={element} text={text} />
              {/* <script> */}
              text = "caca poop";
              {/* </script> */}
              <FadeExample element={element} text={text} />
            </AutoGrid>
          </div>
        </Box>
        <Box sx={{ marginTop: '40px' }}>
          <div id="projects-section">{/* Projects section content */}</div>
          <div id="about-me-section">{/* About Me section content */}</div>
          <JobsGrid>{/* Children components inside the JobsGrid */}</JobsGrid>
        </Box>
      </Box>
    </Router>
  );
}

export default App;