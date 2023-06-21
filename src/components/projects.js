import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import level1Image from './pictures/level-1.png';
import transitApp from './pictures/Screenshot_20230621_123453.png';
import steamPriceCheck from './pictures/Screenshot_20230621_123613.png';
import Fade from 'react-reveal/Fade';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

const projectsData = [
    {
        id: 1,
        image: level1Image,
        title: 'Pogo Panic',
        description: 'This is a platformer/sidescroller where you have to reach the flag at the end in order to win. Built using Unity, C#, and GitHub',
    },
    {
        id: 2,
        image: transitApp,
        title: 'Machine Learning Model for King County Metro',
        description: 'This is the description of Project 2.',
    },
    {
        id: 3,
        image: steamPriceCheck,
        title: 'Project 3',
        description: 'This is the description of Project 3.',
    },
];
export default function Projects() {
    return (
      <div className="p-5 text-center d-flex justify-content-center align-items-center" style={{ width: '100%', margin: 'auto', height: '75vh', backgroundSize: 'cover', backgroundPosition: 'center center', position: 'relative' }}>

  
        <Fade bottom big>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
              {projectsData.map((project) => (
                <Grid item xs={12} sm={6} md={4} key={project.id}>
                  <Item style={{ width: '100%', height: '100%' }}>
                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '60%', objectFit: 'cover' }} />
                    <h3 style={{ height: '20%', overflow: 'hidden' }}>{project.title}</h3>
                    <p style={{ height: '20%', overflow: 'hidden' }}>{project.description}</p>
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Fade>
      </div>
    );
  }
  

