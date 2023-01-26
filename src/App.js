import './App.css'
import Authentication from './components/Authentication';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home'
import OrganizationList from './components/organiztion';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
<<<<<<< HEAD:src/App.js
=======
import React, { useState,useEffect } from "react";
import Donate from './components/Donate';


>>>>>>> 44c8d279619484d3c207e46805f76068743a9dc5:charity/src/App.js
function App() {
  const [lists,setlist]=useState([])
  
  useEffect(()=>{
    fetch('https://api.npoint.io/01b09628cc4c55f6371d/data/')
    .then(res =>res.json())
    .then(data =>setlist(data))
  },[])

  function handleSearchLoc(search){
    setlist((transaction)=>{
      return transaction.filter((list)=>{
        return list.city.toLowerCase().includes(search)
         
      })
    })
  }
  
  function handleSearchCat(search){
    setlist((transaction)=>{
      return transaction.filter((list)=>{
        return list.category.toLowerCase().includes(search)
         
      })
    })
  }

  return (
   <div>
      <BrowserRouter>
            <NavBar/>
              <Routes>
                <Route path='/' element={<Home />}></Route>
<<<<<<< HEAD:src/App.js
                <Route path='/organiztion' element={<OrganizationList/>}></Route>
=======
                <Route path='/organiztion' element={<OrganizationList 
                lists={lists}
                 handleSearchCat={handleSearchCat}
                 handleSearchLoc={handleSearchLoc} />}></Route>
>>>>>>> 44c8d279619484d3c207e46805f76068743a9dc5:charity/src/App.js
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/donate' element={<Donate/>}></Route>
                {/* <Route path='/sign up' element={<SignUp/>}></Route> */}
                <Route path='/login' element={<Authentication/>}></Route>
              </Routes>
              <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;