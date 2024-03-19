import './App.css';
import Faq from './Components/Faq';
import Form from './Components/Form';
import FormPrac from './Components/FormPrac';
import UseCallbackEx from './Components/UseCallbackEx';
import UseMemoEx from './Components/UseMemoEx';
import UseReducerEx from './Components/UseReducerEx';

import FaqPrac from './Components/FaqPrac';

function App() {
  const faqs = [
    {
      question: 'React에서 커스텀 훅을 만들 수 있나요?',
      answer: '네 그럼요 가능합니다.',
    },
    {
      question: 'useEffect 훅은 무엇인가요?',
      answer:
        '컴포넌트가 렌더링될 때마다 특정 작업을 실행할 수 있게 해주는 Hook입니다.',
    },
    // 더 많은 FAQ 항목 추가 가능
  ];
  return (
    <div className="App">
      <FaqPrac faqs={faqs} />
      <hr />
      <UseMemoEx />
      <hr />
      <UseCallbackEx postId={9} />
      <hr />
      <UseReducerEx />

      <hr />
      <Faq />

      <hr />
      <Form />
      <hr />
      <FormPrac />
    </div>
  );
}

export default App;
