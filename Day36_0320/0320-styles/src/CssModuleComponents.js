import React from 'react';
import styles from './styles/cssModule.module.css';

//CSS module
// - 클래스명 중복 방지
// - css 파일 확장자 : .module.css
// - 리액트 컴포넌트 파일에서 해당 css파일을 불러올 때, css 파일에 선언한 클래스 이름들이 고유한 값을 가진다.
// - 고유한 css 클래스 이름이 만들어지는 과정에서 파일 경로, 파일 이름, 클래스 이름, 해시값 등이 쓰인다.(그래서 고유한 값을 가질 수 있음)
export default function CssModuleComponents() {
  console.log(styles);
  return (
    <div className={styles.container}>
      {/* 두개의 스타일을 적용하려면, 변수이기 때문에 배열에 넣고 '한칸 띄고' join 하면 된다.  즉, 동적으로 스타일을 주고 싶을때
      하지만, 단순한 css만 가능하고 복잡한 css 적용이 힘들다.*/}
      <div className={[styles.box, styles.red].join(' ')}></div>
      <div className={[styles.box, styles.orange].join(' ')}></div>
      {/* 아래와 같이 문자열로 적용할 수도 있다. */}
      <div className={`${styles.box} ${styles.yellow}`}></div>
    </div>
  );
}
