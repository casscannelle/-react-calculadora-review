import React from 'react';
import './Display.css';

const Display = ({ valor, resultado }) => (
    <div className='cssDisplay'>
      <span className='cssDisplayOper'>{valor}</span>
      <span className='cssDisplayRes'>{resultado}</span>
    </div>
  );
  
  export default Display;