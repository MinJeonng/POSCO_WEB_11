let numbers = [1, 2, 3, 4, 5, 6];
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple'];

//기본 for문
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
//for of문(배열안의 값이 온다.)
//for({}안에서 사용할 변수(값) of 배열)
for (let number of numbers) {
    console.log(number);
}
for (let color of colors) {
    console.log(color);
}
//forEach() 문 - 함수임
//변수명.forEach({}안에서 사용할 변수, 인덱스, 배열) {}
//forEach안에 또다른 함수가 들어가는거라서 () 안에 들어가야함
//익명함수는 function이 아닌 다른말 쓰면 안됌 꼭 function이라고 써줘야함.
//numbers.forEach(function() {})
// numbers.forEach ( () => {} )
numbers.forEach((number, idx, arr) => {
    console.log(number, idx, arr);
});
colors.forEach((i, idx, arr) => {
    console.log(i, idx, arr);
});
colors.forEach(function (i, idx) {
    console.log(i, idx);
});

//filter()
let arr;
//filter() 조건에 부합하는 배열 요소만 반환
//arr = numbers.filter(function({}안에 사용할 변수) {
// filter() {}안에는 조건식이 나오는게 일반적
// })

arr = numbers.filter((number) => {
    return number > 3; //중괄호 안에는 필터링 할 조건을 넣어준다고 생각하면 된다.
});

console.log(arr);

//화살표 함수의 특징 중 하나는 {return을 }생략가능
// 중괄호 없애면서 return 도 지울 수 있음
arr2 = colors.filter((color) => color.length > 5);
console.log(arr2);

//배열의 합
//배열안의 값을 더할때는 그 더한 값의 변수는 전역변수로 해야한다,(sum1,sum2 등)
let sum1 = 0;
for (let number of numbers) {
    sum1 += number;
}
console.log(sum1);

//보충
//for in문 - 배열안의 index가 온다.
//보통 객체(키, value)에 주로 사용.
//for({}안에 사용할 index of 배열){}
let colors1 = [{ color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
for (let index in colors1) {
    console.log(colors1[index]);
}

//do - while 문 (적어도 한번은 실행된다!!, 빨간색은 무조건 나오는 것)
let i = 0;
do {
    console.log(colors[i]);
    i++;
} while (i < colors.length);

//실습1 - 1부터 100까지의 배열을 for문을 이용해서 만들고 배열의 합을 구해라.
//For문
const arr1 = [];
let sum = 0;
let sum2 = 0;
let sum3 = 0;
for (let num1 = 1; num1 <= 100; num1++) {
    arr1.push(num1);
}
console.log(arr);

for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
}
console.log(sum);

//For of 문 - 다시 공부(리더님비교필수)
for (let number of arr1) {
    sum2 += number;
}
console.log(sum2);

//forEach문
arr1.forEach((number) => {
    sum3 += number;
});
console.log(sum3);

//실습2
//여기서는 비교대상이 더 긴것을 기준으로 한건데, 만약 바꾸고 싶으면 비교대상 바꿔서 하면 된다.

//sol1
same = [];
diff = [];
let fruits1 = ['사과', '딸기', '파인애플', '수박', '참외', '오렌지', '자두', '망고'];
let fruits2 = ['수박', '사과', '참외', '오렌지', '파인애플', '망고'];

for (let fruit of fruits1) {
    if (fruits2.includes(fruit)) {
        same.push(fruit);
    } else {
        diff.push(fruit);
    }
}
console.log('same', same);
console.log('diff', diff);

//sol2
same1 = [];
diff2 = [];

fruits1.forEach((fruit) => {
    if (fruits2.includes(fruit)) {
        same1.push(fruit);
    } else {
        diff2.push(fruit);
    }
});
console.log('same', same1);
console.log('diff', diff2);

//sol3
let same3 = fruits1.filter((fruits) => fruits2.includes(fruits));
console.log(same3);
let diff3 = fruits1.filter((fruits) => !fruits2.includes(fruits));
console.log(diff3);

//sol4

const same4 = [];
const diff4 = [];
for (let fruit of fruits1) {
    if (fruits2.includes(fruit) ? same4.push(fruit) : diff4.push(fruit));
}
console.log(same4);
console.log(diff4);
