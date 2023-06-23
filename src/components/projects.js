import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { GitHub } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%'
}));

export default function ResponsiveGrid() {
  return (
    <div style={{ paddingTop: '2%', paddingBottom: '5%' }}>

      <h1 className="p-5 text-center d-flex justify-content-center align-items-center">Projects I've worked on</h1>

      <Box sx={{ justifyContent: 'center', width: '60%', margin: '0 auto' }}>
        <Grid className='justify-content: center' container rowSpacing={{ xs: 1, sm: 2, md: 4 }} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
          <Grid item xs={6}>
            <Item>
              <h3>Machine Learning Model for King County Metro</h3>
              <p>Developed a machine learning model using Python and Scikit-learn to optimize transportation efficiency and improve service operations for King County Metro. By analyzing diverse data sources, including historical transportation data and weather data, the model accurately predicted demand, congestion, and optimized routes and schedules. The project showcased the power of machine learning and its potential in transforming transportation systems.
                <a href="https://jesusc14.github.io/Capstone_project/" target="_blank" rel="noopener noreferrer">
                  Website
                </a></p>
              <a href="https://github.com/jesusc14/analysis-" target="_blank" rel="noopener noreferrer">
                <GitHub />
              </a>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <h3>Game Price Track and Database App</h3>
              <p>Game Price Track and Database Discord Bot is a versatile bot built using Discord.py that tracks and monitors the prices of various games from different platforms. It incorporates APIs to fetch real-time game prices and stores them in a MongoDB database for easy access and analysis. The bot provides users with up-to-date game price information, allowing them to compare prices, track price changes, and make informed purchasing decisions. With its seamless integration with Discord and powerful database capabilities, the Game Price Track and Database Discord Bot offers a comprehensive solution for game price tracking and management.</p>
              <a href="https://github.com/jesusc14/discord_bot_steam_prices" target="_blank" rel="noopener noreferrer">
                <GitHub />
              </a>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <h3>Pogo Panic</h3>
              <p>Pogo Panic is a fast-paced game where players control a stick man on a pogo stick, constantly jumping to reach the win flag as quickly as possible. Navigating a hand-drawn map filled with ball enemies and precarious platforms, players must dodge obstacles and avoid falling off while striving for the fastest time. With its charming visuals and competitive leaderboard, Pogo Panic challenges players to master the art of jumping, anticipate enemy movements, and achieve the quickest completion time, offering an addictive and exhilarating platforming experience.
                <a href="https://thegortdragon.github.io/team-12-sp23-game/pogogame.html" target="_blank" rel="noopener noreferrer">
                  Game Link
                </a>
              </p>
              <a href="https://github.com/TheGortDragon/team-12-sp23-game" target="_blank" rel="noopener noreferrer">
                <GitHub />
              </a>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <h3>Discord Bot for Activity Recommendations</h3>
              <p>Built a versatile Discord bot using Discord.py to provide users with activity recommendations. Upon receiving the command "!bored", the bot makes API requests to the Bored API and retrieves a wide range of activity suggestions. The bot then formats the retrieved information, including the activity type, participants, price, and accessibility, into user-friendly messages. By offering diverse and engaging activity ideas, the bot aims to keep users entertained and inspired, encouraging them to explore new hobbies and experiences. With its seamless integration into the Discord platform, the Activity Recommendations Discord Bot enhances the community's leisure and social interactions.
              </p>
              <a href="https://github.com/jesusc14/discord_bot_league" target="_blank" rel="noopener noreferrer">
                <GitHub />
              </a>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div >
  );
}
