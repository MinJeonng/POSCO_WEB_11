import logo from './logo.svg';
import './App.css';
import Prac from './Prac';
import PracComponent from './PracComponent';

function App() {
  const food = '로제떡볶이';
  const title = '센과 치히로의 행방불명';
  const author = '미야자키 하야오';
  const price = '12,000원';
  const type = '소설';

  // Or
  //이렇게 변수를 객체로 만들어서 할 수 있음
  //2.
  const book = {
    title: '센과치히로',
    author: '미야자키 하야오',
  };

  return (
    <div className="App">
      <Prac food={food} />
      <hr />
      {/* 여기서 바로 title = "센과 치히로의 행방불명" 이렇게 변수 생성안하고 바로 쓸 수 있음 */}
      <PracComponent title={title} author={author} price={price} type={type} />

      {/* 2. */}
      <PracComponent bool={book} />
    </div>
  );
}

export default App;
