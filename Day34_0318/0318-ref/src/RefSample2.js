import { Component, createRef } from 'react';
export default class RefSample2 extends Component {
  //createRef를 사용해서 만들떄는 컴포넌트 내부에서 멤버변수에(ex.myInput)에 createRef()를 담아주는 것
  myInput = createRef();

  handleFocus = () => {
    //createRef를 이용해서 설정한 DOM요소에 접근하려면 this.myInput.current 이용
    console.log('this', this);
    console.log('this.myInput.current', this.myInput.current); // this.myInput.current <input type=​"text">​
    console.log(this.myInput.focus); //undefined
    this.myInput.current.focus();
  };
  render() {
    return (
      <>
        <p>(클래스형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
        {/* 클래스형에서는 ref를 콜백함수 형태로 사용함, this : 해당하는 컴포넌트안에 접근하기 위해서 사용 */}
        <input type="text" ref={this.myInput} />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}
