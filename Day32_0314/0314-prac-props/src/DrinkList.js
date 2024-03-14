import { useState } from 'react';

const DrinkList = ({
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
    setSelectedDrinks((prevDrinks) => {
      // 이미 선택된 음료인지 확인
      if (!prevDrinks.includes(drink)) {
        // 선택된 음료가 배열에 없으면 추가
        return [...prevDrinks, drink];
      }
      // 이미 배열에 있으면 기존 상태를 유지
      return prevDrinks;
    });
  };

  return (
    <>
      <h3>메뉴판</h3>
      <div className="selectMenu">
        {selectedDrinks.length > 0
          ? `${selectedDrinks.join(', ')}를 고르셨군요!`
          : '원하는 음료를 골라주세요!'}
      </div>
      <br />
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
                <img src={`/${drink}.jpeg`} alt={drink} />
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

export default DrinkList;
