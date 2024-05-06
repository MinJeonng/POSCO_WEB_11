//실습 2번째
import { useState } from 'react';

const ColorChange = () => {
  const red = '빨간색';
  const blue = '파란색';
  const [message, setMessage] = useState('검정색 글씨'); //기본값이 검정색글씨인 것
  const [color, setColor] = useState('black');

  const changeRed = () => {
    setMessage(`${red} 글씨`);
    setColor('red');
  };
  const changeBlue = () => {
    setMessage(`${blue} 글씨`);
    setColor('blue');
  };
  return (
    <>
      {/* 동적 적용 */}
      <h3 style={{ color: color }}>{message}</h3>
      {/* ()를 하지 않는 이유는 ()를 하면 바로 실행되기때문에 안함 */}
      <button onClick={changeRed}>빨간색</button>
      <button onClick={changeBlue}>파란색</button>
    </>
  );
};

export default ColorChange;
