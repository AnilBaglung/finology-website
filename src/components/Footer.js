import React from 'react'
import './Footer.css'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const footer = () => {
    const scrollToTop =()=>{
     scroll.scrollToTop() ; 
    }
    const scrollTo =()=>{
        if (window.innerWidth > 800){
        scroll.scrollTo(1200)}
        else{
        scroll.scrollTo(2500)
        }
    };
  return (
    <>
    <section className='footer-section'>
        <div className='footer-nav'>
            <div className='row-footer-nav'>
                <div className='column-nav'>
                    <h3 className='nav'>About Us</h3>
                    <ul>
                        <li ><a href='#'>Overview</a></li>
                        <li><a href='#'>Our People</a></li>
                        <li><a href='#'>Newsroom</a></li>
                    </ul>
                </div>
                <div className='column-nav'>
                    <h3 className='nav'>Marketplaces</h3>
                    <ul>
                        <li><a onClick={scrollTo}>Loanstreet</a></li>
                        <li><a onClick={scrollTo(1500)}>Loanplus</a></li>
                
                    </ul>
                </div>
                <div className='column-nav'>
                    <h3 className='nav'>API Services</h3>
                    <ul>
                        <li><a href='/credit'>Credit APIs</a></li>
                        <li><a href='/insurence'>Insurence APIs</a></li>
                
                    </ul>
                </div>
                <div className='column-nav'>
                    <h3 className='nav'><a href='technologies'></a>Technologies</h3>
                    <ul>
                        <li><a href="/xpresscover">XpressCover</a></li>
                
                    </ul>
                </div>
                <div className='column-nav'>
                    <h3 className='nav'>Otherwebsites</h3>
                    <ul>
                        <li><a href='#'>www.loanstreet.com.my</a></li>
                        <li><a href='#'>www.loanplus.com.my</a></li>
                        <li><a href='#'>www.xpresscover.io</a></li>
                
                    </ul>
                </div>

            </div>
            <div className='scrollbutton'>
            <i className="fa-solid fa-arrow-up-long" id='scrollbtn' onClick={scrollToTop}  duration ={1000}></i>
            </div>
        </div>
    </section>

    </>
  )
}

export default footer