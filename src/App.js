import React from 'react';
import Login from './components/Login/Login'
import Header from './components/Header/Header';
import LeftMenu from './components/LeftMenu/LeftMenu';
import Comingsoon from './components/Body/Comingsoom';
import Nowplaying from './components/Body/Nowplaying';
import Openingthisweek from './components/Body/Openingthisweek';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
        <div className="App">
            <Login />
            <Header />
            <LeftMenu />
            <Switch>
                <Route exact path='/' component={Openingthisweek} />
                <Route exact path='/nowplaying' component={Nowplaying} />
                <Route exact path='/comingsoon' component={Comingsoon} />
                <Route exact path='/openingthisweek' component={Openingthisweek} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;
