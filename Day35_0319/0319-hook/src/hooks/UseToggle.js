//로직을 분리해서 함수로 쓰겠따!
//커스텀 훅

import React, { useState } from 'react';

//UseToggle 함수를 사용할때 initValue를 사용할수도 사용하지 않을수도 있다. 만약 사용하지 않으면 false반환
export default function UseToggle(initValue = false) {
  //value : toggle 상태
  //setValue : 트글 상태를 변화시키는 setter
  const [value, setValue] = useState(initValue);

  //토글 상태를 스위칭
  const toggleValue = () => {
    setValue(!value);
  };
  return [value, toggleValue]; //반환값이 배열
}
