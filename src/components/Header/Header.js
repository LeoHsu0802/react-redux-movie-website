import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeIcon from '@material-ui/icons/Home';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import './Header.css';
import { toggle } from '../../actions';
import { useDispatch } from 'react-redux';

function Header() {
  const dispatch = useDispatch();

      return (
        <Navbar bg="info" variant="dark" className="Navbar">
            <Navbar.Brand className="web-name" href="#home">Movie System</Navbar.Brand>
            <Nav className="mr-auto" />
            <Form inline >
              <FormControl type="text" placeholder="Search Movie..." className="mr-sm-2" />
              <Button variant="outline-light">Search</Button>
            </Form>
            <Navbar.Text className="login-user" >
              User : <a href="#login">Leo Hsu</a>
            </Navbar.Text>
            <EmojiObjectsIcon onClick={() => dispatch(toggle())} className="nav-icon-lighttoggle"/>
            <HomeIcon className="nav-icon-home"/>
        </Navbar>
      )
}

export default Header
