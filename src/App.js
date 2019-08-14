import React, { Component } from 'react';
import './App.css';
import ValidationComponent from "./ValidationComponent";
import CharComponent from "./CharComponent";

class App extends Component {
  state = {
    inputLength: 0,
    inputValue: ""
  }

  inputChangeHandler = (event) => {
    let val = event.target.value;
    this.setState({
      inputLength: val.length,
      inputValue: val
    });
  }

  removeCharHandler = (index) => {
    let value = [...this.state.inputValue];
    value.splice(index, 1);
    this.setState({
      inputLength: value.length,
      inputValue: value.join('')
    });
  }

  render() {
    const charArray = (this.state.inputLength > 0) ? [...this.state.inputValue].map((char, i) => <CharComponent char={char} remove={ () => this.removeCharHandler(i) } />) : null;

    return (
      <div className="App">
        <h1>List Conditionals Assign</h1>
        <div>
          <input type="text" onChange={this.inputChangeHandler} value={this.state.inputValue} />
          <p>{this.state.inputLength}</p>
          <ValidationComponent text={this.state.inputValue} />
          { charArray }
        </div>
      </div>
    );
  }
}

export default App;
