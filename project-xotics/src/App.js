import './App.css';
import Nav from './Nav';
import hero from './assets/hero-image.svg'
import Featured from './Featured';
import Footer from './footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './shop';
import Home from './Home';
function App() {
  return (
    <Router>
        <Routes>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
    </Router>
  );
}

export default App;
