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
val2 = false;

//사용자 정의 타입
//1. interface
interface Student {
  name: string;
  isPassed: boolean;
}
//student라는 타입의 정의된 interface를 갖다쓰면 되는 것
const student1: Student = {
  name: 'codingon',
  isPassed: true,
  // arr : 'seoul' // 만약 interface에 없는거 추가하려고 하면 당연히 에러가 난다
};
const student2: Student = {
  name: 'lulu',
  isPassed: false,
};

//enum 사용
enum Score {
  Aplus = 'A+',
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
}

//interface 상속
// BaseballClub 라는 interface를 만들고 Student를 상속받겠다
interface BaseballClub extends Student {
  position: string;
  readonly height: number; //이 값은 바꿀 수 없게됌
  backNumber?: number; // ? : 있어도 되고 없어도 되서 없어도 에러 안뜸
  // score: Score; //enum을 명시해줄 수 있다.
  [grade: number]: Score; //학년 : 점수
}

const otani: BaseballClub = {
  name: '오타니',
  isPassed: true,
  position: '타자',
  height: 198, //interface에 정의된 값이 모두 선언되지 않으면 error , 즉 하나라도 값이 빠지면 에러
  // score: Score.A, //enum 같은 경우는 . 으로 가져오면 된다. 다 쓰고 싶으면  score: Score 해도 된다.
  10: Score.A, // '10': 'A', 라고 뜸ㄴㄴ
};

otani.position = '투수'; //이런식으로 바꾸면 됌
otani['isPassed'] = false;

console.log(otani);
