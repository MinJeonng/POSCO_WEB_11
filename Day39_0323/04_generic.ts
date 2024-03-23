// generic
// 선언할 때, 타입을 지정하기 어려운 케이스가 존재
// - 선언할땐 알수없지만 호출해서는 명확할테니, 데이터 타입을 외부에서 지정하겠다!
// - 함수를 호출할떄나 값을 넘겨줄떄 그때 타입을 명시하겠다는 의미 = 생성 시점에 타입을 명시
// => 재사용성 증가
// ===> 타입을 변수처럼 사용한다
// <T> 형태로 주로 사용

function numArrLen(arr: number[]): number {
  return arr.length;
}
function strArrLen(arr: string[]): number {
  return arr.length;
}
console.log(numArrLen([2, 3, 4, 5]));
console.log(strArrLen(['lsls', 'rere']));

//<T> 를 이용해서 매개변수를 선언하는 공간을 하나 더 만든다!
// T => type만 올 수 있음
function arrLen<T>(arr: T[]) {
  return arr.length;
}

console.log(arrLen<number>([1, 3, 4, 5])); //arrLen의 넘버 타입이 들어간게 출력되는 것.
console.log(arrLen<string>(['34', '23'])); //이건 정수 타입으로 들어가서 출력되는 것

console.log(arrLen<string | number>(['1', 3])); //이렇게 여러개 타입이 들어갈 수도 있음

//퀴즈
//두개의 타입을 쓸 수 있음
function printSome<T, t>(x: T, y: t) {
  console.log(x, y);
}
printSome<string, number>('he', 1);

//interface& generic
interface Phone<T> {
  company: string;
  createdAt: Date;
  option: T;
}
type iphoneOption = {
  color: string;
  storage: number;
};
const iphone: Phone<iphoneOption> = {
  company: 'apple',
  createdAt: new Date('2024-03-23'),
  option: {
    //option은 제너릭으로 정의했으니까 그 제너릭이 객체니까
    color: 'black',
    storage: 128,
  },
};
type galaxyOption = {
  color: string;
  isAI: boolean;
};
const galaxy: Phone<galaxyOption> = {
  company: 'samsung',
  createdAt: new Date('2024-03-23'),
  option: {
    color: 'pink',
    isAI: true,
  },
};
console.log(iphone, galaxy);
