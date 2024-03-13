import { useState } from 'react';
const SayFunction = () => {
  //배열 비구조화 할당
  const [message, setMessage] = useState('welcome');
  console.log(useState('welcome')); //요소가 두개인 배열을 return, ['welcome', ƒ]
  //'welcome' : message 변수의 초기값으로 들어감
  // useState(초기값) - 숫자, 문자, 배열 등등 자유롭게 넣을 수 있음
  // f : setMessage() - message state 값을 바꾸는 함수

  const onClickEnter = () => {
    setMessage('안녕하세요~'); //이 메시지가 문자열이니까 문자열로 널어준 것, message자체가 문자열이니까 문자열을 넣어준것
    //초기값을 (message)를 숫자로 하면 여기도 숫자로 하는 것
  };
  const onClickLeave = () => {
    setMessage('빠이빠이~');
  };

  const alertMsg = (e, msg) => {
    console.log(e.target); //버튼 요소가 출력이 됌, 이벤트 객체
    setMessage(`${msg} 입니다!`);
  };
  return (
    <div>
      {/* 초기값을 welcome이라고 햇으니까 welcome이 제일 처음 뜸*/}
      <h1>{message}</h1>
      {/* 원래는 onclick에서 함수쓰면 onClinkEnter() 처럼 ()를 써줬어야 했는데, react에선 너무 많은 rerender가 일어나므로 ()를 빼고 사용해야한다. */}
      {/* HTML : onclick = "onClickEnter()" -> 문자열 형식으로 호출문 등록, ()있다는건 바로 실행된다는 것 */}
      {/* JS : addEventListener('click',onClickEnter) -> 괄호없이 함수를 바로 실행하지 않고 클릭이 발생했을때 함수가 호출되도록 함 */}
      {/* react : onClick = {onClickEnter} =---> 함수이름을 쓸거면 ()를 붙이면 안됌, 함수 바로 시행안되게!!, 클릭했을때 함수가 호출되도록 해주는 것 */}
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>

      {/* 매개변수가 있을땐 화살표 함수 이용해서 익명함수 처리
        함수에 인자 보내기 : 인자가 있는 함수는 익명함수로 감싸서 처리, 그렇게 되면 실행이 바로 안되고 클릭햇을때 함수가 실행되게 할 수 있는 것*/}
      <button onClick={(e) => alertMsg(e, '메시지')}>alert 출력</button>
    </div>
  );
};
export default SayFunction;
