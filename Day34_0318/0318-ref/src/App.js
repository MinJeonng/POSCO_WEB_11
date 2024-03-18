import './App.css';
import RefPrac from './RefPrac';
import RefPrac2 from './RefPrac2';
import RefSample1 from './RefSample1';
import RefSample2 from './RefSample2';
import RefSample3 from './RefSample3';
import RefSample4 from './RefSample4';

function App() {
  return (
    <div className="App">
      {/* 클래스형 컴포넌트 : ref 사용 - 1. 콜백함수 사용 */}
      <RefSample1 />
      <hr />
      {/* 클래스형 컴포넌트 : ref 사용 - 2. createRef */}
      <RefSample2 />
      <hr />
      {/*  클래스형 : ref 사용 -3. createRef 실습 */}
      <RefPrac />
      <hr />
      {/* 함수형 : ref 사용 - 1. createRef */}
      <RefSample3 />
      <hr />
      {/* 함수형 : ref 사용 - 2. useRef사용 */}
      <RefSample4 />
      <hr />
      {/* 함수형 : ref 사용 -3. useRef 실습 */}
      <RefPrac2 />
    </div>
  );
}

export default App;
