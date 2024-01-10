//jquery
//$("선택자").동작함수("");

//text
//console.log($('#hello').text());
$('#hello').text('bye');
$('#hello').css('font-size', '60px');

//jquery method
//val()
function getValue() {
    let value = $('input').val(); //값 가져오기
    console.log(value);
}
function setValue() {
    $('input').val('설정완료');
}

//css()

function changeCssJs() {
    let span = document.querySelector('span');
    span.style = 'font-size:20px; color:orange';
}
function changeCssJquery() {
    // $('span').css('font-size', '20px');
    // $('span').css('color', 'purple');
    //객체로 하나로 묶을 수 있음.
    $('span').css({ 'font-size': '40px', color: 'purple' });
}
function getCssJquery() {
    console.log($('span').css('color', 'red'));
}

function changeAttrJs() {
    let a = document.querySelector('a');
    a.setAttribute('href', 'https://www.naver.com/');
}
function changeAttrJquery() {
    $('a').attr('href', 'https://velog.io/@sally3921/posts');
}

//html

function changeHtmlJs() {
    let p = document.querySelector('.html');
    p.innerHTML = '<p>javaScript</p>';
}
function changeHtmlJquery() {
    $('.html').html('<p>jquery</p>');
}

//요소 추가하기 - 위해서는 기준이 있어야함
//append()

function appendJs() {
    let ul = document.querySelector('.colors'); //기준점 가져옴
    let li = document.createElement('li');
    li.textContent = '마지막으로 추가된 js';
    ul.append(li);
}
function appendJquery() {
    $('.colors').append('<li>마지막으로 추가된 jquery</li>');
}

//prepend()

function prependJs() {
    let ul = document.querySelector('.colors'); //기준점 가져옴
    let li = document.createElement('li');
    li.textContent = '처음으로 추가된 js';
    ul.prepend(li);
}
function prependJquery() {
    $('.colors').prepend('<li>처음으로 추가된 jquery</li>');
}

//before, after 해보기

//요소 삭제하기

function removeJs() {
    let li = document.querySelector('#list2');
    li.remove();
}
function removeJquery() {
    $('#list2').remove();
}

function emptyJs() {
    let nums = document.querySelector('ul.nums');
    // console.log(nums);
    nums.innerHTML = '';
}
function emptyJquery() {
    $('ul.nums').empty();
}

//요소 찾기

function findParent() {
    console.log($('.child2').parents());
}
function findParents() {
    console.log($('.child2').parents());
}
function findNext() {
    console.log($('.child2').next());
}
function findPrev() {
    console.log($('.child2').prev());
}
function findChildren() {
    console.log($('.child2').findChildren());
}
