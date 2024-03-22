//redux 사용
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { minus } from './store/counterReducer';

export default function App2() {
  //store에 있는 상태를 가져와야한다.
  const number = useSelector((state) => state.counter.number); //state꺼를 가져와서 number값을 사용하겠다는 의미
  // console.log(useSelector((state) => state.counter.number));

  return (
    <div>
      <h1>React Redux Ex</h1>
      <h2>number : {number}</h2>
      <Box1 />
    </div>
  );
}
const Box1 = () => {
  return (
    <div className="box">
      <h2>Box1 </h2>
      <Box2 />
    </div>
  );
};
const Box2 = () => {
  return (
    <div className="box">
      <h2>Box2</h2>
      <Box3 />
    </div>
  );
};
const Box3 = () => {
  return (
    <div className="box">
      <h2>Box3</h2>
      <Box4 />
    </div>
  );
};
const Box4 = () => {
  const dispatch = useDispatch();
  return (
    <div className="box">
      <h2>Box4</h2>
      <button onClick={() => dispatch({ type: 'counter/PLUS' })}>PLUS</button>
      {/* 위의 방법처럼 원래 했는데, 저렇게 하게되면 해당 state를 다른 컴포넌트에서 쓰기에 불편하니까 reducer에서 함수로 정의해준 아래거와 같이 쓰면 된다. */}
      {/* 그대신 쓸때는 import해오기 */}
      <button onClick={() => dispatch(minus())}>MINUS</button>
    </div>
  );
};
