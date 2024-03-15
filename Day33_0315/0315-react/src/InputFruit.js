import React from 'react';

export default function InputFruit({ setData }) {
  return (
    <div>
      내용 :{' '}
      <input
        type="text"
        placeholder="내용을 입력해주세요."
        onChange={(e) => {
          // 객체 값을 바꿔줄땐 ... spread연산자 이용
          // ...기본있는값, 뒤에바꿔줄값
          //prev가 의미하는 바 : state이전의 값
          setData((prev) => {
            return { ...prev, content: e.target.value };
          });
        }}
      />
    </div>
  );
}
