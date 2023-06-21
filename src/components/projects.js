import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

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
        image: 'project1.jpg',
        title: 'Project 1',
        description: 'This is the description of Project 1.',
    },
    {
        id: 2,
        image: 'project2.jpg',
        title: 'Project 2',
        description: 'This is the description of Project 2.',
    },
    {
        id: 3,
        image: 'project3.jpg',
        title: 'Project 3',
        description: 'This is the description of Project 3.',
    },
];

export default function Projects() {
    return (
        <div className="p-5 text-center d-flex justify-content-center align-items-center" style={{
            width: '100%',
            margin: '5 auto',
            height: '50vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            position: 'relative',
        }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {projectsData.map((project) => (
                        <Grid xs={2} sm={4} md={4} key={project.id}>
                            <Item>
                                <img src={project.image} alt={project.title} style={{ width: '100%' }} />
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}