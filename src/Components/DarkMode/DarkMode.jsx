import React, { useState } from 'react';
import './DarkMode.css';

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className="container1">
        <span style={{ color: darkMode ? 'grey' : 'yellow' }}>☀︎</span>
        <div className="switch-checkbox">
          <label htmlFor="" className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? '#c96dfd' : 'grey' }}>☽</span>
      </div>
      <div>
        <h1>Cool its {darkMode ? 'Dark' : 'Light'} Mode </h1>
      </div>
    </div>
  );
};

export default DarkMode;
