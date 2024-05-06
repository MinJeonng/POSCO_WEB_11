//함수형 컴포넌트
import { useState } from 'react';
export default function Counter() {
  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber(number + 1);
  };
  const alertMsg = (msg) => {
    alert(`${msg} 너무! 현재 숫자는 ${number}`);
  };

  const handleEvent = (e) => {
    //이거 콘솔창에 어떻게 뜨는지도 같이 표기
    console.log('e.target', e.target);
    console.log('e.currentTarget', e.currentTarget);
  };

  /*
 currentTarget : 이벤트 핸들러가 있는 요소(여기선 button이 같이 나오는 것 과 같음)
target : 부모로부터 이벤트가 위임되어 발생하는 자식의 위치, 즉 내가 클릭한 자식 요소(여기선 span태그가 나타나는 것)
 */

  return (
    <div>
      <h2>Function Component Event</h2>
      <h3>{number}</h3>

      {/* 힘수에 인자가 없는경우, 함수 이름만 전달 */}
      <button onClick={increase}>+1</button>

      {/* 함수에 인자가 있는 경우, 익명함수 처리 */}
      <button onClick={() => alertMsg('졸려용')}>alert출력</button>

      {/* e.target vs e.currentTarget 차이*/}
      <button onClick={handleEvent}>
        <span>handle Event</span>
      </button>
    </div>
  );
}
