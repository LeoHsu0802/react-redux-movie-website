import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './LeftMenu.css';
import { Link } from 'react-router-dom'
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import TheatersIcon from '@material-ui/icons/Theaters';

function LeftMenu(){
    return (
      <Menu>
        <Link to='./openingthisweek' className="menu-block">
          <MovieCreationIcon fontSize="large" className="icon" />
          <span className="menu-item">Opening This Week</span>
        </Link>
        <Link to='./nowplaying' className="menu-block">
          <MovieFilterIcon fontSize="large" className="icon" />
          <span className="menu-item">Now Playing</span>
        </Link>
        <Link to='./comingsoon' className="menu-block">
          <TheatersIcon fontSize="large" className="icon" />
          <span className="menu-item">Coming Soon</span>
        </Link>
      </Menu>
    )
  }

export default LeftMenu