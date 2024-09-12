import React from 'react';
import './ApartmentList.css';

function ApartmentList({ apartments }) {
  return (
    <div className="apartment-list">
      {apartments.map(apartment => (
        <div key={apartment.id} className="apartment-card">
          <img src={apartment.image} alt={apartment.city} className="apartment-image" />
          <h3>{apartment.city}</h3>
          <p>Price: ${apartment.price}</p>
          <p>Area: {apartment.area} sqft</p>
          <p>Rooms: {apartment.rooms}</p>
        </div>
      ))}
    </div>
  );
}

export default ApartmentList;
