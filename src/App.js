import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import About from './Components/About';
import Register_page from './Components/Register';

const App = () =>{
  return(
  
  <Router>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/blog' element={<Blog />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/register' element={<Register_page />}/> 
    </Routes>
   
  </Router>
  )
}

export default App;
