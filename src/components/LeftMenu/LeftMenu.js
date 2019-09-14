import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './left.css';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import TheatersIcon from '@material-ui/icons/Theaters';

export class LeftMenu extends Component{

  render () {
    return (
      <Menu>
        <div className="menu-block">
          <MovieCreationIcon fontSize="large" className="icon" />
          <a className="menu-item" href="/">Opening This Week</a>
        </div>
        <div className="menu-block">
          <MovieFilterIcon fontSize="large" className="icon" />
          <a className="menu-item" href="/about">Now Playing</a>
        </div>
        <div className="menu-block">
          <TheatersIcon fontSize="large" className="icon" />
          <a className="menu-item" href="/contact">Coming Soon</a>
        </div>
      </Menu>
    )
  }
}


export default LeftMenu