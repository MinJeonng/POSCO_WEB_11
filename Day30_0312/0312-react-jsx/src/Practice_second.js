import './Practice_second.css';

function Practice_second() {
  const name = '베키';
  const animal = '갱얼쥐';
  const styles = {
    textDecoration: 'underline',
  };
  const a = 1000;
  const b = 100;

  const title = 'Hello World';
  return (
    <>
      {/* 실습 1 */}
      {/*
      <h2 className="animal">
        제 반려동물의 이름은 <span style={styles}>{name}</span>입니다.
        <br />
        <span style={styles}>{name}</span>는 제{' '}
        <span style={styles}>{animal}</span>입니다.
      </h2>
  */}
      {/* 실습2 , 3 */}
      {/* <div>{3 + 5 == 8 ? '정답입니다' : '오답입니다!'}</div> */}
      {/* <div>{a > b && 'a가 b보다 큰 값입니다.'}</div> */}

      {/* 실습4 */}
      <div className="loginForm">
        <h2 className="title">{title}</h2>
        <label for="userId">
          아이디 :
          <input type="text" name="userId" />
        </label>
        <br />
        <label for="userPw">
          비밀번호 :
          <input type="password" name="userPw" />
        </label>
      </div>
    </>
  );
}

export default Practice_second;
