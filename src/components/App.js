import React, { useState } from 'react';
import { signUpFormValidation } from '../utils/validation';
import '../styles/App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    consent: false,
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: inputValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = signUpFormValidation(formData);
    setFormErrors(errors);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {formErrors?.name && <div className="error">{formErrors.name}</div>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {formErrors?.email && <div className="error">{formErrors.email}</div>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {formErrors?.password && (
          <div className="error">{formErrors.password}</div>
        )}
      </div>
      <div>
        <label htmlFor="consent">
          <input
            type="checkbox"
            id="consent"
            checked={formData.consent}
            onChange={handleInputChange}
          />
          I agree to the terms and conditions.
        </label>
      </div>
      <button type="submit">Signup</button>
    </form>
  );
};


export default App;
