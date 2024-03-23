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

//예제3번

function sum1(a: number, b: number) {
  return a + b;
}
console.log(sum1(5, 11));

//예제 4번
const sum2 = (
  a: number,
  b: number,
  c: number,
  d: number,
  e: number
): number => {
  return a + b + c + d + e;
};
console.log(sum2(1, 2, 3, 4, 10));
