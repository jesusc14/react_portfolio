import React from 'react';
import { CFooter, CLink } from '@coreui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <CFooter className="d-flex flex-row justify-content-center align-items-center list-unstyled bg-dark">
            <div className="d-flex align-items-center mx-2">
                <CLink href="https://www.linkedin.com/in/jesus-e-celestino/" target="_blank" className="mx-2">
                    <FaLinkedin style={{ color: 'white', fontSize: '24px' }} />
                </CLink>
                <CLink href="https://github.com/jesusc14" target="_blank" className="mx-2">
                    <FaGithub style={{ color: 'white', fontSize: '24px' }} />
                </CLink>
            </div>
            <p style={{ color: 'white', fontSize: '10px', margin: '0' }}>Created by Jesus Celestino</p>
        </CFooter>
    );
};


export default Footer;
