// 리더님이 해주신 방법으로 다시 수정
$(document).ready(function () {
    let calendar = $('#calendar');
    let currentDate = new Date();

    // 캘린더 렌더링
    renderCalendar(currentDate);

    // '작성' 버튼 클릭 이벤트
    $('button').click(function () {
        let date = $('#date').val();
        let content = $('#content').val();

        // 작성한 내용을 캘린더에 추가
        if (date && content) {
            let eventDiv = $('<div>').addClass('event').text(content);
            $('#' + date).append(eventDiv);
        }
    });
    // '초기화' 버튼 클릭 이벤트
    $('#reset').click(function () {
        // 모든 이벤트 내용 제거(input 두개 모두 같이 제거)
        $('.event').remove();
        $('#date').val('');
        $('#content').val('');
    });
    date.setAttribute('placeholder', '2024-1-00 형태로 작성해주세요.');
    function renderCalendar(date) {
        let year = date.getFullYear();
        let month = date.getMonth();

        // 달력 헤더
        let header = $('<div>')
            .addClass('header')
            .text(year + '년 ' + (month + 1) + '월');
        calendar.append(header);

        // 달력 바디
        let body = $('<div>').addClass('body');

        // 요일 표시를 바디의 첫 번째 행으로 추가
        let dayNames = ['월', '화', '수', '목', '금', '토', '일'];
        let row = $('<div>').addClass('row');
        for (let i = 0; i < 7; i++) {
            let dayNameDiv = $('<div>').addClass('day-name').text(dayNames[i]);
            row.append(dayNameDiv);
        }
        body.append(row);

        for (let day = 1; day <= 31; day++) {
            if (day % 7 === 1) {
                row = $('<div>').addClass('row');
            }
            let dayDiv = $('<div>')
                .addClass('day')
                .attr('id', year + '-' + (month + 1) + '-' + day)
                .text(day);
            row.append(dayDiv);
            if (day % 7 === 0 || day === 31) {
                body.append(row);
            }
        }

        calendar.append(body);
    }
});

// // '작성' 버튼 클릭 이벤트
// $('button').click(function () {
//     // date와 content 값 가져오기
//     var date = $('#date').val();
//     var content = $('#content').val();
// });

// // 가져온 date 값으로 해당하는 캘린더의 날짜 찾기
// $('.dates .day').each(function () {
//     if ($(this).text() == date) {
//         // 찾은 날짜에 content 값 추가
//         $(this).append('<div>' + content + '</div>');
//     }
// });

// $(document).ready(function () {
//     calendarInit();
// });

// function calendarInit() {
//     // 날짜 정보 가져오기
//     var date = new Date(); // 현재 날짜(로컬 기준) 가져오기
//     var utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000; // uct 표준시 도출
//     var kstGap = 9 * 60 * 60 * 1000; // 한국 kst 기준시간 더하기
//     var today = new Date(utc + kstGap); // 한국 시간으로 date 객체 만들기(오늘)

//     var thisMonth = new Date(today.getFullYear(), today.getMonth(), today.getDate());
//     // 달력에서 표기하는 날짜 객체

//     var currentYear = thisMonth.getFullYear(); // 달력에서 표기하는 연
//     var currentMonth = thisMonth.getMonth(); // 달력에서 표기하는 월
//     var currentDate = thisMonth.getDate(); // 달력에서 표기하는 일

//     // kst 기준 현재시간
//     // console.log(thisMonth);

//     // 캘린더 렌더링
//     renderCalender(thisMonth);

//     function renderCalender(thisMonth) {
//         //데이터 정리
//         currentYear = thisMonth.getFullYear();
//         currentMonth = thisMonth.getMonth();
//         currentDate = thisMonth.getDate();

//         // 이전 달의 마지막 날 날짜와 요일 구하기
//         var startDay = new Date(currentYear, currentMonth, 0);
//         var prevDate = startDay.getDate();
//         var prevDay = startDay.getDay();

//         // 이번 달의 마지막날 날짜와 요일 구하기
//         var endDay = new Date(currentYear, currentMonth + 1, 0);
//         var nextDate = endDay.getDate();
//         var nextDay = endDay.getDay();

//         // console.log(prevDate, prevDay, nextDate, nextDay);

//         // 현재 월 표기
//         $('.year-month').text(currentYear + '.' + (currentMonth + 1));

//         calendar = document.querySelector('.dates');
//         calendar.innerHTML = '';

//         // 지난달
//         for (var i = prevDate - prevDay + 1; i <= prevDate; i++) {
//             calendar.innerHTML = calendar.innerHTML + '<div class="day prev disable">' + i + '</div>';
//         }
//         // 이번달
//         for (var i = 1; i <= nextDate; i++) {
//             calendar.innerHTML = calendar.innerHTML + '<div class="day current">' + i + '</div>';
//         }
//         // 다음달
//         for (var i = 1; i <= (7 - nextDay == 7 ? 0 : 7 - nextDay); i++) {
//             calendar.innerHTML = calendar.innerHTML + '<div class="day next disable">' + i + '</div>';
//         }

//         // 오늘 날짜 표기
//         if (today.getMonth() == currentMonth) {
//             todayDate = today.getDate();
//             var currentMonthDate = document.querySelectorAll('.dates .current');
//             currentMonthDate[todayDate - 1].classList.add('today');
//         }
//     }

//     // 이전달로 이동
//     $('.go-prev').on('click', function () {
//         thisMonth = new Date(currentYear, currentMonth - 1, 1);
//         renderCalender(thisMonth);
//     });

//     // 다음달로 이동
//     $('.go-next').on('click', function () {
//         thisMonth = new Date(currentYear, currentMonth + 1, 1);
//         renderCalender(thisMonth);
//     });
// }

// /*
//   달력 렌더링 할 때 필요한 정보 목록

//   현재 월(초기값 : 현재 시간)
//   금월 마지막일 날짜와 요일
//   전월 마지막일 날짜와 요일
// */
