//only TypeScript type

//Tuple
//순서와 개수가 있는 배열
//하나하나 타입들을 지정해야함
let drink: [string, number] = ['사이다', 1000];
drink[0] = '콜라'; //인덱스 번호로 접근가능 수정도 가능
drink.push('환타'); //값이 추가가 된다. : tuple 한계
console.log(drink);

//readonly : 요소 타입 순서와 길이 고정
const drink2: readonly [string, number] = ['사이다', 1000];
//drink2.push('웰치스') // readonly에는 push 불가

//enum
enum Auth { //숫자 열거형
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe { //문자 열거형
  americano = '아메리카노',
  latte = '라떼',
}

//해당 값에 접근하기 위해서
console.log('guest', Auth.guest);
console.log('latte', Cafe.latte);

enum Cake { //enum에서 값을 쓰지 않으면 숫자형으로 취급해서 가장 위에요소부터 0으로 할당
  chocolate,
  vanilla,
  strawberry,
}

enum Cake2 {
  chocolate,
  vanilla,
  strawberry = '딸기',
}
console.log(Cake2.strawberry); //혼용도 가능

//any
//명시적으로 쓰이는 경우
let val: any;
val = true;
val = 1;

//암묵적으로
let val2;
val2: false;
