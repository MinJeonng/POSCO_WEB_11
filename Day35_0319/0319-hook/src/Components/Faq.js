//자주 묻는 질문
import React from 'react';
import useToggle from '../hooks/useToggle';

export default function Faq() {
  const [isFaqOpen, setIsFaqOpen] = useToggle();
  return (
    <div>
      <h1>custom hook (UseToggle) ex</h1>
      <div onClick={setIsFaqOpen} style={{ cursor: 'pointer' }}>
        Q. react에서 커스텀 훅을 만들 수 있나요?
      </div>
      {/* 대답을 누르면 열리는거가 밑에 */}
      {isFaqOpen && <div>A. 네 그럼요 가능합니다.</div>}
    </div>
  );
}
