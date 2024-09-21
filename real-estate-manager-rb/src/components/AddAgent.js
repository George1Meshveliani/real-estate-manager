import React, { useState } from 'react';
import '../styles/AddAgent.css';

const AddAgent = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    avatar: null,
  });

  const [errors, setErrors] = useState({
    name: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    avatar: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAvatarChange = (e) => {
    setFormData({
      ...formData,
      avatar: e.target.files[0],
    });
  };

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};

    // Name Validation
    if (!formData.name || formData.name.length < 2) {
      formIsValid = false;
      newErrors.name = 'Name must be at least 2 characters long';
    }

    // Last Name Validation
    if (!formData.lastName || formData.lastName.length < 2) {
      formIsValid = false;
      newErrors.lastName = 'Last Name must be at least 2 characters long';
    }

    // Email Validation
    const emailPattern = /^[\w-.]+@redberry\.ge$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      formIsValid = false;
      newErrors.email = 'Email must end with "@redberry.ge"';
    }

    // Phone Number Validation
    const phonePattern = /^5\d{8}$/;
    if (!formData.phoneNumber || !phonePattern.test(formData.phoneNumber)) {
      formIsValid = false;
      newErrors.phoneNumber = 'Phone number must be in the format 5XXXXXXXX';
    }

    // Avatar Validation
    if (!formData.avatar) {
      formIsValid = false;
      newErrors.avatar = 'Avatar is required';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Agent added successfully!');
      console.log(formData);
    }
  };

  return (
    <div className="agent-form-container">
      <h3><a href='/'>home</a></h3>
      <h2>Add New Agent</h2>
      <form onSubmit={handleSubmit} className="agent-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={errors.name ? 'error-input' : ''}
            required
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className={errors.lastName ? 'error-input' : ''}
            required
          />
          {errors.lastName && <p className="error-message">{errors.lastName}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? 'error-input' : ''}
            required
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className={errors.phoneNumber ? 'error-input' : ''}
            required
          />
          {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="avatar">Avatar:</label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            onChange={handleAvatarChange}
            className={errors.avatar ? 'error-input' : ''}
            accept="image/*"
            required
          />
          {errors.avatar && <p className="error-message">{errors.avatar}</p>}
        </div>

        <button type="submit">Add Agent</button>
      </form>
    </div>
  );
};

export default AddAgent;
