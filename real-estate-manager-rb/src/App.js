import React, { useState } from 'react';
import ApartmentList from './ApartmentList';
import Filters from './Filters';
import './App.css';

const apartments = [
  { id: 1, price: 200000, area: 850, rooms: 3, city: 'Tbilisi', image: 'https://via.placeholder.com/150' },
  { id: 2, price: 150000, area: 600, rooms: 2, city: 'Kutaisi', image: 'https://via.placeholder.com/150' },
  { id: 3, price: 250000, area: 900, rooms: 4, city: 'Batumi', image: 'https://via.placeholder.com/150' },
  { id: 4, price: 180000, area: 700, rooms: 2, city: 'Telavi', image: 'https://via.placeholder.com/150' },
  { id: 5, price: 210000, area: 750, rooms: 3, city: 'Rustavi', image: 'https://via.placeholder.com/150' },
];

function App() {
  const [filteredApartments, setFilteredApartments] = useState(apartments);

  const handleFilterChange = (filters) => {
    const { priceRange, areaRange, rooms, city } = filters;

    const filtered = apartments.filter(apartment =>
      apartment.price >= priceRange[0] && apartment.price <= priceRange[1] &&
      apartment.area >= areaRange[0] && apartment.area <= areaRange[1] &&
      (rooms === 0 || apartment.rooms === rooms) &&
      (city === 'All' || apartment.city === city)
    );

    setFilteredApartments(filtered);
  };

  return (
    <div className="app-container">
      <h1>Real Estate Manager - Georgia</h1>
      <Filters onFilterChange={handleFilterChange} />
      <ApartmentList apartments={filteredApartments} />
    </div>
  );
}

export default App;

