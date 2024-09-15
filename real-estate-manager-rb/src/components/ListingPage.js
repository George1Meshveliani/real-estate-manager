import React, { useState } from 'react';

const regionsData = {
  "Region 1": ["City 1", "City 2"],
  "Region 2": ["City 3", "City 4"],
  // Add more regions and cities as needed
};

const agentsData = ["Agent 1", "Agent 2", "Agent 3"]; // Sample agents

const ListingPage = () => {
  const [formData, setFormData] = useState({
    address: '',
    image: null,
    region: '',
    city: '',
    zipCode: '',
    price: '',
    rooms: '',
    description: '',
    saleOrRent: '',
    agentName: ''
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle image change and validation
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 1048576) {
      setErrors({ ...errors, image: 'Image size should not exceed 1MB' });
    } else {
      setFormData({ ...formData, image: file });
      setErrors({ ...errors, image: '' });
    }
  };

  // Validate the form
  const validateForm = () => {
    const newErrors = {};

    if (formData.address.length < 2) {
      newErrors.address = 'Address must be at least 2 characters long';
    }

    if (!formData.image) {
      newErrors.image = 'Image is required';
    }

    if (!formData.region) {
      newErrors.region = 'Region is required';
    }

    if (!formData.city) {
      newErrors.city = 'City is required';
    }

    if (!formData.zipCode || isNaN(formData.zipCode)) {
      newErrors.zipCode = 'Zip code is required and must be a number';
    }

    if (!formData.price || isNaN(formData.price)) {
      newErrors.price = 'Price is required and must be a number';
    }

    if (!formData.rooms || isNaN(formData.rooms)) {
      newErrors.rooms = 'Number of rooms is required and must be a number';
    }

    if (formData.description.split(' ').length < 5) {
      newErrors.description = 'Description must be at least 5 words';
    }

    if (!formData.saleOrRent) {
      newErrors.saleOrRent = 'Please specify if it’s for Sale or Rent';
    }

    if (!formData.agentName) {
      newErrors.agentName = 'Agent name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted successfully!', formData);
      // Proceed with form submission (e.g., API call)
    }
  };

  return (
    <div className="listing-page">
      <h2>Add New Apartment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Address:</label>
          <input 
            type="text" 
            name="address" 
            value={formData.address} 
            onChange={handleInputChange} 
            required 
          />
          {errors.address && <p className="error-message">{errors.address}</p>}
        </div>

        <div className="form-group">
          <label>Image:</label>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
            required 
          />
          {errors.image && <p className="error-message">{errors.image}</p>}
        </div>

        <div className="form-group">
          <label>Region:</label>
          <select 
            name="region" 
            value={formData.region} 
            onChange={handleInputChange} 
            required
          >
            <option value="">Select Region</option>
            {Object.keys(regionsData).map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
          {errors.region && <p className="error-message">{errors.region}</p>}
        </div>

        <div className="form-group">
          <label>City:</label>
          <select 
            name="city" 
            value={formData.city} 
            onChange={handleInputChange} 
            required
            disabled={!formData.region}
          >
            <option value="">Select City</option>
            {regionsData[formData.region]?.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          {errors.city && <p className="error-message">{errors.city}</p>}
        </div>

        <div className="form-group">
          <label>Zip Code:</label>
          <input 
            type="text" 
            name="zipCode" 
            value={formData.zipCode} 
            onChange={handleInputChange} 
            required 
          />
          {errors.zipCode && <p className="error-message">{errors.zipCode}</p>}
        </div>

        <div className="form-group">
          <label>Price:</label>
          <input 
            type="number" 
            name="price" 
            value={formData.price} 
            onChange={handleInputChange} 
            required 
          />
          {errors.price && <p className="error-message">{errors.price}</p>}
        </div>

        <div className="form-group">
          <label>Number of Rooms:</label>
          <input 
            type="number" 
            name="rooms" 
            value={formData.rooms} 
            onChange={handleInputChange} 
            required 
          />
          {errors.rooms && <p className="error-message">{errors.rooms}</p>}
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea 
            name="description" 
            value={formData.description} 
            onChange={handleInputChange} 
            required 
          />
          {errors.description && <p className="error-message">{errors.description}</p>}
        </div>

        <div className="form-group">
          <label>Sale or Rent:</label>
          <div>
            <label>
              <input 
                type="radio" 
                name="saleOrRent" 
                value="sale" 
                checked={formData.saleOrRent === 'sale'} 
                onChange={handleInputChange} 
                required 
              />
              Sale
            </label>
            <label>
              <input 
                type="radio" 
                name="saleOrRent" 
                value="rent" 
                checked={formData.saleOrRent === 'rent'} 
                onChange={handleInputChange} 
                required 
              />
              Rent
            </label>
          </div>
          {errors.saleOrRent && <p className="error-message">{errors.saleOrRent}</p>}
        </div>

        <div className="form-group">
          <label>Agent Name:</label>
          <select 
            name="agentName" 
            value={formData.agentName} 
            onChange={handleInputChange} 
            required
          >
            <option value="">Select Agent</option>
            {agentsData.map((agent) => (
              <option key={agent} value={agent}>
                {agent}
              </option>
            ))}
          </select>
          {errors.agentName && <p className="error-message">{errors.agentName}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ListingPage;
