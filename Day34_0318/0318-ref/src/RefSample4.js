//로컬변수로 Ref값을 이용
import React, { useRef, useState } from 'react';

export default function RefSample4() {
  const idRef = useRef(1); //초기값을 1
  const [id, setId] = useState(10); //state값의 초기값은 10

  let idVar = 20;

  const plusIdRef = () => {
    console.log(idRef.current);
    idRef.current += 1; // 증가는 되지만, rerendering이 되지 않아서, 화면이 변하지 않아서 똑같이 1로만 보임 -> 이런 경우는 실시간 반영이 필요없는 경우 사용하자.
  };
  const plusIdState = () => {
    setId(id + 1); //기존값에 + 1
    //state 값으론 rerendering이 된다.
  };
  return (
    //새로고침 하면 모든 값이 다 초기화된다.
    <div>
      <h2>Ref 샘플 - 로컬 변수</h2>
      <h3>{idRef.current}</h3>
      {/* rerendering이 일어나도 값이 초기화 되지않음 */}
      <button onClick={plusIdRef}>plus Ref</button>

      <h2>{id}</h2>
      <button onClick={plusIdState}>plus State</button>

      <h2>{idVar}</h2>
      <button
        onClick={() => {
          idVar += 1;
          console.log(idVar); //증가는 되지만 rerendering이 되지 않음
          //rerendering이 일어나면 일반변수의 값은 초기화 된다.
        }}
      >
        plus 일반 변수
      </button>
    </div>
  );
}
