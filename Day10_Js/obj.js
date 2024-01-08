// 1970년 1월 1일 0시를 기준으로 시작(영국기준, UTC)
// 대한민국은 UTC+9
console.log(new Date());
const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth() + 1); // 이번달 하려면 +1 해줘야함. 월수가 0월로 시작하므로
console.log(date.getDate()); //날짜
console.log(date.getDay()); // 요일 , 월요일이 1, 0 or 7은 일요일
console.log(date.getHours());
console.log(date.getTime()); //이렇게 나오는 값을 Timestamp라고 함
console.log(date.getMinutes());
console.log(date.getMilliseconds()); //밀리초

console.log(
    `${date.getFullYear()}년 ${
        date.getMonth() + 1
    }월 ${date.getDate()}일 ${date.getHours()}시:${date.getMinutes()}분:${date.getSeconds()}초 `
);

//Math
console.log(Math.PI);
console.log(Math.E);
console.log(Math.random()); //0~1사이의 난수생성
console.log(Math.round(1.4)); //반올림
console.log(Math.floor(1.4)); //버림
console.log(Math.ceil(1.4)); //올림
console.log(Math.cbrt(2)); //세제곱근을 반환
