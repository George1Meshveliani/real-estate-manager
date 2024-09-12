import React, { useState } from 'react';
import './Filters.css';

function Filters({ onFilterChange }) {
  const [priceRange, setPriceRange] = useState([100000, 300000]);
  const [areaRange, setAreaRange] = useState([500, 1000]);
  const [rooms, setRooms] = useState();
  const [city, setCity] = useState('All');

  const handleFilterSubmit = () => {
    onFilterChange({ priceRange, areaRange, rooms, city });
  };

  return (
    <div className="filters-container">
      <h2>Filters</h2>

      <div className="filter-group">
        <label>Price Range: </label>
        <input 
          type="number" 
          value={priceRange[0]} 
          onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])} 
        /> 
        - 
        <input 
          type="number" 
          value={priceRange[1]} 
          onChange={(e) => setPriceRange([priceRange[0], +e.target.value])} 
        />
      </div>

      <div className="filter-group">
        <label>Area Range (sqft): </label>
        <input 
          type="number" 
          value={areaRange[0]} 
          onChange={(e) => setAreaRange([+e.target.value, areaRange[1]])} 
        /> 
        - 
        <input 
          type="number" 
          value={areaRange[1]} 
          onChange={(e) => setAreaRange([areaRange[0], +e.target.value])} 
        />
      </div>

      <div className="filter-group">
        <label>Number of Rooms: </label>
        <input 
          type="number" 
          value={rooms} 
          onChange={(e) => setRooms(+e.target.value)} 
        />
      </div>

      <div className="filter-group">
        <label>City: </label>
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="All">All</option>
          <option value="Tbilisi">Tbilisi</option>
          <option value="Kutaisi">Kutaisi</option>
          <option value="Telavi">Telavi</option>
          <option value="Batumi">Batumi</option>
          <option value="Rustavi">Rustavi</option>
        </select>
      </div>

      <button onClick={handleFilterSubmit}>Apply Filters</button>
    </div>
  );
}

export default Filters;
