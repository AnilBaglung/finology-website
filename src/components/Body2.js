import React from 'react';
import './Body2.css';
import img from './static/2.png';
import imge from './static/3.png';
import imgee from './static/4.png';
import Apiservice from './Apiservice.js';

const body2 = () => {
  return (
    <>
    <div className='my-body'>
      <div className='row-1'>
        <div className='vertical-line'>
        </div>
        <h2>MARKETPLACES</h2>
      </div>


      <div className='row-2'>
        <div className='column-2'>
          <img src={img}></img>
          <div className='column-text' id='loanstreet'>
            <h2>Loanstreet</h2>
            <p>A popular Malaysian personal finance website and product aggregator. Contains comprehensive banking and insurance product information delivered in a way that is easy for users to understand.</p>
            <a href='#'>Learn More</a>
          </div>
        </div>

        <div className='column-2'>
          <div className='column-text' id='loanplus'>
            <h2>Loanplus</h2>
            <p>A widely used mortgage pre-approval and tracking platform for property developers. Provides access to 17 lenders from a single platform.</p>
            <a href='#'>Learn More</a>
          </div>
          <img src={imge}></img>
          
        </div>
      </div>

    </div>
    <Apiservice/>


    <div className='my-body'>
      <div className='row-1'>
        <div className='vertical-line'>
        </div>
        <h2>ENTERPRISE TECHNOLOGIES</h2>
      </div>

      <div className='row-2'>
        <div className='column-2'>
          <img src={imgee}></img>
          <div className='column-text' id='xpresscover'>
            <h2>XpressCover</h2>
            <p>Digital Insurance Platform that enables rapid end-to-end flow setup, dynamic risk ratings, and digital product distribution on any channel.</p>
            <a href='#'>Learn More</a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
  }

export default body2