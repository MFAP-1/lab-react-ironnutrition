import React from 'react'

class TodaysFood extends React.Component {


  render() {
      return (
        <div class="column content">
        <h2 class="subtitle">Today's foods</h2>
        <ul>
          {this.props.todaysFoodList.map((food) => {
            return <li>{food.quantity} {food.name} = {food.calories * food.quantity} cal</li>
          })}
        </ul>
        <strong>Total: {this.props.totalCalories} cal</strong>
      </div>
      );
  }
  
}

export default TodaysFood;