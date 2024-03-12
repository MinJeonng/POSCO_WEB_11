import './Practice.css';

function Practice() {
  return (
    <>
      <div className="parent">
        <div className="circle circle1">
          <div className="eye-white">
            <div className="eye-black"></div>
          </div>
        </div>

        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
        <div className="circle circle5"></div>
        <div className="circle circle6"></div>
        <div className="circle circle7"></div>
        {/* img가 Public폴더안에 있다면 환경변수 사용해서 가져오거나 아래의 절대경로로 가져오거나.  */}
        {/* publick img 접근 : public은 '/' 임 */}
        <img
          className="grass"
          // src={`${process.env.PUBLIC_URL}/public_assets/grass.png`}
          src="/public_assets/grass.png"
          alt="잔디사진"
        />
        {/* public 안에 이미지를 이 경로로 가져오는 것 */}
        <img src="/logo192.png" alt="로고사진" />
        <div className="grass-bg"></div>
      </div>
    </>
  );
}
export default Practice;
