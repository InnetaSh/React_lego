import React, { useState } from 'react';
import '../style.css';

export default function SearchInput({ placeholder = 'Поиск...', onChange }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChange) onChange(newValue);
  };

  const clearInput = () => {
    setValue('');
    if (onChange) onChange('');
  };

  return (
    <div className="search-input">
      <span className="icon left">🔍</span>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {value && <span className="icon right" onClick={clearInput}>✖</span>}
    </div>
  );
}

