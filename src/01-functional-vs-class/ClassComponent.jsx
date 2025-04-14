import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: `Hello, ${props.name}`,
    };
  }

  handleChangeGreeting = () => {
    this.setState({ greeting: `Hey, ${this.props.name}` });
  };

  render() {
    return (
      <div>
        <h3>{this.state.greeting}</h3>
        <button onClick={this.handleChangeGreeting}>Change Greeting</button>
      </div>
    );
  }
}

export default ClassComponent;
