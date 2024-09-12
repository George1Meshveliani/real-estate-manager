import React, { useState, useEffect } from 'react';
import './Filters.css';

function Filters({ filters, onFilterChange }) {
  const [minPrice, setMinPrice] = useState(filters.minPrice);
  const [maxPrice, setMaxPrice] = useState(filters.maxPrice);
  const [minArea, setMinArea] = useState(filters.minArea);
  const [maxArea, setMaxArea] = useState(filters.maxArea);
  const [rooms, setRooms] = useState(filters.rooms);
  const [city, setCity] = useState(filters.city);
  const [forSale, setForSale] = useState(filters.forSale);

  useEffect(() => {
    setMinPrice(filters.minPrice);
    setMaxPrice(filters.maxPrice);
    setMinArea(filters.minArea);
    setMaxArea(filters.maxArea);
    setRooms(filters.rooms);
    setCity(filters.city);
    setForSale(filters.forSale);
  }, [filters]);

  const handleFilterSubmit = () => {
    if (minPrice > maxPrice || minArea > maxArea) {
      alert('Invalid filter values: minimum should not be more than maximum');
      return;
    }
    onFilterChange({ minPrice, maxPrice, minArea, maxArea, rooms, city, forSale });
  };

  return (
    <div className="filters-container">
      <h2>Filters</h2>

      <div className="filter-group">
        <label>Price Range:</label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(+e.target.value)}
          placeholder="Min Price"
        />
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(+e.target.value)}
          placeholder="Max Price"
        />
      </div>

      <div className="filter-group">
        <label>Area Range (sqft):</label>
        <input
          type="number"
          value={minArea}
          onChange={(e) => setMinArea(+e.target.value)}
          placeholder="Min Area"
        />
        <input
          type="number"
          value={maxArea}
          onChange={(e) => setMaxArea(+e.target.value)}
          placeholder="Max Area"
        />
      </div>

      <div className="filter-group">
        <label>Number of Rooms:</label>
        <input
          type="number"
          value={rooms}
          onChange={(e) => setRooms(+e.target.value)}
          placeholder="Number of Rooms"
        />
      </div>

      <div className="filter-group">
        <label>City:</label>
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="All">All</option>
          <option value="Tbilisi">Tbilisi</option>
          <option value="Kutaisi">Kutaisi</option>
          <option value="Telavi">Telavi</option>
          <option value="Batumi">Batumi</option>
          <option value="Rustavi">Rustavi</option>
        </select>
      </div>

      <div className="filter-group">
        <label>For Sale or Rent:</label>
        <select value={forSale} onChange={(e) => setForSale(e.target.value)}>
          <option value="All">All</option>
          <option value="Sale">For Sale</option>
          <option value="Rent">For Rent</option>
        </select>
      </div>

      <button onClick={handleFilterSubmit} className="filter-submit-btn">Apply Filters</button>
    </div>
  );
}

export default Filters;
