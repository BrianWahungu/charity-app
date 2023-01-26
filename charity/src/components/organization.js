import React from 'react';

function SelectedCharity({ selectedCharity }) {
    
  return (
    
      
        <div>
          <h2>{selectedCharity.charityName}</h2>
          <p>Category: {selectedCharity.category}</p>
          <p>Website: {selectedCharity.url}</p>
          <p>State: {selectedCharity.state}</p>
          <p>City: {selectedCharity.city}</p>
          <p>ZipCode: {selectedCharity.zipCode}</p>
          <p>Longitude: {selectedCharity.longitude}, Latitude: {selectedCharity.latitude}</p>
          {/* <p>Mission: {selectedCharity.missionStatement}</p> */}
          <p><a href={selectedCharity.donationURL}>DONATE</a></p>
        </div>
      
    
  );
}
export default SelectedCharity