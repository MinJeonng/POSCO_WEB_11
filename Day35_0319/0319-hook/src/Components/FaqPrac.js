import React from 'react';
import useToggle from '../hooks/useToggle';

//여러개의 질문을 넣을 수 있음

// FAQ 항목을 표시하고 토글하는 컴포넌트
function FaqItem({ question, answer }) {
  const [isOpen, toggleOpen] = useToggle(false); // 각 FAQ 항목의 토글 상태를 관리

  return (
    <div>
      <div onClick={toggleOpen} style={{ cursor: 'pointer' }}>
        Q. {question}
      </div>
      {isOpen && <div>A. {answer}</div>}
    </div>
  );
}

// Faq 컴포넌트는 여러 FAQ 항목을 props로 받는다.
export default function Faq({ faqs }) {
  return (
    <div>
      <h1>Custom Hook (useToggle) Example</h1>
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
