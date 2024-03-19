import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostItem from './PostItem';

export default function PracLifeCycleJson() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //getPosts 함수를 만든 이유
    // 1. useEffect를 사용할때는 비동기 작업(async,await)을 함수로 래핑한 다음 useEffect 콜백에서 호출면 된다.
    // 2. useEffect는 비동기 함수를 직접 지원하는것이 아니라서 함수를 아래처럼 만들고 호출하는 방법으로 사용해야한다.
    const getPosts = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      // console.log(res.data); //Array(100)

      setPosts(res.data.slice(0, 10)); //10개만 slice
    };

    setTimeout(() => {
      getPosts();
    }, 2000);
  }, []);

  return (
    <div>
      <div>
        <header>Post List</header>
        {posts.length > 0 ? (
          posts.map((post) => {
            return <PostItem key={post.id} post={post} />;
          })
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
}
