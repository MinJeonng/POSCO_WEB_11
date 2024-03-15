import { useState } from 'react';

const ColorChange = () => {
  const red = '빨간색';
  const blue = '파란색';
  const [message, setMessage] = useState('검정색 글씨');
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
      <button onClick={changeRed}>빨간색</button>
      <button onClick={changeBlue}>파란색</button>
    </>
  );
};

export default ColorChange;
