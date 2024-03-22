//useState를 활용해서 props 지옥은 어떤건지 실습
import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(10);
  const plus = () => setNumber(number + 1);
  const minus = () => setNumber(number - 1);
  return (
    <div className="App">
      <h1>React Redux 사용 전</h1>
      <Box1 number={number} plus={plus} minus={minus} />
    </div>
  );
}
//box1에서 사용되는 plus,minus를 box4의 button에서만 사용하고 싶어도, useState는 자식들의 props를 계속해서 받아서 진행할 수 밖에 없다.
const Box1 = ({ number, plus, minus }) => {
  return (
    <div className="box">
      <h2>Box1 : {number} </h2>
      <Box2 number={number} plus={plus} minus={minus} />
    </div>
  );
};
//box순서에 따라서 각각에 자식요소
const Box2 = ({ number, plus, minus }) => {
  return (
    <div className="box">
      <h2>Box2 : {number} </h2>
      <Box3 number={number} plus={plus} minus={minus} />
    </div>
  );
};

const Box3 = ({ number, plus, minus }) => {
  return (
    <div className="box">
      <h2>Box3 : {number} </h2>
      <Box4 number={number} plus={plus} minus={minus} />
    </div>
  );
};
//box4에 { number, plus, minus } 이걸 받기위해선 위의 상위요소들도 props를 받았어야 함
const Box4 = ({ number, plus, minus }) => {
  return (
    <div className="box">
      <h2>Box4 : {number} </h2>
      <button onClick={plus}>PLUS</button>
      <button onClick={minus}>MINUS</button>
    </div>
  );
};
export default App;
