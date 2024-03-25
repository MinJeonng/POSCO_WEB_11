import { useRef, useState } from 'react';
import TodoItem from './TodoItem';
import { TodoItemProps } from '../CommonTypes';

// interface TodoItem {
//   id: number;
//   text: string;
//   completed: boolean;
// }
export default function TodoList() {
  const [todos, setTodos] = useState<TodoItemProps[]>([]); //전체 todo 목록으로 사용
  const [newTodo, setNewTodo] = useState<string>(''); //새로 추가된 todo 하나
  const inputRef = useRef<HTMLInputElement>(null); //null로 주는 이유는 html요소가 mount되기 전에 시작될 수 있기 때문에

  const addTodo = () => {
    //todos는 객체배열, 배열을 업데이트 해주기 위해선 그 안에 있는 객체를 추가해줘야한다.
    const updatedTodos = [
      ...todos,
      { id: Date.now(), text: newTodo, completed: false },
    ];
    setTodos(updatedTodos); //전체 투두에 새로운 투두 추가
    setNewTodo(''); //input 초기화
  };

  const focusInput = () => {
    inputRef.current?.focus(); //input의 값이 null일 수 있기 때문에 ? 를 추가해서 있을때 focus 가게 한다.
  };

  //enter 입력 시 todo 추가(키보드 이벤트)
  //enter를 쳤다는걸 알려면 event 객체를 가져와야한다. 그리고 InputElement이고 이벤트 객체의 타입을 명확하게 설정해줌!
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 한글 입력시 한글자씩 추가 되는 것을 막음
    if (e.nativeEvent.isComposing) {
      return;
    }

    if (e.key === 'Enter') {
      //엔터 버튼이 눌렸을 시! 라는 의미(e.key === 'Enter')
      addTodo();
    }
  };

  // todo 완료 상태 변경함수
  const toggleComplete = (targetId: number) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === targetId
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div>
      <h1>TodoList</h1>
      <div>
        완료한 개수: {todos.filter((todo) => todo.completed === true).length}
      </div>
      <div>
        <input
          type="text"
          value={newTodo}
          ref={inputRef}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyDown} //엔터키 눌렀을때 입력되게끔 이벤트 핸들러 추가
        />
        <button onClick={addTodo}>ADD</button>
        <button onClick={focusInput}>FOCUS</button>
      </div>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
            />
          );
        })}
      </ul>
    </div>
  );
}
