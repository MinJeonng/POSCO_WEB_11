//()안에는 각각의 이름만 쓰면 된다.
const ids = document.getElementById('kdt11_id');
console.log(ids);

const classes = document.getElementsByClassName('kdt11_class');
console.log(classes);

const names = document.getElementsByName('kdt11_name');
console.log(names);

const tags = document.getElementsByTagName('body');
console.log(tags);

//getElementById 말고도 id니까 #표시해주고 이름 써도 접근가능, 여기선 class인지, id인지 표기잘해줘야함. css선택자 입력하듯이
const queryIds = document.querySelector('#kdt11_id');
console.log(queryIds);

const queryclass = document.querySelector('.kdt11_class');
console.log(queryclass);

//하나만 출력
const queryclass1 = document.querySelector('.box');
console.log(queryclass1);

//모든 요소 출력
const queryAll = document.querySelectorAll('.box');
console.log(queryAll);
