import React from 'react';

class AddFoodForm extends React.Component {
  state = {
    name: '',
    calories: '',
    image: '',
    addFood: false,
  };

  renderForm = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <label className="label">Nome da Comida</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Nome da Comida"
              name="name"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Calories</label>
          <div className="control">
            <input
              className="input"
              type="number"
              min="0"
              placeholder="Quantidade de calorias"
              name="calories"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Imagem da comida</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Insira o url da comida"
              name="image"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    );
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // For the button
  renderBtn = () => {
    return (
      <button className="button is-info" onClick={this.handleClick}>
        +
      </button>
    );
  };
  handleClick = () => {
    this.setState({ addFood: true });
  };

  render() {
    // console.log('add food state teste: ', this.state.addFood);
    console.log('name no state: ', this.state.name);
    console.log('calories no state: ', this.state.calories);
    console.log('image no state: ', this.state.image);
    return this.state.addFood ? this.renderForm() : this.renderBtn();
  }
}

export default AddFoodForm;
