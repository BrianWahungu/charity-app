
import './App.css'
import Authentication from './components/Authentication';
import NavBar from './components/NavBar';
//import Contact from '../contact/Contact';
//import About from '../about/About';
//import Home from '../home/Home';
import {BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
   <div>
      <Authentication/>
      <BrowserRouter>
            <NavBar/>
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/organisation' element={<Organisations/>}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                
              </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;