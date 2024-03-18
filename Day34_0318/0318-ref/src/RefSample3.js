//함수형 ref

import React, { useRef } from 'react';

export default function RefSample3() {
  //1. ref 객체 생성
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <p>(함수형 컴포넌트) 버튼 클릭 시 inputdp focus 처리</p>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>focus</button>
    </div>
  );
}
