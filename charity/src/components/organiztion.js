import React from "react";
import './org.css'
import Search from "./search";

function OrganizationList({lists,handleSearchLoc,handleSearchCat}){
  
  
  return(
        <div>
          <Search handleSearchLoc={handleSearchLoc}
          handleSearchCat={handleSearchCat}/>
<table className="table">
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
      <td>{list.url}</td>
      <td><button >Donate</button></td>
    </tr> 
   )})}
  </tbody>
</table>
        </div>
    )
}
export default OrganizationList