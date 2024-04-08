import { createSlice } from '@reduxjs/toolkit';

//게시판
const initialState = {
  postList: [],
};
//createSlice : 리듀서와 액션을 함께 생성하는 함수
const postSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    addPost: (state, action) => {
      //이전에 switch로 구분하는게 아니라 함수로도 할 수 있음
      //addPost라는 액션이 있다.
      console.log(action);
      state.postList.push(action.payload); //addPost를 할때마다 push
      //payload는 데이터를 의미.
    },
  },
});
//postSlice.actions : 액션 생성자들을 포함하는 객체
export const { addPost } = postSlice.actions;
//postSlice.reducer : 상태를 업데이트하기 위한 것
export default postSlice.reducer;
