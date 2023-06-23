import React from 'react';
import Fade from 'react-reveal/Fade';
import FadeIn from 'react-fade-in/lib/FadeIn';
import backgroundImage from './pictures/pexels-davis-arenas-11689122.jpg';

export default function HeroSection() {
    return (
        <header>
            <div
                className="p-5 text-center d-flex justify-content-center align-items-center"
                style={{
                    width: '100%',
                    margin: '5 auto',
                    height: '100vh', // Adjust the height to fill the viewport
                    backgroundImage: `url(${backgroundImage})`, // Use the imported image here
                    backgroundSize: 'cover', // Make the image cover the container
                    backgroundPosition: 'center center', // Center the image horizontally and vertically
                    position: 'relative', // Add position relative for the parent div
                }}
            >
                <div
                    className="mask"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    }}
                ></div>

                <div
                    className="text-white"
                    style={{
                        zIndex: 1,
                        maxWidth: '40%',
                        width: '100%',
                        margin: '0 auto',
                    }}
                >
                    <h1 style={{ color: 'white' }}>Hi 👋 I'm Jesus Celestino </h1>
                    <h3 style={{ color: 'white' }}>
                        I am an aspiring Software Developer who recently graduated from the University of Washington. I am passionate about launching my career as a software engineer and I am thrilled to showcase my skills, projects, and eagerness to contribute to an innovative team.
                    </h3>
                </div>
            </div>
        </header>
    );
}
