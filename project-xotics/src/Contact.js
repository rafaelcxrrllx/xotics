import './Contact.css';
import Nav from './Nav';
import Footer from './footer';
import React, { useState } from 'react';



function Contact() {

    const [value, setValue] = useState('');

  // Event handler to update the state when input changes
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
        <Nav/>
    <div className='contact-container'>

        <div className='left-header'>    
            <h2>Contact</h2>
            <p>Got an Exotic request? Shoot us a message and we will get back to you soon.</p>
        </div>

        <div className='contact'>
            <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Name"
            className='text-entry'/>

            <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Email"
            className='text-entry'
            id="email"/>
        </div>

        <div className='phone'>
            <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Phone Number"
            className='text-entry'/>
        </div>

        <div className='message'>
            <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Message"
            className='text-entry'/>
        </div>

        <button className='main-button'> Send</button>
    </div>

    <Footer/>
    </div>

  );
}

export default Contact;
