import React, { useState } from 'react';
import './App.css';
import { categories } from './data';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categories.find((category) => category.id === categoryId));
  };

  return (
    <div className="App">
      <h1>Grab Restaurant</h1>
    
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category.id}
            className={category === selectedCategory ? 'active' : ''}
            onClick={() => handleCategoryChange(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="items"> 
        {selectedCategory.items.map((item) => (
          <div key={item.id} className="item">
            <img src={item.imageUrl} alt={item.name} className="item-image" />
            <div className="item-content">
              <div className="item-name">{item.name}</div>
              <button className="item-price">{item.price} บาท</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

