import { Component } from 'react';
export default class ClassBind extends Component {
  state = {
    name: 'beki',
  };

  // 클래스 컴포넌트에서 이벤트를 쓸때 화살표 함수 사용
  printConsole = () => {
    console.log('this', this); //this : 현재 사용하고 있는 컴포넌트
    console.log('state', this.state);
  };

  printConsole2 = (msg) => {
    console.log('msg', msg);
  };

  /*
  printConsole3() {} => this.printConsole3 = this.printConsole3.bind(this);
  -> bind()는 해당함수에서 가르킬 this를 직접 설정!
  */
  render() {
    return (
      <div>
        <h2>Class Component Event</h2>
        <button onClick={this.printConsole}>Print Console (인자x)</button>
        {/* 인자 있는건 익명함수 */}
        <button onClick={() => this.printConsole2('귯ㄸ!')}>
          Print Console (인자o)
        </button>
      </div>
    );
  }
}
