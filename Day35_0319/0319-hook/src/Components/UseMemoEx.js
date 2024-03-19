import React, { useMemo, useState } from 'react';

//useMemo
// - 메모이제이션으로 수행한 연산값을 기억함으로써 불필요한 연산 최소화
//- 리렌더링 될때마다 다시 실행해서 다시 호출하는게 아니라 관련된 함수가 변할때만 실행되어서 불필요한 연산을 줄이게끔 도와줌
export default function UseMemoEx() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  //[before]
  /*
  //임의의 큰 연산을 하는 함수가 있다고 가정
  //버튼을 누를때에도, Input 입력할때에도 연산이 이루어짐(calc 함수 호출)
  //useMemo 렌더링 과정에서 특정 값을 기억해서 바뀔때만 연산되도록 최적화
  const calc = () => {
    console.log('열심히 계산중..');
    for (let i = 0; i < 10000000; i++) {}
    return count ** 2;
  };

  //count값이 바뀌든 안바뀌든 상관없이 상관없는 함수도 계속 실행됌(input이 실행되는데 calc도 실행됌)
  
  return (
    <div>
      <h2>UseMemoEx</h2>
      <button onClick={() => setCount(count + 1)}>plus</button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>count : {count}</div>

      <div>calc : {calc()}</div>
    </div>
  );
  */

  //[after]
  // count 의 값이 바뀔때만 함수를 실행
  //input 상태가 바뀌면 컴포넌트는 리렌더링, 이때 calc는 연산되지 않게 처리
  const calc = useMemo(() => {
    console.log('열심히 계산중..'); //input만 쓸때에 count가 변하지 않음을 확인할 수 있음
    for (let i = 0; i < 10000000; i++) {}
    return count ** 2;
  }, [count]);
  return (
    <div>
      <h2>UseMemoEx</h2>
      <button onClick={() => setCount(count + 1)}>plus</button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>count : {count}</div>

      <div>calc : {calc}</div>
    </div>
  );
}
