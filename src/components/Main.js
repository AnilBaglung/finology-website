import React from 'react'
import './Main.css'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Main = () => {
  const scrollToBottom = ()=>{
    scroll.scrollToBottom();
  }
  return (
    <>
        <div className='main-text'>
          <h1>Simplifying Lending <br></br>& Insurance</h1>
          <p>Making access to financial products<br></br> seamless for everyone.</p>

        </div>
        <div className='scrollbutton'>
        <i className="fa-solid fa-down-long" id='scrollbtn' onClick={scrollToBottom}></i>
        </div>
    </>
  )
}

export default Main