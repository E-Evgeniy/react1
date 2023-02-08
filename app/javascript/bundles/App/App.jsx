import React from 'react';
import './App.scss'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
       <div className='app-wrapper'>
        < Header />
        < Navbar />
        <div class='app-wrapper-content'>
          < Route component={Dialogs} />
          < Route component={Profile} />
        </div>
      </div>
     
    )
  }
}
