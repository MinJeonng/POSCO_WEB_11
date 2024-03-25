//할일 목록
//props를 넘겨 받을 파일, 화면에 표현을 해줘야하기 때문에
import { TodoItemProps } from '../CommonTypes';

// {todo} => {todo: {id, text, completed}}
interface Props {
  todo: TodoItemProps;
  toggleComplete: (id: number) => void;
}

export default function TodoItem({ todo, toggleComplete }: Props) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          defaultChecked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        {todo.text}
      </label>
    </li>
  );
}
