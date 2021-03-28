import React from 'react';
import state from './Redux/state';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogues from './components/Dialogues/Dialogues';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';


function App(props) {

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Nav />
        
        <div className="content_wrapper">
          <Route
            path='/dialogues'
            render={ () => 
              <Dialogues
                conversationsList={state.dialoguesPage.conversationsList}
                messagesList={state.dialoguesPage.messagesList}
              /> 
            }
          />
          <Route
            path='/profile'
            render={
              () => <Profile postsList={state.ProfilePage.postsList} />
            }
          />
          <Route
            path='/news'
            render={
              () => <News a="2" b="3" />
            } 
          />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      
      
      </div>
    </BrowserRouter>
    
  );
}

export default App;
