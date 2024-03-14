import logo from './logo.svg';
import './App.css';
import DrinkList from './DrinkList';

function App() {
  const drinkName = '아메리카노';
  const drinkName_1 = '카페라떼';
  const drinkName_2 = '초코라떼';
  const drinkName_3 = '망고 블렌디드';
  const drinkName_4 = '딸기 요거트 블렌디드';
  const drinkName_5 = '유자 블렌디드';
  const price = '4000원';
  return (
    <div className="App">
      <DrinkList
        drinkName={drinkName}
        price={price}
        drinkName_1={drinkName_1}
        drinkName_2={drinkName_2}
        drinkName_3={drinkName_3}
        drinkName_4={drinkName_4}
        drinkName_5={drinkName_5}
      />
    </div>
  );
}

export default App;
