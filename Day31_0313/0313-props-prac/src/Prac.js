export default function Prac({ food }) {
  const styles = {
    color: 'red',
  };
  return (
    <div>
      <p>
        제가 가장 좋아하는 음식은 <span style={styles}>{food}</span> 입니다.
      </p>
      <p>중국당면까지 넣으면 꿀맛입니당</p>
    </div>
  );
}
Prac.defaultProps = {
  food: '로제떡볶이',
};
