import './App.css';
import RefSample1 from './RefSample1';
import RefSample2 from './RefSample2';

function App() {
  return (
    <div className="App">
      {/* 클래스형 컴포넌트 : ref 사용 - 1. 콜백함수 사용 */}
      <RefSample1 />
      <hr />
      {/* 클래스형 컴포넌트 : ref 사용 - 2. createRef */}
      <RefSample2 />
    </div>
  );
}

export default App;
