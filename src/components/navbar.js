import React, { useState } from 'react';
import {
    CNavbar,
    CContainer,
    CNavbarBrand,
    CNavbarToggler,
    CCollapse,
    CNavbarNav,
    CNavItem,
    CNavLink,
    CDropdown,
    CDropdownToggle,
    CDropdownMenu,
    CDropdownItem,
    CForm,
    CFormInput,
    CButton
} from '@coreui/react';

const Navbar = () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <CNavbar expand="lg" colorScheme="dark" className="bg-dark" data-coreui-spy="scroll">
                <CContainer fluid>
                    <CNavbarToggler onClick={() => setVisible(!visible)} />
                    <CCollapse className="navbar-collapse" visible={visible}>
                        <CNavbarNav className="mx-auto"> {/* Add mx-auto class for center alignment */}
                            <CNavItem>
                                <CNavLink href="#" style={{fontSize: '20px'}}>
                                    About me
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink href="#" style={{fontSize: '20px'}}>Projects</CNavLink>
                            </CNavItem>
                        </CNavbarNav>
                    </CCollapse>
                </CContainer>
            </CNavbar>
        </>
    );
};

export default Navbar;