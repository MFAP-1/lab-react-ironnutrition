import React from 'react';

class FoodBox extends React.Component {
  
  state = {
    clickedName: '',
    clickedCalories: 0,
    clickedQuantity: 1,
  }
  
  handleClick = () => {
    this.setState({clickedName: this.props.name, clickedCalories: this.props.calories})
  }
  
  componentDidUpdate = (prevProps, prevState) => {
    // console.log('todaysFoodList:', this.props.todaysFoodList); // CORRETO
    console.log('this.state.clickedName:', this.state.clickedName); // 
    let existingCurrentFood = this.props.todaysFoodList.find(() => this.props.todaysFoodList.includes(this.state.clickedName));
    // console.log(existingCurrentFood);
    if (prevState.clickedName !== this.state.clickedName) {
      this.props.addToTodaysFoodList(this.state.clickedName, this.state.clickedCalories, this.state.clickedQuantity);
    } else if (prevState.clickedName === this.state.clickedName && existingCurrentFood) {
      // this.props.updateTodaysFoodList(this.state.clickedName, this.state.clickedCalories, this.state.clickedQuantity);
    }
  }
  
  handleChange = (event) => {
    this.setState({clickedQuantity: event.target.valueAsNumber})
  }

  render() {
    // console.log(this.state);
    return (
      <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={this.props.image} alt={this.props.name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{this.props.name}</strong> <br />
              <small>{this.props.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" min="0" placeholder="1" value={this.clickedQuantity} onChange={this.handleChange} />
            </div>
            <div className="control">
              <button className="button is-info" onClick={this.handleClick}>+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
}

export default FoodBox;
