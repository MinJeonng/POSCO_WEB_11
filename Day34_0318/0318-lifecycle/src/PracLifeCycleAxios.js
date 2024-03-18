import React, { useState, useEffect } from 'react';

export default function PracLifeCycle() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error('error: ', error);
        setPosts([]);
        // 오류 발생 시, posts를 빈 배열로 설정
      });
  }, []);
  // 빈 배열을 전달하여 마운트 시점에만 실행되도록 함

  return (
    <div>
      {posts.length === 0 ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => {
          return (
            <>
              <p>{post.id}</p>
              <p>{post.title}</p>
              <p>{post.body}</p>
            </>
          );
        })
      )}
    </div>
  );
}
