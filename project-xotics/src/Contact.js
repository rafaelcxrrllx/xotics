import './Contact.css';
import Nav from './Nav';
import Footer from './footer';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


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

  const [isVisible, setIsVisible] = useState(true);

  const handleHide = () => {
    setIsVisible(false);
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling behavior
      });

  };




    return (


    <div>
        <Nav/>

    <div 

        className='contact-container'>

        <div className='header'>    
            <motion.h2
             initial={{ x: '-3vw', opacity: 0 }} // Initial opacity set to 0
             animate={{ x: 0, opacity: 1 }} // Animate opacity to 1
             transition={{ duration: 1 }} // Animation duration
                >Contact</motion.h2>
            <motion.h4
                style={{display: isVisible ? 'block' : 'none', pointerEvents: isVisible ? 'none' : 'auto', position:  isVisible ? 'relative' : 'absolute'}}
                 initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
                 animate={{ y: 0, opacity: isVisible ? 1 : 0 }} // Animate opacity to 1
                 transition={{ duration: isVisible ? 1 : 0 }}>Got an Xotic request? Shoot us a message and we will get back to you soon.</motion.h4>
        </div>

        <div 
            style={{display: isVisible ? 'none' : 'block', pointerEvents: isVisible ? 'none' : 'auto', position:  isVisible ? 'absolute' : 'relative'}}
            className='message-confirmed-header'>    
            <motion.h4
                 initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
                 animate={{ y: 0, opacity: isVisible ? 0 : 1 }} // Animate opacity to 1
                 transition={{ duration: 1 }}> Message has been sent. We will get back to you soon.</motion.h4>
             
             <Link className="Link" to="/shop">
                <motion.button
              initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
              animate={{ y: 0, opacity: isVisible ? 0 : 1 }} // Animate opacity to 1
              transition={{ duration: 1 }}
                className='second-button'> 
            Keep Shopping
        </motion.button>
        </Link>
        </div>

        <motion.form 
            style={{display: isVisible ? 'block' : 'none', pointerEvents: isVisible ? 'auto' : 'none'}}
            onSubmit={handleSubmit}  
            initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
            animate={{ y: 0, opacity: isVisible ? 1 : 0 }} // Animate opacity to 1
            transition={{duration: isVisible ? 1 : 0 }}> 

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
        <motion.button onClick={handleHide} type="submit" className='main-button'> 
            Send
        </motion.button> 
        </motion.form>
    </div>
    

    <Footer/>
    </div>

  );
}

export default Contact;
