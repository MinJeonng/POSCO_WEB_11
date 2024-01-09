const text = document.getElementById('text');
text.innerHTML = '방명록입니다.';

let i = 2;
let writeFunc = () => {
    let user = document.getElementById('username').value; //작성자
    let content = document.getElementById('content').value; //내용
    let tbody = document.getElementsByTagName('tbody')[0]; //테이블의 body
    let tr = document.createElement('tr'); //한행을 제작
    //<tr></tr> 행을 만들어준 것. 태그를 통해
    let tdWriter = document.createElement('td'); //한 열을 제작
    let tdContent = document.createElement('td');
    let tdDate = document.createElement('td');
    let tdNum = document.createElement('td');
    //<td></td>
    tdWriter.textContent = user;
    tdContent.textContent = content;
    tdNum.innerText = i++;

    let now = new Date();
    tdDate.innerText = `${now.getFullYear()}-${
        now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}: ${now.getMinutes()}`;

    tr.append(tdNum, tdWriter, tdContent, tdDate); //순서대로 tr안에 추가
    tbody.append(tr); //tbody안에 tr을 추가

    //append는 여러개 넣을 수 있으니..!
};

//textContent랑 innerText 블로깅
//
