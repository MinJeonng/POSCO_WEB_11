import './App.css';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';
import Button from './Button';

function App() {
  const name = 1; //부모
  //여기에 변수가 있다고 하면 자식한테 값을 전달할 수 잇음
  return (
    <div className="App">
      {/* 부모가 가지고 있는 것을 아래의 자식에게 값을 전달할 수 있다. */}
      {/* 이 밑에 name = {} 이거가 props */}
      <FunctionComponent name={name} message={'끝나라'} />
      {/* 밑에서 name을 따로 안써주면 이 props가 기본값으로 써놓은 값을 가지고 가게됌, 즉, 여기선 홍길동이라고 나옴 */}
      <FunctionComponent message={'끝나라'} />
      {/* children은 자식요소에서 사용된다. */}
      {/* '자식내용' 이라고 쓴 부분은 props.children 인 자리어서 이 함수가 실행되는 파일에서 그냥 children이라고 해도 이 내용을 가지고 간다.*/}
      <FunctionComponent message={'끝나라'}>자식내용</FunctionComponent>
      {/* 함수형과 클래스형 중복 사용시 prop-types 하나만 뜨는 경우 발생 */}
      <FunctionComponent name={[1, 5, 3]} />
      <hr />
      <ClassComponent name={name} />
      <hr />
      {/* children의 요소는 <span>도 포함되는 것 */}
      <Button link="https://www.google.com">
        <span>Google</span>
      </Button>
    </div>
  );
}

export default App;
