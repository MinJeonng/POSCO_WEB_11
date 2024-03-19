import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  //useForm 안에 있는 값이 register
  const {
    register, //input에다가 할당하고, value 변경 감지
    handleSubmit, //form이 submit될때 호출
    formState: { errors }, //form 상태 객체
    watch, //특정한 form 필드의 값을 실시간으로 사용
  } = useForm();

  //handelSubmit(funcA,[funcB]) : 두개의 함수
  //funcA : 필수, 유효할때 실행
  //funcB : 선택, 유효하지 않을 때 실행
  const onValid = (data) => {
    console.log('onValid', data);
  };
  const onInValid = (err) => {
    console.log('onInValid', err);
  };

  console.log(errors);
  console.log('watch', watch('username')); //특정한 시점에 가져오면 됌
  return (
    <div>
      <h1>react-hook-form 라이브러리 데모</h1>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <input
          type="text"
          placeholder="username"
          //name = "username" 기능을 아래와 같이 명시
          // 즉, username이 name이다 라고 인식을 함
          {...register('username', {
            required: '이름을 입력해주세요', //입력을 안했을때 나타나는 메시지도 지정 가능
            minLength: {
              message: '이름은 최소 2글자 이상 작성해주세요',
              value: 2, //2글자니까 2
            },
          })}
        />
        {/* error 메시지 */}
        {/* 있으면 하고 없으면 하지말아 */}
        {errors.username?.message}
        <br />
        <input
          type="email"
          placeholder="email (gmail)"
          {...register('email', {
            required: '이메일을 입력해주세요',
            validate: {
              //내가 지정해주는 유효성 검사
              useGmail: (value) => {
                return (
                  value.includes('gmail.com') || 'gmail로만 가입 가능합니다.'
                ); //true면 아무일도 없고, false면 || 오른쪽 의 문구로 알림
              },
            },
          })}
        />
        {errors.email?.message}
        <br />
        <input
          type="password"
          placeholder="password"
          {...register('password')}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
