import React from 'react';
import './App.css';

import HeaderContainer from './components/Header/HeaderContainer';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, Switch } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <div className="container">
        <NavBar />
        <Switch>
          <Route path="/login" component={Login} />

          <Route path="/profile/:userId?" component={ProfileContainer} />

          <Route path="/dialogs" component={DialogsContainer} />

          <Route path="/news" render={() => <News />} />

          <Route path="/music" render={() => <Music />} />

          <Route path="/users" component={UsersContainer} />

          <Route path="/settings" render={() => <Settings />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
