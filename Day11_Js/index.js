// HTML 요소 내용 읽고 쓰기
const text = document.getElementById('text');
console.log(text);
text.textContent = 'hi';
text.innerText = '안녕하세요';
text.innerHTML = '여기는 <b>첫번째</b> 태그입니다.';

/**
 * textContent : 요소 안에 텍스트를 가져오거나 수정
 * innerText : 요소안에 텍스트를 가져오거나 수정
 * textContent vs innerText
 * - textContent : 공백 문자 그대로 반환, IE9 이전 버전 사용불가
 * - innerText : 남는 공백 문자 제거, table, tbody, tr 등 테이블 요소 수정 불가
 * innerHTML : 입력된 문자열을 HTML 형식으로 반환
 */

// idList는 없음. 어차피 하나니까.

//classList
//요소에 추가해줄 수 있음
// 먼저 html에서 id를 읽어주고 여기있는 js를 읽고 css에 있는 title 클래스를 넣어준 것. //순서중요

// 이부분 할떄 순서대로 하면서 검사에서 어떤식으로 변화하는지도 블로깅
text.classList.add('title'); //클래스 추가
text.classList.remove('title'); // css 적용된거 사라짐
text.classList.toggle('title-big');
console.log(text.classList.contains('title-big'));

/**
 * add : 클래스추가
 * remove : 클래스 제거
 * toggle : 클래스가 있으면 제거, 없으면 추가(앞에 더 자세한 설명)
 * contains : 해당 클래스가 있는지 boolean으로 값 반환 //나중에 조건문으로 사용 가능
 */

//setAttribute : html 요소 속성 추가
const link = document.getElementById('link'); //여기선 속성이 없음
console.log(link);
link.setAttribute('href', 'https://www.naver.com/');
const img = document.getElementById('image');
img.setAttribute('src', 'img.jpg');
img.setAttribute('width', '200');
const input = document.getElementById('input');
input.setAttribute('placeholder', '이름을 입력하세요.');
