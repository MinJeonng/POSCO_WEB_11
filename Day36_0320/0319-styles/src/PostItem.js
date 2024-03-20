import React from 'react';

export default function PostItem({ post }) {
  return (
    <>
      <div className="content">
        <div className="raw">
          <span className="postId">No. {post.id}</span>
          <span className="postTitle">- {post.title}</span>
        </div>
        <p className="postBody">{post.body}</p>
      </div>
    </>
  );
}
