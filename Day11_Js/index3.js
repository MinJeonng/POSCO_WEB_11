const root = document.getElementById('root');
//노드 생성 과정
const p = document.createElement('p'); //p태그가 만들어지기만 한 것
//<p></p>
p.textContent = '카페';
//<p>카페</p>
//<p> 내용 삽입

p.classList.add('append-p');
//<p class = "append-p">카페</p>
p.style.fontWeight = 'bold';
//<p class = "append-p" style = 'font-weight:bold'>카페</p>
console.log(p);

//노드 추가 과정
/**
 * append() : 노드 객체 또는 텍스트 추가, 한번에 여러개의 자식 요소 추가가능, 반환값이 없음
 * appendChild() : 노드 객체만 추가 가능, 한번에 하나씩 추가가능, 반환값이 있음
 * prepend() : 첫번째 자식으로 추가됌
 */

root.append(p);
//append는 맨 마지막으로 들어가기 떄문에 div보다 뒤에 보여지는 것
root.prepend(p); // 맨 위로 올라감

const target = document.getElementById('target');
// target.after(p); //p가 target의 다음형제로 추가됌

target.before(p);
// target이 원래 2번이었으니까 그 바로 앞에 형식으로 추가됌, target의 이전형제
//노드 삭제 과정
/**
 * remove() : 선택한 요소를 삭제
 * removeChild(자식노드): 선택한 요소의 자식을 삭제, 자식노드를 선택해줘야함
 */

// target.remove(); //2번이 사라짐, 아예 보이지 않음
root.removeChild(p); //노드는 클래스명이 아니라 태그
