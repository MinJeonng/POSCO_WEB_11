import React, { useReducer } from 'react';

// UseReducerEx
// 상태관리
// 아래처럼 reducer, initState는 다른파일에 있어도 상관없음
const initState = { value: 0 };

const reducer = (prevState, action) => {
  //여기에 정의된 값으로 state 업데이트 가능
  console.log('prevState', prevState); //prevState {value: 0}
  console.log('action', action); //action INCREMENT -> plus 버튼을 누르면

  switch (action) {
    //만약 객체안에 넣어서 dispatch할때 진행하게 되면 action.type 이렇게 쓰면됌
    case 'INCREMENT':
      return { value: prevState.value + 1 }; //state 업데이트 어떻게 할지에 대한 거니까 이 함수에 정의하는 것

    case 'DECREMENT':
      return { value: prevState.value - 1 };

    case 'RESET':
      return { value: 0 };

    default:
      break;
  }
};

export default function UseReducerEx() {
  //reducer : state(상태)를 업데이트하는 함수, 업데이트를 어떻게 할지 정의해놓은 함수
  //dispatch : action을 발생시키는 함수(액션 : state가 어떻게 변경되어야 하는지에 대한 힌트), 상태를 변경시킬때 실질적으로 호출하는 함수
  //state : 현재 상태
  //initState : 초기값
  //useReducer : [state, dispatch]를 리턴함
  const [state, dispatch] = useReducer(reducer, initState);

  const increment = () => dispatch('INCREMENT'); //action은 상수처럼 대문자로 쓰는게 일반적
  const decrement = () => dispatch('DECREMENT');
  const reset = () => dispatch('RESET');

  /*
  const increment = () => dispatch({type:'INCREMENT'}); // 객체를 만들어서 여러개의 이벤트를 넣어도 된다! 업데이트 할때 추가로 넘겨야하는건 객체로 만들면됌
  참고로 type은 그냥 지정해준 것. 다른 key이름을 써도 당연히 상관없음
   */
  return (
    <div>
      <h1>UseReducerEx</h1>
      {/* 지금 초기값을 객체로 넣었기때문에 . 으로 value에 접근 */}
      <h2>{state.value}</h2>
      <button onClick={increment}>plus</button>
      <button onClick={decrement}>minus</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
