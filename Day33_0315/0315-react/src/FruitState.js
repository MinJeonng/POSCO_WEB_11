//과일 선택하는 실습 두번째 방법
import { useState } from 'react';
import ResultFruit from './ResultFruit';
import Select from './Select';
import InputFruit from './InputFruit';

export default function FruitState() {
  const [data, setData] = useState({
    fruit: '포도',
    background: 'black',
    color: 'white',
    content: 'text',
  });
  return (
    <>
      {/* props로 setData함수를 부모에게서 자식으로 넘겨줌 */}
      {/* 부모의 내용을 자식에게 넘겨주고 싶으면 아래의 방법 */}
      <Select setData={setData} />
      <InputFruit setData={setData} />
      <ResultFruit data={data} />
    </>
  );
}
