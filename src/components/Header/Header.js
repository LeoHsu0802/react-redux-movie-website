import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SearchIcon from '@material-ui/icons/Search';
import { Navbar, Nav, FormControl } from 'react-bootstrap';
import { lightToggle, searchMovie } from '../../actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function Header() {
  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin)

      return (
        <Navbar bg="info" variant="dark" className="Navbar">
            <Link to='./' className="web-name">
               <Navbar.Brand href="/">Movie System</Navbar.Brand>
            </Link> 
            <Nav className="mr-auto" />
                <SearchIcon  className="nav-icon-search" fontSize="large" />
                <FormControl 
                type="text" 
                placeholder="Search Movie..." 
                className="mr-sm-1" 
                onChange={(e) => dispatch(searchMovie(e.target.value))}
                />
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
