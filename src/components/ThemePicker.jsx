'use client';
import { useState, useEffect } from 'react';
import { FiDroplet } from 'react-icons/fi';

const colors = [
  { name: 'purple', value: '#6366f1' },
  { name: 'emerald', value: '#10b981' },
  { name: 'blue', value: '#3b82f6' },
  { name: 'amber', value: '#f59e0b' },
  { name: 'rose', value: '#ef4444' }
];

const ThemePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', selectedColor.value);
    
    const rgb = [
      parseInt(selectedColor.value.slice(1, 3), 16),
      parseInt(selectedColor.value.slice(3, 5), 16),
      parseInt(selectedColor.value.slice(5, 7), 16)
    ].join(',');
    
    root.style.setProperty('--primary-color-rgb', rgb);
  }, [selectedColor]);

  return (
    <div className="theme-picker-wrapper">
      <button 
        className="color-picker-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open color picker"
      >
        <FiDroplet className="theme-icon" />
      </button>
      
      {isOpen && (
        <div className="color-palette">
          {colors.map((color) => (
            <button
              key={color.name}
              style={{ 
                backgroundColor: color.value,
                borderColor: `var(--text-color)`
              }}
              onClick={() => {
                setSelectedColor(color);
                setIsOpen(false);
              }}
              className={`color-option ${color.value === selectedColor.value ? 'active' : ''}`}
              aria-label={`Select ${color.name} theme`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemePicker;