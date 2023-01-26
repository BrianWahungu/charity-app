
import './App.css'
import Authentication from './components/Authentication';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home'
import OrganizationList from './components/organiztion';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import React, { useState,useEffect } from "react";


function App() {
  const [lists,setlist]=useState([])
  
  useEffect(()=>{
    fetch('http://localhost:3000/data')
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
                <Route path='/organiztion' element={<OrganizationList 
                lists={lists}
                 handleSearchCat={handleSearchCat}
                 handleSearchLoc={handleSearchLoc} />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
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
