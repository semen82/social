import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, Switch} from "react-router-dom";

function App(props) {
  const {dispatch} = props;
  const {dataDialog, profilePage, dataMessage} = props.state;

  return (
    <div className="App">
      <Header/>
      <div className="container">
        <NavBar/>
        <Switch>
          <Route exact path='/'
                 render={() => <Profile
                   posts={profilePage.posts}
                   dispatch={dispatch}
                   newPostText={profilePage.newPostText}/>}
          />

          <Route path='/dialogs'
                 render={() => <Dialogs
                   dataDialog={dataDialog}
                   dispatch={dispatch}
                   dataMessage={dataMessage}
                 />}
          />

          <Route path='/news'
                 render={() => <News/>}
          />

          <Route path='/music'
                 render={() => <Music/>}
          />

          <Route path='/settings'
                 render={() => <Settings/>}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
