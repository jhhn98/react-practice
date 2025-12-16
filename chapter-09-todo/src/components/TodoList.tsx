import TodoListItem from './TodoListItem'
import TodoListItemEmpty from './TodoListItemEmpty'

export default function TodoList({
    todos, toggleTodo, deleteTodo, modifyTodo
}: {
    todos: Todo[]
    toggleTodo: (id: number) => void
    deleteTodo: (id: number) => void
    modifyTodo: (id: number, title: string) => void;
    // 숫자 타입의 id를 매개변수로 받고 반환값은 없는 함수이다.
}) {
    // 전달받는 props 객체는 속성이 todos 하나뿐이므로 바로 구조 분해할당해 매개변수를 정의한다.
    return (
        <ul className='todo__list'>
            {/* 할 일 목록이 없는 경우
                AND 논리 연산자(&&)를 사용해 조건이 참일 때만 해당 컴포넌트를 렌더링한다.
             */}
            {todos.length === 0 && <TodoListItemEmpty/>}
            {/* 할 일 목록이 있는 경우 
                map() 메서드로 배열을 순회하며 각 항목을 <TodoListItem /> 컴포넌트로 출력한다. 이때 리액트가 항목을 구분할 수 있도록 key 속성에 고유한 todo.id 값을 지정하고, todo 객체 전체를 props로 전달한다.
            */}
            {todos.length > 0 && todos.map((todo) => (
                <TodoListItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} modifyTodo={modifyTodo}/>
            ))}
        </ul>
    )
}