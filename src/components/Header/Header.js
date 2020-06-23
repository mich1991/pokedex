import React from 'react'
import './Header.scss'
import { Navbar, Nav } from 'react-bootstrap'
const Header = (props) => {
    return (
        <Navbar style={{ width: '100%' }} bg='dark' className='header'  >
            <Navbar.Brand>Logo</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav.Link data-limit={151} data-offset={0} onClick={props.click}>Gen 1</Nav.Link>
                <Nav.Link data-limit={100} data-offset={151} onClick={props.click}>Gen 2</Nav.Link>
                <Nav.Link data-limit={135} data-offset={251} onClick={props.click}>Gen 3</Nav.Link>
                <Nav.Link data-limit={107} data-offset={386} onClick={props.click}>Gen 4</Nav.Link>
                <Nav.Link data-limit={156} data-offset={493} onClick={props.click}>Gen 5</Nav.Link>
                <Nav.Link data-limit={72} data-offset={649} onClick={props.click} >Gen 6</Nav.Link>
                <Nav.Link data-limit={88} data-offset={721} onClick={props.click} >Gen 7</Nav.Link>
                <Nav.Link data-limit={87} data-offset={809} onClick={props.click} >Gen 8</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}


export default Header;