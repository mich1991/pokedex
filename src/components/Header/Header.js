import React from 'react'
import './Header.scss'
import { Navbar, Nav } from 'react-bootstrap'
import Logo from '../../logo.png'
const Header = (props) => {
    return (
        <Navbar style={{ width: '100%' }} bg='dark' className='header '  >
            <Navbar.Brand><img
                src={Logo}
                alt='LOGO'
                width="50"
                height="50"
                className="d-inline-block align-top"
            /></Navbar.Brand>
            <Nav.Link className='border-right border-left text-danger' data-limit={151} data-offset={0} onClick={props.click}>Gen 1</Nav.Link>
            <Nav.Link className='border-right text-danger' data-limit={100} data-offset={151} onClick={props.click}>Gen 2</Nav.Link>
            <Nav.Link className='border-right text-danger' data-limit={135} data-offset={251} onClick={props.click}>Gen 3</Nav.Link>
            <Nav.Link className='border-right text-danger' data-limit={107} data-offset={386} onClick={props.click}>Gen 4</Nav.Link>
            <Nav.Link className='border-right text-danger' data-limit={156} data-offset={493} onClick={props.click}>Gen 5</Nav.Link>
            <Nav.Link className='border-right text-danger' data-limit={72} data-offset={649} onClick={props.click} >Gen 6</Nav.Link>
            <Nav.Link className='border-right text-danger' data-limit={88} data-offset={721} onClick={props.click} >Gen 7</Nav.Link>
            <Nav.Link className='text-danger' data-limit={87} data-offset={809} onClick={props.click} >Gen 8</Nav.Link>
        </Navbar>
    );
}


export default Header;