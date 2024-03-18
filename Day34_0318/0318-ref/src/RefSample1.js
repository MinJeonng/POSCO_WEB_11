//클래스형은 참고용으로만 보고, 함수형에 더 집중!
import { Component } from 'react';
class RefSample1 extends Component {
  handleFocus = () => {
    //버튼을 클릭했을때 발생하는 이벤트
    // input에 포커스 처리하는 기능
    console.log('this', this); // this RefSample1 {props: {…}, context: {…}, refs: {…}, updater: {…}, handleFocus: ƒ, …}
    console.log('this.myInput', this.myInput); //this.myInput <input type=​"text">​
    this.myInput.focus();
  };
  //클래스형은 render가 필요
  render() {
    return (
      <>
        <p>(클래스형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
        {/* 클래스형에서는 ref를 콜백함수 형태로 사용함, this : 해당하는 컴포넌트안에 접근하기 위해서 사용 */}
        <input
          type="text"
          ref={(ref) => {
            this.myInput = ref; //해당하는 컴포넌트의 myInput이라는 멤버변수가 하나 생성됌, 버튼 클릭시 input태그를 선택하는 값으로 사용됌
          }}
        />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}
export default RefSample1;
