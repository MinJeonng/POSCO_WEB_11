import { LifeCycleProps } from '../Types';

interface Props {
  post: LifeCycleProps;
}

export default function PostItem({ post }: Props) {
  return (
    <div>
      <div>
        <span>No. {post.id}</span>
        <span>- {post.title}</span>
      </div>
      <p>{post.body}</p>
    </div>
  );
}
