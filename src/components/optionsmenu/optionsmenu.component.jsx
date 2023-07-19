import React, { Component } from 'react';
import './optionsmenu.style.css';

class OptionsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
    };
  }

  handleOptionChange = (event) => {
    this.setState({ selectedOption: event.target.value });
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <div>
        <select className='options-menu' value={selectedOption } onChange={this.handleOptionChange}>
          <option value="">-- Select --</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    );
  }
}

export default OptionsMenu;
