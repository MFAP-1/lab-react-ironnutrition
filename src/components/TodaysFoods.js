import React from 'react';

function TodaysFood(props) {
  const handleDeleteClick = (event) => {
    if (event.target.className === 'button-remove') {
      props.deleteFromTodaysFoodList(event.target.name);
    }
  };

  return (
    <div className="column content">
      <h2 className="subtitle">Today's foods</h2>
      <ul>
        {props.todaysFoodList.map((food) => {
          return (
            <li key={food.name}>
              {food.quantity} {food.name} = {food.calories * food.quantity} cal
              <button
                className="button-remove"
                name={food.name}
                onClick={handleDeleteClick}
              >
                remove
              </button>
            </li>
          );
        })}
      </ul>
      <strong>Total: {props.totalCalories} cal</strong>
    </div>
  );
}

export default TodaysFood;
