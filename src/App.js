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

  const conversationsList = [
    {
      id: 1,
      name: 'Olga',
    },

    {
      id: 2,
      name: 'Andrey',
    },

    {
      id: 3,
      name: 'Gena',
    },

    {
      id: 4,
      name: 'Ilya',
    },

    {
      id: 5,
      name: 'Victor',
    },

  ];

  const messagesList = [
    {
      id: 1,
      message: 'Hi! How are you?',
    },

    {
      id: 2,
      message: 'Nice weather today!',
    },

    {
      id: 3,
      message: 'Might and Magic',
    },

    {
      id: 4,
      message: 'yo',
    },

    {
      id: 5,
      message: 'me gusto',
    },

  ];

  const postsList = [
    {
      id: 1,
      post: 'Hello world!',
      likesCount: 15,
    },

    {
      id: 2,
      post: 'Feel the power of the youth!',
      likesCount: 32,
    },

    {
      id: 3,
      post: 'Dabu-di-dabu-dai',
      likesCount: 10,
    },

  ];

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Nav />
        
        <div className="content_wrapper">
          <Route
            path='/dialogues'
            render={
              () => <Dialogues conversationsList={conversationsList} messagesList={messagesList} /> 
            }
          />
          <Route
            path='/profile'
            render={
              () => <Profile postsList={postsList} />
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
