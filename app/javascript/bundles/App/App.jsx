import React from 'react';
import './App.scss'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

export default class App extends React.Component {
  render() {
    return (
      <div className='app-wrapper'>
        < Header />
        < Navbar />
        < Profile />
      </div>
            
    )
  }
}
