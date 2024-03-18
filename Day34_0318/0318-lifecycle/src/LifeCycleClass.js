//rcc 단축키 하면 생성 -> react class component
import React, { Component } from 'react';
import LifeCycleClassChild from './LifeCycleClassChild';

export default class LifeCycleClass extends Component {
  state = {
    number: 0,
    visible: true,
  };
  changeNumberState = () => {
    // setState : 클래스형에서 state변경시켜주는 것
    this.setState({ number: this.state.number + 1 });
  };
  changeVisibleState = () => {
    //t -> f, false -> true
    this.setState({ visible: !this.state.visible });
  };
  render() {
    return (
      <div>
        <button onClick={this.changeNumberState}>PLUS</button>
        <button onClick={this.changeVisibleState}>ON/OFF</button>

        {this.state.visible && (
          <LifeCycleClassChild number={this.state.number} />
          // 자식요소가 보여지고 안보여지고를 &&로 가능
        )}
      </div>
    );
  }
}
