import React from 'react';
import imgee from './static/5.png';
import imag from './static/6.png'
import './Apiservice.css';

const Apiservice = () => {
  return (
    <>
        <div className='my-body'>
            <div className='row-1'>
                <div className='vertical-line'>
                </div>
                <h2>API SERVICES</h2>
            </div>
            <div className='row-2'>
                <div className='column-2'>
                    <div className='column-text' id='credit'>
                        <img src={imgee}></img>
                        <h2>Credit APIs</h2>
                        <p>Unlock the power of loan approvals within your own CRM / App. Our plugins enable credit checks, loan pre-approvals, and access to a wide range of banks.</p>
                        <a href='#'>Learn More</a>
                    </div>
                    <div className='column-text' id='insurence'>
                        <img src={imag}></img>
                        <h2>Insurance APIs</h2>
                        <p>Sell insurance straight from any platform. Start selling various products underwritten by leading insurers in Malaysia with our plugins.</p>
                        <a href='#'>Learn More</a>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
)
}

export default Apiservice