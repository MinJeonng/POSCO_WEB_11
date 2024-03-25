import { useState, useEffect } from 'react';
import axios from 'axios';
import PostItem from './PostItem';
import { LifeCycleProps } from '../Types';

export default function LifeCycle() {
  const [posts, setPosts] = useState<LifeCycleProps[]>([]);

  useEffect(() => {
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
