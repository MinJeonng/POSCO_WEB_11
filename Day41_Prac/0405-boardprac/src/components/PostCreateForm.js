import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPost } from '../redux/postSlice';

export default function PostCreateForm() {
  //게시글 작성 form -> react-hook-form
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch(); //action 발생
  const navigate = useNavigate();

  const onSubmit = (data) => {
    //작성 버튼 누르면 실행
    console.log('작성');
    const newPost = {
      id: Date.now(),
      title: data.title,
      content: data.content,
    };
    dispatch(addPost(newPost));
    navigate('/'); //버튼을 누르게 되면 메인에 넘어가서 보이게 된것
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          id="title"
          {...register('title', { required: '제목은 필수' })}
        />
      </div>
      <div>
        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          cols="30"
          rols="10"
          {...register('content')}
        ></textarea>
      </div>
      <button type="submit">작성</button>
    </form>
  );
}
