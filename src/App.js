import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogues from './components/Dialogues/Dialogues';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';


function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Nav />
        
        <div className="content_wrapper">
          <Route path='/dialogues' component={Dialogues} />
          <Route path='/profile' component={Profile} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      
      
      </div>
    </BrowserRouter>
    
  );
}

export default App;
