import './Contact.css';
import Nav from './Nav';
import Footer from './footer';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';



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

    const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a2xxafl', 'template_n3ligrq', e.target, 'UMekQJvGsQzWSis2P')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
      }, (error) => {
        console.error('Failed to send email:', error.text);
      });
  };




    return (


    <div>
        <Nav/>

    <div className='contact-container'>

        <div className='header'>    
            <h2>Contact</h2>
            <p>Got an Exotic request? Shoot us a message and we will get back to you soon.</p>
        </div>

        <form onSubmit={handleSubmit}  >

        <div className='contact'>
            <input
            type="text"
            value={name}
            onChange={handleName}
            placeholder="Name"
            name="from_name"
            className='text-entry'/>

            <input
            type="text"
            value={email}
            onChange={handleEmail}
            placeholder="Email"
            className='text-entry'
            name="from_email"
            id="email"/>
            
        </div>

        <div className='phone'>
            <input
            
            type="tel"
            value={phone}
            onChange={handlePhone}
            placeholder="Phone Number"
            name="from_phone"
            className='text-entry'/>
        </div>

        <div className='message'>
            <input
            type="text"
            value={message}
            onChange={handleMessage}
            placeholder="Message"
            name="message"
            className='text-entry'/>
        </div>
        <button type="submit" className='main-button'> Send</button>
        </form>


        
    </div>

    <Footer/>
    </div>

  );
}

export default Contact;
