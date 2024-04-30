import { Component } from 'react';

//클래스형 컴포넌트
// Component를 꼭 상속받아야한다.
class ClassComponent extends Component {
  //클래스 컴포넌트는 render 함수 필수
  render() {
    console.log('props : ', this.props);
    const { name } = this.props;
    return (
      <>
        <div>
          {/* props에 접근할때는 this 사용 */}
          <h2>행복한 하루~ {name}</h2>
        </div>
      </>
    );
  }
}

export default ClassComponent;
