import React, { useState, useEffect } from 'react';
import ApartmentList from './components/ApartmentList';
import Filters from './components/Filters';
import './App.css';

const apartments = [
  { id: 1, price: 200000, area: 850, rooms: 3, city: 'Tbilisi', address: '123 Main St', zip: '0100', forSale: true, image: 'https://via.placeholder.com/300' },
  { id: 2, price: 150000, area: 600, rooms: 2, city: 'Kutaisi', address: '456 Elm St', zip: '4600', forSale: false, image: 'https://via.placeholder.com/300' },
  { id: 3, price: 250000, area: 900, rooms: 4, city: 'Batumi', address: '789 Oak St', zip: '6000', forSale: true, image: 'https://via.placeholder.com/300' },
  { id: 4, price: 180000, area: 700, rooms: 2, city: 'Telavi', address: '321 Pine St', zip: '2200', forSale: false, image: 'https://via.placeholder.com/300' },
  { id: 5, price: 210000, area: 750, rooms: 3, city: 'Rustavi', address: '654 Cedar St', zip: '3700', forSale: true, image: 'https://via.placeholder.com/300' },
];

function App() {
  const [filteredApartments, setFilteredApartments] = useState(apartments);
  const [filters, setFilters] = useState({
    minPrice: 100000,
    maxPrice: 300000,
    minArea: 500,
    maxArea: 1000,
    rooms: 0,
    city: [],
    forSale: 'All',
  });

  useEffect(() => {
    const savedFilters = JSON.parse(localStorage.getItem('filters'));
    if (savedFilters) {
      setFilters(savedFilters);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('filters', JSON.stringify(filters));
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);

    const filtered = apartments.filter(apartment =>
      apartment.price >= newFilters.minPrice && apartment.price <= newFilters.maxPrice &&
      apartment.area >= newFilters.minArea && apartment.area <= newFilters.maxArea &&
      (newFilters.rooms === 0 || apartment.rooms === newFilters.rooms) &&
      (newFilters.city.length === 0 || newFilters.city.includes(apartment.city)) &&
      (newFilters.forSale === 'All' || (newFilters.forSale === 'Sale' && apartment.forSale) || (newFilters.forSale === 'Rent' && !apartment.forSale))
    );

    setFilteredApartments(filtered);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Real Estate Manager - Georgia</h1>
      <Filters filters={filters} onFilterChange={handleFilterChange} />
      <ApartmentList apartments={filteredApartments} />
    </div>
  );
}

export default App;


