//클래스형

import React, { Component } from 'react';
class Counter extends Component {
  //state를 사용하려면 render위에다가 만들자
  //state 값을 저장
  state = {
    number: 100,
    name: '쿠둥짝',
  };
  render() {
    //클래스형에서는 this.state로만 접근이 가능함
    console.log(this.state);
    const { number } = this.state; //구조분해
    return (
      <div>
        <h3>{number}</h3>
        {/* onclick도 camelCase */}
        <button
          onClick={() => {
            //this.setState : state 값을 바꾸는 함수
            //state 값은 직접 변경은 안되고, 꼭 setState 함수를 이용해서만 변경 가능하다.
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
export default Counter;
