import React, { Component } from 'react'

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.count = React.createRef(0)
  }

  increment = () => {
    this.count += 1;
  };

  render() {
    return (
      <div ref={this.count}></div>
    )
  }
}
