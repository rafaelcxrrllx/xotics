import './App.css';
import { BrowserRouter as  Router, Route, Routes, HashRouter } from 'react-router-dom';
import Shop from './shop';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Customize from './Customize';
import CorvettePlate from './corvette-plate';
import ScrollToTop from './ScrollToTop';
import { useEffect } from 'react';
import logo from './assets/logo.jpg';


function App() {

  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]');
    // Change the favicon URL
    favicon.href = {logo};
}, []);


  return (

    <HashRouter >
      <ScrollToTop/>
      <Routes >
      <Route path='/' element={<Home/>}/> 
        <Route path='/xotics' element={<Home/>}/> {/* Render Home component at root path */}
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Customize' element={<Customize/>}/>
        <Route path='/corvette-plate' element={<CorvettePlate/>}/>
      </Routes>
    </HashRouter>
    
  );
}

export default App;
