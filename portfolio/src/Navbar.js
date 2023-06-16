import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="navbar-wrapper">
                    <div
                        role="button"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="name"
                        tabIndex={0}
                    >
                    </div>
                    <div className="links-wrapper">
                        <Link to="work" smooth={true} duration={500}>
                        </Link>
                        <Link to="about" smooth={true} duration={500}>
                        </Link>
                        <Link to="contact" smooth={true} duration={500}>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;