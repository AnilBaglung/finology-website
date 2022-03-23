import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Body2 from './components/Body2';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import GetinTouch from './components/GetinTouch';
import Scrollclient from './components/Scrollclient';

function App() {
  return (
    <>
    <Navbar/>
    <Scrollclient/>
    <Body2/>
    <GetinTouch/>
    <Contact/>
    <Footer/>
    <Copyright/>
    </>
  )
}

export default App;
