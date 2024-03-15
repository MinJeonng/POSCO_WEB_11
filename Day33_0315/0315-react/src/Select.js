import React from 'react';

// setData를 받아옴
export default function Select({ setData }) {
  return (
    <div>
      과일 :
      <select
        onChange={(e) => {
          // 객체 값을 바꿔줄땐 ... spread연산자 이용
          // ...기본있는값, 뒤에바꿔줄값
          //prev가 의미하는 바 : state이전의 값
          setData((prev) => {
            return { ...prev, fruit: e.target.value };
          });
        }}
      >
        <option disabled selected>
          과일선택
        </option>
        <option value="포도">포도</option>
        <option value="복숭아">복숭아</option>
        <option value="바나나">바나나</option>
      </select>{' '}
      배경색 :
      <select
        onChange={(e) => {
          // 객체 값을 바꿔줄땐 ... spread연산자 이용
          // ...기본있는값, 뒤에바꿔줄값
          //prev가 의미하는 바 : state이전의 값
          setData((prev) => {
            return { ...prev, background: e.target.value };
          });
        }}
      >
        <option disabled selected>
          배경색
        </option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
      </select>{' '}
      글자색 :
      <select
        onChange={(e) => {
          // 객체 값을 바꿔줄땐 ... spread연산자 이용
          // ...기본있는값, 뒤에바꿔줄값
          //prev가 의미하는 바 : state이전의 값
          setData((prev) => {
            return { ...prev, color: e.target.value };
          });
        }}
      >
        <option disabled selected>
          글자색
        </option>
        <option value="black">검은색</option>
        <option value="white">흰색</option>
      </select>
    </div>
  );
}
