import './Contact.css';
import Nav from './Nav';
import Footer from './footer';
import React, { useState } from 'react';



function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');


    const handleName = (event) => {
        setName(event.target.value);
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePhone = (event) => {
        setPhone(event.target.value);
    };

    const handleMessage = (event) => {
        setMessage(event.target.value);
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
            value={name}
            onChange={handleName}
            placeholder="Name"
            className='text-entry'/>

            <input
            type="text"
            value={email}
            onChange={handleEmail}
            placeholder="Email *"
            className='text-entry'
            id="email"/>
        </div>

        <div className='phone'>
            <input
            type="text"
            value={phone}
            onChange={handlePhone}
            placeholder="Phone Number"
            className='text-entry'/>
        </div>

        <div className='message'>
            <input
            type="text"
            value={message}
            onChange={handleMessage}
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
