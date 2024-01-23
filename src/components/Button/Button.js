import React from 'react';
import './Button.css';

const Button = ({ label, onClick }) => (
  <button className='cssBtn' onClick={onClick}>
    {label}
  </button>
);

export default Button;