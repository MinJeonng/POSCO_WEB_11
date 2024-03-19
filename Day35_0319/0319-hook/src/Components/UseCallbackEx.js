import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

//useCallback
// - 매번 함수를 생성하지 않고 함수를 기억해두었다가 필요할때마다 함수를 재사용
//- 함수를 기억해두겠다., 함수 자체를 저장
// 함수의 주소값이 바뀌지 않게 도와주는게 useCallback
export default function UseCallbackEx({ postId }) {
  const [post, setPost] = useState({});

  //[before]
  //post를 사용하고 있을때도 불필요하게 api가 요청되고 자꾸 함수를 재생생해서 주소값을 변경하게 하는 불필요한게 추가적으로 생성
  /*
  
  const getPosts = async () => {
    console.log('data fetching...');
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/9`;
    console.log(res.data);

    setPost(res.data);
  };
  
  */
  //useEffect 의존성 배열에 함수를 넣겠다는 의미는 컴포넌트가 리렌더링 -> 함수 재생성(주소값 변경) --> getPosts 함수가 재호출

  //[after]
  //useCallback 훅으로 메모이제이션 => 의존성 배열에 postId가 변경되지 않는 한 getPosts를 다시 호출하지 않음, 필요한 순간에만 api 요청을 날리게 됌
  const getPosts = useCallback(async () => {
    console.log('data fetching...');
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    console.log(res.data);

    setPost(res.data);
  }, [postId]); //postId가 변경될때만 api요청을 하게 되는 것. 다른 state값이 바뀌어서 rerendering이 되더라도 필요할때만 쓰이게됌

  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return (
    <div>
      <h1>UseCallbackEx</h1>
      {post.id ? post.title : '로딩중...'}
    </div>
  );
}
