import React from 'react';

import './App.css';

import foods from './foods.json';

import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  return (
    <div className="container">
      <h1 className="title">IronNutrition</h1>
      <div>
        <input
          type="text"
          className="input search-bar"
          name="search"
          placeholder="Search"
          value=""
        />
      </div>
      <AddFoodForm />

      <div className="columns">
        <div className="column">
          {foods.map((food) => {
            return (
              <FoodBox
                name={food.name}
                image={food.image}
                calories={food.calories}
                key={food.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
