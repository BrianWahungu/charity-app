import React from "react";
import { useState,useEffect } from "react";
import './org.css'

function OrganizationList(){
  const [lists,setlist]=useState([])
  
  useEffect(()=>{
    fetch('http://localhost:3001/data')
    .then(res =>res.json())
    .then(data =>setlist(data))
  },[])
  
  
  return(
        <div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">State</th> 
       <th scope="col">city</th>
      <th scope="col">charityName</th>
      <th scope="col">Category</th>
      <th scope="col">url</th>
      <th scope="col">Donation</th>
    </tr>
  </thead>
  <tbody>
    {lists.map(list=>{
  return(
    <tr key={list.ein}>
      
      <td>{list.state}</td>
      <td>{list.city}</td>
      <td>{list.charityName}</td>
      <td>{list.category}</td>
      <td><a href={list.url}>link to site</a></td>
      <td><a href={list.donationUrl}>Donate</a></td>
    </tr> 
   )})}
  </tbody>
</table>
        </div>
    )
}
export default OrganizationList