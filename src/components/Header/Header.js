import React from 'react'
import './Header.scss'
import { Navbar, Nav } from 'react-bootstrap'
const Header = () => {
    return (
        <Navbar style={{ width: '100%' }} bg='dark'  >
            <Navbar.Brand>Logo</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav.Link>Gen 1</Nav.Link>
                <Nav.Link>Gen 2</Nav.Link>
                <Nav.Link>Gen 3</Nav.Link>
                <Nav.Link>Gen 4</Nav.Link>
                <Nav.Link>Gen 5</Nav.Link>
                <Nav.Link>Gen 6</Nav.Link>
                <Nav.Link>Gen 7</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}


export default Header;