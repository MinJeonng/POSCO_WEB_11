import { useState } from 'react';
const Practice = ({
  drinkName,
  price,
  drinkName_1,
  drinkName_2,
  drinkName_3,
  drinkName_4,
  drinkName_5,
}) => {
  const [selectedDrinks, setSelectedDrinks] = useState([]);

  const selectDrink = (drink) => {
    setSelectedDrinks((prev) => {
      if (!prev.includes(drink)) {
        return [...prev, drink];
      }
      return prev;
    });
  };
  return (
    <>
      <div className="selectMenu">
        {selectedDrinks.length > 0
          ? `${selectedDrinks.join(', ')}를 고르셨군요!`
          : '원하는 음료를 골라주세요'}
      </div>
      <div>
        <button onClick={() => setSelectedDrinks('')}>초기화</button>
      </div>
      <table border="1" cellSpacing="2" cellPadding="8">
        <thead>
          <tr>
            <td>음료</td>
            <td>음료명</td>
            <td>가격</td>
            <td>선택</td>
          </tr>
        </thead>
        <tbody>
          {[
            drinkName,
            drinkName_1,
            drinkName_2,
            drinkName_3,
            drinkName_4,
            drinkName_5,
          ].map((drink, index) => (
            <tr key={index}>
              <td>
                <img src={`/${drink}.jpeg`} alt={drink}></img>
              </td>
              <td>{drink}</td>
              <td>{price}</td>
              <td>
                <button onClick={() => selectDrink(drink)}>선택</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Practice;
