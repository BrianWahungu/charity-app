import './App.css'
import Authentication from './components/Authentication';
import NavBar from './components/NavBar';
//import Contact from '../contact/Contact';
import About from './components/About'
import Home from './components/Home'
import OrganizationList from './components/organiztion';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
function App() {
  return (
   <div>
      <BrowserRouter>
            <NavBar/>
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/organiztion' element={<OrganizationList/>}></Route>
                <Route path='/about' element={<About />}></Route>
                {/* <Route path='/contact' element={<Contact />}></Route> */}
                {/* <Route path='/donate' element={<Donate/>}></Route> */}
                {/* <Route path='/sign up' element={<SignUp/>}></Route> */}
                <Route path='/login' element={<Authentication/>}></Route>
              </Routes>
              <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;