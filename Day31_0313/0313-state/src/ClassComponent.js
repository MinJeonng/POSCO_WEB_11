//state 실습 1

import React, { Component } from 'react';
export default class ClassComponent extends Component {
  state = {
    num: 0,
  };
  render() {
    const { num } = this.state;
    return (
      <>
        <h2>{num}</h2>
        <button
          onClick={() => {
            this.setState({ num: num + 2 });
          }}
        >
          +2
        </button>{' '}
        <br />
        <button
          onClick={() => {
            this.setState({ num: num - 1 });
          }}
        >
          -1
        </button>
      </>
    );
  }
}
