import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter, HashRouter } from 'react-router-dom';
import Shop from './shop';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import CorvettePlate from './corvette-plate';
import ScrollToTop from './ScrollToTop';

function App() {
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
        <Route path='/corvette-plate' element={<CorvettePlate/>}/>
      </Routes>
    </HashRouter>
    
  );
}

export default App;
