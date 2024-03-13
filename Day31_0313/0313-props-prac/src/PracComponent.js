import './PracComponent.css';

//1.
function PracComponent({ title, author, price, type }) {
  return (
    <div className="all">
      <div className="best">이번주 베스트 셀러</div>
      <img src="/hayao.jpeg" alt="센과치히로의 행방불명" />
      <div className="title">{title}</div>
      <div className="content">저자 : {author}</div>
      <div className="content">가격 : {price}</div>
      <div className="content">구분 : {type}</div>
    </div>
  );
}
export default PracComponent;

//2. - 한꺼번에 보내줄때 이렇게도 가능
// function PracComponent({book}) {
//   const {title, author, price, type} = bool
//   return (
//     <div className="all">
//       <div className="best">이번주 베스트 셀러</div>
//       <img src="/hayao.jpeg" alt="센과치히로의 행방불명" />
//       <div className="title">{title}</div>
//       <div className="content">저자 : {author}</div>
//       <div className="content">가격 : {price}</div>
//       <div className="content">구분 : {type}</div>
//     </div>
//   );
// }
