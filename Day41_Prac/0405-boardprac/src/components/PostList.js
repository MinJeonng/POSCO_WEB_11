import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function PostList() {
  //작성에 해당하는 PostCreateForm으로 링크
  //게시글 목록을 보여줄 것
  //게시글은 redux를 이용해서 전역관리

  //redux 스토어에서 게시글 목록 상태를 조회 : usrSelector
  const posts = useSelector((state) => state.posts.postList);
  return (
    <div>
      <h2>게시판</h2>
      <Link to="/create">글쓰기</Link>
      {/* 게시글 목록 */}
      <ul>
        {posts.map((post) => (
          <li ket={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
}
