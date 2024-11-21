// src/Filter.js
import React from 'react';

const Filter = ({ onFilterChange, currentFilter }) => {
  return (
    <div className="filter">
      <button 
        onClick={() => onFilterChange('all')} 
        className={currentFilter === 'all' ? 'active' : ''}
      >
        All
      </button>
      <button 
        onClick={() => onFilterChange('completed')} 
        className={currentFilter === 'completed' ? 'active' : ''}
      >
        Completed
      </button>
      <button 
        onClick={() => onFilterChange('incomplete')} 
        className={currentFilter === 'incomplete' ? 'active' : ''}
      >
        Incomplete
      </button>
    </div>
  );
};

export default Filter;
