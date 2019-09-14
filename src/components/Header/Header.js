import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import { lightToggle } from '../../actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

function Header() {
  const dispatch = useDispatch();

      return (
        <Navbar bg="info" variant="dark" className="Navbar">
            <Link to='./' className="web-name">
               <Navbar.Brand href="/">Movie System</Navbar.Brand>
            </Link> 
            <Nav className="mr-auto" />
            <Form inline >
                <FormControl type="text" placeholder="Search Movie..." className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>
            <Navbar.Text className="login-user" >
              User : <a href="#login">Leo Hsu</a>
            </Navbar.Text>
            <EmojiObjectsIcon onClick={() => dispatch(lightToggle())} className="nav-icon-lighttoggle"/>
            <Link to='./'>
                <HomeIcon className="nav-icon-home"/>
            </Link>
        </Navbar>
      )
}

export default Header
