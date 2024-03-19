import React from 'react';
import { useForm } from 'react-hook-form';

export default function FormPrac() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onValid = (data) => {
    console.log('onValid', data);
  };
  const onInValid = (err) => {
    console.log('onInValid', err);
  };

  console.log(errors);
  return (
    <div>
      <h2>FormPrac 실습문제</h2>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <input
          type="text"
          placeholder="이름"
          {...register('usename', {
            required: '이름은 필수 항목입니다.',
          })}
        />
        {errors.username?.message}
        <br />
        <input
          type="number"
          placeholder="나이"
          {...register('age', {
            min: {
              message: '0 이상의 숫자만 입력가능합니다.',
              value: 0,
            },
          })}
        />
        {errors.age?.message}
        <br />
        <button>제출</button>
      </form>
    </div>
  );
}
