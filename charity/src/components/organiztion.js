import React,{useState,useEffect} from "react";
import './org.css'
import Search from "./search";
import SelectedCharity from "./organization";

function OrganizationList({lists,handleSearchLoc,handleSearchCat}){
  const [selectedCharity, setSelectedCharity] = useState(null);
   
  useEffect(()=>{
    if(selectedCharity){
        <SelectedCharity/>
    }
  },[selectedCharity])
  
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
      <td onClick={() => setSelectedCharity(list)}>{list.charityName}</td>
      <td>{list.category}</td>
      <td>{list.url}</td>
      <td><button >Donate</button></td>
    </tr> 
   )})}
  </tbody>
</table>
{selectedCharity?(
<SelectedCharity selectedCharity={selectedCharity} />
):(
  <p>Click on a charity to view more details</p>
)}
        </div>
    )
}
export default OrganizationList