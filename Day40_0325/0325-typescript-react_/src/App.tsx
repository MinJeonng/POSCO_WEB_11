import LifeCycle from './components/LifeCycle';
import Student from './components/Student';
import TodoList from './components/TodoList';

function App() {
  const handleClick = (name: string, grade: number) => {
    console.log(`안녕 나의 이름은 ${name}이고, ${grade}학년이야`);
  };
  return (
    <div className="App">
      <Student name="김민정" grade={10} part="CS" handleClick={handleClick} />{' '}
      {/* 원하는걸 props로 넘겨주기 */}
      <Student name="김민정" grade={10} handleClick={handleClick} />
      {/* optional 한 part이므로 값을 안줘도 에러가 나진 않음 */}
      <hr />
      <TodoList />
      <hr />
      <LifeCycle />
    </div>
  );
}

export default App;
