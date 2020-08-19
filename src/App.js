import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, Switch } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <NavBar />
        <Switch>
          <Route path="/profile" component={ProfileContainer} />

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
