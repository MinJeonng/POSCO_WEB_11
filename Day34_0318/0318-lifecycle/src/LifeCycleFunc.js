/*
함수형 컴포넌트에서 useEffect()를 사용해서 생애주기 작업 처리
채워진 값이 업데이트 될때만 동작 : Update
*/
import React, { useState } from 'react';
import LifeCycleFuncChild from './LifeCycleFuncChild';

export default function LifeCycleFunc() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumberState = () => {
    setNumber(number + 1);
  };
  const changeVisibleState = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <button onClick={changeNumberState}>Plus</button>
      <button onClick={changeVisibleState}>On/Off</button>

      {
        //visible값이 true일때만 값을 넘겨라!!
        visible && <LifeCycleFuncChild number={number} />
      }
    </div>
  );
}
