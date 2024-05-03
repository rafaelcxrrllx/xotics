import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './shop';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import CorvettePlate from './corvette-plate';

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' component={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/corvette-plate' element={<CorvettePlate/>}/>
        </Routes>
    </Router>
  );
}

export default App;
