console.log('안녕');

const msg: string = '타입스크립트 배워보자!';
const num: number = 1000;
console.log(msg);
console.log(num);

function sum(x: number, y: number): number {
  //뒤에다가 :type 을 해주면 return 값이 :뒤의 type이 될거다라는걸 알려줌
  return x + y;
}
console.log(sum(10, 30));
