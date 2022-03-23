import React,{useState} from 'react';
import "./Contact.css";
import Thanks from './Thanks';

 
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [message, setMessage] = useState('');
  const data = {'fullname':name,'email':email,'phonenumber':phonenumber,'message':message};
  
  let sendData = ()=> {
    fetch('http://127.0.0.1:8000/contact/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(data)
    }).then(resp=>resp.json())
    .then(error=>console.log(error))
    .then(setName(''),setEmail(''),setPhonenumber(''),setMessage(''))
    .then(alert('thanks for the message'))
    

  
  };

  return (
    <>  
    <div className='Contact-page'>
        <section className='contact-us'>
          <form id='contact'>
            <input type='text' name='full_name' id='fullname' placeholder='Your Name' value= {name}  onChange={e=>setName(e.target.value)} ></input>
            <input type='email' name='email' id='email' placeholder='Your email'value= {email}  onChange={e=>setEmail(e.target.value)}></input>
            <input type='number' name='phone' id='phonenumber' placeholder='Your Mobile Number'value= {phonenumber}  onChange={e=>setPhonenumber(e.target.value)}></input>
            <textarea id='message' placeholder='Write your message' rows={10} value= {message}  onChange={e=>setMessage(e.target.value)}></textarea><br></br>
            <button className='button-btn' onClick={sendData}>Submit</button>
          </form>
        </section>
    </div>

    </>
  )
}

export default Contact