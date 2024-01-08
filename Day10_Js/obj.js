// 1970년 1월 1일 0시를 기준으로 시작(영국기준, UTC)
// 대한민국은 UTC+9
console.log(new Date()); //연월시분초 모두 출력된다.
const date = new Date();
console.log(date.getFullYear()); //해당 year가 출력
console.log(date.getMonth() + 1); // 이번달 하려면 +1 해줘야함. 월을 세는 수가 0월로 시작하므로
console.log(date.getDate()); //날짜
console.log(date.getDay()); // 요일 , 월요일이 1, 0 or 7은 일요일
console.log(date.getHours()); // 시간 출력
console.log(date.getTime()); //이렇게 나오는 값을 Timestamp라고 함 //1704708386185, 매초마다 달라짐
console.log(date.getMinutes()); // 분 출력
console.log(date.getMilliseconds()); //밀리초

console.log(
    `${date.getFullYear()}년 ${
        date.getMonth() + 1
    }월 ${date.getDate()}일 ${date.getHours()}시:${date.getMinutes()}분:${date.getSeconds()}초 `
); //2024년 1월 8일 19시:6분:26초

//Math
console.log(Math.PI);
console.log(Math.E);
console.log(Math.random()); //0~1사이의 난수생성
console.log(Math.round(1.4)); //반올림 //1
console.log(Math.floor(1.4)); //버림  //1
console.log(Math.ceil(1.4)); //올림  //2
console.log(Math.cbrt(2)); //세제곱근을 반환
