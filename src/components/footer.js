import React from 'react';
import { CFooter, CLink } from '@coreui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <CFooter className="d-flex flex-row justify-content-center align-items-center list-unstyled bg-dark">
            <div className="d-flex justify-content-center align-items-center">
                <CLink href="https://www.linkedin.com/" target="_blank" className="mx-2">
                    <FaLinkedin style={{ color: 'white' }} />
                </CLink>
                <CLink href="https://github.com/" target="_blank" className="mx-2">
                    <FaGithub style={{ color: 'white' }} />
                </CLink>
            </div>
        </CFooter>
    );
};

export default Footer;
