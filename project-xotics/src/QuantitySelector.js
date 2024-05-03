import React, { useState } from 'react';
import './QuantitySelector.css'; // Import your CSS file for styling

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 1 && value <= 10) {
      setQuantity(value);
    }
  };

  return (
    <div className="quantity-selector">
      <button className="decrease-button" onClick={decreaseQuantity}>-</button>
      <input
        type="number"
        className="quantity-input"
        value={quantity}
        onChange={handleInputChange}
        min="1"
        max="10"
      />
      <button className="increase-button" onClick={increaseQuantity}>+</button>
    </div>
  );
};

export default QuantitySelector;
