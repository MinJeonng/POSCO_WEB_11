const target = document.getElementById('target'); //여기서 target을 기준으로 하겠다 선택
console.log(target);

const children = target.parentNode.children;
//target 기준으로 부모노드에 올라간다음에 그 노드의 모든 자식을 선택해라
// = 즉 형제노드를 선택해라
console.log(children);

//target 기준, 부모의 []안에 자식태그 선택
const first = target.parentNode.children[0];
console.log(first); //1

//target 기준, 부모선택
const parent = target.parentNode;
console.log(parent);

// target 기준으로 이전형제 선택
const prev = target.previousElementSibling;
console.log(prev);

//target 기준 다음 형제 선택
const next = target.nextElementSibling;
console.log(next);
