import React from 'react';
import '../styles/ApartmentList.css';

function ApartmentList({ apartments }) {
  return (
    <div className="apartment-list">
      {apartments.map(apartment => (
        <div key={apartment.id} className="apartment-card">
          <img src={apartment.image} alt={apartment.city} className="apartment-image" />
          <div className="apartment-info">
            <h3>{apartment.city}</h3>
            <p>{apartment.address}</p>
            <p>ZIP Code: {apartment.zip}</p>
            <p>Price: ${apartment.price}</p>
            <p>Area: {apartment.area} sqft</p>
            <p>Rooms: {apartment.rooms}</p>
            <p>{apartment.forSale ? 'For Sale' : 'For Rent'}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ApartmentList;


