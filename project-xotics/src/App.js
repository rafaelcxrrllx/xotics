import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './shop';
import Home from './Home';
import Contact from './Contact';
function App() {
  return (
    <Router>
        <Routes>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/Contact' element={<Contact/>}/>
        </Routes>
    </Router>
  );
}

export default App;
