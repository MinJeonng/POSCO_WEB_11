//예제 1번 - 블로깅x
const olimpic_newgame: readonly [object, boolean] = [
  {
    name: '쇼트트랙',
    type: '혼성계주',
  },
  true,
];

//예제 2번 - 블로깅x
interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}

//예제3번 - 블로깅x

function sum1(a: number, b: number) {
  return a + b;
}
console.log(sum1(5, 11));

//예제 4번 , 매개변수에 지정해두지 않고, 스프레드 연산자를 이용해서 배열에 넣어서 연산하게끔 만드는 방법
function sum2(...a: number[]) {
  let sum = 0;
  a.forEach((el) => (sum += el));
  return sum;
}
console.log(sum2(1, 2, 3, 4, 10));

//예제 5번

function arrElement<T>(arr: T[], index: number): T | boolean {
  //T : boolean -> 즉, boolean의 값이 나올 수도 있다..!
  if (index >= arr.length) return false;
  return arr[index];
}

console.log(arrElement<string>(['a'], 1)); //false // a는 0번째니까

console.log(arrElement([1, 2, 3], 2)); // 3
console.log(arrElement([1, 2, 3, 4, 5], 5)); // false

console.log(arrElement(['apple', 'banana', 'cherry'], 1)); // "banana"
console.log(arrElement(['apple', 'banana', 'cherry'], 3)); // false
