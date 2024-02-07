//파일을 분리

//임시db
//길이가 4인 배열
//key값들은 동일해야함
const comments = [
    {
        id: 1,
        userid: 'hello',
        date: '2024-02-07',
        comment: '안녕하세요',
    },
    {
        id: 2,
        userid: 'haaaapy',
        date: '2023-02-04',
        comment: '행복하세요',
    },
    {
        id: 3,
        userid: 'Good',
        date: '2024-02-10',
        comment: '좋은 날이에요',
    },
    {
        id: 4,
        userid: 'lucky',
        date: '2024-03-07',
        comment: '럭키한 날이 가득하길 바랍니다.',
    },
];

//하단에 작성, 외부에서 사용할 수 있게 작성
module.exports = comments;
